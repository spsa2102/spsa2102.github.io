import * as THREE from 'three';

export function create_maze() {
    var maze = new THREE.Object3D();
    var maze_walls = [];

    var floorGeometry = new THREE.PlaneGeometry(54, 54);
    var floorMaterial = new THREE.MeshBasicMaterial({ color: 0x30211F, side: THREE.DoubleSide });
    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.set(0,0,0);
    floor.rotation.x = Math.PI / 2;
    maze.add(floor);

    var wallGeometry = new THREE.BoxGeometry(0.1, 2.5, 54);
    var wallMaterial = new THREE.MeshBasicMaterial({ color: 0x2C4457 });
    var wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
    wall1.position.set(27, 1.25, 0);
    maze.add(wall1);
    var wallBox1 = new THREE.Box3().setFromObject(wall1);
    maze_walls.push(wallBox1);

    var wall2 = new THREE.Mesh(wallGeometry, wallMaterial);
    wall2.position.set(-27, 1.25, 0);
    maze.add(wall2);
    var wallBox2 = new THREE.Box3().setFromObject(wall2);
    maze_walls.push(wallBox2);

    var wall3 = new THREE.Mesh(wallGeometry, wallMaterial);
    wall3.position.set(0, 1.25, 27);
    wall3.rotation.y = Math.PI / 2;
    maze.add(wall3);
    var wallBox3 = new THREE.Box3().setFromObject(wall3);
    maze_walls.push(wallBox3);

    var wall4 = new THREE.Mesh(wallGeometry, wallMaterial);
    wall4.position.set(0, 1.25, -27);
    wall4.rotation.y = Math.PI / 2;
    maze.add(wall4);
    var wallBox4 = new THREE.Box3().setFromObject(wall4);
    maze_walls.push(wallBox4);

    var rectagularWallGeometry = new THREE.BoxGeometry(0.1, 2.5, 6);
    var rectagularWallMaterial = new THREE.MeshBasicMaterial({ color: 0x2C4457 });
    var rectagularWall1 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectagularWall1.position.set(21, 1.25, 24);
    maze.add(rectagularWall1);
    var wallBox5 = new THREE.Box3().setFromObject(rectagularWall1);
    maze_walls.push(wallBox5);

    var rectagularWall2 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectagularWall2.position.set(21, 1.25, 6);
    maze.add(rectagularWall2);
    var wallBox6 = new THREE.Box3().setFromObject(rectagularWall2);
    maze_walls.push(wallBox6);

    var rectagularWall3 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectagularWall3.position.set(21, 1.25, -6);
    maze.add(rectagularWall3);
    var wallBox7 = new THREE.Box3().setFromObject(rectagularWall3);
    maze_walls.push(wallBox7);

    var rectagularWall4 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectagularWall4.position.set(21, 1.25, -18);
    maze.add(rectagularWall4);
    var wallBox8 = new THREE.Box3().setFromObject(rectagularWall4);
    maze_walls.push(wallBox8);

    var rectagularWall5 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectagularWall5.position.set(21, 1.25, -24);
    maze.add(rectagularWall5);
    var wallBox9 = new THREE.Box3().setFromObject(rectagularWall5);
    maze_walls.push(wallBox9);

    var rectangularWall6 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall6.position.set(15, 1.25, -18);
    maze.add(rectangularWall6);
    var wallBox10 = new THREE.Box3().setFromObject(rectangularWall6);
    maze_walls.push(wallBox10);

    var rectangularWall7 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall7.position.set(15, 1.25, -12);
    maze.add(rectangularWall7);
    var wallBox11 = new THREE.Box3().setFromObject(rectangularWall7);
    maze_walls.push(wallBox11);

    var rectangularWall8 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall8.position.set(9, 1.25, 18);
    maze.add(rectangularWall8);
    var wallBox12 = new THREE.Box3().setFromObject(rectangularWall8);
    maze_walls.push(wallBox12);

    var rectangularWall9 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall9.position.set(9, 1.25, 6);
    maze.add(rectangularWall9);
    var wallBox13 = new THREE.Box3().setFromObject(rectangularWall9);
    maze_walls.push(wallBox13);

    var rectangularWall10 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall10.position.set(9, 1.25, 0);
    maze.add(rectangularWall10);
    var wallBox14 = new THREE.Box3().setFromObject(rectangularWall10);
    maze_walls.push(wallBox14);

    var rectangularWall11 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall11.position.set(9, 1.25, -6);
    maze.add(rectangularWall11);
    var wallBox15 = new THREE.Box3().setFromObject(rectangularWall11);
    maze_walls.push(wallBox15);

    var rectangularWall12 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall12.position.set(-3, 1.25, 12);
    maze.add(rectangularWall12);
    var wallBox16 = new THREE.Box3().setFromObject(rectangularWall12);
    maze_walls.push(wallBox16);

    var rectangularWall13 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall13.position.set(-9, 1.25, 18);
    maze.add(rectangularWall13);
    var wallBox17 = new THREE.Box3().setFromObject(rectangularWall13);
    maze_walls.push(wallBox17);

    var rectangularWall14 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall14.position.set(-9, 1.25, 6);
    maze.add(rectangularWall14);
    var wallBox18 = new THREE.Box3().setFromObject(rectangularWall14);
    maze_walls.push(wallBox18);

    var rectangularWall15 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall15.position.set(-9, 1.25, -6);
    maze.add(rectangularWall15);
    var wallBox19 = new THREE.Box3().setFromObject(rectangularWall15);
    maze_walls.push(wallBox19);

    var rectangularWall16 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall16.position.set(-9, 1.25, -12);
    maze.add(rectangularWall16);
    var wallBox20 = new THREE.Box3().setFromObject(rectangularWall16);
    maze_walls.push(wallBox20);

    var rectangularWall17 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall17.position.set(-15, 1.25, 18);
    maze.add(rectangularWall17);
    var wallBox21 = new THREE.Box3().setFromObject(rectangularWall17);
    maze_walls.push(wallBox21);

    var rectangularWall18 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall18.position.set(-15, 1.25, -6);
    maze.add(rectangularWall18);
    var wallBox22 = new THREE.Box3().setFromObject(rectangularWall18);
    maze_walls.push(wallBox22);

    var rectangularWall19 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall19.position.set(-15, 1.25, -18);
    maze.add(rectangularWall19);
    var wallBox23 = new THREE.Box3().setFromObject(rectangularWall19);
    maze_walls.push(wallBox23);

    var rectangularWall20 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall20.position.set(-21, 1.25, 24);
    maze.add(rectangularWall20);
    var wallBox24 = new THREE.Box3().setFromObject(rectangularWall20);
    maze_walls.push(wallBox24);

    var rectangularWall21 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall21.position.set(-21, 1.25, 0);
    maze.add(rectangularWall21);
    var wallBox25 = new THREE.Box3().setFromObject(rectangularWall21);
    maze_walls.push(wallBox25);

    var rectangularWall22 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall22.position.set(-21, 1.25, -6);
    maze.add(rectangularWall22);
    var wallBox26 = new THREE.Box3().setFromObject(rectangularWall22);
    maze_walls.push(wallBox26);

    var rectangularWall23 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall23.position.set(-21, 1.25, -12);
    maze.add(rectangularWall23);
    var wallBox27 = new THREE.Box3().setFromObject(rectangularWall23);
    maze_walls.push(wallBox27);

    var rectangularWall24 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall24.position.set(18, 1.25, 21);
    rectangularWall24.rotation.y = Math.PI / 2;
    maze.add(rectangularWall24);
    var wallBox28 = new THREE.Box3().setFromObject(rectangularWall24);
    maze_walls.push(wallBox28);

    var rectangularWall25 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall25.position.set(12, 1.25, 21);
    rectangularWall25.rotation.y = Math.PI / 2;
    maze.add(rectangularWall25);
    var wallBox29 = new THREE.Box3().setFromObject(rectangularWall25);
    maze_walls.push(wallBox29);

    var rectangularWall26 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall26.position.set(24, 1.25, 15);
    rectangularWall26.rotation.y = Math.PI / 2;
    maze.add(rectangularWall26);
    var wallBox30 = new THREE.Box3().setFromObject(rectangularWall26);
    maze_walls.push(wallBox30);

    var rectangularWall27 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall27.position.set(18, 1.25, 15);
    rectangularWall27.rotation.y = Math.PI / 2;
    maze.add(rectangularWall27);
    var wallBox31 = new THREE.Box3().setFromObject(rectangularWall27);
    maze_walls.push(wallBox31);

    var rectangularWall28 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall28.position.set(6, 1.25, 15);
    rectangularWall28.rotation.y = Math.PI / 2;
    maze.add(rectangularWall28);
    var wallBox32 = new THREE.Box3().setFromObject(rectangularWall28);
    maze_walls.push(wallBox32);

    var rectangularWall30 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall30.position.set(-6, 1.25, 15);
    rectangularWall30.rotation.y = Math.PI / 2;
    maze.add(rectangularWall30);
    var wallBox33 = new THREE.Box3().setFromObject(rectangularWall30);
    maze_walls.push(wallBox33);

    var rectangularWall31 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall31.position.set(-18, 1.25, 15);
    rectangularWall31.rotation.y = Math.PI / 2;
    maze.add(rectangularWall31);
    var wallBox34 = new THREE.Box3().setFromObject(rectangularWall31);
    maze_walls.push(wallBox34);

    var rectangularWall32 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall32.position.set(-24, 1.25, 15);
    rectangularWall32.rotation.y = Math.PI / 2;
    maze.add(rectangularWall32);
    var wallBox35 = new THREE.Box3().setFromObject(rectangularWall32);
    maze_walls.push(wallBox35);

    var rectangularWall33 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall33.position.set(18, 1.25, 9);
    rectangularWall33.rotation.y = Math.PI / 2;
    maze.add(rectangularWall33);
    var wallBox36 = new THREE.Box3().setFromObject(rectangularWall33);
    maze_walls.push(wallBox36);

    var rectangularWall34 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall34.position.set(12, 1.25, 9);
    rectangularWall34.rotation.y = Math.PI / 2;
    maze.add(rectangularWall34);
    var wallBox37 = new THREE.Box3().setFromObject(rectangularWall34);
    maze_walls.push(wallBox37);

    var rectangularWall35 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall35.position.set(6, 1.25, 9);
    rectangularWall35.rotation.y = Math.PI / 2;
    maze.add(rectangularWall35);
    var wallBox38 = new THREE.Box3().setFromObject(rectangularWall35);
    maze_walls.push(wallBox38);

    var rectangularWall36 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall36.position.set(0, 1.25, 9);
    rectangularWall36.rotation.y = Math.PI / 2;
    maze.add(rectangularWall36);
    var wallBox39 = new THREE.Box3().setFromObject(rectangularWall36);
    maze_walls.push(wallBox39);

    var rectangularWall37 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall37.position.set(-6, 1.25, 9);
    rectangularWall37.rotation.y = Math.PI / 2;
    maze.add(rectangularWall37);
    var wallBox40 = new THREE.Box3().setFromObject(rectangularWall37);
    maze_walls.push(wallBox40);

    var rectangularWall38 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall38.position.set(-12, 1.25, 9);
    rectangularWall38.rotation.y = Math.PI / 2;
    maze.add(rectangularWall38);
    var wallBox41 = new THREE.Box3().setFromObject(rectangularWall38);
    maze_walls.push(wallBox41);

    var rectangularWall39 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall39.position.set(-18, 1.25, 9);
    rectangularWall39.rotation.y = Math.PI / 2;
    maze.add(rectangularWall39);
    var wallBox42 = new THREE.Box3().setFromObject(rectangularWall39);
    maze_walls.push(wallBox42);

    var rectangularWall40 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall40.position.set(18, 1.25, 3);
    rectangularWall40.rotation.y = Math.PI / 2;
    maze.add(rectangularWall40);
    var wallBox43 = new THREE.Box3().setFromObject(rectangularWall40);
    maze_walls.push(wallBox43);

    var rectangularWall41 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall41.position.set(-12, 1.25, 3);
    rectangularWall41.rotation.y = Math.PI / 2;
    maze.add(rectangularWall41);
    var wallBox44 = new THREE.Box3().setFromObject(rectangularWall41);
    maze_walls.push(wallBox44);    
    
    var rectangularWall42 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall42.position.set(-18, 1.25, 3);
    rectangularWall42.rotation.y = Math.PI / 2;
    maze.add(rectangularWall42);
    var wallBox45 = new THREE.Box3().setFromObject(rectangularWall42);
    maze_walls.push(wallBox45);    
    
    var rectangularWall43 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall43.position.set(12, 1.25, -3);
    rectangularWall43.rotation.y = Math.PI / 2;
    maze.add(rectangularWall43);
    var wallBox46 = new THREE.Box3().setFromObject(rectangularWall43);
    maze_walls.push(wallBox46);

    var rectangularWall44 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall44.position.set(24, 1.25, -3);
    rectangularWall44.rotation.y = Math.PI / 2;
    maze.add(rectangularWall44);
    var wallBox47 = new THREE.Box3().setFromObject(rectangularWall44);
    maze_walls.push(wallBox47);

    var rectangularWall45 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall45.position.set(-12, 1.25, -3);
    rectangularWall45.rotation.y = Math.PI / 2;
    maze.add(rectangularWall45);
    var wallBox48 = new THREE.Box3().setFromObject(rectangularWall45);
    maze_walls.push(wallBox48);

    var rectangularWall46 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall46.position.set(18, 1.25, -9);
    rectangularWall46.rotation.y = Math.PI / 2;
    maze.add(rectangularWall46);
    var wallBox49 = new THREE.Box3().setFromObject(rectangularWall46);
    maze_walls.push(wallBox49);

    var rectangularWall47 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall47.position.set(6, 1.25, -9);
    rectangularWall47.rotation.y = Math.PI / 2;
    maze.add(rectangularWall47);
    var wallBox50 = new THREE.Box3().setFromObject(rectangularWall47);
    maze_walls.push(wallBox50);

    var rectangularWall48 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall48.position.set(0, 1.25, -9);
    rectangularWall48.rotation.y = Math.PI / 2;
    maze.add(rectangularWall48);
    var wallBox51 = new THREE.Box3().setFromObject(rectangularWall48);
    maze_walls.push(wallBox51);

    var rectangularWall49 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall49.position.set(-6, 1.25, -9);
    rectangularWall49.rotation.y = Math.PI / 2;
    maze.add(rectangularWall49);
    var wallBox52 = new THREE.Box3().setFromObject(rectangularWall49);
    maze_walls.push(wallBox52);

    var rectanglularWall50 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectanglularWall50.position.set(6, 1.25, -15);
    rectanglularWall50.rotation.y = Math.PI / 2;
    maze.add(rectanglularWall50);
    var wallBox53 = new THREE.Box3().setFromObject(rectanglularWall50);
    maze_walls.push(wallBox53);

    var rectangularWall51 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall51.position.set(0, 1.25, -15);
    rectangularWall51.rotation.y = Math.PI / 2;
    maze.add(rectangularWall51);
    var wallBox54 = new THREE.Box3().setFromObject(rectangularWall51);
    maze_walls.push(wallBox54);

    var rectangularWall52 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall52.position.set(-6, 1.25, -15);
    rectangularWall52.rotation.y = Math.PI / 2;
    maze.add(rectangularWall52);
    var wallBox55 = new THREE.Box3().setFromObject(rectangularWall52);
    maze_walls.push(wallBox55);

    var rectangularWall53 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall53.position.set(-18, 1.25, -15);
    rectangularWall53.rotation.y = Math.PI / 2;
    maze.add(rectangularWall53);
    var wallBox56 = new THREE.Box3().setFromObject(rectangularWall53);
    maze_walls.push(wallBox56);

    var rectangularWall54 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall54.position.set(12, 1.25, -21);
    rectangularWall54.rotation.y = Math.PI / 2;
    maze.add(rectangularWall54);
    var wallBox57 = new THREE.Box3().setFromObject(rectangularWall54);
    maze_walls.push(wallBox57);

    var rectangularWall55 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall55.position.set(6, 1.25, -21);
    rectangularWall55.rotation.y = Math.PI / 2;
    maze.add(rectangularWall55);
    var wallBox58 = new THREE.Box3().setFromObject(rectangularWall55);
    maze_walls.push(wallBox58);

    var rectangularWall56 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall56.position.set(0, 1.25, -21);
    rectangularWall56.rotation.y = Math.PI / 2;
    maze.add(rectangularWall56);
    var wallBox59 = new THREE.Box3().setFromObject(rectangularWall56);
    maze_walls.push(wallBox59);

    var rectangularWall57 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall57.position.set(-6, 1.25, -21);
    rectangularWall57.rotation.y = Math.PI / 2;
    maze.add(rectangularWall57);
    var wallBox60 = new THREE.Box3().setFromObject(rectangularWall57);
    maze_walls.push(wallBox60);

    var rectangularWall58 = new THREE.Mesh(rectagularWallGeometry, rectagularWallMaterial);
    rectangularWall58.position.set(-18, 1.25, -21);
    rectangularWall58.rotation.y = Math.PI / 2;
    maze.add(rectangularWall58);
    var wallBox61 = new THREE.Box3().setFromObject(rectangularWall58);
    maze_walls.push(wallBox61);

    return { maze, maze_walls };
}