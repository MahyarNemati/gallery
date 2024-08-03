/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_PointerLockControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/PointerLockControls */ \"./node_modules/three/examples/jsm/controls/PointerLockControls.js\");\n\n\n\n// Basic Scene Setup\nvar scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\nvar camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);\n\n// Add Lighting\nvar light = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1, 100);\nlight.position.set(10, 10, 10);\nscene.add(light);\n\n// Create Floor\nvar floorGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(20, 20);\nvar floorMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n  color: 0x808080,\n  side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide\n});\nvar floor = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(floorGeometry, floorMaterial);\nfloor.rotation.x = Math.PI / 2;\nscene.add(floor);\n\n// Create Walls\nvar wallMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n  color: 0xffffff\n});\nvar wallGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(20, 10, 0.5);\n\n// Back Wall\nvar backWall = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(wallGeometry, wallMaterial);\nbackWall.position.z = -10;\nbackWall.position.y = 5;\nscene.add(backWall);\n\n// Left Wall\nvar leftWall = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(wallGeometry, wallMaterial);\nleftWall.rotation.y = Math.PI / 2;\nleftWall.position.x = -10;\nleftWall.position.y = 5;\nscene.add(leftWall);\n\n// Right Wall\nvar rightWall = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(wallGeometry, wallMaterial);\nrightWall.rotation.y = Math.PI / 2;\nrightWall.position.x = 10;\nrightWall.position.y = 5;\nscene.add(rightWall);\n\n// Load Artworks\nvar textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\nfunction createArtwork(url, x, y, z) {\n  var texture = textureLoader.load(url);\n  var artworkGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(3, 3);\n  var artworkMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n    map: texture\n  });\n  var artwork = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(artworkGeometry, artworkMaterial);\n  artwork.position.set(x, y, z);\n  scene.add(artwork);\n}\n\n// Example Artworks\ncreateArtwork('art1.jpg', 0, 5, -9.9);\ncreateArtwork('art2.jpg', -5, 5, -9.9);\ncreateArtwork('art3.jpg', 5, 5, -9.9);\n\n// Pointer Lock Controls\nvar controls = new three_examples_jsm_controls_PointerLockControls__WEBPACK_IMPORTED_MODULE_1__.PointerLockControls(camera, document.body);\ndocument.addEventListener('click', function () {\n  controls.lock();\n});\ncontrols.addEventListener('lock', function () {\n  console.log('Pointer Locked');\n});\ncontrols.addEventListener('unlock', function () {\n  console.log('Pointer Unlocked');\n});\nscene.add(controls.getObject());\n\n// User Movement\nvar moveSpeed = 0.1;\nvar keysPressed = {};\ndocument.addEventListener('keydown', function (event) {\n  keysPressed[event.key] = true;\n});\ndocument.addEventListener('keyup', function (event) {\n  keysPressed[event.key] = false;\n});\nfunction updateControls() {\n  if (keysPressed['w']) controls.moveForward(moveSpeed);\n  if (keysPressed['s']) controls.moveForward(-moveSpeed);\n  if (keysPressed['a']) controls.moveRight(-moveSpeed);\n  if (keysPressed['d']) controls.moveRight(moveSpeed);\n}\n\n// Animation Loop\nfunction animate() {\n  requestAnimationFrame(animate);\n  updateControls();\n  renderer.render(scene, camera);\n}\ncamera.position.y = 1.6; // Set initial camera height to eye level\ncamera.position.z = 0; // Set initial camera position\n\nanimate();\n\n// Handle Window Resize\nwindow.addEventListener('resize', function () {\n  camera.aspect = window.innerWidth / window.innerHeight;\n  camera.updateProjectionMatrix();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n});\n\n//# sourceURL=webpack://micasaart-gallery/./src/gallery.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/three/examples/jsm/controls/PointerLockControls.js":
/*!*************************************************************************!*\
  !*** ./node_modules/three/examples/jsm/controls/PointerLockControls.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PointerLockControls: () => (/* binding */ PointerLockControls)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nconst _euler = new three__WEBPACK_IMPORTED_MODULE_0__.Euler( 0, 0, 0, 'YXZ' );\nconst _vector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\nconst _changeEvent = { type: 'change' };\nconst _lockEvent = { type: 'lock' };\nconst _unlockEvent = { type: 'unlock' };\n\nconst _PI_2 = Math.PI / 2;\n\nclass PointerLockControls extends three__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher {\n\n\tconstructor( camera, domElement ) {\n\n\t\tsuper();\n\n\t\tif ( domElement === undefined ) {\n\n\t\t\tconsole.warn( 'THREE.PointerLockControls: The second parameter \"domElement\" is now mandatory.' );\n\t\t\tdomElement = document.body;\n\n\t\t}\n\n\t\tthis.domElement = domElement;\n\t\tthis.isLocked = false;\n\n\t\t// Set to constrain the pitch of the camera\n\t\t// Range is 0 to Math.PI radians\n\t\tthis.minPolarAngle = 0; // radians\n\t\tthis.maxPolarAngle = Math.PI; // radians\n\n\t\tconst scope = this;\n\n\t\tfunction onMouseMove( event ) {\n\n\t\t\tif ( scope.isLocked === false ) return;\n\n\t\t\tconst movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;\n\t\t\tconst movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;\n\n\t\t\t_euler.setFromQuaternion( camera.quaternion );\n\n\t\t\t_euler.y -= movementX * 0.002;\n\t\t\t_euler.x -= movementY * 0.002;\n\n\t\t\t_euler.x = Math.max( _PI_2 - scope.maxPolarAngle, Math.min( _PI_2 - scope.minPolarAngle, _euler.x ) );\n\n\t\t\tcamera.quaternion.setFromEuler( _euler );\n\n\t\t\tscope.dispatchEvent( _changeEvent );\n\n\t\t}\n\n\t\tfunction onPointerlockChange() {\n\n\t\t\tif ( scope.domElement.ownerDocument.pointerLockElement === scope.domElement ) {\n\n\t\t\t\tscope.dispatchEvent( _lockEvent );\n\n\t\t\t\tscope.isLocked = true;\n\n\t\t\t} else {\n\n\t\t\t\tscope.dispatchEvent( _unlockEvent );\n\n\t\t\t\tscope.isLocked = false;\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onPointerlockError() {\n\n\t\t\tconsole.error( 'THREE.PointerLockControls: Unable to use Pointer Lock API' );\n\n\t\t}\n\n\t\tthis.connect = function () {\n\n\t\t\tscope.domElement.ownerDocument.addEventListener( 'mousemove', onMouseMove );\n\t\t\tscope.domElement.ownerDocument.addEventListener( 'pointerlockchange', onPointerlockChange );\n\t\t\tscope.domElement.ownerDocument.addEventListener( 'pointerlockerror', onPointerlockError );\n\n\t\t};\n\n\t\tthis.disconnect = function () {\n\n\t\t\tscope.domElement.ownerDocument.removeEventListener( 'mousemove', onMouseMove );\n\t\t\tscope.domElement.ownerDocument.removeEventListener( 'pointerlockchange', onPointerlockChange );\n\t\t\tscope.domElement.ownerDocument.removeEventListener( 'pointerlockerror', onPointerlockError );\n\n\t\t};\n\n\t\tthis.dispose = function () {\n\n\t\t\tthis.disconnect();\n\n\t\t};\n\n\t\tthis.getObject = function () { // retaining this method for backward compatibility\n\n\t\t\treturn camera;\n\n\t\t};\n\n\t\tthis.getDirection = function () {\n\n\t\t\tconst direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( 0, 0, - 1 );\n\n\t\t\treturn function ( v ) {\n\n\t\t\t\treturn v.copy( direction ).applyQuaternion( camera.quaternion );\n\n\t\t\t};\n\n\t\t}();\n\n\t\tthis.moveForward = function ( distance ) {\n\n\t\t\t// move forward parallel to the xz-plane\n\t\t\t// assumes camera.up is y-up\n\n\t\t\t_vector.setFromMatrixColumn( camera.matrix, 0 );\n\n\t\t\t_vector.crossVectors( camera.up, _vector );\n\n\t\t\tcamera.position.addScaledVector( _vector, distance );\n\n\t\t};\n\n\t\tthis.moveRight = function ( distance ) {\n\n\t\t\t_vector.setFromMatrixColumn( camera.matrix, 0 );\n\n\t\t\tcamera.position.addScaledVector( _vector, distance );\n\n\t\t};\n\n\t\tthis.lock = function () {\n\n\t\t\tthis.domElement.requestPointerLock();\n\n\t\t};\n\n\t\tthis.unlock = function () {\n\n\t\t\tscope.domElement.ownerDocument.exitPointerLock();\n\n\t\t};\n\n\t\tthis.connect();\n\n\t}\n\n}\n\n\n\n\n//# sourceURL=webpack://micasaart-gallery/./node_modules/three/examples/jsm/controls/PointerLockControls.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/gallery.js");
/******/ 	
/******/ })()
;