import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xbfe3dd );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const planegeometry = new THREE.PlaneGeometry( 10, 10, 10, 10 );
const planematerial = new THREE.MeshBasicMaterial( { color: 0x777777, wireframe:true } );
const plane = new THREE.Mesh( planegeometry, planematerial );
plane.rotation.x = Math.PI * -0.5
scene.add( plane );

const geometry = new THREE.BoxGeometry( 1, 2, 1, 2, 4, 2 );
const material = new THREE.MeshBasicMaterial( { color: 0x752136, wireframe:true } );
const cube = new THREE.Mesh( geometry, material );
cube.position.y = 1
scene.add( cube );

camera.position.z = 5;

const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 0, 0 );
controls.update();
controls.enablePan = false;
controls.enableDamping = true;

window.onresize = function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
};

function animate() {

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  renderer.render( scene, camera );

}
