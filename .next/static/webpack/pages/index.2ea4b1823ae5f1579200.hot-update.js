webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Projetos_NLW_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/PlayerContext */ "./src/contexts/PlayerContext.tsx");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Projetos\\NLW\\podcastrnext\\src\\pages\\index.tsx",
    _s = $RefreshSig$();







var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var latestEpisodes = _ref.latestEpisodes,
      allEpisodes = _ref.allEpisodes;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__["PlayerContext"]),
      playList = _useContext.playList;

  var episodeList = [].concat(Object(C_Projetos_NLW_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(latestEpisodes), Object(C_Projetos_NLW_podcastrnext_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allEpisodes));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.homepage,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Home | Podcastr"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.latestEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "\xDAltimos Lan\xE7amentos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: latestEpisodes.map(function (episode, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
              width: 192,
              height: 192,
              src: episode.thumbnail,
              alt: episode.title,
              objectFit: "cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _home_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.episodesDetails,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                href: "/episodes/".concat(episode.id),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: episode.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              type: "button",
              onClick: function onClick() {
                return playList(episodeList, index);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/play-green.svg",
                alt: "Tocar epis\xF3dio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 17
            }, _this)]
          }, episode.id, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.allEpisodes,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Todos epis\xF3dios"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        cellSpacing: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Podcast"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Integrantes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Data"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Dura\xE7\xE3o"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: allEpisodes.map(function (episode, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: {
                  width: 100
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  width: 120,
                  height: 120,
                  src: episode.thumbnail,
                  alt: episode.title,
                  objectFit: "cover"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: "/episodes/".concat(episode.id),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    children: episode.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.members
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: {
                  width: 100
                },
                children: episode.publishedAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: episode.durationAsString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "button",
                  onClick: function onClick() {
                    return playList(episodeList, index + latestEpisodes.length);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/play-green.svg",
                    alt: "Tocar epis\xF3dio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 19
              }, _this)]
            }, episode.id, true, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(Home, "qT//zZv142VKq8S9UcHLhI+SYMA=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwibGF0ZXN0RXBpc29kZXMiLCJhbGxFcGlzb2RlcyIsInVzZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0IiwicGxheUxpc3QiLCJlcGlzb2RlTGlzdCIsInN0eWxlcyIsImhvbWVwYWdlIiwibWFwIiwiZXBpc29kZSIsImluZGV4IiwidGh1bWJuYWlsIiwidGl0bGUiLCJlcGlzb2Rlc0RldGFpbHMiLCJpZCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRBdCIsImR1cmF0aW9uQXNTdHJpbmciLCJ3aWR0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUVBOztBQWtCZSxTQUFTQSxJQUFULE9BQTBEO0FBQUE7O0FBQUE7O0FBQUEsTUFBMUNDLGNBQTBDLFFBQTFDQSxjQUEwQztBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7O0FBQUEsb0JBQ2xEQyx3REFBVSxDQUFDQyxxRUFBRCxDQUR3QztBQUFBLE1BQy9EQyxRQUQrRCxlQUMvREEsUUFEK0Q7O0FBR3ZFLE1BQU1DLFdBQVcsb0tBQU9MLGNBQVAsMEpBQTBCQyxXQUExQixFQUFqQjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFSyx3REFBTSxDQUFDQyxRQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFTLGVBQVMsRUFBRUQsd0RBQU0sQ0FBQ04sY0FBM0I7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFDR0EsY0FBYyxDQUFDUSxHQUFmLENBQW1CLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUN0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O0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkYsZUFlRTtBQUFBLDBCQUFLSCxPQUFPLENBQUNNO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFmRixlQWdCRTtBQUFJLHFCQUFLLEVBQUU7QUFBRUcsdUJBQUssRUFBRTtBQUFULGlCQUFYO0FBQUEsMEJBQTRCVCxPQUFPLENBQUNPO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBaEJGLGVBaUJFO0FBQUEsMEJBQUtQLE9BQU8sQ0FBQ1E7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpCRixlQWtCRTtBQUFBLHVDQUNFO0FBQVEsc0JBQUksRUFBQyxRQUFiO0FBQXNCLHlCQUFPLEVBQUU7QUFBQSwyQkFBTWIsUUFBUSxDQUFDQyxXQUFELEVBQWNLLEtBQUssR0FBR1YsY0FBYyxDQUFDbUIsTUFBckMsQ0FBZDtBQUFBLG1CQUEvQjtBQUFBLHlDQUNFO0FBQUssdUJBQUcsRUFBQyxpQkFBVDtBQUEyQix1QkFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFsQkY7QUFBQSxlQUFTVixPQUFPLENBQUNLLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUEwQkQsV0EzQkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9GRDs7R0F6RnVCZixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJlYTRiMTgyM2FlNWYxNTc5MjAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgcHRCUiBmcm9tICdkYXRlLWZucy9sb2NhbGUvcHQtQlInO1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nJztcbmltcG9ydCB7IFBsYXllckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9QbGF5ZXJDb250ZXh0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlLnNjc3MnO1xuXG50eXBlIEVwaXNvZGUgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRodW1ibmFpbDogc3RyaW5nO1xuICBtZW1iZXJzOiBzdHJpbmc7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIGR1cmF0aW9uQXNTdHJpbmc6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHB1Ymxpc2hlZEF0OiBzdHJpbmc7XG59XG5cbnR5cGUgSG9tZVByb3BzID0ge1xuICBsYXRlc3RFcGlzb2RlczogRXBpc29kZVtdO1xuICBhbGxFcGlzb2RlczogRXBpc29kZVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgbGF0ZXN0RXBpc29kZXMsIGFsbEVwaXNvZGVzIH06IEhvbWVQcm9wcykge1xuICBjb25zdCB7IHBsYXlMaXN0IH0gPSB1c2VDb250ZXh0KFBsYXllckNvbnRleHQpO1xuXG4gIGNvbnN0IGVwaXNvZGVMaXN0ID0gWy4uLmxhdGVzdEVwaXNvZGVzLCAuLi5hbGxFcGlzb2Rlc107XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVwYWdlfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZSB8IFBvZGNhc3RyPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmxhdGVzdEVwaXNvZGVzfT5cbiAgICAgICAgPGgyPsOabHRpbW9zIExhbsOnYW1lbnRvczwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7bGF0ZXN0RXBpc29kZXMubWFwKChlcGlzb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17ZXBpc29kZS5pZH0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTkyfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxOTJ9XG4gICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgYWx0PXtlcGlzb2RlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVwaXNvZGVzRGV0YWlsc30+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGE+e2VwaXNvZGUudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPHA+e2VwaXNvZGUubWVtYmVyc308L3A+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5wdWJsaXNoZWRBdH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHBsYXlMaXN0KGVwaXNvZGVMaXN0LCBpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS1ncmVlbi5zdmdcIiBhbHQ9XCJUb2NhciBlcGlzw7NkaW9cIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuXG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmFsbEVwaXNvZGVzfT5cbiAgICAgICAgPGgyPlRvZG9zIGVwaXPDs2Rpb3M8L2gyPlxuXG4gICAgICAgIDx0YWJsZSBjZWxsU3BhY2luZz17MH0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICA8dGg+UG9kY2FzdDwvdGg+XG4gICAgICAgICAgICA8dGg+SW50ZWdyYW50ZXM8L3RoPlxuICAgICAgICAgICAgPHRoPkRhdGE8L3RoPlxuICAgICAgICAgICAgPHRoPkR1cmHDp8OjbzwvdGg+XG4gICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHthbGxFcGlzb2Rlcy5tYXAoKGVwaXNvZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17ZXBpc29kZS5pZH0+XG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6IDEwMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyMH1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17ZXBpc29kZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2VwaXNvZGVzLyR7ZXBpc29kZS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YT57ZXBpc29kZS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2VwaXNvZGUubWVtYmVyc308L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAxMDAgfX0+e2VwaXNvZGUucHVibGlzaGVkQXR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57ZXBpc29kZS5kdXJhdGlvbkFzU3RyaW5nfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHBsYXlMaXN0KGVwaXNvZGVMaXN0LCBpbmRleCArIGxhdGVzdEVwaXNvZGVzLmxlbmd0aCl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BsYXktZ3JlZW4uc3ZnXCIgYWx0PVwiVG9jYXIgZXBpc8OzZGlvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXYgPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnZXBpc29kZXMnLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICBfbGltaXQ6IDEyLFxuICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxuICAgICAgX29yZGVyOiAnZGVzYydcbiAgICB9XG4gIH0pO1xuXG5cbiAgY29uc3QgZXBpc29kZXMgPSBkYXRhLm1hcChlcGlzb2RlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGVwaXNvZGUuaWQsXG4gICAgICB0aXRsZTogZXBpc29kZS50aXRsZSxcbiAgICAgIHRodW1ibmFpbDogZXBpc29kZS50aHVtYm5haWwsXG4gICAgICBtZW1iZXJzOiBlcGlzb2RlLm1lbWJlcnMsXG4gICAgICBwdWJsaXNoZWRBdDogZm9ybWF0KHBhcnNlSVNPKGVwaXNvZGUucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5JywgeyBsb2NhbGU6IHB0QlIgfSksXG4gICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbiksXG4gICAgICBkdXJhdGlvbkFzU3RyaW5nOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbikpLFxuICAgICAgdXJsOiBlcGlzb2RlLmZpbGUudXJsLFxuICAgIH1cbiAgfSlcblxuICBjb25zdCBsYXRlc3RFcGlzb2RlcyA9IGVwaXNvZGVzLnNsaWNlKDAsIDIpO1xuICBjb25zdCBhbGxFcGlzb2RlcyA9IGVwaXNvZGVzLnNsaWNlKDIsIGVwaXNvZGVzLmxlbmd0aCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbGF0ZXN0RXBpc29kZXMsXG4gICAgICBhbGxFcGlzb2RlcyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiA4LFxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9