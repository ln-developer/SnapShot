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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/server/indexTmp.js":
/*!********************************!*\
  !*** ./src/server/indexTmp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"indexTmp\": () => (/* binding */ indexTmp)\n/* harmony export */ });\nconst indexTmp = (content, token) => `\n  <!DOCTYPE html>\n  <html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"icon\" type=\"image/x-icon\" href=\"favicon.ico\">\n    <script src='/static' type=\"application/javascript\"></script>\n    <script>\n      window.__token__ = '${token}'\n    </script>\n    <title>SnapShot</title>\n  </head>\n  <body class=\"lightScheme\">\n    <div id=\"react_root\">${content}</div>\n    <div id=\"modal_root\"></div>\n  </body>\n  </html>\n`;\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/server/indexTmp.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n/* harmony import */ var _indexTmp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indexTmp */ \"./src/server/indexTmp.js\");\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! unsplash-js */ \"unsplash-js\");\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(unsplash_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nglobalThis.fetch = (node_fetch__WEBPACK_IMPORTED_MODULE_5___default());\nconst unsplash = (0,unsplash_js__WEBPACK_IMPORTED_MODULE_4__.createApi)({\n  accessKey: \"pS8ndALMJdu-PrLD2_GiOEh8KY32aGjXApt0zhZx4vA\",\n  headers: {\n    \"Accept-Version\": \"v1\"\n  }\n});\nconst port = 3000;\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(\"/static\", express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"./dist/client/client.js\"));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_6___default()());\n\nconst auth = () => (req, res, next) => {\n  const token = req.cookies[\"token\"];\n\n  if (!token) {\n    return next();\n  }\n\n  req.token = token;\n  next();\n};\n\napp.get(\"/isAuth\", auth(), (req, res) => {\n  if (!req.query.code) {\n    return res.redirect(\"/\");\n  }\n\n  if (req.token) {\n    console.log(\"salut!\");\n    res.clearCookie(\"token\");\n    return res.redirect(\"/\");\n  }\n\n  const params = {\n    client_id: \"pS8ndALMJdu-PrLD2_GiOEh8KY32aGjXApt0zhZx4vA\",\n    client_secret: \"9HiEERqdMm9Lh8SiuCNXd7UfOWbMYZQHLcQOyXMyCzo\",\n    redirect_uri: \"http://localhost:3000/isAuth\",\n    code: req.query.code,\n    grant_type: \"authorization_code\"\n  };\n  node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(\"https://unsplash.com/oauth/token\", {\n    method: \"POST\",\n    headers: {\n      \"Accept-Version\": \"v1\",\n      \"Content-Type\": \"application/json;charset=utf-8\"\n    },\n    body: JSON.stringify(params)\n  }).then(data => data.json()).then(data => {\n    if (!data.access_token) {\n      return res.redirect(\"/\");\n    }\n\n    res.cookie(\"token\", data.access_token).redirect(\"/auth\");\n  }).catch(e => {\n    res.redirect(\"/\");\n  });\n});\napp.get(\"/auth\", auth(), (req, res) => {\n  if (!req.token) {\n    res.redirect(\"/\");\n  }\n\n  res.send((0,_indexTmp__WEBPACK_IMPORTED_MODULE_3__.indexTmp)(react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString((0,_shared_App__WEBPACK_IMPORTED_MODULE_2__.App)()), req.token));\n});\napp.get(\"/api/userMe\", auth(), (req, res) => {\n  node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(\"https://api.unsplash.com/me\", {\n    headers: {\n      Authorization: `Bearer ${req.token}`\n    }\n  }).then(response => response.json()).then(data => res.send(data)).catch(e => console.warn(\"error \", e));\n});\napp.get(\"/api/getCollection\", (req, res) => {\n  unsplash.photos.list({\n    page: req.query.page,\n    perPage: 20\n  }).then(data => res.send(data.response)).catch(e => console.warn(\"error \", e));\n});\napp.get(\"/api/searchCollections\", (req, res) => {\n  unsplash.search.getCollections({\n    query: req.query.collection,\n    page: req.query.page,\n    perPage: 20\n  }).then(data => res.send(data.response)).catch(e => console.warn(\"error \", e));\n});\napp.get(\"/api/getLike\", auth(), (req, res) => {\n  const params = {\n    id: req.query.id,\n    token: req.token\n  };\n  node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(`https://api.unsplash.com/photos/${req.query.id}/like?${req.token}`, {\n    method: \"POST\",\n    body: JSON.stringify(params),\n    headers: {\n      Authorization: `Bearer ${req.token}`,\n      \"Accept-Version\": \"v1\",\n      \"Content-Type\": \"application/json;charset=utf-8\"\n    }\n  }).then(response => response.json()).then(data => res.send(data)).catch(e => console.warn(\"error \", e));\n});\napp.get(\"/api/getUnlike\", auth(), (req, res) => {\n  const params = {\n    id: req.query.id,\n    token: req.token\n  };\n  node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(`https://api.unsplash.com/photos/${req.query.id}/like?${req.token}`, {\n    method: \"DELETE\",\n    body: JSON.stringify(params),\n    headers: {\n      Authorization: `Bearer ${req.token}`,\n      \"Accept-Version\": \"v1\",\n      \"Content-Type\": \"application/json;charset=utf-8\"\n    }\n  }).then(response => response.json()).then(data => res.send(data)).catch(e => console.warn(\"error \", e));\n});\napp.get(\"/api/photo\", (req, res) => {\n  unsplash.photos.get({\n    photoId: req.query.id\n  }).then(data => res.send(data.response)).catch(e => console.warn(\"error \", e));\n});\napp.get(\"*\", auth(), (req, res) => {\n  console.log(req.token);\n  res.send((0,_indexTmp__WEBPACK_IMPORTED_MODULE_3__.indexTmp)(react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString((0,_shared_App__WEBPACK_IMPORTED_MODULE_2__.App)()), req.token));\n});\napp.listen(port, () => {\n  console.log(`Server has been started on http://localhost:${port}`);\n});\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _containers_Layout_Layou__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/Layout/Layou */ \"./src/shared/containers/Layout/Layou.js\");\n/* harmony import */ var _containers_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/Header/Header */ \"./src/shared/containers/Header/Header.js\");\n/* harmony import */ var _components_PhotosList_PhotosList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PhotosList/PhotosList */ \"./src/shared/components/PhotosList/PhotosList.js\");\n/* harmony import */ var _containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/Footer/Footer */ \"./src/shared/containers/Footer/Footer.js\");\n/* harmony import */ var _context_tokenContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/tokenContext */ \"./src/shared/context/tokenContext.js\");\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context/userContext */ \"./src/shared/context/userContext.js\");\n/* harmony import */ var _containers_ModalContainer_ModalContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/ModalContainer/ModalContainer */ \"./src/shared/containers/ModalContainer/ModalContainer.js\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/store */ \"./src/shared/store/store.js\");\n/* harmony import */ var _containers_Content_ContentBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/Content/ContentBlock */ \"./src/shared/containers/Content/ContentBlock.js\");\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/actions */ \"./src/shared/actions/actions.js\");\n/* harmony import */ var _main_global_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main.global.css */ \"./src/shared/main.global.css\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction AppComponent() {\n  if (typeof window !== \"undefined\") {\n    if (localStorage.length !== 0) {\n      const isLight = JSON.parse(localStorage.getItem(\"isLight\"));\n\n      if (isLight) {\n        document.body.setAttribute(\"class\", \"lightScheme\");\n      } else {\n        document.body.setAttribute(\"class\", \"darkScheme\");\n      }\n    }\n  }\n\n  const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setIsMounted(true);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: _store_store__WEBPACK_IMPORTED_MODULE_11__.store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_context_tokenContext__WEBPACK_IMPORTED_MODULE_8__.TokenContextProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_context_userContext__WEBPACK_IMPORTED_MODULE_9__.UserContextProvider, null, isMounted && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_containers_Header_Header__WEBPACK_IMPORTED_MODULE_5__.Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_PhotosList_PhotosList__WEBPACK_IMPORTED_MODULE_6__.PhotosList, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: \"/photo/:id\",\n    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_containers_ModalContainer_ModalContainer__WEBPACK_IMPORTED_MODULE_10__.ModalContainer, null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_7__.Footer, null)))));\n}\n\nconst App = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__.hot)(() => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AppComponent, null));\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/actions/actions.js":
/*!***************************************!*\
  !*** ./src/shared/actions/actions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isMounted\": () => (/* binding */ isMounted),\n/* harmony export */   \"changeTheme\": () => (/* binding */ changeTheme),\n/* harmony export */   \"changeBodyScheme\": () => (/* binding */ changeBodyScheme),\n/* harmony export */   \"getToken\": () => (/* binding */ getToken),\n/* harmony export */   \"singlePhotoRequest\": () => (/* binding */ singlePhotoRequest),\n/* harmony export */   \"singlePhotoRequestSuccess\": () => (/* binding */ singlePhotoRequestSuccess),\n/* harmony export */   \"singlePhotoRequestError\": () => (/* binding */ singlePhotoRequestError),\n/* harmony export */   \"asyncSinglePhotoRequest\": () => (/* binding */ asyncSinglePhotoRequest),\n/* harmony export */   \"updateSinglePhotoState\": () => (/* binding */ updateSinglePhotoState),\n/* harmony export */   \"collectionRequest\": () => (/* binding */ collectionRequest),\n/* harmony export */   \"collectionRequestSuccess\": () => (/* binding */ collectionRequestSuccess),\n/* harmony export */   \"collectionRequestError\": () => (/* binding */ collectionRequestError),\n/* harmony export */   \"updateCollectionState\": () => (/* binding */ updateCollectionState),\n/* harmony export */   \"goToHome\": () => (/* binding */ goToHome),\n/* harmony export */   \"asyncCollectionRequest\": () => (/* binding */ asyncCollectionRequest),\n/* harmony export */   \"photosRequest\": () => (/* binding */ photosRequest),\n/* harmony export */   \"photosRequestSuccess\": () => (/* binding */ photosRequestSuccess),\n/* harmony export */   \"photosRequestError\": () => (/* binding */ photosRequestError),\n/* harmony export */   \"asyncPhotosRequest\": () => (/* binding */ asyncPhotosRequest),\n/* harmony export */   \"meRequest\": () => (/* binding */ meRequest),\n/* harmony export */   \"meRequestSuccess\": () => (/* binding */ meRequestSuccess),\n/* harmony export */   \"meRequestError\": () => (/* binding */ meRequestError),\n/* harmony export */   \"asyncMeRequest\": () => (/* binding */ asyncMeRequest),\n/* harmony export */   \"likeRequest\": () => (/* binding */ likeRequest),\n/* harmony export */   \"likeRequestSuccess\": () => (/* binding */ likeRequestSuccess),\n/* harmony export */   \"likeRequestError\": () => (/* binding */ likeRequestError),\n/* harmony export */   \"asyncLikeReducer\": () => (/* binding */ asyncLikeReducer),\n/* harmony export */   \"updateLikes\": () => (/* binding */ updateLikes)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/shared/actions/types.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst isMounted = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.ISMOUNTED\n  };\n};\nconst changeTheme = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_THEME\n  };\n};\nconst changeBodyScheme = () => {\n  return (dispatch, getState) => {\n    dispatch(changeTheme());\n\n    if (getState().theme.lightTheme) {\n      document.body.setAttribute(\"class\", \"lightScheme\");\n    } else {\n      document.body.setAttribute(\"class\", \"darkScheme\");\n    }\n  };\n};\nconst getToken = token => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.GETTOKEN,\n    token\n  };\n};\nconst singlePhotoRequest = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.SINGLE_PHOTO_REQUEST\n  };\n};\nconst singlePhotoRequestSuccess = singlePhoto => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.SINGLE_PHOTO_REQUEST_SUCCESS,\n    singlePhoto\n  };\n};\nconst singlePhotoRequestError = error => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.SINGLE_PHOTO_REQUEST_ERROR,\n    error\n  };\n};\nconst asyncSinglePhotoRequest = id => {\n  return dispatch => {\n    dispatch(singlePhotoRequest());\n    fetch(`http://localhost:3000/api/photo?id=${id}`).then(response => response.json()).then(data => {\n      const singlePhoto = data;\n      dispatch(singlePhotoRequestSuccess(singlePhoto));\n    }).catch(error => dispatch(singlePhotoRequestError(String(error))));\n  };\n};\nconst updateSinglePhotoState = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_SINGLE_PHOTO_STATE\n  };\n};\nconst collectionRequest = input => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.COLLECTION_REQUEST,\n    input\n  };\n};\nconst collectionRequestSuccess = collection => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.COLLECTION_REQUEST_SUCCESS,\n    collection\n  };\n};\nconst collectionRequestError = error => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.COLLECTION_REQUEST_ERROR,\n    error\n  };\n};\nconst updateCollectionState = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_COLLECTION_STATE\n  };\n};\nconst goToHome = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.GO_TO_HOME\n  };\n};\nconst asyncCollectionRequest = () => {\n  return (dispatch, getState) => {\n    async function load() {\n      console.log(\"req\");\n\n      try {\n        await fetch(`http://localhost:3000/api/searchCollections?page=${getState().collection.page}&collection=${getState().collection.input}`).then(response => response.json()).then(data => {\n          const photosArray = data.results;\n          dispatch(collectionRequestSuccess(photosArray));\n        });\n      } catch (error) {\n        dispatch(collectionRequestError(String(error)));\n      }\n    }\n\n    if (!getState().collection.loading) {\n      load();\n    }\n  };\n};\nconst photosRequest = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.PHOTOS_REQUEST\n  };\n};\nconst photosRequestSuccess = photos => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.PHOTOS_REQUEST_SUCCESS,\n    photos\n  };\n};\nconst photosRequestError = error => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.PHOTOS_REQUEST_ERROR,\n    error\n  };\n};\nconst asyncPhotosRequest = () => {\n  return (dispatch, getState) => {\n    async function load() {\n      try {\n        dispatch(photosRequest());\n        await fetch(`http://localhost:3000/api/getCollection?page=${getState().photos.page}`).then(response => response.json()).then(data => {\n          const photosArray = data.results;\n          dispatch(photosRequestSuccess(photosArray));\n        });\n      } catch (error) {\n        dispatch(photosRequestError(String(error)));\n      }\n    }\n\n    if (getState().photos.loading) {\n      load();\n    }\n  };\n};\nconst meRequest = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.ME_REQUEST\n  };\n};\nconst meRequestSuccess = data => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.ME_REQUEST_SUCCESS,\n    data\n  };\n};\nconst meRequestError = error => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.ME_REQUEST_ERROR,\n    error\n  };\n};\nconst asyncMeRequest = () => {\n  return (dispatch, getState) => {\n    dispatch(meRequest());\n    fetch(`/api/userMe?token=${getState().token.token}`).then(res => res.json()).then(data => {\n      dispatch(meRequestSuccess({\n        name: data.username,\n        iconImg: data.profile_image.small\n      }));\n    }).catch(error => dispatch(meRequestError(error)));\n  };\n};\nconst likeRequest = id => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.LIKE_REQUEST,\n    id\n  };\n};\nconst likeRequestSuccess = likesCount => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.LIKE_REQUEST_SUCCESS,\n    likesCount\n  };\n};\nconst likeRequestError = error => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.LIKE_REQUEST_ERROR,\n    error\n  };\n};\nconst asyncLikeReducer = id => {\n  return (dispatch, getState) => {\n    console.log(\"Like!\");\n    dispatch(likeRequest(id));\n\n    if (!getState().likes.isLike) {\n      fetch(`http://localhost:3000/api/getLike?id=${getState().likes.id}&token=${getState().token.token}`).then(response => response.json()).then(data => {\n        dispatch(likeRequestSuccess(data.photo.likes));\n      }).catch(error => dispatch(likeRequestError(String(error))));\n    } else {\n      fetch(`http://localhost:3000/api/getUnlike?id=${getState().likes.id}&token=${getState().token.token}`).then(response => response.json()).then(data => {\n        dispatch(likeRequestSuccess(data.photo.likes));\n      });\n    }\n\n    dispatch(updateLikes(getState().likes.id));\n  };\n};\nconst updateLikes = id => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATELIKES,\n    id\n  };\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/actions/actions.js?");

/***/ }),

/***/ "./src/shared/actions/types.js":
/*!*************************************!*\
  !*** ./src/shared/actions/types.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"THEME\": () => (/* binding */ THEME),\n/* harmony export */   \"GETTOKEN\": () => (/* binding */ GETTOKEN),\n/* harmony export */   \"UPDATELIKES\": () => (/* binding */ UPDATELIKES),\n/* harmony export */   \"UPDATE_SINGLE_PHOTO_STATE\": () => (/* binding */ UPDATE_SINGLE_PHOTO_STATE),\n/* harmony export */   \"ISMOUNTED\": () => (/* binding */ ISMOUNTED),\n/* harmony export */   \"TOGGLE_THEME\": () => (/* binding */ TOGGLE_THEME),\n/* harmony export */   \"UPDATE_COLLECTION_STATE\": () => (/* binding */ UPDATE_COLLECTION_STATE),\n/* harmony export */   \"GO_TO_HOME\": () => (/* binding */ GO_TO_HOME),\n/* harmony export */   \"COLLECTION_REQUEST\": () => (/* binding */ COLLECTION_REQUEST),\n/* harmony export */   \"COLLECTION_REQUEST_SUCCESS\": () => (/* binding */ COLLECTION_REQUEST_SUCCESS),\n/* harmony export */   \"COLLECTION_REQUEST_ERROR\": () => (/* binding */ COLLECTION_REQUEST_ERROR),\n/* harmony export */   \"PHOTOS_REQUEST\": () => (/* binding */ PHOTOS_REQUEST),\n/* harmony export */   \"PHOTOS_REQUEST_SUCCESS\": () => (/* binding */ PHOTOS_REQUEST_SUCCESS),\n/* harmony export */   \"PHOTOS_REQUEST_ERROR\": () => (/* binding */ PHOTOS_REQUEST_ERROR),\n/* harmony export */   \"ME_REQUEST\": () => (/* binding */ ME_REQUEST),\n/* harmony export */   \"ME_REQUEST_SUCCESS\": () => (/* binding */ ME_REQUEST_SUCCESS),\n/* harmony export */   \"ME_REQUEST_ERROR\": () => (/* binding */ ME_REQUEST_ERROR),\n/* harmony export */   \"LIKE_REQUEST\": () => (/* binding */ LIKE_REQUEST),\n/* harmony export */   \"LIKE_REQUEST_SUCCESS\": () => (/* binding */ LIKE_REQUEST_SUCCESS),\n/* harmony export */   \"LIKE_REQUEST_ERROR\": () => (/* binding */ LIKE_REQUEST_ERROR),\n/* harmony export */   \"SINGLE_PHOTO_REQUEST\": () => (/* binding */ SINGLE_PHOTO_REQUEST),\n/* harmony export */   \"SINGLE_PHOTO_REQUEST_SUCCESS\": () => (/* binding */ SINGLE_PHOTO_REQUEST_SUCCESS),\n/* harmony export */   \"SINGLE_PHOTO_REQUEST_ERROR\": () => (/* binding */ SINGLE_PHOTO_REQUEST_ERROR)\n/* harmony export */ });\nconst THEME = \"THEME\";\nconst GETTOKEN = \"GETTOKEN\";\nconst UPDATELIKES = \"UPDATELIKES\";\nconst UPDATE_SINGLE_PHOTO_STATE = \"UPDATE_SINGLE_PHOTO_STATE\";\nconst ISMOUNTED = \"ISMOUNTED\";\nconst TOGGLE_THEME = \"TOGGLE_THEME\";\nconst UPDATE_COLLECTION_STATE = \"UPDATE_COLLECTION_STATE\";\nconst GO_TO_HOME = \"GO_TO_HOME\"; //TYPES WITH FETCH REQUEST\n//GET COLLECTION\n\nconst COLLECTION_REQUEST = \"COLLECTION_REQUEST\";\nconst COLLECTION_REQUEST_SUCCESS = \"COLLECTION_REQUEST_SUCCESS\";\nconst COLLECTION_REQUEST_ERROR = \"COLLECTION_REQUEST_ERROR\"; //GET PHOTOS LIST\n\nconst PHOTOS_REQUEST = \"PHOTOS_REQUEST\";\nconst PHOTOS_REQUEST_SUCCESS = \"PHOTOS_REQUEST_SUCCESS\";\nconst PHOTOS_REQUEST_ERROR = \"PHOTOS_REQUEST_ERROR\"; //GET DATA FOR AUTHORIZATION\n\nconst ME_REQUEST = \"ME_REQUEST\";\nconst ME_REQUEST_SUCCESS = \"ME_REQUEST_SUCCESS\";\nconst ME_REQUEST_ERROR = \"ME_REQUEST_ERROR\"; //GET LIKE\n\nconst LIKE_REQUEST = \"LIKE_REQUEST\";\nconst LIKE_REQUEST_SUCCESS = \"LIKE_REQUEST_SUCCESS\";\nconst LIKE_REQUEST_ERROR = \"LIKE_REQUEST_ERROR\"; //MODAL GET PHOTO\n\nconst SINGLE_PHOTO_REQUEST = \"SINGLE_PHOTO_REQUEST\";\nconst SINGLE_PHOTO_REQUEST_SUCCESS = \"SINGLE_PHOTO_REQUEST_SUCCESS\";\nconst SINGLE_PHOTO_REQUEST_ERROR = \"SINGLE_PHOTO_REQUEST_ERROR\";\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/actions/types.js?");

/***/ }),

/***/ "./src/shared/components/Modal/Modal.js":
/*!**********************************************!*\
  !*** ./src/shared/components/Modal/Modal.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.css */ \"./src/shared/components/Modal/Modal.css\");\n/* harmony import */ var _icons_IsLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/IsLike */ \"./src/shared/icons/IsLike.js\");\n/* harmony import */ var _icons_IsDisLike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/IsDisLike */ \"./src/shared/icons/IsDisLike.js\");\n/* harmony import */ var _icons_Calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/Calendar */ \"./src/shared/icons/Calendar.js\");\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/actions */ \"./src/shared/actions/actions.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst Modal = ({\n  photoSrc,\n  authorImg,\n  authorName,\n  date\n}) => {\n  const isAuth = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.token.isAuth);\n  const photos = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.photos.photos);\n  let publishedOn = new Date(date);\n  let {\n    id\n  } = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useParams)();\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n  const photo = photos.filter(photo => photo.id === id)[0];\n  const months = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n  let icon = photo.liked_by_user ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_IsLike__WEBPACK_IMPORTED_MODULE_2__.IsLike, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_IsDisLike__WEBPACK_IMPORTED_MODULE_3__.IsDisLike, null);\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.theme.lightTheme);\n\n  const likePhoto = id => {\n    dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_5__.asyncLikeReducer)(id));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalContainer,\n    onClick: e => {\n      e.stopPropagation();\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: isLight ? _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalItemLight : _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modalItemDark\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].image\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: photoSrc\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].author\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].authorBlock\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: authorImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].authorData\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].authorName\n  }, authorName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publishedDate, isLight ? _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publishedDateLight : _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publishedDateDark)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_Calendar__WEBPACK_IMPORTED_MODULE_4__.CalendarIco, null), \"Published on \", months[publishedOn.getMonth()], \" \", publishedOn.getDate(), \", \", publishedOn.getFullYear()))), isAuth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likeBlock\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: () => likePhoto(id)\n  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _Modal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likeCount\n  }, photo.likes)))));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/Modal/Modal.js?");

/***/ }),

/***/ "./src/shared/components/Photo/Photo.js":
/*!**********************************************!*\
  !*** ./src/shared/components/Photo/Photo.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Photo\": () => (/* binding */ Photo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _photo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photo.css */ \"./src/shared/components/Photo/photo.css\");\n/* harmony import */ var _icons_IsDisLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/IsDisLike */ \"./src/shared/icons/IsDisLike.js\");\n/* harmony import */ var _icons_IsLike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/IsLike */ \"./src/shared/icons/IsLike.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/actions */ \"./src/shared/actions/actions.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst Photo = ({\n  id,\n  likesCount,\n  isLike,\n  isAuth,\n  src,\n  authorImg,\n  authorName\n}) => {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  const likePhoto = id => {\n    dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_5__.asyncLikeReducer)(id));\n  };\n\n  let icon = isLike ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_IsLike__WEBPACK_IMPORTED_MODULE_3__.IsLike, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_IsDisLike__WEBPACK_IMPORTED_MODULE_2__.IsDisLike, null);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _photo_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].galleryContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _photo_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].galleryItem\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _photo_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].image\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: src\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: e => {\n      e.stopPropagation();\n      e.preventDefault();\n    },\n    className: _photo_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].author\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _photo_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].authorBlock\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: authorImg\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _photo_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].authorName\n  }, authorName)), isAuth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _photo_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likeBlock\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: () => likePhoto(id)\n  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _photo_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likeCount\n  }, likesCount)))));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/Photo/Photo.js?");

/***/ }),

/***/ "./src/shared/components/PhotosList/PhotosList.js":
/*!********************************************************!*\
  !*** ./src/shared/components/PhotosList/PhotosList.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PhotosList\": () => (/* binding */ PhotosList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Photo_Photo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Photo/Photo */ \"./src/shared/components/Photo/Photo.js\");\n/* harmony import */ var _photosList_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photosList.css */ \"./src/shared/components/PhotosList/photosList.css\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ \"nanoid\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/actions */ \"./src/shared/actions/actions.js\");\n/* harmony import */ var _elements_LoadMore_LoadMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/LoadMore/LoadMore */ \"./src/shared/elements/LoadMore/LoadMore.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-spinners/ClipLoader */ \"react-spinners/ClipLoader\");\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-infinite-scroll-component */ \"react-infinite-scroll-component\");\n/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _icons_ToUp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../icons/ToUp */ \"./src/shared/icons/ToUp.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PhotosList = () => {\n  const loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.photos.loading);\n  const collectionLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.collection.loading);\n  const photos = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.photos.photos);\n  const isAuth = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.token.isAuth);\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.theme.lightTheme);\n  const input = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.collection.input);\n  const collection = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.collection.collection);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n  const override = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.css)(\"display:block;margin:0 auto;border-color:\", isLight ? \"black\" : \"white\", \";\" + ( false ? 0 : \";label:override;\"),  false ? 0 : \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbGlhbmFcXE9uZURyaXZlXFzQoNCw0LHQvtGH0LjQuSDRgdGC0L7Qu1xcc2tpbGxib3hcXGpzXFxncmFkdWF0aW9uLXdvcmtcXFNuYXBTaG90XFxTbmFwU2hvdFxcc3JjXFxzaGFyZWRcXGNvbXBvbmVudHNcXFBob3Rvc0xpc3RcXFBob3Rvc0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJzQiIsImZpbGUiOiJDOlxcVXNlcnNcXGxpYW5hXFxPbmVEcml2ZVxc0KDQsNCx0L7Rh9C40Lkg0YHRgtC+0LtcXHNraWxsYm94XFxqc1xcZ3JhZHVhdGlvbi13b3JrXFxTbmFwU2hvdFxcU25hcFNob3RcXHNyY1xcc2hhcmVkXFxjb21wb25lbnRzXFxQaG90b3NMaXN0XFxQaG90b3NMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGhvdG8gfSBmcm9tIFwiLi4vUGhvdG8vUGhvdG9cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9waG90b3NMaXN0LmNzc1wiO1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBhc3luY1Bob3Rvc1JlcXVlc3QsXHJcbiAgcGhvdG9zUmVxdWVzdCxcclxuICBjb2xsZWN0aW9uUmVxdWVzdCxcclxuICBhc3luY0NvbGxlY3Rpb25SZXF1ZXN0LFxyXG59IGZyb20gXCIuLi8uLi9hY3Rpb25zL2FjdGlvbnNcIjtcclxuaW1wb3J0IHsgTG9hZE1vcmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHMvTG9hZE1vcmUvTG9hZE1vcmVcIjtcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XHJcbmltcG9ydCBDbGlwTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9DbGlwTG9hZGVyXCI7XHJcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tIFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb1VwIH0gZnJvbSBcIi4uLy4uL2ljb25zL1RvVXBcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQaG90b3NMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBob3Rvcy5sb2FkaW5nKTtcclxuICBjb25zdCBjb2xsZWN0aW9uTG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29sbGVjdGlvbi5sb2FkaW5nKTtcclxuICBjb25zdCBwaG90b3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBob3Rvcy5waG90b3MpO1xyXG4gIGNvbnN0IGlzQXV0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudG9rZW4uaXNBdXRoKTtcclxuICBjb25zdCBpc0xpZ2h0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50aGVtZS5saWdodFRoZW1lKTtcclxuICBjb25zdCBpbnB1dCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29sbGVjdGlvbi5pbnB1dCk7XHJcbiAgY29uc3QgY29sbGVjdGlvbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29sbGVjdGlvbi5jb2xsZWN0aW9uKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IG92ZXJyaWRlID0gY3NzYFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlci1jb2xvcjogJHtpc0xpZ2h0ID8gXCJibGFja1wiIDogXCJ3aGl0ZVwifTtcclxuICBgO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYXN5bmNQaG90b3NSZXF1ZXN0KCkpO1xyXG4gIH0sIFtsb2FkaW5nXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhc3luY0NvbGxlY3Rpb25SZXF1ZXN0KCkpO1xyXG4gIH0sIFtjb2xsZWN0aW9uTG9hZGluZ10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxUb1RvcCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbFRvVG9wKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzY3JvbGxUb1RvcCA9IChlKSA9PiB7XHJcbiAgICBpZiAoZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMjUwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzY3JvbGxcIik7XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5zY3JvbGxVcEJ0bjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdyaWRDbGFzcyA9IChwaG90b0luZGV4KSA9PiB7XHJcbiAgICBzd2l0Y2ggKHBob3RvSW5kZXggJSAyMCkge1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5zcXVhcmU7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICByZXR1cm4gc3R5bGVzLmhvcml6b250YWxSZWN0YW5nbGU7XHJcbiAgICAgIGNhc2UgODpcclxuICAgICAgICByZXR1cm4gc3R5bGVzLnZlcnRpY2FsUmVjdGFuZ2xlO1xyXG4gICAgICBjYXNlIDEwOlxyXG4gICAgICAgIHJldHVybiBzdHlsZXMuc3F1YXJlO1xyXG4gICAgICBjYXNlIDEzOlxyXG4gICAgICAgIHJldHVybiBzdHlsZXMuaG9yaXpvbnRhbFJlY3RhbmdsZTtcclxuICAgICAgY2FzZSAxNDpcclxuICAgICAgICByZXR1cm4gc3R5bGVzLnNxdWFyZTtcclxuICAgICAgY2FzZSAxNzpcclxuICAgICAgICByZXR1cm4gc3R5bGVzLnZlcnRpY2FsUmVjdGFuZ2xlO1xyXG4gICAgICBjYXNlIDE4OlxyXG4gICAgICAgIHJldHVybiBzdHlsZXMuaG9yaXpvbnRhbFJlY3RhbmdsZTtcclxuICAgICAgY2FzZSAxOTpcclxuICAgICAgICByZXR1cm4gc3R5bGVzLnZlcnRpY2FsUmVjdGFuZ2xlO1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcy5ob3Jpem9udGFsUmVjdGFuZ2xlO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdHlsZXMubm9ybWFsQ2FzZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSAoKSA9PiB7XHJcbiAgICBpbnB1dCA/IGRpc3BhdGNoKGNvbGxlY3Rpb25SZXF1ZXN0KGlucHV0KSkgOiBkaXNwYXRjaChwaG90b3NSZXF1ZXN0KCkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFyciA9IGlucHV0ID8gY29sbGVjdGlvbiA6IHBob3RvcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkJsb2NrfT5cclxuICAgICAgPEluZmluaXRlU2Nyb2xsXHJcbiAgICAgICAgaGFzTW9yZT17dHJ1ZX1cclxuICAgICAgICBkYXRhTGVuZ3RoPXthcnIubGVuZ3RofVxyXG4gICAgICAgIG5leHQ9e2ZldGNoRGF0YX1cclxuICAgICAgICBsb2FkZXI9ezxDbGlwTG9hZGVyIGxvYWRpbmc9e3RydWV9IGNzcz17b3ZlcnJpZGV9IHNpemU9ezYwfSAvPn1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIHthcnIubWFwKChwaG90bywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAga2V5PXtuYW5vaWQoKX1cclxuICAgICAgICAgICAgICAgIHRvPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3Bob3RvLyR7cGhvdG8uaWR9YCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2dyaWRDbGFzcyhpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQaG90b1xyXG4gICAgICAgICAgICAgICAgICBpZD17cGhvdG8uaWR9XHJcbiAgICAgICAgICAgICAgICAgIGxpa2VzQ291bnQ9e3Bob3RvLmxpa2VzfVxyXG4gICAgICAgICAgICAgICAgICBpc0xpa2U9e3Bob3RvLmxpa2VkX2J5X3VzZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGlzQXV0aD17aXNBdXRofVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgIHBob3RvLmhhc093blByb3BlcnR5KFwiY292ZXJfcGhvdG9cIilcclxuICAgICAgICAgICAgICAgICAgICAgID8gcGhvdG8uY292ZXJfcGhvdG8udXJscy5yZWd1bGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IHBob3RvLnVybHMucmVndWxhclxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGF1dGhvckltZz17cGhvdG8udXNlci5wcm9maWxlX2ltYWdlLnNtYWxsfVxyXG4gICAgICAgICAgICAgICAgICBhdXRob3JOYW1lPXtwaG90by51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiB7aXNFbmQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkTW9yZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxMb2FkTW9yZSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX0gKi99XHJcbiAgICAgIDwvSW5maW5pdGVTY3JvbGw+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnNjcm9sbFVwQnRuSGlkZGVuLCBzY3JvbGxUb1RvcCgpKX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUb1VwIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl19 */\");\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_6__.asyncPhotosRequest)());\n  }, [loading]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_6__.asyncCollectionRequest)());\n  }, [collectionLoading]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    document.addEventListener(\"scroll\", scrollToTop);\n    return () => {\n      document.removeEventListener(\"scroll\", scrollToTop);\n    };\n  }, []);\n\n  const scrollToTop = e => {\n    if (e !== undefined) {\n      if (e.target.documentElement.scrollTop > 250) {\n        console.log(\"scroll\");\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].scrollUpBtn;\n      }\n    }\n  };\n\n  const gridClass = photoIndex => {\n    switch (photoIndex % 20) {\n      case 1:\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].square;\n\n      case 4:\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].horizontalRectangle;\n\n      case 8:\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].verticalRectangle;\n\n      case 10:\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].square;\n\n      case 13:\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].horizontalRectangle;\n\n      case 14:\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].square;\n\n      case 17:\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].verticalRectangle;\n\n      case 18:\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].horizontalRectangle;\n\n      case 19:\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].verticalRectangle;\n\n      case 0:\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].horizontalRectangle;\n\n      default:\n        return _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].normalCase;\n    }\n  };\n\n  const fetchData = () => {\n    input ? dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_6__.collectionRequest)(input)) : dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_6__.photosRequest)());\n  };\n\n  const arr = input ? collection : photos;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mainBlock\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_10___default()), {\n    hasMore: true,\n    dataLength: arr.length,\n    next: fetchData,\n    loader: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_9___default()), {\n      loading: true,\n      css: override,\n      size: 60\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].container\n  }, arr.map((photo, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n      key: (0,nanoid__WEBPACK_IMPORTED_MODULE_3__.nanoid)(),\n      to: {\n        pathname: `/photo/${photo.id}`\n      },\n      className: gridClass(index + 1)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Photo_Photo__WEBPACK_IMPORTED_MODULE_1__.Photo, {\n      id: photo.id,\n      likesCount: photo.likes,\n      isLike: photo.liked_by_user,\n      isAuth: isAuth,\n      src: photo.hasOwnProperty(\"cover_photo\") ? photo.cover_photo.urls.regular : photo.urls.regular,\n      authorImg: photo.user.profile_image.small,\n      authorName: photo.user.name\n    }));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(_photosList_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].scrollUpBtnHidden, scrollToTop()),\n    onClick: () => {\n      window.scrollTo({\n        top: 0,\n        behavior: \"smooth\"\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_ToUp__WEBPACK_IMPORTED_MODULE_11__.ToUp, null)));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/PhotosList/PhotosList.js?");

/***/ }),

/***/ "./src/shared/components/UserBlock/ProfileElement/ProfileElement.js":
/*!**************************************************************************!*\
  !*** ./src/shared/components/UserBlock/ProfileElement/ProfileElement.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProfileElement\": () => (/* binding */ ProfileElement)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_IconAnon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../icons/IconAnon.js */ \"./src/shared/icons/IconAnon.js\");\n/* harmony import */ var _profileElement_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profileElement.css */ \"./src/shared/components/UserBlock/ProfileElement/profileElement.css\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ProfileElement = () => {\n  const username = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.me.data.name);\n  const avatarSrc = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.me.data.iconImg);\n  const isAuth = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.token.isAuth);\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.theme.lightTheme);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    href: \"https://unsplash.com/oauth/authorize?client_id=pS8ndALMJdu-PrLD2_GiOEh8KY32aGjXApt0zhZx4vA&redirect_uri=http://localhost:3000/isAuth&response_type=code&scope=public+read_user+write_likes\",\n    className: isLight ? _profileElement_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].linkStyleLight : _profileElement_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].linkStyleDark\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _profileElement_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].flex\n  }, avatarSrc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: avatarSrc,\n    className: _profileElement_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].avatarImg\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _profileElement_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].avatarImg\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_IconAnon_js__WEBPACK_IMPORTED_MODULE_1__.IconAnon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _profileElement_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userName\n  }, username ? username : \"Anon\")));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/UserBlock/ProfileElement/ProfileElement.js?");

/***/ }),

/***/ "./src/shared/components/UserBlock/ThemeElement/ThemeElement.js":
/*!**********************************************************************!*\
  !*** ./src/shared/components/UserBlock/ThemeElement/ThemeElement.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThemeElement\": () => (/* binding */ ThemeElement)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themeElement_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themeElement.css */ \"./src/shared/components/UserBlock/ThemeElement/themeElement.css\");\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/actions */ \"./src/shared/actions/actions.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst ThemeElement = () => {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    className: _themeElement_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"switch\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    id: \"changeTheme\",\n    type: \"checkbox\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    onClick: () => dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_3__.changeBodyScheme)()),\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_themeElement_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].slider, _themeElement_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].round)\n  }));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/UserBlock/ThemeElement/ThemeElement.js?");

/***/ }),

/***/ "./src/shared/components/UserBlock/UserBlock.js":
/*!******************************************************!*\
  !*** ./src/shared/components/UserBlock/UserBlock.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserBlock\": () => (/* binding */ UserBlock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ThemeElement_ThemeElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThemeElement/ThemeElement.js */ \"./src/shared/components/UserBlock/ThemeElement/ThemeElement.js\");\n/* harmony import */ var _ProfileElement_ProfileElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileElement/ProfileElement.js */ \"./src/shared/components/UserBlock/ProfileElement/ProfileElement.js\");\n/* harmony import */ var _icons_toHome_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/toHome.js */ \"./src/shared/icons/toHome.js\");\n/* harmony import */ var _userBlock_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userBlock.css */ \"./src/shared/components/UserBlock/userBlock.css\");\n/* harmony import */ var _actions_actions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/actions.js */ \"./src/shared/actions/actions.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst UserBlock = () => {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _userBlock_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].flex\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _userBlock_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].homeBtn,\n    onClick: () => {\n      dispatch((0,_actions_actions_js__WEBPACK_IMPORTED_MODULE_5__.goToHome)());\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_toHome_js__WEBPACK_IMPORTED_MODULE_3__.ToHome, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThemeElement_ThemeElement_js__WEBPACK_IMPORTED_MODULE_1__.ThemeElement, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProfileElement_ProfileElement_js__WEBPACK_IMPORTED_MODULE_2__.ProfileElement, null));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/UserBlock/UserBlock.js?");

/***/ }),

/***/ "./src/shared/containers/Content/ContentBlock.js":
/*!*******************************************************!*\
  !*** ./src/shared/containers/Content/ContentBlock.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContentBlock\": () => (/* binding */ ContentBlock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contentBlock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentBlock.css */ \"./src/shared/containers/Content/contentBlock.css\");\n\n\nconst ContentBlock = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _contentBlock_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].position\n  }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0435!\");\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/containers/Content/ContentBlock.js?");

/***/ }),

/***/ "./src/shared/containers/Footer/Footer.js":
/*!************************************************!*\
  !*** ./src/shared/containers/Footer/Footer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.css */ \"./src/shared/containers/Footer/footer.css\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _icons_Brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/Brand */ \"./src/shared/icons/Brand.js\");\n\n\n\n\n\nconst Footer = () => {\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.theme.lightTheme);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"footer\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_footer_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer, isLight ? _footer_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lightScheme : _footer_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].darkScheme)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _footer_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].brandBox\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _footer_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].brandImg\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_Brand__WEBPACK_IMPORTED_MODULE_4__.BrandImg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _footer_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].brandPrev\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _footer_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].brandName\n  }, \"SnapShot\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Photos for everyone\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"small\", null, \"\\xA9 2021 created by Liana Kazantseva\"));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/containers/Footer/Footer.js?");

/***/ }),

/***/ "./src/shared/containers/Header/Header.js":
/*!************************************************!*\
  !*** ./src/shared/containers/Header/Header.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_Brand_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/Brand.js */ \"./src/shared/icons/Brand.js\");\n/* harmony import */ var _components_UserBlock_UserBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UserBlock/UserBlock.js */ \"./src/shared/components/UserBlock/UserBlock.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.css */ \"./src/shared/containers/Header/header.css\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _icons_SearchIco_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/SearchIco.js */ \"./src/shared/icons/SearchIco.js\");\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/actions */ \"./src/shared/actions/actions.js\");\n\n\n\n\n\n\n\n\nconst Header = () => {\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.theme.lightTheme);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].header, isLight ? _header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].lightScheme : _header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].darkScheme)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].navBar\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].brandBox\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].brandImg\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_Brand_js__WEBPACK_IMPORTED_MODULE_1__.BrandImg, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].brandPrev\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].brandName\n  }, \"SnapShot\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Photos for everyone\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].searchBlock\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].searchInput, isLight ? _header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].searchInputLight : _header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].searchInputDark),\n    type: \"text\",\n    placeholder: \"Search\",\n    ref: inputRef\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _header_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].searchBtn,\n    onClick: () => {\n      dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_7__.updateCollectionState)());\n      dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_7__.collectionRequest)(inputRef.current.value.trim()));\n      inputRef.current.value = \"\";\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_icons_SearchIco_js__WEBPACK_IMPORTED_MODULE_6__.SearchIco, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_UserBlock_UserBlock_js__WEBPACK_IMPORTED_MODULE_2__.UserBlock, null)));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/containers/Header/Header.js?");

/***/ }),

/***/ "./src/shared/containers/Layout/Layou.js":
/*!***********************************************!*\
  !*** ./src/shared/containers/Layout/Layou.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Layout = ({\n  children\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, children);\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/containers/Layout/Layou.js?");

/***/ }),

/***/ "./src/shared/containers/ModalContainer/ModalContainer.js":
/*!****************************************************************!*\
  !*** ./src/shared/containers/ModalContainer/ModalContainer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModalContainer\": () => (/* binding */ ModalContainer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Modal/Modal */ \"./src/shared/components/Modal/Modal.js\");\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/actions */ \"./src/shared/actions/actions.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ModalContainer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalContainer.css */ \"./src/shared/containers/ModalContainer/ModalContainer.css\");\n\n\n\n\n\n\n\nconst ModalContainer = () => {\n  let {\n    id\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n  const photo = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.singlePhoto.singlePhoto);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_3__.asyncSinglePhotoRequest)(id));\n    document.body.setAttribute(\"style\", \"overflow: hidden\");\n  }, []);\n  let history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();\n\n  let back = e => {\n    e.stopPropagation();\n    history.goBack();\n    dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_3__.updateSinglePhotoState)());\n    document.body.removeAttribute(\"style\");\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: back,\n    className: _ModalContainer_css__WEBPACK_IMPORTED_MODULE_5__[\"default\"].container\n  }, photo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n    photoSrc: photo.urls.regular,\n    authorImg: photo.user.profile_image.medium,\n    authorName: photo.user.name,\n    date: photo.created_at\n  }));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/containers/ModalContainer/ModalContainer.js?");

/***/ }),

/***/ "./src/shared/context/tokenContext.js":
/*!********************************************!*\
  !*** ./src/shared/context/tokenContext.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tokenContext\": () => (/* binding */ tokenContext),\n/* harmony export */   \"TokenContextProvider\": () => (/* binding */ TokenContextProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useToken */ \"./src/shared/hooks/useToken.js\");\n\n\nconst tokenContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext('');\nconst TokenContextProvider = ({\n  children\n}) => {\n  const [token] = (0,_hooks_useToken__WEBPACK_IMPORTED_MODULE_1__.useToken)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(tokenContext.Provider, {\n    value: token\n  }, children);\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/context/tokenContext.js?");

/***/ }),

/***/ "./src/shared/context/userContext.js":
/*!*******************************************!*\
  !*** ./src/shared/context/userContext.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userContext\": () => (/* binding */ userContext),\n/* harmony export */   \"UserContextProvider\": () => (/* binding */ UserContextProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useData */ \"./src/shared/hooks/useData.js\");\n\n\nconst userContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});\nconst UserContextProvider = ({\n  children\n}) => {\n  const [data] = (0,_hooks_useData__WEBPACK_IMPORTED_MODULE_1__.useData)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(userContext.Provider, {\n    value: data\n  }, children);\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/context/userContext.js?");

/***/ }),

/***/ "./src/shared/elements/LoadMore/LoadMore.js":
/*!**************************************************!*\
  !*** ./src/shared/elements/LoadMore/LoadMore.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadMore\": () => (/* binding */ LoadMore)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadMore_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMore.css */ \"./src/shared/elements/LoadMore/loadMore.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst LoadMore = () => {\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.theme.lightTheme);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"button\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_loadMore_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadMoreBtn, isLight ? _loadMore_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lightScheme : _loadMore_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].darkScheme)\n  }, \"Load more\");\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/elements/LoadMore/LoadMore.js?");

/***/ }),

/***/ "./src/shared/hooks/useData.js":
/*!*************************************!*\
  !*** ./src/shared/hooks/useData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useData\": () => (/* binding */ useData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ \"./src/shared/actions/actions.js\");\n\n\n\nconst useData = () => {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.me.data);\n  const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.token.token);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (token) {\n      dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_2__.asyncMeRequest)());\n    }\n  }, [token]);\n  return [data];\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/hooks/useData.js?");

/***/ }),

/***/ "./src/shared/hooks/useToken.js":
/*!**************************************!*\
  !*** ./src/shared/hooks/useToken.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useToken\": () => (/* binding */ useToken)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ \"./src/shared/actions/actions.js\");\n\n\n\nconst useToken = () => {\n  const token = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.token.token);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (window.__token__ !== 'undefined') {\n      dispatch((0,_actions_actions__WEBPACK_IMPORTED_MODULE_2__.getToken)(window.__token__));\n    }\n  }, []);\n  return [token];\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/hooks/useToken.js?");

/***/ }),

/***/ "./src/shared/icons/Brand.js":
/*!***********************************!*\
  !*** ./src/shared/icons/Brand.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrandImg\": () => (/* binding */ BrandImg)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst BrandImg = () => {\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.theme.lightTheme);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    version: \"1.1\",\n    x: \"0px\",\n    y: \"0px\",\n    viewBox: \"0 0 100 100\",\n    enableBackground: \"new 0 0 100 100\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    fill: isLight ? \"black\" : \"white\",\n    d: \"M70.154,15.09H29.846L9.69,50l20.156,34.91h40.308L90.31,50L70.154,15.09z \\r M34.591,57.78L18.344,52h16.247V57.78z   M37.591,44.662l10.908,6.299v12.501l-10.908-6.299V44.662z \\r M60.988,42.017l-10.989,6.346l-10.99-6.346l10.99-6.345L60.988,42.017z   \\r M51.499,50.961l10.908-6.299v12.501l-10.908,6.299V50.961z \\r M50.934,32.748l12.723-10.779L55.804,35.56L50.934,32.748z   \\r M64.509,59.414l3.528,18.211L59.269,62.44L64.509,59.414z \\r M65.407,41.104l-6.139-3.544l9.62-16.663L84.834,48.5L65.407,41.104z   \\r M32.156,19.09h33.157L50.011,32.215l-0.012-0.007l-14.557,8.404L32.156,19.09z \\r M31.333,20.5l3.236,20.958l0.021-0.003V48H15.464  \\r L31.333,20.5z M15.464,52l19.126,6.847v0.049l14.492,8.368L31.92,80.501L15.464,52z \\r M33.025,80.91l17.108-13.195l5.671-3.274  \\r l9.51,16.47H33.025z M69.229,78.516l-3.821-19.725V42.263L85.69,50L69.229,78.516z\"\n  }));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/icons/Brand.js?");

/***/ }),

/***/ "./src/shared/icons/Calendar.js":
/*!**************************************!*\
  !*** ./src/shared/icons/Calendar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CalendarIco\": () => (/* binding */ CalendarIco)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CalendarIco = () => {\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.theme.lightTheme);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    height: \"14px\",\n    viewBox: \"2 2 24 24\",\n    width: \"14px\",\n    fill: isLight ? \"black\" : \"white\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M0 0h24v24H0V0z\",\n    fill: \"none\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z\"\n  }));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/icons/Calendar.js?");

/***/ }),

/***/ "./src/shared/icons/IconAnon.js":
/*!**************************************!*\
  !*** ./src/shared/icons/IconAnon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IconAnon\": () => (/* binding */ IconAnon)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst IconAnon = () => {\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.theme.lightTheme);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    height: \"30px\",\n    viewBox: \"2 2 20 20\",\n    width: \"30px\",\n    fill: isLight ? \"black\" : \"white\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M0 0h24v24H0V0z\",\n    fill: \"none\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 \\r 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 \\r 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 \\r 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 \\r 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 \\r 8s1.5.67 1.5 1.5S12.83 11 12 11z\"\n  }));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/icons/IconAnon.js?");

/***/ }),

/***/ "./src/shared/icons/IsDisLike.js":
/*!***************************************!*\
  !*** ./src/shared/icons/IsDisLike.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IsDisLike\": () => (/* binding */ IsDisLike)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst IsDisLike = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    version: \"1\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 48 48\",\n    enableBackground: \"new 0 0 48 48\",\n    width: \"25px\",\n    height: \"25px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    fill: \"#FFCDD2\",\n    d: \"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0\\r ,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z\"\n  }));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/icons/IsDisLike.js?");

/***/ }),

/***/ "./src/shared/icons/IsLike.js":
/*!************************************!*\
  !*** ./src/shared/icons/IsLike.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IsLike\": () => (/* binding */ IsLike)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst IsLike = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    version: \"1\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 48 48\",\n    enableBackground: \"new 0 0 48 48\",\n    width: \"25px\",\n    height: \"25px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    fill: \"#F44336\",\n    d: \"M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,\\r 11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z\"\n  }));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/icons/IsLike.js?");

/***/ }),

/***/ "./src/shared/icons/SearchIco.js":
/*!***************************************!*\
  !*** ./src/shared/icons/SearchIco.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchIco\": () => (/* binding */ SearchIco)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SearchIco = () => {\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.theme.lightTheme);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    height: \"18px\",\n    viewBox: \"0 0 24 24\",\n    width: \"18px\",\n    fill: isLight ? \"black\" : \"white\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M0 0h24v24H0V0z\",\n    fill: \"none\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"\n  }));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/icons/SearchIco.js?");

/***/ }),

/***/ "./src/shared/icons/ToUp.js":
/*!**********************************!*\
  !*** ./src/shared/icons/ToUp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToUp\": () => (/* binding */ ToUp)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ToUp = () => {\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.theme.lightTheme);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    enableBackground: \"new 0 0 20 20\",\n    height: \"40px\",\n    viewBox: \"3 3 15 15\",\n    width: \"40px\",\n    fill: isLight ? \"black\" : \"white\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"rect\", {\n    fill: \"none\",\n    height: \"20\",\n    width: \"20\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M10,4c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6S6.69,4,10,4 M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7 c3.87,0,7-3.13,7-7C17,6.13,13.87,3,10,3L10,3z M9.5,10v3h1v-3H13l-3-3l-3,3H9.5z\"\n  })));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/icons/ToUp.js?");

/***/ }),

/***/ "./src/shared/icons/toHome.js":
/*!************************************!*\
  !*** ./src/shared/icons/toHome.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToHome\": () => (/* binding */ ToHome)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ToHome = () => {\n  const isLight = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.theme.lightTheme);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    height: \"34px\",\n    viewBox: \"1 1 24 24\",\n    width: \"34px\",\n    fill: isLight ? \"black\" : \"white\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M0 0h24v24H0V0z\",\n    fill: \"none\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z\"\n  }));\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/icons/toHome.js?");

/***/ }),

/***/ "./src/shared/reducers/collectionReducer.js":
/*!**************************************************!*\
  !*** ./src/shared/reducers/collectionReducer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"collectionReducer\": () => (/* binding */ collectionReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/shared/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  collection: [],\n  input: \"\",\n  page: 1,\n  loading: true,\n  error: \"\"\n};\nconst collectionReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.GO_TO_HOME:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        collection: [],\n        input: \"\",\n        page: 1,\n        loading: true,\n        error: \"\"\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_COLLECTION_STATE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        collection: []\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.COLLECTION_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        input: action.input,\n        loading: !state.loading\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.COLLECTION_REQUEST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        collection: [...state.collection, ...action.collection],\n        page: ++state.page,\n        loading: !state.loading\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.COLLECTION_REQUEST_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: action.error\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/reducers/collectionReducer.js?");

/***/ }),

/***/ "./src/shared/reducers/isMountedReducer.js":
/*!*************************************************!*\
  !*** ./src/shared/reducers/isMountedReducer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isMountedReducer\": () => (/* binding */ isMountedReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/shared/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  isMounted: false,\n  loading: true\n};\nconst isMountedReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.ISMOUNTED:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isMounted: true,\n        loading: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/reducers/isMountedReducer.js?");

/***/ }),

/***/ "./src/shared/reducers/likesReducer.js":
/*!*********************************************!*\
  !*** ./src/shared/reducers/likesReducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"likesReducer\": () => (/* binding */ likesReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/shared/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  id: '',\n  isLike: false,\n  likesCount: 0,\n  loading: true,\n  error: ''\n};\nconst likesReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.LIKE_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        id: action.id\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.LIKE_REQUEST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLike: !state.isLike,\n        likesCount: action.likesCount\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.LIKE_REQUEST_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: action.error\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/reducers/likesReducer.js?");

/***/ }),

/***/ "./src/shared/reducers/meReducer.js":
/*!******************************************!*\
  !*** ./src/shared/reducers/meReducer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"meReducer\": () => (/* binding */ meReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/shared/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  data: {},\n  loading: true,\n  error: ''\n};\nconst meReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.ME_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: !state.loading\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.ME_REQUEST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        data: _objectSpread({}, action.data)\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.ME_REQUEST_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: action.error\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/reducers/meReducer.js?");

/***/ }),

/***/ "./src/shared/reducers/photosReducer.js":
/*!**********************************************!*\
  !*** ./src/shared/reducers/photosReducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"photosReducer\": () => (/* binding */ photosReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/shared/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  photos: [],\n  page: 1,\n  loading: true,\n  error: \"\"\n};\nconst photosReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.PHOTOS_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: !state.loading\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.PHOTOS_REQUEST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        photos: [...state.photos, ...action.photos],\n        page: ++state.page\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.PHOTOS_REQUEST_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: action.error\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.UPDATELIKES:\n      const updatePhotos = state.photos.map(photo => {\n        if (action.id === photo.id) {\n          photo.liked_by_user = !photo.liked_by_user;\n\n          if (photo.liked_by_user) {\n            photo.likes = ++photo.likes;\n          } else {\n            photo.likes = --photo.likes;\n          }\n        }\n\n        return photo;\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        photos: updatePhotos\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/reducers/photosReducer.js?");

/***/ }),

/***/ "./src/shared/reducers/singlePhotoReducer.js":
/*!***************************************************!*\
  !*** ./src/shared/reducers/singlePhotoReducer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"singlePhotoReducer\": () => (/* binding */ singlePhotoReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/shared/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initinalState = {\n  singlePhoto: null,\n  loading: true,\n  error: \"\"\n};\nconst singlePhotoReducer = (state = initinalState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.SINGLE_PHOTO_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: !state.loading\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.SINGLE_PHOTO_REQUEST_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        singlePhoto: _objectSpread({}, action.singlePhoto)\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.SINGLE_PHOTO_REQUEST_ERROR:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        error: action.error\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_SINGLE_PHOTO_STATE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        singlePhoto: null,\n        loading: !state.loading\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/reducers/singlePhotoReducer.js?");

/***/ }),

/***/ "./src/shared/reducers/themeReducer.js":
/*!*********************************************!*\
  !*** ./src/shared/reducers/themeReducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"themeReducer\": () => (/* binding */ themeReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/shared/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  lightTheme: typeof window !== \"undefined\" ? JSON.parse(localStorage.getItem(\"isLight\")) === null ? true : JSON.parse(localStorage.getItem(\"isLight\")) : true\n};\nconst themeReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_THEME:\n      localStorage.setItem(\"isLight\", !state.lightTheme);\n      return _objectSpread(_objectSpread({}, state), {}, {\n        lightTheme: !state.lightTheme\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/reducers/themeReducer.js?");

/***/ }),

/***/ "./src/shared/reducers/tokenReducer.js":
/*!*********************************************!*\
  !*** ./src/shared/reducers/tokenReducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tokenReducer\": () => (/* binding */ tokenReducer)\n/* harmony export */ });\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./src/shared/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  token: '',\n  isAuth: false,\n  loading: true\n};\nconst tokenReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__.GETTOKEN:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        token: action.token,\n        isAuth: true,\n        loading: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/reducers/tokenReducer.js?");

/***/ }),

/***/ "./src/shared/store/rootReducer.js":
/*!*****************************************!*\
  !*** ./src/shared/store/rootReducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rootReducer\": () => (/* binding */ rootReducer)\n/* harmony export */ });\n/* harmony import */ var _reducers_likesReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/likesReducer */ \"./src/shared/reducers/likesReducer.js\");\n/* harmony import */ var _reducers_photosReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/photosReducer */ \"./src/shared/reducers/photosReducer.js\");\n/* harmony import */ var _reducers_themeReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/themeReducer */ \"./src/shared/reducers/themeReducer.js\");\n/* harmony import */ var _reducers_meReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/meReducer */ \"./src/shared/reducers/meReducer.js\");\n/* harmony import */ var _reducers_tokenReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/tokenReducer */ \"./src/shared/reducers/tokenReducer.js\");\n/* harmony import */ var _reducers_isMountedReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/isMountedReducer */ \"./src/shared/reducers/isMountedReducer.js\");\n/* harmony import */ var _reducers_singlePhotoReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/singlePhotoReducer */ \"./src/shared/reducers/singlePhotoReducer.js\");\n/* harmony import */ var _reducers_collectionReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/collectionReducer */ \"./src/shared/reducers/collectionReducer.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_8__.combineReducers)({\n  isMounted: _reducers_isMountedReducer__WEBPACK_IMPORTED_MODULE_5__.isMountedReducer,\n  likes: _reducers_likesReducer__WEBPACK_IMPORTED_MODULE_0__.likesReducer,\n  photos: _reducers_photosReducer__WEBPACK_IMPORTED_MODULE_1__.photosReducer,\n  theme: _reducers_themeReducer__WEBPACK_IMPORTED_MODULE_2__.themeReducer,\n  me: _reducers_meReducer__WEBPACK_IMPORTED_MODULE_3__.meReducer,\n  token: _reducers_tokenReducer__WEBPACK_IMPORTED_MODULE_4__.tokenReducer,\n  singlePhoto: _reducers_singlePhotoReducer__WEBPACK_IMPORTED_MODULE_6__.singlePhotoReducer,\n  collection: _reducers_collectionReducer__WEBPACK_IMPORTED_MODULE_7__.collectionReducer\n});\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/store/rootReducer.js?");

/***/ }),

/***/ "./src/shared/store/store.js":
/*!***********************************!*\
  !*** ./src/shared/store/store.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ \"./src/shared/store/rootReducer.js\");\n\n\n\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_rootReducer__WEBPACK_IMPORTED_MODULE_3__.rootReducer, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default()))));\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/store/store.js?");

/***/ }),

/***/ "./src/shared/main.global.css":
/*!************************************!*\
  !*** ./src/shared/main.global.css ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,100&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\r\\nbody {\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n#react_root {\\r\\n  min-height: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-size: 14px;\\r\\n  font-family: \\\"Roboto\\\", sans-serif;\\r\\n}\\r\\n.lightScheme {\\r\\n  color: rgb(0, 0, 0);\\r\\n  background-color: rgb(255, 255, 255);\\r\\n}\\r\\n.darkScheme {\\r\\n  color: rgb(255, 255, 255);\\r\\n  background-color: rgb(18, 18, 18);\\r\\n}\\r\\n\\r\\ninput,\\r\\nbutton {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background: transparent;\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nul {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n::-webkit-scrollbar {\\r\\n  width: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/main.global.css?");

/***/ }),

/***/ "./src/shared/components/Modal/Modal.css":
/*!***********************************************!*\
  !*** ./src/shared/components/Modal/Modal.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"modalContainer\": \"Modal__modalContainer___LRIat\",\n\t\"modalItemLight\": \"Modal__modalItemLight___Oa_fx\",\n\t\"modalItemDark\": \"Modal__modalItemDark___u8NwJ\",\n\t\"image\": \"Modal__image___foR6w\",\n\t\"author\": \"Modal__author___Jfuhy\",\n\t\"authorBlock\": \"Modal__authorBlock___setqx\",\n\t\"authorData\": \"Modal__authorData___yfS5z\",\n\t\"authorName\": \"Modal__authorName___ViHYF\",\n\t\"publishedDate\": \"Modal__publishedDate___IoNER\",\n\t\"publishedDateLight\": \"Modal__publishedDateLight____teur\",\n\t\"publishedDateDark\": \"Modal__publishedDateDark___P__hk\",\n\t\"likeBlock\": \"Modal__likeBlock___vkswP\",\n\t\"likeCount\": \"Modal__likeCount____GHs7\"\n});\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/Modal/Modal.css?");

/***/ }),

/***/ "./src/shared/components/Photo/photo.css":
/*!***********************************************!*\
  !*** ./src/shared/components/Photo/photo.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"galleryContainer\": \"photo__galleryContainer___GtGUL\",\n\t\"galleryItem\": \"photo__galleryItem___xhuo3\",\n\t\"image\": \"photo__image____prFP\",\n\t\"author\": \"photo__author____PS_s\",\n\t\"authorBlock\": \"photo__authorBlock___KbbUt\",\n\t\"authorName\": \"photo__authorName___PCzBu\",\n\t\"likeBlock\": \"photo__likeBlock___aLZYe\",\n\t\"likeCount\": \"photo__likeCount___pw5cZ\"\n});\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/Photo/photo.css?");

/***/ }),

/***/ "./src/shared/components/PhotosList/photosList.css":
/*!*********************************************************!*\
  !*** ./src/shared/components/PhotosList/photosList.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"container\": \"photosList__container___Yn3iV\",\n\t\"mainBlock\": \"photosList__mainBlock___T50yQ\",\n\t\"loadMoreContainer\": \"photosList__loadMoreContainer___t_vXc\",\n\t\"square\": \"photosList__square___K3zZf\",\n\t\"horizontalRectangle\": \"photosList__horizontalRectangle___LIujc\",\n\t\"verticalRectangle\": \"photosList__verticalRectangle___eU2yQ\",\n\t\"normalCase\": \"photosList__normalCase_____SkO\",\n\t\"scrollUpBtn\": \"photosList__scrollUpBtn___b6rT3\",\n\t\"scrollUpBtnHidden\": \"photosList__scrollUpBtnHidden____YorW\"\n});\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/PhotosList/photosList.css?");

/***/ }),

/***/ "./src/shared/components/UserBlock/ProfileElement/profileElement.css":
/*!***************************************************************************!*\
  !*** ./src/shared/components/UserBlock/ProfileElement/profileElement.css ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"flex\": \"profileElement__flex____tSqZ\",\n\t\"linkStyleLight\": \"profileElement__linkStyleLight____rAL7\",\n\t\"linkStyleDark\": \"profileElement__linkStyleDark___DIRxN\",\n\t\"avatarImg\": \"profileElement__avatarImg___WYpQO\",\n\t\"userName\": \"profileElement__userName___rizVz\"\n});\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/UserBlock/ProfileElement/profileElement.css?");

/***/ }),

/***/ "./src/shared/components/UserBlock/ThemeElement/themeElement.css":
/*!***********************************************************************!*\
  !*** ./src/shared/components/UserBlock/ThemeElement/themeElement.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"switch\": \"themeElement__switch___TTP7r\",\n\t\"slider\": \"themeElement__slider___qCNZQ\",\n\t\"round\": \"themeElement__round___EtXjA\"\n});\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/UserBlock/ThemeElement/themeElement.css?");

/***/ }),

/***/ "./src/shared/components/UserBlock/userBlock.css":
/*!*******************************************************!*\
  !*** ./src/shared/components/UserBlock/userBlock.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"flex\": \"userBlock__flex___AOOCi\",\n\t\"homeBtn\": \"userBlock__homeBtn___gtTCR\"\n});\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/components/UserBlock/userBlock.css?");

/***/ }),

/***/ "./src/shared/containers/Content/contentBlock.css":
/*!********************************************************!*\
  !*** ./src/shared/containers/Content/contentBlock.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"position\": \"contentBlock__position____EOlX\"\n});\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/containers/Content/contentBlock.css?");

/***/ }),

/***/ "./src/shared/containers/Footer/footer.css":
/*!*************************************************!*\
  !*** ./src/shared/containers/Footer/footer.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"footer\": \"footer__footer___yx_t8\",\n\t\"lightScheme\": \"footer__lightScheme____AeVY\",\n\t\"darkScheme\": \"footer__darkScheme___wI4Qn\",\n\t\"brandBox\": \"footer__brandBox___A8gj_\",\n\t\"brandImg\": \"footer__brandImg___feKeE\",\n\t\"brandName\": \"footer__brandName___D1v5t\"\n});\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/containers/Footer/footer.css?");

/***/ }),

/***/ "./src/shared/containers/Header/header.css":
/*!*************************************************!*\
  !*** ./src/shared/containers/Header/header.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"lightScheme\": \"header__lightScheme___KsSi4\",\n\t\"darkScheme\": \"header__darkScheme____BWUy\",\n\t\"navBar\": \"header__navBar____4rWX\",\n\t\"brandBox\": \"header__brandBox___ccSnt\",\n\t\"brandImg\": \"header__brandImg___WjXI5\",\n\t\"brandName\": \"header__brandName____7Eqz\",\n\t\"searchBlock\": \"header__searchBlock____TYcc\",\n\t\"searchInput\": \"header__searchInput___B_qL8\",\n\t\"searchInputLight\": \"header__searchInputLight____al_B\",\n\t\"searchInputDark\": \"header__searchInputDark___h4uUo\",\n\t\"searchBtn\": \"header__searchBtn___ap87n\"\n});\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/containers/Header/header.css?");

/***/ }),

/***/ "./src/shared/containers/ModalContainer/ModalContainer.css":
/*!*****************************************************************!*\
  !*** ./src/shared/containers/ModalContainer/ModalContainer.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"container\": \"ModalContainer__container___YffL1\"\n});\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/containers/ModalContainer/ModalContainer.css?");

/***/ }),

/***/ "./src/shared/elements/LoadMore/loadMore.css":
/*!***************************************************!*\
  !*** ./src/shared/elements/LoadMore/loadMore.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"loadMoreBtn\": \"loadMore__loadMoreBtn___eBZRb\",\n\t\"lightScheme\": \"loadMore__lightScheme___SKwuk\",\n\t\"darkScheme\": \"loadMore__darkScheme___spdst\"\n});\n\n\n//# sourceURL=webpack://unsplash-mirror_2.0/./src/shared/elements/LoadMore/loadMore.css?");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "nanoid":
/*!*************************!*\
  !*** external "nanoid" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("nanoid");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-hot-loader/root");

/***/ }),

/***/ "react-infinite-scroll-component":
/*!**************************************************!*\
  !*** external "react-infinite-scroll-component" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-spinners/ClipLoader":
/*!********************************************!*\
  !*** external "react-spinners/ClipLoader" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-spinners/ClipLoader");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "unsplash-js":
/*!******************************!*\
  !*** external "unsplash-js" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("unsplash-js");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;