webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContext", function() { return PlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContextProvider", function() { return PlayerContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePlayer", function() { return usePlayer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Projetos\\NLW\\podcastrnext\\src\\contexts\\PlayerContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function PlayerContextProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      episodeList = _useState[0],
      setEpisodeList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentEpisodeIndex = _useState2[0],
      setCurrentEpisodeIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isPlaying = _useState3[0],
      setIsPlaying = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLooping = _useState4[0],
      setIsLooping = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isShuffling = _useState5[0],
      setIsShuffling = _useState5[1];

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list, index) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function toggleShuffle() {
    setIsShuffling(!isShuffling);
  }

  var hasPrevious = currentEpisodeIndex > 0;
  var hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  function clearPlayerState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  function playNext() {
    if (isShuffling) {
      var nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlayerContext.Provider, {
    value: {
      episodeList: episodeList,
      currentEpisodeIndex: currentEpisodeIndex,
      isPlaying: isPlaying,
      isLooping: isLooping,
      isShuffling: isShuffling,
      play: play,
      playList: playList,
      setPlayingState: setPlayingState,
      togglePlay: togglePlay,
      toggleLoop: toggleLoop,
      toggleShuffle: toggleShuffle,
      playNext: playNext,
      playPrevious: playPrevious,
      hasNext: hasNext,
      hasPrevious: hasPrevious
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 9
  }, this);
}

_s(PlayerContextProvider, "YSXWY8OfLfVxd5To+FHcHi+GAY0=");

_c = PlayerContextProvider;
var usePlayer = function usePlayer() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(PlayerContext);
};

_s2(usePlayer, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "PlayerContextProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4Iiwic2V0Q3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzTG9vcGluZyIsInNldElzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwic2V0SXNTaHVmZmxpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJ0b2dnbGVTaHVmZmxlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwic2V0UGxheWluZ1N0YXRlIiwic3RhdGUiLCJjbGVhclBsYXllclN0YXRlIiwicGxheU5leHQiLCJuZXh0UmFuZG9tRXBpc29kZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxheVByZXZpb3VzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4Qk8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQW5DO0FBTUEsU0FBU0MscUJBQVQsT0FBeUU7QUFBQTs7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDOztBQUFBLGtCQUN0Q0Msc0RBQVEsQ0FBQyxFQUFELENBRDhCO0FBQUEsTUFDckVDLFdBRHFFO0FBQUEsTUFDeERDLGNBRHdEOztBQUFBLG1CQUV0QkYsc0RBQVEsQ0FBQyxDQUFELENBRmM7QUFBQSxNQUVyRUcsbUJBRnFFO0FBQUEsTUFFaERDLHNCQUZnRDs7QUFBQSxtQkFHMUNKLHNEQUFR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QU07QUFBQTs7QUFDM0IsU0FBT0Msd0RBQVUsQ0FBQ3BDLGFBQUQsQ0FBakI7QUFDSCxDQUZNOztJQUFNbUMsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NDMxZmE1MjUwMWJjOGE1MjZlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBFcGlzb2RlID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIG1lbWJlcnM6IHN0cmluZztcclxuICAgIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxuICAgIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFBsYXllckNvbnRleHREYXRhID0ge1xyXG4gICAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcclxuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjtcclxuICAgIGlzUGxheWluZzogYm9vbGVhbjtcclxuICAgIGlzTG9vcGluZzogYm9vbGVhbjtcclxuICAgIGlzU2h1ZmZsaW5nOiBib29sZWFuO1xyXG4gICAgcGxheTogKGVwaXNvZGU6IEVwaXNvZGUpID0+IHZvaWQ7XHJcbiAgICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgY2xlYXJQbGF5ZXJTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgdG9nZ2xlUGxheTogKCkgPT4gdm9pZDtcclxuICAgIHRvZ2dsZUxvb3A6ICgpID0+IHZvaWQ7XHJcbiAgICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkO1xyXG4gICAgcGxheU5leHQ6ICgpID0+IHZvaWQ7XHJcbiAgICBwbGF5UHJldmlvdXM6ICgpID0+IHZvaWQ7XHJcbiAgICBoYXNOZXh0OiBib29sZWFuO1xyXG4gICAgaGFzUHJldmlvdXM6IGJvb2xlYW47XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xyXG5cclxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xyXG4gICAgY29uc3QgW2VwaXNvZGVMaXN0LCBzZXRFcGlzb2RlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNMb29waW5nLCBzZXRJc0xvb3BpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzU2h1ZmZsaW5nLCBzZXRJc1NodWZmbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheShlcGlzb2RlOiBFcGlzb2RlKSB7XHJcbiAgICAgICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcclxuICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xyXG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcclxuICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGluZGV4KTtcclxuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcclxuICAgICAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTG9vcCgpIHtcclxuICAgICAgICBzZXRJc0xvb3BpbmcoIWlzTG9vcGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2h1ZmZsZSgpIHtcclxuICAgICAgICBzZXRJc1NodWZmbGluZyghaXNTaHVmZmxpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc1ByZXZpb3VzID0gY3VycmVudEVwaXNvZGVJbmRleCA+IDA7XHJcbiAgICBjb25zdCBoYXNOZXh0ID0gaXNTaHVmZmxpbmcgfHwgKGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxIDwgZXBpc29kZUxpc3QubGVuZ3RoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRQbGF5aW5nU3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBzZXRJc1BsYXlpbmcoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyUGxheWVyU3RhdGUoKSB7XHJcbiAgICAgICAgc2V0RXBpc29kZUxpc3QoW10pO1xyXG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheU5leHQoKSB7XHJcbiAgICAgICAgaWYgKGlzU2h1ZmZsaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRSYW5kb21FcGlzb2RlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlcGlzb2RlTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgobmV4dFJhbmRvbUVwaXNvZGVJbmRleCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoaGFzTmV4dCkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheVByZXZpb3VzKCkge1xyXG4gICAgICAgIGlmIChoYXNQcmV2aW91cykge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgZXBpc29kZUxpc3QsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgaXNQbGF5aW5nLFxyXG4gICAgICAgICAgICAgICAgaXNMb29waW5nLFxyXG4gICAgICAgICAgICAgICAgaXNTaHVmZmxpbmcsXHJcbiAgICAgICAgICAgICAgICBwbGF5LFxyXG4gICAgICAgICAgICAgICAgcGxheUxpc3QsXHJcbiAgICAgICAgICAgICAgICBzZXRQbGF5aW5nU3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVQbGF5LFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlTG9vcCxcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVNodWZmbGUsXHJcbiAgICAgICAgICAgICAgICBwbGF5TmV4dCxcclxuICAgICAgICAgICAgICAgIHBsYXlQcmV2aW91cyxcclxuICAgICAgICAgICAgICAgIGhhc05leHQsXHJcbiAgICAgICAgICAgICAgICBoYXNQcmV2aW91c1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvUGxheWVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBsYXllciA9ICgpID0+IHtcclxuICAgIHJldHVybiB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9