webpackHotUpdate_N_E("pages/episodes/[slug]",{

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

  var hasNext = currentEpisodeIndex + 1 < episodeList.length;
  var hasPrevious = currentEpisodeIndex > 0;

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  function playNext() {
    if (hasNext) {
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
      play: play,
      playList: playList,
      setPlayingState: setPlayingState,
      togglePlay: togglePlay,
      toggleLoop: toggleLoop,
      playNext: playNext,
      playPrevious: playPrevious,
      hasNext: hasNext,
      hasPrevious: hasPrevious,
      isLooping: isLooping
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 9
  }, this);
}

_s(PlayerContextProvider, "3HvmxYPD5LZxO4zIQndWV+iMQ6k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4Il0sIm5hbWVzIjpbIlBsYXllckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUGxheWVyQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImVwaXNvZGVMaXN0Iiwic2V0RXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4Iiwic2V0Q3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzTG9vcGluZyIsInNldElzTG9vcGluZyIsInBsYXkiLCJlcGlzb2RlIiwicGxheUxpc3QiLCJsaXN0IiwiaW5kZXgiLCJ0b2dnbGVQbGF5IiwidG9nZ2xlTG9vcCIsImhhc05leHQiLCJsZW5ndGgiLCJoYXNQcmV2aW91cyIsInNldFBsYXlpbmdTdGF0ZSIsInN0YXRlIiwicGxheU5leHQiLCJwbGF5UHJldmlvdXMiLCJ1c2VQbGF5ZXIiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTJCTyxJQUFNQSxhQUFhLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBbkM7QUFNQSxTQUFTQyxxQkFBVCxPQUF5RTtBQUFBOztBQUFBLE1BQXhDQyxRQUF3QyxRQUF4Q0EsUUFBd0M7O0FBQUEsa0JBQ3RDQyxzREFBUSxDQUFDLEVBQUQsQ0FEOEI7QUFBQSxNQUNyRUMsV0FEcUU7QUFBQSxNQUN4REMsY0FEd0Q7O0FBQUEsbUJBRXRCRixzREFBUSxDQUFDLENBQUQsQ0FGYztBQUFBLE1BRXJFRyxtQkFGcUU7QUFBQSxNQUVoREMsc0JBRmdEOztBQUFBLG1CQUcxQ0osc0RBQVEsQ0FBQyxLQUFELENBSGtDO0FBQUEsTUFHckVLLFNBSHFFO0FBQUEsTUFHMURDLFlBSDBEOztBQUFBLG1CQUkxQ04sc0RBQVEsQ0FBQyxLQUFELENBSmtDO0FBQUEsTUFJckVPLFNBSnFFO0FBQUEsTUFJMURDLFlBSjBEOztBQU01RSxXQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBZ0M7QUFDNUJSLGtCQUFjLENBQUMsQ0FBQ1EsT0FBRCxDQUFELENBQWQ7QUFDQU4sMEJBQXNCLENBQUMsQ0FBRCxDQUF0QjtBQUNBRSxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNIOztBQUVELFdBQVNLLFFBQVQsQ0FBa0JDLElBQWxCLEVBQW1DQyxLQUFuQyxFQUFrRDtBQUM5Q1gsa0JBQWMsQ0FBQ1UsSUFBRCxDQUFkO0FBQ0FSLDBCQUFzQixDQUFDUyxLQUFELENBQXRCO0FBQ0FQLGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0g7O0FBRUQsV0FBU1EsVUFBVCxHQUFzQjtBQUNsQlIsZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDSDs7QUFFRCxXQUFTVSxVQUFULEdBQXNCO0FBQ2xCUCxnQkFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNIOztBQUVELE1BQU1TLE9BQU8sR0FBR2IsbUJBQW1CLEdBQUcsQ0FBdEIsR0FBMEJGLFdBQVcsQ0FBQ2dCLE1BQXREO0FBQ0EsTUFBTUMsV0FBVyxHQUFHZixtQkFBbUIsR0FBRyxDQUExQzs7QUFFQSxXQUFTZ0IsZUFBVCxDQUF5QkMsS0FBekIsRUFBeUM7QUFDckNkLGdCQUFZLENBQUNjLEtBQUQsQ0FBWjtBQUNIOztBQUVELFdBQVNDLFFBQVQsR0FBb0I7QUFDaEIsUUFBSUwsT0FBSixFQUFhO0FBQ1RaLDRCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNIO0FBQ0o7O0FBRUQsV0FBU21CLFlBQVQsR0FBd0I7QUFDcEIsUUFBSUosV0FBSixFQUFpQjtBQUNiZCw0QkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDSDtBQUNKOztBQUVELHNCQUNJLHFFQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQ0ksU0FBSyxFQUFFO0FBQ0hGLGlCQUFXLEVBQVhBLFdBREc7QUFFSEUseUJBQW1CLEVBQW5CQSxtQkFGRztBQUdIRSxlQUFTLEVBQVRBLFNBSEc7QUFJSEksVUFBSSxFQUFKQSxJQUpHO0FBS0hFLGNBQVEsRUFBUkEsUUFMRztBQU1IUSxxQkFBZSxFQUFmQSxlQU5HO0FBT0hMLGdCQUFVLEVBQVZBLFVBUEc7QUFRSEMsZ0JBQVUsRUFBVkEsVUFSRztBQVNITSxjQUFRLEVBQVJBLFFBVEc7QUFVSEMsa0JBQVksRUFBWkEsWUFWRztBQVdITixhQUFPLEVBQVBBLE9BWEc7QUFZSEUsaUJBQVcsRUFBWEEsV0FaRztBQWFIWCxlQUFTLEVBQVRBO0FBYkcsS0FEWDtBQUFBLGNBaUJLUjtBQWpCTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQkg7O0dBbEVlRCxxQjs7S0FBQUEscUI7QUFvRVQsSUFBTXlCLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDM0IsU0FBT0Msd0RBQVUsQ0FBQzVCLGFBQUQsQ0FBakI7QUFDSCxDQUZNOztJQUFNMkIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcGlzb2Rlcy9bc2x1Z10uNGUxYTQxNWY4ZmExZjM3ZWM2ZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgRXBpc29kZSA9IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBtZW1iZXJzOiBzdHJpbmc7XHJcbiAgICB0aHVtYm5haWw6IHN0cmluZztcclxuICAgIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgICB1cmw6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBQbGF5ZXJDb250ZXh0RGF0YSA9IHtcclxuICAgIGVwaXNvZGVMaXN0OiBFcGlzb2RlW107XHJcbiAgICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XHJcbiAgICBpc1BsYXlpbmc6IGJvb2xlYW47XHJcbiAgICBwbGF5OiAoZXBpc29kZTogRXBpc29kZSkgPT4gdm9pZDtcclxuICAgIHBsYXlMaXN0OiAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgc2V0UGxheWluZ1N0YXRlOiAoc3RhdGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICB0b2dnbGVQbGF5OiAoKSA9PiB2b2lkO1xyXG4gICAgdG9nZ2xlTG9vcDogKCkgPT4gdm9pZDtcclxuICAgIHBsYXlOZXh0OiAoKSA9PiB2b2lkO1xyXG4gICAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkO1xyXG4gICAgaGFzTmV4dDogYm9vbGVhbjtcclxuICAgIGhhc1ByZXZpb3VzOiBib29sZWFuO1xyXG4gICAgaXNMb29waW5nOiBib29sZWFuO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTtcclxuXHJcbnR5cGUgUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMgPSB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyQ29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogUGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpIHtcclxuICAgIGNvbnN0IFtlcGlzb2RlTGlzdCwgc2V0RXBpc29kZUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzTG9vcGluZywgc2V0SXNMb29waW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBwbGF5KGVwaXNvZGU6IEVwaXNvZGUpIHtcclxuICAgICAgICBzZXRFcGlzb2RlTGlzdChbZXBpc29kZV0pO1xyXG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoMCk7XHJcbiAgICAgICAgc2V0SXNQbGF5aW5nKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBsYXlMaXN0KGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHNldEVwaXNvZGVMaXN0KGxpc3QpO1xyXG4gICAgICAgIHNldEN1cnJlbnRFcGlzb2RlSW5kZXgoaW5kZXgpO1xyXG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVQbGF5KCkge1xyXG4gICAgICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVMb29wKCkge1xyXG4gICAgICAgIHNldElzTG9vcGluZyghaXNMb29waW5nKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYXNOZXh0ID0gY3VycmVudEVwaXNvZGVJbmRleCArIDEgPCBlcGlzb2RlTGlzdC5sZW5ndGg7XHJcbiAgICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldFBsYXlpbmdTdGF0ZShzdGF0ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHNldElzUGxheWluZyhzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheU5leHQoKSB7XHJcbiAgICAgICAgaWYgKGhhc05leHQpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBsYXlQcmV2aW91cygpIHtcclxuICAgICAgICBpZiAoaGFzUHJldmlvdXMpIHtcclxuICAgICAgICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4IC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBsYXllckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGVwaXNvZGVMaXN0LFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEVwaXNvZGVJbmRleCxcclxuICAgICAgICAgICAgICAgIGlzUGxheWluZyxcclxuICAgICAgICAgICAgICAgIHBsYXksXHJcbiAgICAgICAgICAgICAgICBwbGF5TGlzdCxcclxuICAgICAgICAgICAgICAgIHNldFBsYXlpbmdTdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvZ2dsZVBsYXksXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVMb29wLFxyXG4gICAgICAgICAgICAgICAgcGxheU5leHQsXHJcbiAgICAgICAgICAgICAgICBwbGF5UHJldmlvdXMsXHJcbiAgICAgICAgICAgICAgICBoYXNOZXh0LFxyXG4gICAgICAgICAgICAgICAgaGFzUHJldmlvdXMsXHJcbiAgICAgICAgICAgICAgICBpc0xvb3BpbmdcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1BsYXllckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==