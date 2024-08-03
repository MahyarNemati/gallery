import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

// Basic Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add Lighting
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Create Floor
const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / 2;
scene.add(floor);

// Create Walls
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const wallGeometry = new THREE.BoxGeometry(20, 10, 0.5);

// Back Wall
const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
backWall.position.z = -10;
backWall.position.y = 5;
scene.add(backWall);

// Left Wall
const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
leftWall.rotation.y = Math.PI / 2;
leftWall.position.x = -10;
leftWall.position.y = 5;
scene.add(leftWall);

// Right Wall
const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
rightWall.rotation.y = Math.PI / 2;
rightWall.position.x = 10;
rightWall.position.y = 5;
scene.add(rightWall);

// Load Artworks
const textureLoader = new THREE.TextureLoader();

function createArtwork(url, x, y, z) {
    const texture = textureLoader.load(url);
    const artworkGeometry = new THREE.PlaneGeometry(3, 3);
    const artworkMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const artwork = new THREE.Mesh(artworkGeometry, artworkMaterial);
    artwork.position.set(x, y, z);
    scene.add(artwork);
}

// Example Artworks
createArtwork('art1.jpg', 0, 5, -9.9);
createArtwork('art2.jpg', -5, 5, -9.9);
createArtwork('art3.jpg', 5, 5, -9.9);

// Pointer Lock Controls
const controls = new PointerLockControls(camera, document.body);
document.addEventListener('click', () => {
    controls.lock();
});

controls.addEventListener('lock', () => {
    console.log('Pointer Locked');
});

controls.addEventListener('unlock', () => {
    console.log('Pointer Unlocked');
});

scene.add(controls.getObject());

// User Movement
const moveSpeed = 0.1;
const keysPressed = {};

document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keysPressed[event.key] = false;
});

function updateControls() {
    if (keysPressed['w']) controls.moveForward(moveSpeed);
    if (keysPressed['s']) controls.moveForward(-moveSpeed);
    if (keysPressed['a']) controls.moveRight(-moveSpeed);
    if (keysPressed['d']) controls.moveRight(moveSpeed);
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    updateControls();
    renderer.render(scene, camera);
}

camera.position.y = 1.6; // Set initial camera height to eye level
camera.position.z = 0; // Set initial camera position

animate();

// Handle Window Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
