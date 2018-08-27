/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Header = __webpack_require__(/*! ./components/Header */ \"./src/client/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _loadData = __webpack_require__(/*! ./utils/loadData */ \"./src/client/utils/loadData.js\");\n\nvar _loadData2 = _interopRequireDefault(_loadData);\n\nvar _actions = __webpack_require__(/*! ./Redux/actions */ \"./src/client/Redux/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n  var route = _ref.route;\n  return _react2.default.createElement(\n    _react.Fragment,\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    (0, _reactRouterConfig.renderRoutes)(route.routes)\n  );\n};\n\nexports.default = {\n  component: App,\n  load: (0, _loadData2.default)(_actions.fetchCurrentUser)\n};\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/Pages/AdminsList.js":
/*!****************************************!*\
  !*** ./src/client/Pages/AdminsList.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../Redux/actions */ \"./src/client/Redux/actions.js\");\n\nvar _loadData = __webpack_require__(/*! ../utils/loadData */ \"./src/client/utils/loadData.js\");\n\nvar _loadData2 = _interopRequireDefault(_loadData);\n\nvar _requireAuth = __webpack_require__(/*! ../components/hocs/requireAuth */ \"./src/client/components/hocs/requireAuth.js\");\n\nvar _requireAuth2 = _interopRequireDefault(_requireAuth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AdminList = function (_Component) {\n  _inherits(AdminList, _Component);\n\n  function AdminList() {\n    _classCallCheck(this, AdminList);\n\n    return _possibleConstructorReturn(this, (AdminList.__proto__ || Object.getPrototypeOf(AdminList)).apply(this, arguments));\n  }\n\n  _createClass(AdminList, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchAdmins();\n    }\n  }, {\n    key: 'renderAdmins',\n    value: function renderAdmins(admins) {\n      return admins.map(function (admin, index) {\n        return _react2.default.createElement(\n          'li',\n          { key: index },\n          admin.name\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h3',\n          null,\n          'Protected List of admins'\n        ),\n        _react2.default.createElement(\n          'ul',\n          null,\n          this.props.admins.info ? this.renderAdmins(this.props.admins.info) : null\n        )\n      );\n    }\n  }]);\n\n  return AdminList;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var admins = _ref.admins;\n\n  return { admins: admins };\n};\n\nexports.default = {\n  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminList)),\n  load: (0, _loadData2.default)(_actions.fetchAdmins)\n};\n\n//# sourceURL=webpack:///./src/client/Pages/AdminsList.js?");

/***/ }),

/***/ "./src/client/Pages/Home.js":
/*!**********************************!*\
  !*** ./src/client/Pages/Home.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h3',\n      { className: 'center-align', style: { marginTop: '200px' } },\n      'Welcome'\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \\'Content here, content here\\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \\'lorem ipsum\\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'\n    )\n  );\n};\n\nexports.default = {\n  component: Home\n};\n\n//# sourceURL=webpack:///./src/client/Pages/Home.js?");

/***/ }),

/***/ "./src/client/Pages/NotFound.js":
/*!**************************************!*\
  !*** ./src/client/Pages/NotFound.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFound = function NotFound(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n  staticContext.notFound = true;\n  return _react2.default.createElement(\n    'h1',\n    null,\n    'Ooops, route not found'\n  );\n};\n\nexports.default = {\n  component: NotFound\n};\n\n//# sourceURL=webpack:///./src/client/Pages/NotFound.js?");

/***/ }),

/***/ "./src/client/Pages/UsersList.js":
/*!***************************************!*\
  !*** ./src/client/Pages/UsersList.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../Redux/actions */ \"./src/client/Redux/actions.js\");\n\nvar _loadData = __webpack_require__(/*! ../utils/loadData */ \"./src/client/utils/loadData.js\");\n\nvar _loadData2 = _interopRequireDefault(_loadData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar UserList = function (_Component) {\n  _inherits(UserList, _Component);\n\n  function UserList() {\n    _classCallCheck(this, UserList);\n\n    return _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).apply(this, arguments));\n  }\n\n  _createClass(UserList, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchUsers();\n    }\n  }, {\n    key: 'renderUsers',\n    value: function renderUsers() {\n      return this.props.users.map(function (user) {\n        return _react2.default.createElement(\n          'li',\n          { key: user.id },\n          user.name\n        );\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Here\\'s is the list of users',\n        _react2.default.createElement(\n          'ul',\n          null,\n          this.renderUsers()\n        )\n      );\n    }\n  }]);\n\n  return UserList;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(_ref) {\n  var users = _ref.users;\n\n  return {\n    users: users.userList\n  };\n};\n\nexports.default = {\n  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UserList),\n  load: (0, _loadData2.default)(_actions.fetchUsers)\n};\n\n//# sourceURL=webpack:///./src/client/Pages/UsersList.js?");

/***/ }),

/***/ "./src/client/Redux/actions.js":
/*!*************************************!*\
  !*** ./src/client/Redux/actions.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar FETCH_USERS = exports.FETCH_USERS = 'fetch_users';\n\nvar fetchUsers = exports.fetchUsers = function fetchUsers() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n      var _ref2, data;\n\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return api.get('/users');\n\n            case 3:\n              _ref2 = _context.sent;\n              data = _ref2.data;\n\n\n              dispatch({\n                type: FETCH_USERS,\n                payload: data\n              });\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context['catch'](0);\n\n              console.log(_context.t0);\n\n            case 11:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined, [[0, 8]]);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';\n\nvar fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {\n  return function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n      var _ref4, data;\n\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return api.get('/current_user');\n\n            case 3:\n              _ref4 = _context2.sent;\n              data = _ref4.data;\n\n              dispatch({\n                type: FETCH_CURRENT_USER,\n                payload: data\n              });\n              _context2.next = 11;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2['catch'](0);\n\n              console.log(_context2.t0);\n\n            case 11:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined, [[0, 8]]);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\n\nvar FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';\n\nvar fetchAdmins = exports.fetchAdmins = function fetchAdmins() {\n  return function () {\n    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n      var _ref6, data;\n\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              _context3.next = 3;\n              return api.get('/admins');\n\n            case 3:\n              _ref6 = _context3.sent;\n              data = _ref6.data;\n\n              dispatch({\n                type: FETCH_ADMINS,\n                payload: data\n              });\n              _context3.next = 11;\n              break;\n\n            case 8:\n              _context3.prev = 8;\n              _context3.t0 = _context3['catch'](0);\n\n              console.log(_context3.t0);\n\n            case 11:\n            case 'end':\n              return _context3.stop();\n          }\n        }\n      }, _callee3, undefined, [[0, 8]]);\n    }));\n\n    return function (_x7, _x8, _x9) {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/client/Redux/actions.js?");

/***/ }),

/***/ "./src/client/Redux/reducers/admins.js":
/*!*********************************************!*\
  !*** ./src/client/Redux/reducers/admins.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/Redux/actions.js\");\n\nvar initialState = {\n  info: []\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var _ref = arguments[1];\n  var type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    case _actions.FETCH_ADMINS:\n      return _extends({}, state, { info: payload });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/Redux/reducers/admins.js?");

/***/ }),

/***/ "./src/client/Redux/reducers/auth.js":
/*!*******************************************!*\
  !*** ./src/client/Redux/reducers/auth.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var _ref = arguments[1];\n  var type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    case _actions.FETCH_CURRENT_USER:\n      return payload ? _extends({}, state, payload, { isLoggedIn: true }) : { isLoggedIn: false };\n    default:\n      return state;\n  }\n};\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/Redux/actions.js\");\n\nvar _Action = __webpack_require__(/*! rxjs/internal/scheduler/Action */ \"rxjs/internal/scheduler/Action\");\n\nvar initialState = {\n  isLoggedIn: null,\n  id: null,\n  googleId: null\n};\n\n//# sourceURL=webpack:///./src/client/Redux/reducers/auth.js?");

/***/ }),

/***/ "./src/client/Redux/reducers/index.js":
/*!********************************************!*\
  !*** ./src/client/Redux/reducers/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _users = __webpack_require__(/*! ./users */ \"./src/client/Redux/reducers/users.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nvar _auth = __webpack_require__(/*! ./auth */ \"./src/client/Redux/reducers/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _admins = __webpack_require__(/*! ./admins */ \"./src/client/Redux/reducers/admins.js\");\n\nvar _admins2 = _interopRequireDefault(_admins);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  users: _users2.default,\n  auth: _auth2.default,\n  admins: _admins2.default\n});\n\n//# sourceURL=webpack:///./src/client/Redux/reducers/index.js?");

/***/ }),

/***/ "./src/client/Redux/reducers/users.js":
/*!********************************************!*\
  !*** ./src/client/Redux/reducers/users.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/Redux/actions.js\");\n\nvar initialstate = {\n  userList: []\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialstate;\n  var _ref = arguments[1];\n  var type = _ref.type,\n      payload = _ref.payload;\n\n  switch (type) {\n    case _actions.FETCH_USERS:\n      return _extends({}, state, { userList: payload });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/client/Redux/reducers/users.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Home = __webpack_require__(/*! ./Pages/Home */ \"./src/client/Pages/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _UsersList = __webpack_require__(/*! ./Pages/UsersList */ \"./src/client/Pages/UsersList.js\");\n\nvar _UsersList2 = _interopRequireDefault(_UsersList);\n\nvar _NotFound = __webpack_require__(/*! ./Pages/NotFound */ \"./src/client/Pages/NotFound.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nvar _AdminsList = __webpack_require__(/*! ./Pages/AdminsList */ \"./src/client/Pages/AdminsList.js\");\n\nvar _AdminsList2 = _interopRequireDefault(_AdminsList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n  routes: [_extends({}, _Home2.default, {\n    path: '/',\n    exact: true\n  }), _extends({}, _UsersList2.default, {\n    path: '/users'\n  }), _extends({}, _AdminsList2.default, {\n    path: '/admins'\n  }), _extends({}, _NotFound2.default)]\n})];\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(_ref) {\n  var auth = _ref.auth;\n\n  var authButton = auth.isLoggedIn ? _react2.default.createElement(\n    'a',\n    { href: '/api/logout' },\n    'Logout'\n  ) : _react2.default.createElement(\n    'a',\n    { href: '/api/auth/google' },\n    'Login via Google'\n  );\n  return _react2.default.createElement(\n    'nav',\n    null,\n    _react2.default.createElement(\n      'div',\n      { className: 'nav-wrapper' },\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/', className: 'brand-logo' },\n        'React SSR'\n      ),\n      _react2.default.createElement(\n        'ul',\n        { className: 'right' },\n        _react2.default.createElement(\n          'li',\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/users' },\n            'Users'\n          )\n        ),\n        _react2.default.createElement(\n          'li',\n          null,\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/admins' },\n            'Admins'\n          )\n        ),\n        _react2.default.createElement(\n          'li',\n          null,\n          authButton\n        )\n      )\n    )\n  );\n};\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n  var auth = _ref2.auth;\n\n  return { auth: auth };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/components/hocs/requireAuth.js":
/*!***************************************************!*\
  !*** ./src/client/components/hocs/requireAuth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports.default = function (ChildComponent) {\n  var RequireAuth = function (_Component) {\n    _inherits(RequireAuth, _Component);\n\n    function RequireAuth() {\n      _classCallCheck(this, RequireAuth);\n\n      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));\n    }\n\n    _createClass(RequireAuth, [{\n      key: 'render',\n      value: function render() {\n        var isLoggedIn = this.props.auth.isLoggedIn;\n\n        switch (isLoggedIn) {\n          case false:\n            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n          case null:\n            return _react2.default.createElement(\n              'div',\n              null,\n              'Loading...'\n            );\n          default:\n            return _react2.default.createElement(ChildComponent, this.props);\n        }\n      }\n    }]);\n\n    return RequireAuth;\n  }(_react.Component);\n\n  var mapStateToProps = function mapStateToProps(_ref) {\n    var auth = _ref.auth;\n    return { auth: auth };\n  };\n\n  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);\n};\n\n//# sourceURL=webpack:///./src/client/components/hocs/requireAuth.js?");

/***/ }),

/***/ "./src/client/utils/loadData.js":
/*!**************************************!*\
  !*** ./src/client/utils/loadData.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function (action) {\n  return function (store) {\n    return store.dispatch(action());\n  };\n};\n\n//# sourceURL=webpack:///./src/client/utils/loadData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _renderer = __webpack_require__(/*! ./utils/renderer */ \"./src/utils/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _Routes = __webpack_require__(/*! ./client/Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _createStore = __webpack_require__(/*! ./utils/createStore */ \"./src/utils/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    opts.headers['x-forwarded-host'] = 'localhost:3000';\n    return opts;\n  }\n}));\n\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n  var store = (0, _createStore2.default)(req);\n\n  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    return route.load ? route.load(store) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve).catch(resolve);\n      });\n    }\n  });\n\n  Promise.all(promises).then(function () {\n    var staticContext = {};\n    var content = (0, _renderer2.default)(_Routes2.default, req, store, staticContext);\n    console.log(staticContext);\n    if (staticContext.notFound) {\n      return res.status(404).send(content);\n    }\n    if (staticContext.url) {\n      return res.redirect(301, staticContext.url);\n    }\n    res.send(content);\n  });\n});\n\napp.listen(3000, function () {\n  return console.log('Listening 3000');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/createStore.js":
/*!**********************************!*\
  !*** ./src/utils/createStore.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ../client/Redux/reducers */ \"./src/client/Redux/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n  var axiosInstace = _axios2.default.create({\n    baseURL: 'http://react-ssr-api.herokuapp.com',\n    headers: { cookie: req.get('cookie') || '' }\n  });\n\n  return (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstace)));\n};\n\n//# sourceURL=webpack:///./src/utils/createStore.js?");

/***/ }),

/***/ "./src/utils/renderer.js":
/*!*******************************!*\
  !*** ./src/utils/renderer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (Routes, req, store, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      _react2.default.createElement(\n        _react.Fragment,\n        null,\n        (0, _reactRouterConfig.renderRoutes)(Routes)\n      )\n    )\n  ));\n  return '\\n    <html> \\n      <head>\\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css\">\\n      </head>\\n      <body>\\n        <div id=\\'root\\'>' + content + '</div>\\n        <script>\\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\\n        </script>\\n        <script src=\\'bundle.js\\'></script>\\n      </body>\\n    </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./src/utils/renderer.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "rxjs/internal/scheduler/Action":
/*!*************************************************!*\
  !*** external "rxjs/internal/scheduler/Action" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rxjs/internal/scheduler/Action\");\n\n//# sourceURL=webpack:///external_%22rxjs/internal/scheduler/Action%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });