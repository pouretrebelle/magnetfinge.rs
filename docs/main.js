!function(Q){var F={};function B(U){if(F[U])return F[U].exports;var n=F[U]={i:U,l:!1,exports:{}};return Q[U].call(n.exports,n,n.exports,B),n.l=!0,n.exports}B.m=Q,B.c=F,B.d=function(Q,F,U){B.o(Q,F)||Object.defineProperty(Q,F,{enumerable:!0,get:U})},B.r=function(Q){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Q,"__esModule",{value:!0})},B.t=function(Q,F){if(1&F&&(Q=B(Q)),8&F)return Q;if(4&F&&"object"==typeof Q&&Q&&Q.__esModule)return Q;var U=Object.create(null);if(B.r(U),Object.defineProperty(U,"default",{enumerable:!0,value:Q}),2&F&&"string"!=typeof Q)for(var n in Q)B.d(U,n,function(F){return Q[F]}.bind(null,n));return U},B.n=function(Q){var F=Q&&Q.__esModule?function(){return Q.default}:function(){return Q};return B.d(F,"a",F),F},B.o=function(Q,F){return Object.prototype.hasOwnProperty.call(Q,F)},B.p="/",B(B.s=0)}([function(Q,F,B){Q.exports=B(1)},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_application_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);\n/* harmony import */ var _styles_application_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_application_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_background__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);\n/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_favicon_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_opengraph_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);\n/* harmony import */ var _assets_opengraph_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_opengraph_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_twittercard_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);\n/* harmony import */ var _assets_twittercard_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_twittercard_jpg__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz81NmQ3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9hcHBsaWNhdGlvbi5zYXNzJztcbmltcG9ydCAnLi9iYWNrZ3JvdW5kJztcbmltcG9ydCAnLi9hc3NldHMvZmF2aWNvbi5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9vcGVuZ3JhcGguanBnJztcbmltcG9ydCAnLi9hc3NldHMvdHdpdHRlcmNhcmQuanBnJztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n")},function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2FwcGxpY2F0aW9uLnNhc3M/ZjRiMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n")},function(module,exports){eval("const magnets = [{\n  element: document.getElementById('leftMagnet'),\n  everyXFrames: 18,\n  speed: 1,\n  rings: []\n}, {\n  element: document.getElementById('rightMagnet'),\n  everyXFrames: 15,\n  speed: 1.5,\n  rings: []\n}];\nconst PIXEL_RATIO = window.devicePixelRatio || 1;\nconst background = {\n  c: undefined,\n  backgroundColor: '#fff',\n  scrollY: 0,\n  scrollX: 0,\n  frames: 0,\n  disappearAt: 1000 * PIXEL_RATIO\n};\n\nconst setup = () => {\n  setPageScroll();\n  setupEventListeners();\n  setupCanvas();\n  getPositions();\n};\n\nconst update = () => {\n  background.frames++;\n  magnets.forEach(magnet => {\n    var randomThing = 3 + Math.floor(Math.random() * 7);\n\n    if (background.frames % magnet.everyXFrames === 0 && magnet.rings.length < randomThing) {\n      magnet.rings.push(new Ring(magnet));\n    }\n\n    magnet.rings.forEach(ring => ring.update());\n  });\n};\n\nconst draw = () => {\n  const c = background.c;\n  c.fillStyle = background.backgroundColor;\n  c.fillRect(0, 0, c.canvas.width, c.canvas.height);\n  c.save();\n  c.translate(-background.scrollX, -background.scrollY);\n  magnets.forEach(magnet => magnet.rings.forEach(ring => ring.draw()));\n  c.restore();\n};\n\nclass Ring {\n  constructor(magnet) {\n    this.magnet = magnet;\n    this.size = 0;\n    this.color = '#ccc';\n  }\n\n  update() {\n    this.size += PIXEL_RATIO * this.magnet.speed;\n\n    if (this.size > background.disappearAt) {\n      this.magnet.rings.shift();\n    }\n  }\n\n  draw() {\n    const c = background.c;\n    c.strokeStyle = this.color;\n    c.globalAlpha = 1 - this.size / background.disappearAt;\n    c.beginPath();\n    c.arc(this.magnet.x, this.magnet.y, this.size, 0, Math.PI * 2);\n    c.stroke();\n    c.closePath();\n  }\n\n}\n\nconst setupEventListeners = () => {\n  window.addEventListener('resize', onResize);\n};\n\nconst onResize = () => {\n  setSizes();\n  getPositions();\n};\n\nconst setSizes = () => {\n  const canvas = background.c.canvas;\n  const width = window.innerWidth;\n  const height = window.innerHeight;\n  canvas.width = width * PIXEL_RATIO;\n  canvas.style.width = `${width}px`;\n  canvas.height = height * PIXEL_RATIO;\n  canvas.style.height = `${height}px`;\n};\n\nconst getPositions = () => {\n  magnets.forEach(magnet => {\n    const bBox = magnet.element.getBoundingClientRect();\n    magnet.x = PIXEL_RATIO * (bBox.left + background.scrollX + bBox.width / 2);\n    magnet.y = PIXEL_RATIO * (bBox.top + background.scrollY + bBox.height / 2);\n  });\n};\n\nconst setPageScroll = () => {\n  background.scrollX = window.scrollX;\n  background.scrollY = window.scrollY;\n};\n\nconst setupCanvas = () => {\n  const canvas = document.createElement('canvas');\n  canvas.className = 'background';\n  document.body.appendChild(canvas);\n  background.c = canvas.getContext('2d');\n  background.c.strokeWidth = 1 * PIXEL_RATIO;\n  setSizes();\n};\n\nconst loop = () => {\n  setPageScroll();\n  update();\n  draw();\n  window.requestAnimationFrame(loop);\n};\n\nconst init = () => {\n  setup();\n  window.requestAnimationFrame(loop);\n};\n\nwindow.addEventListener('load', init);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcz9mZTc3Il0sIm5hbWVzIjpbIm1hZ25ldHMiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImV2ZXJ5WEZyYW1lcyIsInNwZWVkIiwicmluZ3MiLCJQSVhFTF9SQVRJTyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJiYWNrZ3JvdW5kIiwiYyIsInVuZGVmaW5lZCIsImJhY2tncm91bmRDb2xvciIsInNjcm9sbFkiLCJzY3JvbGxYIiwiZnJhbWVzIiwiZGlzYXBwZWFyQXQiLCJzZXR1cCIsInNldFBhZ2VTY3JvbGwiLCJzZXR1cEV2ZW50TGlzdGVuZXJzIiwic2V0dXBDYW52YXMiLCJnZXRQb3NpdGlvbnMiLCJ1cGRhdGUiLCJmb3JFYWNoIiwibWFnbmV0IiwicmFuZG9tVGhpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJwdXNoIiwiUmluZyIsInJpbmciLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyZXN0b3JlIiwiY29uc3RydWN0b3IiLCJzaXplIiwiY29sb3IiLCJzaGlmdCIsInN0cm9rZVN0eWxlIiwiZ2xvYmFsQWxwaGEiLCJiZWdpblBhdGgiLCJhcmMiLCJ4IiwieSIsIlBJIiwic3Ryb2tlIiwiY2xvc2VQYXRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwic2V0U2l6ZXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJzdHlsZSIsImJCb3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwidG9wIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImdldENvbnRleHQiLCJzdHJva2VXaWR0aCIsImxvb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbml0Il0sIm1hcHBpbmdz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LElBQUloRSxXQUEvQjtBQUVBbUQsVUFBUTtBQUNULENBVEQ7O0FBV0EsTUFBTWMsSUFBSSxHQUFHLE1BQU07QUFDakJyRCxlQUFhO0FBQ2JJLFFBQU07QUFDTlcsTUFBSTtBQUNKMUIsUUFBTSxDQUFDaUUscUJBQVAsQ0FBNkJELElBQTdCO0FBQ0QsQ0FMRDs7QUFPQSxNQUFNRSxJQUFJLEdBQUcsTUFBTTtBQUNqQnhELE9BQUs7QUFDTFYsUUFBTSxDQUFDaUUscUJBQVAsQ0FBNkJELElBQTdCO0FBQ0QsQ0FIRDs7QUFLQWhFLE1BQU0sQ0FBQ2dELGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDa0IsSUFBaEMiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1hZ25ldHMgPSBbXG4gIHtcbiAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdE1hZ25ldCcpLFxuICAgIGV2ZXJ5WEZyYW1lczogMTgsXG4gICAgc3BlZWQ6IDEsXG4gICAgcmluZ3M6IFtdLFxuICB9LFxuICB7XG4gICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0TWFnbmV0JyksXG4gICAgZXZlcnlYRnJhbWVzOiAxNSxcbiAgICBzcGVlZDogMS41LFxuICAgIHJpbmdzOiBbXSxcbiAgfSxcbl07XG5cbmNvbnN0IFBJWEVMX1JBVElPID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcblxuY29uc3QgYmFja2dyb3VuZCA9IHtcbiAgYzogdW5kZWZpbmVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgc2Nyb2xsWTogMCxcbiAgc2Nyb2xsWDogMCxcbiAgZnJhbWVzOiAwLFxuICBkaXNhcHBlYXJBdDogMTAwMCAqIFBJWEVMX1JBVElPLFxufTtcblxuY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gIHNldFBhZ2VTY3JvbGwoKTtcbiAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuICBzZXR1cENhbnZhcygpO1xuICBnZXRQb3NpdGlvbnMoKTtcbn07XG5cbmNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgYmFja2dyb3VuZC5mcmFtZXMrKztcblxuICBtYWduZXRzLmZvckVhY2goKG1hZ25ldCkgPT4ge1xuICAgIHZhciByYW5kb21UaGluZyA9IDMgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTtcbiAgICBpZiAoXG4gICAgICBiYWNrZ3JvdW5kLmZyYW1lcyAlIG1hZ25ldC5ldmVyeVhGcmFtZXMgPT09IDAgJiZcbiAgICAgIG1hZ25ldC5yaW5ncy5sZW5ndGggPCByYW5kb21UaGluZ1xuICAgICkge1xuICAgICAgbWFnbmV0LnJpbmdzLnB1c2gobmV3IFJpbmcobWFnbmV0KSk7XG4gICAgfVxuXG4gICAgbWFnbmV0LnJpbmdzLmZvckVhY2goKHJpbmcpID0+IHJpbmcudXBkYXRlKCkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRyYXcgPSAoKSA9PiB7XG4gIGNvbnN0IGMgPSBiYWNrZ3JvdW5kLmM7XG4gIGMuZmlsbFN0eWxlID0gYmFja2dyb3VuZC5iYWNrZ3JvdW5kQ29sb3I7XG4gIGMuZmlsbFJlY3QoMCwgMCwgYy5jYW52YXMud2lkdGgsIGMuY2FudmFzLmhlaWdodCk7XG4gIGMuc2F2ZSgpO1xuICBjLnRyYW5zbGF0ZSgtYmFja2dyb3VuZC5zY3JvbGxYLCAtYmFja2dyb3VuZC5zY3JvbGxZKTtcblxuICBtYWduZXRzLmZvckVhY2goKG1hZ25ldCkgPT4gbWFnbmV0LnJpbmdzLmZvckVhY2goKHJpbmcpID0+IHJpbmcuZHJhdygpKSk7XG5cbiAgYy5yZXN0b3JlKCk7XG59O1xuXG5jbGFzcyBSaW5nIHtcbiAgY29uc3RydWN0b3IobWFnbmV0KSB7XG4gICAgdGhpcy5tYWduZXQgPSBtYWduZXQ7XG4gICAgdGhpcy5zaXplID0gMDtcbiAgICB0aGlzLmNvbG9yID0gJyNjY2MnO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2l6ZSArPSBQSVhFTF9SQVRJTyAqIHRoaXMubWFnbmV0LnNwZWVkO1xuXG4gICAgaWYgKHRoaXMuc2l6ZSA+IGJhY2tncm91bmQuZGlzYXBwZWFyQXQpIHtcbiAgICAgIHRoaXMubWFnbmV0LnJpbmdzLnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBjID0gYmFja2dyb3VuZC5jO1xuICAgIGMuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGMuZ2xvYmFsQWxwaGEgPSAxIC0gdGhpcy5zaXplIC8gYmFja2dyb3VuZC5kaXNhcHBlYXJBdDtcbiAgICBjLmJlZ2luUGF0aCgpO1xuICAgIGMuYXJjKHRoaXMubWFnbmV0LngsIHRoaXMubWFnbmV0LnksIHRoaXMuc2l6ZSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGMuc3Ryb2tlKCk7XG4gICAgYy5jbG9zZVBhdGgoKTtcbiAgfVxufVxuXG5jb25zdCBzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25SZXNpemUpO1xufTtcblxuY29uc3Qgb25SZXNpemUgPSAoKSA9PiB7XG4gIHNldFNpemVzKCk7XG4gIGdldFBvc2l0aW9ucygpO1xufTtcblxuY29uc3Qgc2V0U2l6ZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IGJhY2tncm91bmQuYy5jYW52YXM7XG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY2FudmFzLndpZHRoID0gd2lkdGggKiBQSVhFTF9SQVRJTztcbiAgY2FudmFzLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICogUElYRUxfUkFUSU87XG4gIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xufTtcblxuY29uc3QgZ2V0UG9zaXRpb25zID0gKCkgPT4ge1xuICBtYWduZXRzLmZvckVhY2goKG1hZ25ldCkgPT4ge1xuICAgIGNvbnN0IGJCb3ggPSBtYWduZXQuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBtYWduZXQueCA9IFBJWEVMX1JBVElPICogKGJCb3gubGVmdCArIGJhY2tncm91bmQuc2Nyb2xsWCArIGJCb3gud2lkdGggLyAyKTtcbiAgICBtYWduZXQueSA9IFBJWEVMX1JBVElPICogKGJCb3gudG9wICsgYmFja2dyb3VuZC5zY3JvbGxZICsgYkJveC5oZWlnaHQgLyAyKTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXRQYWdlU2Nyb2xsID0gKCkgPT4ge1xuICBiYWNrZ3JvdW5kLnNjcm9sbFggPSB3aW5kb3cuc2Nyb2xsWDtcbiAgYmFja2dyb3VuZC5zY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG59O1xuXG5jb25zdCBzZXR1cENhbnZhcyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy5jbGFzc05hbWUgPSAnYmFja2dyb3VuZCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICBiYWNrZ3JvdW5kLmMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgYmFja2dyb3VuZC5jLnN0cm9rZVdpZHRoID0gMSAqIFBJWEVMX1JBVElPO1xuXG4gIHNldFNpemVzKCk7XG59O1xuXG5jb25zdCBsb29wID0gKCkgPT4ge1xuICBzZXRQYWdlU2Nyb2xsKCk7XG4gIHVwZGF0ZSgpO1xuICBkcmF3KCk7XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBzZXR1cCgpO1xuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n")},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "favicon.png";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Zhdmljb24ucG5nP2QxMTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHFCQUF1QiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmF2aWNvbi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "opengraph.jpg";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL29wZW5ncmFwaC5qcGc/MjJjOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIscUJBQXVCIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJvcGVuZ3JhcGguanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n')},function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "twittercard.jpg";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3R3aXR0ZXJjYXJkLmpwZz8xMDRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixxQkFBdUIiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInR3aXR0ZXJjYXJkLmpwZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n')}]);