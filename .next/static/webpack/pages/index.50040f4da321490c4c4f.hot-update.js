webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContext", function() { return PlayerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerContextProvider", function() { return PlayerContextProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Projetos\\NLW\\podcastrnext\\src\\contexts\\PlayerContext.tsx",
    _s = $RefreshSig$();


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

  var hasPrevious = currentEpisodeIndex > 0;
  var hasNext = nextEpisodeIndex < episodeList.length;

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  function playNext() {
    var nextEpisodeIndex = currentEpisodeIndex + 1;

    if (nextEpisodeIndex < episodeList.length) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevious() {
    if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PlayerContext.Provider, {
    value: {
      episodeList: episodeList,
      currentEpisodeIndex: currentEpisodeIndex,
      isPlaying: isPlaying,
      play: play,
      playList: playList,
      playNext: playNext,
      playPrevious: playPrevious,
      setPlayingState: setPlayingState,
      togglePlay: togglePlay
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 9
  }, this);
}

_s(PlayerContextProvider, "LrQXJ4YCuKXOoMsmvRtpeyylJ9U=");

_c = PlayerContextProvider;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4Iiwic2V0Q3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b2dnbGVQbGF5IiwiaGFzUHJldmlvdXMiLCJoYXNOZXh0IiwibmV4dEVwaXNvZGVJbmRleCIsImxlbmd0aCIsInNldFBsYXlpbmdTdGF0ZSIsInN0YXRlIiwicGxheU5leHQiLCJwbGF5UHJldmlvdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVCTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFNQSxTQUFTQyxxQkFBVCxPQUF5RTtBQUFBOztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7O0FBQUEsa0JBQ3RDQyxzREFBUSxDQUFDLEVBQUQsQ0FEOEI7QUFBQSxNQUNyRUMsV0FEcUU7QUFBQSxNQUN4REMsY0FEd0Q7O0FBQUEsbUJBRXRCRixzREFBUSxDQUFDLENBQUQsQ0FGYztBQUFBLE1BRXJFRyxtQkFGcUU7QUFBQSxNQUVoREMsc0JBRmdEOztBQUFBLG1CQUcxQ0osc0RBQVEsQ0FBQyxLQUFELENBSGtDO0FBQUEsTUFHckVLLFNBSHFFO0FBQUEsTUFHMURDLFlBSDBEOztBQUs1RSxXQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBZ0M7QUFDNUJOLGtCQUFjLENBQUMsQ0FBQ00sT0FBRCxDQUFELENBQWQ7QUFDQUosMEJBQXNCLENBQUMsQ0FBRCxDQUF0QjtBQUNBRSxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUVELFdBQVNHLFFBQVQsQ0FBa0JDLElBQWxCLEVBQW1DQyxLQUFuQyxFQUFrRDtBQUM5Q1Qsa0JBQWMsQ0FBQ1EsSUFBRCxDQUFkO0FBQ0FOLDBCQUFzQixDQUFDTyxLQUFELENBQXRCO0FBQ0FMLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0g7O0FBRUQsV0FBU00sVUFBVCxHQUFzQjtBQUNsQk4sZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDSDs7QUFFRCxNQUFNUSxXQUFXLEdBQUdWLG1CQUFtQixHQUFHLENBQTFDO0FBQ0EsTUFBTVcsT0FBTyxHQUFHQyxnQkFBZ0IsR0FBR2QsV0FBVyxDQUFDZSxNQUEvQzs7QUFFQSxXQUFTQyxlQUFULENBQXlCQyxLQUF6QixFQUF5QztBQUNyQ1osZ0JBQVksQ0FBQ1ksS0FBRCxDQUFaO0FBQ0g7O0FBRUQsV0FBU0MsUUFBVCxHQUFvQjtBQUNoQixRQUFNSixnQkFBZ0IsR0FBR1osbUJBQW1CLEdBQUcsQ0FBL0M7O0FBRUEsUUFBSVksZ0JBQWdCLEdBQUdkLFdBQVcsQ0FBQ2UsTUFBbkMsRUFBMkM7QUFDdkNaLDRCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNIO0FBQ0o7O0FBRUQsV0FBU2lCLFlBQVQsR0FBd0I7QUFDcEIsUUFBSWpCLG1CQUFtQixHQUFHLENBQTFCLEVBQTZCO0FBQ3pCQyw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDSDtBQUNKOztBQUVELHNCQUNJLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQ0ksU0FBSyxFQUFFO0FBQ0hGLGlCQUFXLEVBQVhBLFdBREc7QUFFSEUseUJBQW1CLEVBQW5CQSxtQkFGRztBQUdIRSxlQUFTLEVBQVRBLFNBSEc7QUFJSEUsVUFBSSxFQUFKQSxJQUpHO0FBS0hFLGNBQVEsRUFBUkEsUUFMRztBQU1IVSxjQUFRLEVBQVJBLFFBTkc7QUFPSEMsa0JBQVksRUFBWkEsWUFQRztBQVFISCxxQkFBZSxFQUFmQSxlQVJHO0FBU0hMLGdCQUFVLEVBQVZBO0FBVEcsS0FEWDtBQUFBLGNBYUtiO0FBYkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJIOztHQTNEZUQscUI7O0tBQUFBLHFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUwMDQwZjRkYTMyMTQ5MGM0YzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG50eXBlIEVwaXNvZGUgPSB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgbWVtYmVyczogc3RyaW5nO1xyXG4gICAgdGh1bWJuYWlsOiBzdHJpbmc7XHJcbiAgICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgUGxheWVyQ29udGV4dERhdGEgPSB7XHJcbiAgICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xyXG4gICAgY3VycmVudEVwaXNvZGVJbmRleDogbnVtYmVyO1xyXG4gICAgaXNQbGF5aW5nOiBib29sZWFuXHJcbiAgICBwbGF5OiAoZXBpc29kZTogRXBpc29kZSkgPT4gdm9pZDtcclxuICAgIHBsYXlMaXN0OiAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgc2V0UGxheWluZ1N0YXRlOiAoc3RhdGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xyXG4gICAgcGxheU5leHQ6ICgpID0+IHZvaWQ7XHJcbiAgICBwbGF5UHJldmlvdXM6ICgpID0+IHZvaWQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgUGxheWVyQ29udGV4dERhdGEpO1xyXG5cclxudHlwZSBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXJDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBQbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xyXG4gICAgY29uc3QgW2VwaXNvZGVMaXN0LCBzZXRFcGlzb2RlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY3VycmVudEVwaXNvZGVJbmRleCwgc2V0Q3VycmVudEVwaXNvZGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheShlcGlzb2RlOiBFcGlzb2RlKSB7XHJcbiAgICAgICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcclxuICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xyXG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcclxuICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGluZGV4KTtcclxuICAgICAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcclxuICAgICAgICBzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFzUHJldmlvdXMgPSBjdXJyZW50RXBpc29kZUluZGV4ID4gMDtcclxuICAgIGNvbnN0IGhhc05leHQgPSBuZXh0RXBpc29kZUluZGV4IDwgZXBpc29kZUxpc3QubGVuZ3RoO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldFBsYXlpbmdTdGF0ZShzdGF0ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHNldElzUGxheWluZyhzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheU5leHQoKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dEVwaXNvZGVJbmRleCA9IGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxO1xyXG5cclxuICAgICAgICBpZiAobmV4dEVwaXNvZGVJbmRleCA8IGVwaXNvZGVMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheVByZXZpb3VzKCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50RXBpc29kZUluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGN1cnJlbnRFcGlzb2RlSW5kZXggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgZXBpc29kZUxpc3QsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgaXNQbGF5aW5nLFxyXG4gICAgICAgICAgICAgICAgcGxheSxcclxuICAgICAgICAgICAgICAgIHBsYXlMaXN0LFxyXG4gICAgICAgICAgICAgICAgcGxheU5leHQsXHJcbiAgICAgICAgICAgICAgICBwbGF5UHJldmlvdXMsXHJcbiAgICAgICAgICAgICAgICBzZXRQbGF5aW5nU3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVQbGF5XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==