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
      hasPrevious: hasPrevious,
      clearPlayerState: clearPlayerState
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4Iiwic2V0Q3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzTG9vcGluZyIsInNldElzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwic2V0SXNTaHVmZmxpbmciLCJwbGF5IiwiZXBpc29kZSIsInBsYXlMaXN0IiwibGlzdCIsImluZGV4IiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJ0b2dnbGVTaHVmZmxlIiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibGVuZ3RoIiwic2V0UGxheWluZ1N0YXRlIiwic3RhdGUiLCJjbGVhclBsYXllclN0YXRlIiwicGxheU5leHQiLCJuZXh0UmFuZG9tRXBpc29kZUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGxheVByZXZpb3VzIiwidXNlUGxheWVyIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE4Qk8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQW5DO0FBTUEsU0FBU0MscUJBQVQsT0FBeUU7QUFBQTs7QUFBQSxNQUF4Q0MsUUFBd0MsUUFBeENBLFFBQXdDOztBQUFBLGtCQUN0Q0Msc0RBQVEsQ0FBQyxFQUFELENBRDhCO0FBQUEsTUFDckVDLFdBRHFFO0FBQUEsTUFDeERDLGNBRHdEOztBQUFBLG1CQUV0QkYsc0RBQVEsQ0FBQyxDQUFELENBRmM7QUFBQSxNQUVyRUcsbUJBRnFFO0FBQUEsTUFFaERDLHNCQUZnRDs7QUFBQSxtQkFHMUNKLHNEQUFR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TWlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDM0IsU0FBT0Msd0RBQVUsQ0FBQ3BDLGFBQUQsQ0FBakI7QUFDSCxDQUZNOztJQUFNbUMsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNTQzMjUyZDg1Zjk1ZTJhYmZlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBFcGlzb2RlID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIG1lbWJlcnM6IHN0cmluZztcclxuICAgIHRodW1ibmFpbDogc3RyaW5nO1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxuICAgIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFBsYXllckNvbnRleHREYXRhID0ge1xyXG4gICAgZXBpc29kZUxpc3Q6IEVwaXNvZGVbXTtcclxuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjtcclxuICAgIGlzUGxheWluZzogYm9vbGVhbjtcclxuICAgIGlzTG9vcGluZzogYm9vbGVhbjtcclxuICAgIGlzU2h1ZmZsaW5nOiBib29sZWFuO1xyXG4gICAgcGxheTogKGVwaXNvZGU6IEVwaXNvZGUpID0+IHZvaWQ7XHJcbiAgICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcclxuICAgIHNldFBsYXlpbmdTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgdG9nZ2xlUGxheTogKCkgPT4gdm9pZDtcclxuICAgIHRvZ2dsZUxvb3A6ICgpID0+IHZvaWQ7XHJcbiAgICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkO1xyXG4gICAgcGxheU5leHQ6ICgpID0+IHZvaWQ7XHJcbiAgICBwbGF5UHJldmlvdXM6ICgpID0+IHZvaWQ7XHJcbiAgICBjbGVhclBsYXllclN0YXRlOiAoKSA9PiB2b2lkO1xyXG4gICAgaGFzTmV4dDogYm9vbGVhbjtcclxuICAgIGhhc1ByZXZpb3VzOiBib29sZWFuO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcclxuXHJcbnR5cGUgUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpIHtcclxuICAgIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc1NodWZmbGluZywgc2V0SXNTaHVmZmxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHBsYXkoZXBpc29kZTogRXBpc29kZSkge1xyXG4gICAgICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSk7XHJcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcclxuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheUxpc3QobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XHJcbiAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVBsYXkoKSB7XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUxvb3AoKSB7XHJcbiAgICAgICAgc2V0SXNMb29waW5nKCFpc0xvb3BpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNodWZmbGUoKSB7XHJcbiAgICAgICAgc2V0SXNTaHVmZmxpbmcoIWlzU2h1ZmZsaW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xyXG4gICAgY29uc3QgaGFzTmV4dCA9IGlzU2h1ZmZsaW5nIHx8IChjdXJyZW50RXBpc29kZUluZGV4ICsgMSA8IGVwaXNvZGVMaXN0Lmxlbmd0aCk7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UGxheWluZ1N0YXRlKHN0YXRlOiBib29sZWFuKSB7XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclBsYXllclN0YXRlKCkge1xyXG4gICAgICAgIHNldEVwaXNvZGVMaXN0KFtdKTtcclxuICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBsYXlOZXh0KCkge1xyXG4gICAgICAgIGlmIChpc1NodWZmbGluZykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0UmFuZG9tRXBpc29kZUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZXBpc29kZUxpc3QubGVuZ3RoKVxyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KG5leHRSYW5kb21FcGlzb2RlSW5kZXgpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGhhc05leHQpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpIHtcclxuICAgICAgICBpZiAoaGFzUHJldmlvdXMpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4IC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGVwaXNvZGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCxcclxuICAgICAgICAgICAgICAgIGlzUGxheWluZyxcclxuICAgICAgICAgICAgICAgIGlzTG9vcGluZyxcclxuICAgICAgICAgICAgICAgIGlzU2h1ZmZsaW5nLFxyXG4gICAgICAgICAgICAgICAgcGxheSxcclxuICAgICAgICAgICAgICAgIHBsYXlMaXN0LFxyXG4gICAgICAgICAgICAgICAgc2V0UGxheWluZ1N0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlUGxheSxcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUxvb3AsXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVTaHVmZmxlLFxyXG4gICAgICAgICAgICAgICAgcGxheU5leHQsXHJcbiAgICAgICAgICAgICAgICBwbGF5UHJldmlvdXMsXHJcbiAgICAgICAgICAgICAgICBoYXNOZXh0LFxyXG4gICAgICAgICAgICAgICAgaGFzUHJldmlvdXMsXHJcbiAgICAgICAgICAgICAgICBjbGVhclBsYXllclN0YXRlXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoUGxheWVyQ29udGV4dClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=