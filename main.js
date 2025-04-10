import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import {create_maze} from './maze.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
});

let overheadView = false;
const defaultPos = new THREE.Vector3(24, 2, 26);
const overheadPos = new THREE.Vector3(0, 50, 0);

document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyG') {
        overheadView = !overheadView;
        if (overheadView) {
            camera.position.set(0, 50, 0);
            camera.lookAt(0, 0, 0);
        } else {
            camera.position.copy(defaultPos);
            camera.lookAt(defaultPos.x, 2, defaultPos.z);
        }
    }
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 50, 0);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Main player
const player = createSimpleHuman({ skinColor: 0xffdbac, shirtColor: 0x3b5998, pantsColor: 0x333333 });
player.position.set(24, 0, 24);
const playerBox = new THREE.Box3().setFromObject(player);
scene.add(player);

const { maze, maze_walls } = create_maze();
scene.add(maze);

// Add torches
const lamp1 = createWallMountedLamp();
lamp1.position.set(26.95, 1, 24);
lamp1.rotation.y = Math.PI / 2;
scene.add(lamp1);

const lamp2 = createWallMountedLamp();
lamp2.position.set(8, 1, 9.05);
lamp2.rotation.y = Math.PI;
scene.add(lamp2);

const lamp3 = createWallMountedLamp();
lamp3.position.set(15.5, 1, 20.95);
scene.add(lamp3);

const lamp4 = createWallMountedLamp();
lamp4.position.set(5, 1, 8.95);
lamp4.rotation.y = 0;
scene.add(lamp4);

const lamp5 = createWallMountedLamp();
lamp5.position.set(20, 1, 14.95);
lamp5.rotation.y = 0;
scene.add(lamp5);

const lamp6 = createWallMountedLamp();
lamp6.position.set(8.95, 1, 18);
lamp6.rotation.y = Math.PI / 2;
scene.add(lamp6);

const lamp7 = createWallMountedLamp();
lamp7.position.set(-2.95, 1, 12);
lamp7.rotation.y = -Math.PI / 2;
scene.add(lamp7);

const lamp8 = createWallMountedLamp();
lamp8.position.set(-12, 1, -2.95);
lamp8.rotation.y = Math.PI;
scene.add(lamp8);

const lamp9 = createWallMountedLamp();
lamp9.position.set(0, 1, -15.05);
scene.add(lamp9);

// Add chests
const chest1 = createChest();
chest1.position.set(-2.5, 0, 12);
chest1.rotation.y = -Math.PI / 2;
scene.add(chest1);

const chest2 = createChest();
chest2.position.set(-24, 0, 26.5);
scene.add(chest2);

const chest3 = createChest();
chest3.position.set(8.5, 0, -5);
chest3.rotation.y = Math.PI / 2;
scene.add(chest3);

const chest4 = createChest();
chest4.position.set(-8.5, 0, -12);
chest4.rotation.y = - Math.PI / 2;
scene.add(chest4);

const ambient = new THREE.AmbientLight(0xffffff, 0.08);
scene.add(ambient);

// Player controls
const controls = new PointerLockControls(camera, document.body);
document.addEventListener('click', () => controls.lock());
scene.add(controls.object);

// Player movement
const movement = { forward: false, backward: false, left: false, right: false };
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyW') movement.forward = true;
    if (event.code === 'KeyS') movement.backward = true;
    if (event.code === 'KeyA') movement.left = true;
    if (event.code === 'KeyD') movement.right = true;
});
document.addEventListener('keyup', (event) => {
    if (event.code === 'KeyW') movement.forward = false;
    if (event.code === 'KeyS') movement.backward = false;
    if (event.code === 'KeyA') movement.left = false;
    if (event.code === 'KeyD') movement.right = false;
});

camera.position.set(24, 2, 26);
camera.lookAt(24, 1, 24);

function animate() {
    requestAnimationFrame(animate);

    const previousPosition = player.position.clone();

    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);

    const forward = new THREE.Vector3(direction.x, 0, direction.z).normalize();
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

    // Calculate movement deltas
    const deltaPosition = new THREE.Vector3();
    if (movement.forward) deltaPosition.add(forward.multiplyScalar(0.05));
    if (movement.backward) deltaPosition.add(forward.multiplyScalar(-0.05));
    if (movement.left) deltaPosition.add(right.multiplyScalar(-0.05));
    if (movement.right) deltaPosition.add(right.multiplyScalar(0.05));

    // Move along X axis
    player.position.x += deltaPosition.x;
    playerBox.setFromObject(player);
    for (const wallBox of maze_walls) {
        if (playerBox.intersectsBox(wallBox)) {
            player.position.x = previousPosition.x;
            break;
        }
    }

    // Move along Z axis
    player.position.z += deltaPosition.z;
    playerBox.setFromObject(player);
    for (const wallBox of maze_walls) {
        if (playerBox.intersectsBox(wallBox)) {
            player.position.z = previousPosition.z;
            break;
        }
    }

    // Only update camera position if not in overhead view
    if (!overheadView) {
        camera.position.copy(player.position).add(new THREE.Vector3(0, 1.75, 0));
        const directionVector = new THREE.Vector3();
        camera.getWorldDirection(directionVector);
        const angleY = Math.atan2(directionVector.x, directionVector.z);
        player.rotation.y = angleY;
    }

    renderer.render(scene, camera);
}
animate();

function createWallMountedLamp() {
    var lampGroup = new THREE.Object3D();

    // Wall Mount
    var wallMountGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.1);
    var wallMountMaterial = new THREE.MeshBasicMaterial({ color: 0x7A4B3A });
    var wallMount = new THREE.Mesh(wallMountGeometry, wallMountMaterial);
    wallMount.position.set(0, 1, 0);
    lampGroup.add(wallMount);

    // Post 1
    var lampPostGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5);
    var lampPostMaterial = new THREE.MeshPhongMaterial({ color: 0x6A4E23 });
    var lampPost = new THREE.Mesh(lampPostGeometry, lampPostMaterial);
    lampPost.rotation.x = Math.PI / 2;
    lampPost.position.set(0, 1, -0.3);
    lampGroup.add(lampPost);

    // Post 2
    var lampPostGeometry2 = new THREE.CylinderGeometry(0.05, 0.05, 0.2);
    var lampPost2 = new THREE.Mesh(lampPostGeometry2, lampPostMaterial);
    lampPost2.position.set(0, 1.1, -0.5);
    lampGroup.add(lampPost2);

    // Lamp Head
    var lampHeadGeometry = new THREE.SphereGeometry(0.15, 25, 25);
    var lampHeadMaterial = new THREE.MeshPhongMaterial({ color: 0xF5D03C , emissive: 0xF5D03C, emissiveIntensity: 1.5});
    var lampHead = new THREE.Mesh(lampHeadGeometry, lampHeadMaterial);
    lampHead.position.set(0, 1.2, -0.5);
    lampGroup.add(lampHead);

    // Light
    var pointLight = new THREE.PointLight(0xF5D03C, 5, 15);
    pointLight.position.set(0, 1.2, -0.5);
    lampGroup.add(pointLight);

    return lampGroup;
}

function createChest() {
    const chest = new THREE.Group();

    // Base of the chest
    const baseGeometry = new THREE.BoxGeometry(1.5, 0.75, 0.75);
    const baseMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = 0.375;
    chest.add(base);

    // Lid
    const lidGeometry = new THREE.CylinderGeometry(0.4, 0.4, 1.5, 32, 1, false, 0, Math.PI);
    const lidMaterial = new THREE.MeshLambertMaterial({ color: 0xA0522D });
    const lid = new THREE.Mesh(lidGeometry, lidMaterial);
    lid.rotation.z = Math.PI / 2;
    lid.position.y = 0.745;
    chest.add(lid);

    // Lock
    const lockGeometry = new THREE.BoxGeometry(0.15, 0.2, 0.05);
    const lockMaterial = new THREE.MeshLambertMaterial({ color: 0xFFD700, metalness: 1 });
    const lock = new THREE.Mesh(lockGeometry, lockMaterial);
    lock.position.set(0, 0.675, -0.4);
    chest.add(lock);

    return chest;
}

function createSimpleHuman(options = {}) {
    const human = new THREE.Group();

    const skinColor = options.skinColor || 0xffdbac;
    const shirtColor = options.shirtColor || 0x3b5998;
    const pantsColor = options.pantsColor || 0x333333;

    // Head
    const headGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    const headMaterial = new THREE.MeshLambertMaterial({ color: skinColor });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.75;
    human.add(head);

    // Body
    const bodyGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.7, 16);
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: shirtColor });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1.2;
    human.add(body);

    // Arms
    const armGeometry = new THREE.CylinderGeometry(0.07, 0.07, 0.6, 8);
    const armMaterial = new THREE.MeshLambertMaterial({ color: shirtColor });
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);

    leftArm.position.set(-0.4, 1.20, 0);
    rightArm.position.set(0.4, 1.20, 0);
    leftArm.rotation.z = Math.PI / -10;
    rightArm.rotation.z = Math.PI / 10;

    human.add(leftArm, rightArm);

    // Legs
    const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 8);
    const legMaterial = new THREE.MeshLambertMaterial({ color: pantsColor });
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);

    leftLeg.position.set(-0.15, 0.35, 0);
    rightLeg.position.set(0.15, 0.35, 0);

    human.add(leftLeg, rightLeg);

    return human;
}
