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
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Player/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Projetos\\NLW\\podcastrnext\\src\\components\\Player\\index.tsx",
    _s = $RefreshSig$();







function Player() {
  _s();

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_3__["PlayerContext"]),
      episodeList = _useContext.episodeList,
      currentEpisodeIndex = _useContext.currentEpisodeIndex,
      isPlaying = _useContext.isPlaying,
      togglePlay = _useContext.togglePlay,
      setPlayingState = _useContext.setPlayingState,
      playNext = _useContext.playNext,
      playPrevious = _useContext.playPrevious,
      hasNext = _useContext.hasNext,
      hasPrevious = _useContext.hasPrevious;

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
    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.playerContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/playing.svg",
        alt: "Tocando agora"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Tocando agora "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.currentEpisode,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
        width: 592,
        height: 592,
        src: episode.thumbnail,
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: episode.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: episode.members
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.emptyPlayer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.empty,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.progress,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.slider,
          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(rc_slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
            lineNumber: 67,
            columnNumber: 29
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.emptySlider
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: "00:00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("audio", {
        src: episode.url,
        ref: audioRef,
        autoPlay: true,
        onPlay: function onPlay() {
          return setPlayingState(true);
        },
        onPause: function onPause() {
          return setPlayingState(false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/shuffle.svg",
            alt: "Embaralhar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
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
            lineNumber: 94,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.playButton,
          disabled: !episode,
          onClick: togglePlay,
          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/play.svg",
            alt: "Tocar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 31
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/pause.svg",
            alt: "Pausar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 31
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
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
            lineNumber: 108,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          disabled: !episode,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/repeat.svg",
            alt: "Repetir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, this);
}

_s(Player, "lUKlgWTsV097ssq4vEokY3nGNpc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0IiwiZXBpc29kZUxpc3QiLCJjdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwidG9nZ2xlUGxheSIsInNldFBsYXlpbmdTdGF0ZSIsInBsYXlOZXh0IiwicGxheVByZXZpb3VzIiwiaGFzTmV4dCIsImhhc1ByZXZpb3VzIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInBsYXkiLCJwYXVzZSIsImVwaXNvZGUiLCJzdHlsZXMiLCJwbGF5ZXJDb250YWluZXIiLCJjdXJyZW50RXBpc29kZSIsInRodW1ibmFpbCIsInRpdGxlIiwibWVtYmVycyIsImVtcHR5UGxheWVyIiwiZW1wdHkiLCJwcm9ncmVzcyIsInNsaWRlciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJlbXB0eVNsaWRlciIsInVybCIsImJ1dHRvbnMiLCJwbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDckIsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxDQUFtQixJQUFuQixDQUF2Qjs7QUFEcUIsb0JBYWpCQyx3REFBVSxDQUFDQyxxRUFBRCxDQWJPO0FBQUEsTUFJakJDLFdBSmlCLGVBSWpCQSxXQUppQjtBQUFBLE1BS2pCQyxtQkFMaUIsZUFLakJBLG1CQUxpQjtBQUFBLE1BTWpCQyxTQU5pQixlQU1qQkEsU0FOaUI7QUFBQSxNQU9qQkMsVUFQaUIsZUFPakJBLFVBUGlCO0FBQUEsTUFRakJDLGVBUmlCLGVBUWpCQSxlQVJpQjtBQUFBLE1BU2pCQyxRQVRpQixlQVNqQkEsUUFUaUI7QUFB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LENBQUNNLE9BQWpDO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUMsYUFBVDtBQUF1QixlQUFHLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErRUg7O0dBN0dlbEIsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY1MGNlM2VlZmFiMmViOTg3N2NiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBQbGF5ZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvUGxheWVyQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JjLXNsaWRlcic7XHJcbmltcG9ydCAncmMtc2xpZGVyL2Fzc2V0cy9pbmRleC5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcigpIHtcclxuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBlcGlzb2RlTGlzdCxcclxuICAgICAgICBjdXJyZW50RXBpc29kZUluZGV4LFxyXG4gICAgICAgIGlzUGxheWluZyxcclxuICAgICAgICB0b2dnbGVQbGF5LFxyXG4gICAgICAgIHNldFBsYXlpbmdTdGF0ZSxcclxuICAgICAgICBwbGF5TmV4dCxcclxuICAgICAgICBwbGF5UHJldmlvdXMsXHJcbiAgICAgICAgaGFzTmV4dCxcclxuICAgICAgICBoYXNQcmV2aW91c1xyXG4gICAgfSA9IHVzZUNvbnRleHQoUGxheWVyQ29udGV4dCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWF1ZGlvUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzUGxheWluZykge1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtpc1BsYXlpbmddKVxyXG5cclxuICAgIGNvbnN0IGVwaXNvZGUgPSBlcGlzb2RlTGlzdFtjdXJyZW50RXBpc29kZUluZGV4XTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXlpbmcuc3ZnXCIgYWx0PVwiVG9jYW5kbyBhZ29yYVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlRvY2FuZG8gYWdvcmEgPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgeyBlcGlzb2RlID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXBpc29kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1OTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTkyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntlcGlzb2RlLnRpdGxlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntlcGlzb2RlLm1lbWJlcnN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlQbGF5ZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjAwOjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2VwaXNvZGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2tTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjODRkMzYxJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjOWY3NWZmJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN0eWxlPXt7IGJvcmRlckNvbG9yOiAnIzg0ZDM2MScsIGJvcmRlcldpZHRoOiA0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVNsaWRlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4wMDowMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtlcGlzb2RlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YXVkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXthdWRpb1JlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QbGF5PXsoKSA9PiBzZXRQbGF5aW5nU3RhdGUodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUGF1c2U9eygpID0+IHNldFBsYXlpbmdTdGF0ZShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zaHVmZmxlLnN2Z1wiIGFsdD1cIkVtYmFyYWxoYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3BsYXlQcmV2aW91c30gZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNQcmV2aW91c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktcHJldmlvdXMuc3ZnXCIgYWx0PVwiVG9jYXIgYW50ZXJpb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1BsYXlpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJUb2NhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPVwiL3BhdXNlLnN2Z1wiIGFsdD1cIlBhdXNhclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwbGF5TmV4dH0gZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNOZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1uZXh0LnN2Z1wiIGFsdD1cIlRvY2EgcHLDs3hpbWFyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17IWVwaXNvZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9yZXBlYXQuc3ZnXCIgYWx0PVwiUmVwZXRpclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==