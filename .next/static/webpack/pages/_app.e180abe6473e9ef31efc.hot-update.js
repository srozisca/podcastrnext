webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Player/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");
/* harmony import */ var _utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/convertDurationToTimeString */ "./src/utils/convertDurationToTimeString.ts");


var _jsxFileName = "C:\\Projetos\\NLW\\podcastrnext\\src\\components\\Player\\index.tsx",
    _s = $RefreshSig$();








function Player() {
  _s();

  var _episode$duration;

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      progress = _useState[0],
      setProgress = _useState[1];

  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__["usePlayer"])(),
      episodeList = _usePlayer.episodeList,
      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,
      isPlaying = _usePlayer.isPlaying,
      isLooping = _usePlayer.isLooping,
      isShuffling = _usePlayer.isShuffling,
      togglePlay = _usePlayer.togglePlay,
      toggleLoop = _usePlayer.toggleLoop,
      toggleShuffle = _usePlayer.toggleShuffle,
      setPlayingState = _usePlayer.setPlayingState,
      playNext = _usePlayer.playNext,
      playPrevious = _usePlayer.playPrevious,
      hasNext = _usePlayer.hasNext,
      hasPrevious = _usePlayer.hasPrevious;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  var episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.playerContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.currentEpisode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        width: 592,
        height: 592,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyPlayer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.empty,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider,
          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_4__["default"], {
            trackStyle: {
              backgroundColor: '#84d361'
            },
            railStyle: {
              backgroundColor: '#9f75ff'
            },
            handleStyle: {
              borderColor: '#84d361',
              borderWidth: 4
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["convertDurationToTimeString"])((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        src: episode.url,
        ref: audioRef,
        autoPlay: true,
        loop: isLooping,
        onPlay: function onPlay() {
          return setPlayingState(true);
        },
        onPause: function onPause() {
          return setPlayingState(false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode || episodeList.length === 1,
          onClick: toggleShuffle,
          className: isShuffling ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.isActive : '',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: playPrevious,
          disabled: !episode || !hasPrevious,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-previous.svg",
            alt: "Tocar anterior"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.playButton,
          disabled: !episode,
          onClick: togglePlay,
          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 31
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/pause.svg",
            alt: "Pausar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 31
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: playNext,
          disabled: !episode || !hasNext,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play-next.svg",
            alt: "Toca pr\xF3ximar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          onClick: toggleLoop,
          className: isLooping ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.isActive : '',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/repeat.svg",
            alt: "Repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

_s(Player, "dRKHo2WchQlidrM717m3xxjOYgw=", false, function () {
  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__["usePlayer"]];
});

_c = Player;

var _c;

$RefreshReg$(_c, "Player");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsImlzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJ0b2dnbGVTaHVmZmxlIiwic2V0UGxheWluZ1N0YXRlIiwicGxheU5leHQiLCJwbGF5UHJldmlvdXMiLCJoYXNOZXh0IiwiaGFzUHJldmlvdXMiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicGxheSIsInBhdXNlIiwiZXBpc29kZSIsInN0eWxlcyIsInBsYXllckNvbnRhaW5lciIsImN1cnJlbnRFcGlzb2RlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJtZW1iZXJzIiwiZW1wdHlQbGF5ZXIiLCJlbXB0eSIsInNsaWRlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsImNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyIsImR1cmF0aW9uIiwidXJsIiwiYnV0dG9ucyIsImxlbmd0aCIsImlzQWN0aXZlIiwicGxheUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQ3JCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBbUIsSUFBbkIsQ0FBdkI7O0FBRHFCLGtCQUVXQyxzREFBUSxDQUFDLENBQUQsQ0FGbkI7QUFBQSxNQUVkQyxRQUZjO0FBQUEsTUFFSkMsV0FGSTs7QUFBQSxtQkFpQmpCQyx5RUFBUyxFQWpC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YmU2NDczZTllZjMxZWZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmMtc2xpZGVyJztcclxuaW1wb3J0ICdyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7IHVzZVBsYXllciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1BsYXllckNvbnRleHQnO1xyXG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgfSBmcm9tICcuLi8uLi91dGlscy9jb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcigpIHtcclxuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGVwaXNvZGVMaXN0LFxyXG4gICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXHJcbiAgICAgICAgaXNQbGF5aW5nLFxyXG4gICAgICAgIGlzTG9vcGluZyxcclxuICAgICAgICBpc1NodWZmbGluZyxcclxuICAgICAgICB0b2dnbGVQbGF5LFxyXG4gICAgICAgIHRvZ2dsZUxvb3AsXHJcbiAgICAgICAgdG9nZ2xlU2h1ZmZsZSxcclxuICAgICAgICBzZXRQbGF5aW5nU3RhdGUsXHJcbiAgICAgICAgcGxheU5leHQsXHJcbiAgICAgICAgcGxheVByZXZpb3VzLFxyXG4gICAgICAgIGhhc05leHQsXHJcbiAgICAgICAgaGFzUHJldmlvdXNcclxuICAgIH0gPSB1c2VQbGF5ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghYXVkaW9SZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW2lzUGxheWluZ10pXHJcblxyXG4gICAgY29uc3QgZXBpc29kZSA9IGVwaXNvZGVMaXN0W2N1cnJlbnRFcGlzb2RlSW5kZXhdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheWluZy5zdmdcIiBhbHQ9XCJUb2NhbmRvIGFnb3JhXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYSA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICB7IGVwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFcGlzb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezU5Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1OTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZXBpc29kZS50aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVBsYXllcn0gLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+eyB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjODRkMzYxJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOWY3NWZmJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7IGJvcmRlckNvbG9yOiAnIzg0ZDM2MScsIGJvcmRlcldpZHRoOiA0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKGVwaXNvZGU/LmR1cmF0aW9uID8/IDApfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtlcGlzb2RlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YXVkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXthdWRpb1JlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcD17aXNMb29waW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBsYXk9eygpID0+IHNldFBsYXlpbmdTdGF0ZSh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QYXVzZT17KCkgPT4gc2V0UGxheWluZ1N0YXRlKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZSB8fCBlcGlzb2RlTGlzdC5sZW5ndGggPT09IDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNodWZmbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNTaHVmZmxpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NodWZmbGUuc3ZnXCIgYWx0PVwiRW1iYXJhbGhhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cGxheVByZXZpb3VzfSBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWhhc1ByZXZpb3VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1wcmV2aW91cy5zdmdcIiBhbHQ9XCJUb2NhciBhbnRlcmlvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGxheUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzUGxheWluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8aW1nIHNyYz1cIi9wbGF5LnN2Z1wiIGFsdD1cIlRvY2FyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGltZyBzcmM9XCIvcGF1c2Uuc3ZnXCIgYWx0PVwiUGF1c2FyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3BsYXlOZXh0fSBkaXNhYmxlZD17IWVwaXNvZGUgfHwgIWhhc05leHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LW5leHQuc3ZnXCIgYWx0PVwiVG9jYSBwcsOzeGltYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTG9vcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0xvb3BpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3JlcGVhdC5zdmdcIiBhbHQ9XCJSZXBldGlyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9