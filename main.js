import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import {create_maze} from './maze.js'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 50, 0);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Main Character
const characterGeometry = new THREE.BoxGeometry(1, 1, 1);
const characterMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const character = new THREE.Mesh(characterGeometry, characterMaterial);
character.position.set(24, 1, 24); // Position above ground
const playerBox = new THREE.Box3().setFromObject(character);
scene.add(character);

const { maze, maze_walls } = create_maze();
scene.add(maze);

// Add torches
const lamp1 = createWallMountedLamp();
lamp1.position.set(26.95, 1, 24);
lamp1.rotation.y = Math.PI / 2;
scene.add(lamp1);


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

// Attach camera to the character
character.add(camera);
camera.position.set(0, 1, 0);
camera.lookAt(0, 1, -1);

function animate() {
    requestAnimationFrame(animate);

    const previousPosition = character.position.clone(); // Save the previous position in case of collision

    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction); // Get the forward direction of the camera

    const forward = new THREE.Vector3(direction.x, 0, direction.z).normalize(); // Forward vector
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize(); // Right vector

    // Calculate movement deltas
    const deltaPosition = new THREE.Vector3();
    if (movement.forward) deltaPosition.add(forward.multiplyScalar(0.05));
    if (movement.backward) deltaPosition.add(forward.multiplyScalar(-0.05));
    if (movement.left) deltaPosition.add(right.multiplyScalar(-0.05));
    if (movement.right) deltaPosition.add(right.multiplyScalar(0.05));

    // Move along X axis
    character.position.x += deltaPosition.x;
    playerBox.setFromObject(character);
    for (const wallBox of maze_walls) {
        if (playerBox.intersectsBox(wallBox)) {
            character.position.x = previousPosition.x; // Revert X movement on collision
            break;
        }
    }

    // Move along Z axis
    character.position.z += deltaPosition.z;
    playerBox.setFromObject(character);
    for (const wallBox of maze_walls) {
        if (playerBox.intersectsBox(wallBox)) {
            character.position.z = previousPosition.z; // Revert Z movement on collision
            break;
        }
    }

    renderer.render(scene, camera);
}
animate();

function createWallMountedLamp() {
    var lampGroup = new THREE.Object3D();  // Group to hold all parts of the lamp

    // 1. Create the wall mount (a small box)
    var wallMountGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.1);  // Thin box for wall mount
    var wallMountMaterial = new THREE.MeshBasicMaterial({ color: 0x7A4B3A });  // Brownish color
    var wallMount = new THREE.Mesh(wallMountGeometry, wallMountMaterial);
    wallMount.position.set(0, 1, 0);  // Position on the wall
    lampGroup.add(wallMount);

    // 2. Create the lamp post (cylinder)
    var lampPostGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5);  // Thin cylinder for lamp stand
    var lampPostMaterial = new THREE.MeshPhongMaterial({ color: 0x6A4E23 });  // Dark wood/brownish color
    var lampPost = new THREE.Mesh(lampPostGeometry, lampPostMaterial);
    lampPost.rotation.x = Math.PI / 2;  // Rotate the cylinder to stand upright
    lampPost.position.set(0, 1, -0.3);  // Position above the wall mount
    lampGroup.add(lampPost);

    var lampPostGeometry2 = new THREE.CylinderGeometry(0.05, 0.05, 0.2);  // Thin cylinder for lamp stand
    var lampPost2 = new THREE.Mesh(lampPostGeometry2, lampPostMaterial);
    lampPost2.position.set(0, 1.1, -0.5);  // Position above the wall mount
    lampGroup.add(lampPost2);

    // 3. Create the lamp head (a small sphere for the light bulb)
    var lampHeadGeometry = new THREE.SphereGeometry(0.15, 25, 25);  // Sphere for light bulb
    var lampHeadMaterial = new THREE.MeshPhongMaterial({ color: 0xF5D03C , emissive: 0xF5D03C, emissiveIntensity: 1.5});  // Yellow color for bulb
    var lampHead = new THREE.Mesh(lampHeadGeometry, lampHeadMaterial);
    lampHead.position.set(0, 1.2, -0.5);  // Position at the top of the lamp post
    lampGroup.add(lampHead);

    // 4. Add a point light to simulate the lamp's light
    var pointLight = new THREE.PointLight(0xF5D03C, 5, 15);  // Light yellow color, intensity, distance
    pointLight.position.set(0, 1.2, -0.5);  // Position the light at the bulb's location
    lampGroup.add(pointLight);

    return lampGroup;
}

