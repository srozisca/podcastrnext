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
      hasPrevious = _usePlayer.hasPrevious,
      clearPlayerState = _usePlayer.clearPlayerState;

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

  function setupProgressListener() {
    audioRef.current.currentTime = 0;
    audioRef.current.addEventListener('timeupdate', function (event) {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleSeek(amount) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  }

  var episode = episodeList[currentEpisodeIndex];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.playerContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
        lineNumber: 75,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptyPlayer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.empty,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["convertDurationToTimeString"])(progress)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.slider,
          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_4__["default"], {
            max: episode.duration,
            value: progress,
            onChange: handleSeek,
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
            lineNumber: 95,
            columnNumber: 29
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: Object(_utils_convertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__["convertDurationToTimeString"])((_episode$duration = episode === null || episode === void 0 ? void 0 : episode.duration) !== null && _episode$duration !== void 0 ? _episode$duration : 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        src: episode.url,
        ref: audioRef,
        loop: isLooping,
        autoPlay: true,
        onEnded: handleEpisodeEnded,
        onPlay: function onPlay() {
          return setPlayingState(true);
        },
        onPause: function onPause() {
          return setPlayingState(false);
        },
        onLoadedMetadata: setupProgressListener
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
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
            lineNumber: 130,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
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
            lineNumber: 133,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
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
            lineNumber: 142,
            columnNumber: 31
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/pause.svg",
            alt: "Pausar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 31
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
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
            lineNumber: 147,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
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
            lineNumber: 155,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 9
  }, this);
}

_s(Player, "aG6nxbsiedkm/XRp6dmU4yLsZbE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsImlzTG9vcGluZyIsImlzU2h1ZmZsaW5nIiwidG9nZ2xlUGxheSIsInRvZ2dsZUxvb3AiLCJ0b2dnbGVTaHVmZmxlIiwic2V0UGxheWluZ1N0YXRlIiwicGxheU5leHQiLCJwbGF5UHJldmlvdXMiLCJoYXNOZXh0IiwiaGFzUHJldmlvdXMiLCJjbGVhclBsYXllclN0YXRlIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsInNldHVwUHJvZ3Jlc3NMaXN0ZW5lciIsImN1cnJlbnRUaW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiTWF0aCIsImZsb29yIiwiaGFuZGxlU2VlayIsImFtb3VudCIsImhhbmRsZUVwaXNvZGVFbmRlZCIsImVwaXNvZGUiLCJzdHlsZXMiLCJwbGF5ZXJDb250YWluZXIiLCJjdXJyZW50RXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImVtcHR5UGxheWVyIiwiZW1wdHkiLCJjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmciLCJzbGlkZXIiLCJkdXJhdGlvbiIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsInVybCIsImJ1dHRvbnMiLCJsZW5ndGgiLCJpc0FjdGl2ZSIsInBsYXlCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFB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LGlCQUFPLEVBQUV0QixVQUpiO0FBQUEsb0JBTUtILFNBQVMsZ0JBQ0o7QUFBSyxlQUFHLEVBQUMsV0FBVDtBQUFxQixlQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESSxnQkFFSjtBQUFLLGVBQUcsRUFBQyxZQUFUO0FBQXNCLGVBQUcsRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaSixlQXVCSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFPLEVBQUVPLFFBQS9CO0FBQXlDLGtCQUFRLEVBQUUsQ0FBQ2tCLE9BQUQsSUFBWSxDQUFDaEIsT0FBaEU7QUFBQSxpQ0FDSTtBQUFLLGVBQUcsRUFBQyxnQkFBVDtBQUEwQixlQUFHLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJKLGVBMEJJO0FBQ0ksY0FBSSxFQUFDLFFBRFQ7QUFFSSxrQkFBUSxFQUFFLENBQUNnQixPQUZmO0FBR0ksaUJBQU8sRUFBRXJCLFVBSGI7QUFJSSxtQkFBUyxFQUFFSCxTQUFTLEdBQUd5QiwwREFBTSxDQUFDa0IsUUFBVixHQUFxQixFQUo3QztBQUFBLGlDQU1JO0FBQUssZUFBRyxFQUFDLGFBQVQ7QUFBdUIsZUFBRyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0ZIOztHQXhKZXJELE07VUFtQlJNLGlFOzs7S0FuQlFOLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44MzUxNjM2N2I2NzgzODFjMzk2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JjLXNsaWRlcic7XHJcbmltcG9ydCAncmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyB1c2VQbGF5ZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcclxuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQbGF5ZXIoKSB7XHJcbiAgICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGVwaXNvZGVMaXN0LFxyXG4gICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXHJcbiAgICAgICAgaXNQbGF5aW5nLFxyXG4gICAgICAgIGlzTG9vcGluZyxcclxuICAgICAgICBpc1NodWZmbGluZyxcclxuICAgICAgICB0b2dnbGVQbGF5LFxyXG4gICAgICAgIHRvZ2dsZUxvb3AsXHJcbiAgICAgICAgdG9nZ2xlU2h1ZmZsZSxcclxuICAgICAgICBzZXRQbGF5aW5nU3RhdGUsXHJcbiAgICAgICAgcGxheU5leHQsXHJcbiAgICAgICAgcGxheVByZXZpb3VzLFxyXG4gICAgICAgIGhhc05leHQsXHJcbiAgICAgICAgaGFzUHJldmlvdXMsXHJcbiAgICAgICAgY2xlYXJQbGF5ZXJTdGF0ZVxyXG4gICAgfSA9IHVzZVBsYXllcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhdWRpb1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbaXNQbGF5aW5nXSlcclxuXHJcbiAgICBmdW5jdGlvbiBzZXR1cFByb2dyZXNzTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IDA7XHJcblxyXG4gICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3MoTWF0aC5mbG9vcihhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlZWsoYW1vdW50OiBudW1iZXIpIHtcclxuICAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gYW1vdW50O1xyXG4gICAgICAgIHNldFByb2dyZXNzKGFtb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRXBpc29kZUVuZGVkKCkge1xyXG4gICAgICAgIGlmIChoYXNOZXh0KSB7XHJcbiAgICAgICAgICAgIHBsYXlOZXh0KClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhclBsYXllclN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVwaXNvZGUgPSBlcGlzb2RlTGlzdFtjdXJyZW50RXBpc29kZUluZGV4XTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXlpbmcuc3ZnXCIgYWx0PVwiVG9jYW5kbyBhZ29yYVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmEgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgeyBlcGlzb2RlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXBpc29kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1OTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTkyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcocHJvZ3Jlc3MpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcGlzb2RlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17ZXBpc29kZS5kdXJhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZ3Jlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjODRkMzYxJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOWY3NWZmJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7IGJvcmRlckNvbG9yOiAnIzg0ZDM2MScsIGJvcmRlcldpZHRoOiA0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKGVwaXNvZGU/LmR1cmF0aW9uID8/IDApfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtlcGlzb2RlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YXVkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXthdWRpb1JlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcD17aXNMb29waW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVuZGVkPXtoYW5kbGVFcGlzb2RlRW5kZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGxheT17KCkgPT4gc2V0UGxheWluZ1N0YXRlKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblBhdXNlPXsoKSA9PiBzZXRQbGF5aW5nU3RhdGUoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWRlZE1ldGFkYXRhPXtzZXR1cFByb2dyZXNzTGlzdGVuZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGUgfHwgZXBpc29kZUxpc3QubGVuZ3RoID09PSAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaHVmZmxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzU2h1ZmZsaW5nID8gc3R5bGVzLmlzQWN0aXZlIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zaHVmZmxlLnN2Z1wiIGFsdD1cIkVtYmFyYWxoYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3BsYXlQcmV2aW91c30gZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNQcmV2aW91c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiVG9jYXIgYW50ZXJpb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1BsYXlpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJUb2NhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPVwiL3BhdXNlLnN2Z1wiIGFsdD1cIlBhdXNhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwbGF5TmV4dH0gZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNOZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2EgcHLDs3hpbWFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUxvb3B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNMb29waW5nID8gc3R5bGVzLmlzQWN0aXZlIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwZXRpclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==