module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web3/provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json");
var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json", 1);
/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! domain */ "domain");
/* harmony import */ var domain__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(domain__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _web3_sendVote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3/sendVote */ "./web3/sendVote.js");
/* harmony import */ var _web3_createVote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../web3/createVote */ "./web3/createVote.js");
/* harmony import */ var _web3_viewResult__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../web3/viewResult */ "./web3/viewResult.js");

var _jsxFileName = "/Users/andy/simple_evoting/client/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // import {getOwnerInfo,CreateVote,sendVote,viewResult} from "../web3/voters"






var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage() {
    _classCallCheck(this, IndexPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndexPage).apply(this, arguments));
  }

  _createClass(IndexPage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var storage, ownerAddr, addresses, balance, etherValue;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_web3_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

              case 2:
                storage = _context.sent;
                console.log(storage);
                _context.next = 6;
                return storage.ownerAddr.call();

              case 6:
                ownerAddr = _context.sent;
                console.log("Owner Address : ", ownerAddr);
                _context.next = 10;
                return _web3_provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

              case 10:
                addresses = _context.sent;
                console.log("Your address : ", addresses[0]);
                _context.next = 14;
                return _web3_provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getBalance(addresses[0]);

              case 14:
                balance = _context.sent;
                _context.next = 17;
                return web3.fromWei(balance, 'ether');

              case 17:
                etherValue = _context.sent;
                console.log("Your account balance :", etherValue, "ETH");

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web3_sendVote__WEBPACK_IMPORTED_MODULE_5__["GetOwnerInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web3_createVote__WEBPACK_IMPORTED_MODULE_6__["SetUserInfo"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_web3_viewResult__WEBPACK_IMPORTED_MODULE_7__["ViewResult"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./web3/artifacts/Vote.json":
/*!**********************************!*\
  !*** ./web3/artifacts/Vote.json ***!
  \**********************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"Vote","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"result","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3c594059"},{"constant":true,"inputs":[],"name":"ownerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9c675eaa"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voterAddressToCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xd09be43a"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"voters","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xda58c7d9"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"voterToVote","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe6c6f004"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xf2fde38b"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"}],"name":"Create","type":"event","signature":"0xe3758539c1bd6726422843471b2886c2d2cefd3b4aead6778386283e20a32a80"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"}],"name":"Send","type":"event","signature":"0x7d4b3c5c44bd8008199bb99f184426274cf24f917f4da3485d6a39f894366b10"},{"constant":false,"inputs":[{"name":"_vote","type":"string"}],"name":"createVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x13292a02"},{"constant":false,"inputs":[],"name":"sendVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x3d229ae7"},{"constant":true,"inputs":[],"name":"viewResult","outputs":[{"name":"","type":"string[]"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3cff0380"}],"bytecode":"0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610d49806100a06000396000f3fe608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806313292a021461009e5780633c594059146100c75780633cff0380146101045780633d229ae71461012f5780639c675eaa14610146578063d09be43a14610171578063da58c7d9146101ae578063e6c6f004146101eb578063f2fde38b14610228575b600080fd5b3480156100aa57600080fd5b506100c560048036036100c091908101906109d5565b610251565b005b3480156100d357600080fd5b506100ee60048036036100e99190810190610a16565b610330565b6040516100fb9190610b68565b60405180910390f35b34801561011057600080fd5b506101196103eb565b6040516101269190610b46565b60405180910390f35b34801561013b57600080fd5b506101446104d4565b005b34801561015257600080fd5b5061015b610629565b6040516101689190610b10565b60405180910390f35b34801561017d57600080fd5b50610198600480360361019391908101906109ac565b61064e565b6040516101a59190610b8a565b60405180910390f35b3480156101ba57600080fd5b506101d560048036036101d09190810190610a16565b610666565b6040516101e29190610b10565b60405180910390f35b3480156101f757600080fd5b50610212600480360361020d91908101906109ac565b6106a4565b60405161021f9190610b68565b60405180910390f35b34801561023457600080fd5b5061024f600480360361024a91908101906109ac565b610754565b005b33600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090805190602001906102f4929190610889565b507fe3758539c1bd6726422843471b2886c2d2cefd3b4aead6778386283e20a32a80336040516103249190610b2b565b60405180910390a15050565b60048181548110151561033f57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b505050505081565b60606004805480602002602001604051908101604052809291908181526020016000905b828210156104cb578382906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104b75780601f1061048c576101008083540402835291602001916104b7565b820191906000526020600020905b81548152906001019060200180831161049a57829003601f168201915b50505050508152602001906001019061040f565b50505050905090565b6060600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105a95780601f1061057e576101008083540402835291602001916105a9565b820191906000526020600020905b81548152906001019060200180831161058c57829003601f168201915b5050505050905060048190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906105ed929190610889565b50507f7d4b3c5c44bd8008199bb99f184426274cf24f917f4da3485d6a39f894366b103360405161061e9190610b2b565b60405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090505481565b60018181548110151561067557fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561074c5780601f106107215761010080835404028352916020019161074c565b820191906000526020600020905b81548152906001019060200180831161072f57829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107af57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561080a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561084657600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108ca57805160ff19168380011785556108f8565b828001600101855582156108f8579182015b828111156108f75782518255916020019190600101906108dc565b5b5090506109059190610909565b5090565b61092b91905b8082111561092757600081600090555060010161090f565b5090565b90565b600061093a8235610c6a565b905092915050565b600082601f830112151561095557600080fd5b813561096861096382610bd2565b610ba5565b9150808252602083016020830185838301111561098457600080fd5b61098f838284610cbc565b50505092915050565b60006109a48235610c7c565b905092915050565b6000602082840312156109be57600080fd5b60006109cc8482850161092e565b91505092915050565b6000602082840312156109e757600080fd5b600082013567ffffffffffffffff811115610a0157600080fd5b610a0d84828501610942565b91505092915050565b600060208284031215610a2857600080fd5b6000610a3684828501610998565b91505092915050565b610a4881610c86565b82525050565b610a5781610c2e565b82525050565b6000610a6882610c0b565b80845260208401935083602082028501610a8185610bfe565b60005b84811015610aba578383038852610a9c838351610acb565b9250610aa782610c21565b9150602088019750600181019050610a84565b508196508694505050505092915050565b6000610ad682610c16565b808452610aea816020860160208601610ccb565b610af381610cfe565b602085010191505092915050565b610b0a81610c60565b82525050565b6000602082019050610b256000830184610a4e565b92915050565b6000602082019050610b406000830184610a3f565b92915050565b60006020820190508181036000830152610b608184610a5d565b905092915050565b60006020820190508181036000830152610b828184610acb565b905092915050565b6000602082019050610b9f6000830184610b01565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610bc857600080fd5b8060405250919050565b600067ffffffffffffffff821115610be957600080fd5b601f19601f8301169050602081019050919050565b6000602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000610c3982610c40565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610c7582610c40565b9050919050565b6000819050919050565b6000610c9182610c98565b9050919050565b6000610ca382610caa565b9050919050565b6000610cb582610c40565b9050919050565b82818337600083830152505050565b60005b83811015610ce9578082015181840152602081019050610cce565b83811115610cf8576000848401525b50505050565b6000601f19601f830116905091905056fea265627a7a72305820192de1f3f5aae96c2ac9355c43ac61630dabce74b91964a6fe1ab3361a23c9206c6578706572696d656e74616cf50037","deployedBytecode":"0x608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806313292a021461009e5780633c594059146100c75780633cff0380146101045780633d229ae71461012f5780639c675eaa14610146578063d09be43a14610171578063da58c7d9146101ae578063e6c6f004146101eb578063f2fde38b14610228575b600080fd5b3480156100aa57600080fd5b506100c560048036036100c091908101906109d5565b610251565b005b3480156100d357600080fd5b506100ee60048036036100e99190810190610a16565b610330565b6040516100fb9190610b68565b60405180910390f35b34801561011057600080fd5b506101196103eb565b6040516101269190610b46565b60405180910390f35b34801561013b57600080fd5b506101446104d4565b005b34801561015257600080fd5b5061015b610629565b6040516101689190610b10565b60405180910390f35b34801561017d57600080fd5b50610198600480360361019391908101906109ac565b61064e565b6040516101a59190610b8a565b60405180910390f35b3480156101ba57600080fd5b506101d560048036036101d09190810190610a16565b610666565b6040516101e29190610b10565b60405180910390f35b3480156101f757600080fd5b50610212600480360361020d91908101906109ac565b6106a4565b60405161021f9190610b68565b60405180910390f35b34801561023457600080fd5b5061024f600480360361024a91908101906109ac565b610754565b005b33600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090805190602001906102f4929190610889565b507fe3758539c1bd6726422843471b2886c2d2cefd3b4aead6778386283e20a32a80336040516103249190610b2b565b60405180910390a15050565b60048181548110151561033f57fe5b906000526020600020016000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103e35780601f106103b8576101008083540402835291602001916103e3565b820191906000526020600020905b8154815290600101906020018083116103c657829003601f168201915b505050505081565b60606004805480602002602001604051908101604052809291908181526020016000905b828210156104cb578382906000526020600020018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104b75780601f1061048c576101008083540402835291602001916104b7565b820191906000526020600020905b81548152906001019060200180831161049a57829003601f168201915b50505050508152602001906001019061040f565b50505050905090565b6060600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105a95780601f1061057e576101008083540402835291602001916105a9565b820191906000526020600020905b81548152906001019060200180831161058c57829003601f168201915b5050505050905060048190806001815401808255809150509060018203906000526020600020016000909192909190915090805190602001906105ed929190610889565b50507f7d4b3c5c44bd8008199bb99f184426274cf24f917f4da3485d6a39f894366b103360405161061e9190610b2b565b60405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090505481565b60018181548110151561067557fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60026020528060005260406000206000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561074c5780601f106107215761010080835404028352916020019161074c565b820191906000526020600020905b81548152906001019060200180831161072f57829003601f168201915b505050505081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107af57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561080a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561084657600080fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106108ca57805160ff19168380011785556108f8565b828001600101855582156108f8579182015b828111156108f75782518255916020019190600101906108dc565b5b5090506109059190610909565b5090565b61092b91905b8082111561092757600081600090555060010161090f565b5090565b90565b600061093a8235610c6a565b905092915050565b600082601f830112151561095557600080fd5b813561096861096382610bd2565b610ba5565b9150808252602083016020830185838301111561098457600080fd5b61098f838284610cbc565b50505092915050565b60006109a48235610c7c565b905092915050565b6000602082840312156109be57600080fd5b60006109cc8482850161092e565b91505092915050565b6000602082840312156109e757600080fd5b600082013567ffffffffffffffff811115610a0157600080fd5b610a0d84828501610942565b91505092915050565b600060208284031215610a2857600080fd5b6000610a3684828501610998565b91505092915050565b610a4881610c86565b82525050565b610a5781610c2e565b82525050565b6000610a6882610c0b565b80845260208401935083602082028501610a8185610bfe565b60005b84811015610aba578383038852610a9c838351610acb565b9250610aa782610c21565b9150602088019750600181019050610a84565b508196508694505050505092915050565b6000610ad682610c16565b808452610aea816020860160208601610ccb565b610af381610cfe565b602085010191505092915050565b610b0a81610c60565b82525050565b6000602082019050610b256000830184610a4e565b92915050565b6000602082019050610b406000830184610a3f565b92915050565b60006020820190508181036000830152610b608184610a5d565b905092915050565b60006020820190508181036000830152610b828184610acb565b905092915050565b6000602082019050610b9f6000830184610b01565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610bc857600080fd5b8060405250919050565b600067ffffffffffffffff821115610be957600080fd5b601f19601f8301169050602081019050919050565b6000602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000610c3982610c40565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610c7582610c40565b9050919050565b6000819050919050565b6000610c9182610c98565b9050919050565b6000610ca382610caa565b9050919050565b6000610cb582610c40565b9050919050565b82818337600083830152505050565b60005b83811015610ce9578082015181840152602081019050610cce565b83811115610cf8576000848401525b50505050565b6000601f19601f830116905091905056fea265627a7a72305820192de1f3f5aae96c2ac9355c43ac61630dabce74b91964a6fe1ab3361a23c9206c6578706572696d656e74616cf50037","sourceMap":"90:1406:2:-;;;509:60;8:9:-1;5:2;;;30:1;27;20:12;5:2;509:60:2;238:10:1;226:9;;:22;;;;;;;;;;;;;;;;;;552:10:2;540:9;;:22;;;;;;;;;;;;;;;;;;90:1406;;;;;;","deployedSourceMap":"90:1406:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;792:322;;8:9:-1;5:2;;;30:1;27;20:12;5:2;792:322:2;;;;;;;;;;;;;;;;;;;368:22;;8:9:-1;5:2;;;30:1;27;20:12;5:2;368:22:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1405:88;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1405:88:2;;;;;;;;;;;;;;;;;;;;1120:279;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1120:279:2;;;;;;54:24:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;54:24:1;;;;;;;;;;;;;;;;;;;;288:53:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;288:53:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;143:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;143:23:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;203:47;;8:9:-1;5:2;;;30:1;27;20:12;5:2;203:47:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;261:288:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;261:288:1;;;;;;;;;;;;;;;;;;;792:322:2;849:10;999:19;:31;1019:10;999:31;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;;1068:5;1042:11;:23;1054:10;1042:23;;;;;;;;;;;;;;;:31;;;;;;;;;;;;:::i;:::-;;1089:18;1096:10;1089:18;;;;;;;;;;;;;;;792:322;;:::o;368:22::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1405:88::-;1447:15;1480:6;1473:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1405:88;:::o;1120:279::-;1285:20;1308:11;:23;1320:10;1308:23;;;;;;;;;;;;;;;1285:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1341:6;1353;1341:19;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1341:19:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;1376:16;1381:10;1376:16;;;;;;;;;;;;;;;1120:279;:::o;54:24:1:-;;;;;;;;;;;;;:::o;288:53:2:-;;;;;;;;;;;;;;;;;:::o;143:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;203:47::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;261:288:1:-;137:9;;;;;;;;;;;123:23;;:10;:23;;;115:32;;;;;;;;414:9;;;;;;;;;;;400:23;;:10;:23;;;392:32;;;;;;;;507:1;486:23;;:9;:23;;;;478:32;;;;;;;;533:9;521;;:21;;;;;;;;;;;;;;;;;;261:288;:::o;90:1406:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;;57:66;;;;;131:442;;233:3;226:4;218:6;214:17;210:27;203:35;200:2;;;251:1;248;241:12;200:2;288:6;275:20;310:65;325:49;367:6;325:49;;;310:65;;;301:74;;395:6;388:5;381:21;431:4;423:6;419:17;464:4;457:5;453:16;499:3;490:6;485:3;481:16;478:25;475:2;;;516:1;513;506:12;475:2;526:41;560:6;555:3;550;526:41;;;193:380;;;;;;;;581:118;;648:46;686:6;673:20;648:46;;;639:55;;633:66;;;;;706:241;;810:2;798:9;789:7;785:23;781:32;778:2;;;826:1;823;816:12;778:2;861:1;878:53;923:7;914:6;903:9;899:22;878:53;;;868:63;;840:97;772:175;;;;;954:347;;1068:2;1056:9;1047:7;1043:23;1039:32;1036:2;;;1084:1;1081;1074:12;1036:2;1147:1;1136:9;1132:17;1119:31;1170:18;1162:6;1159:30;1156:2;;;1202:1;1199;1192:12;1156:2;1222:63;1277:7;1268:6;1257:9;1253:22;1222:63;;;1212:73;;1098:193;1030:271;;;;;1308:241;;1412:2;1400:9;1391:7;1387:23;1383:32;1380:2;;;1428:1;1425;1418:12;1380:2;1463:1;1480:53;1525:7;1516:6;1505:9;1501:22;1480:53;;;1470:63;;1442:97;1374:175;;;;;1556:132;1637:45;1676:5;1637:45;;;1632:3;1625:58;1619:69;;;1695:110;1768:31;1793:5;1768:31;;;1763:3;1756:44;1750:55;;;1841:773;;1988:60;2042:5;1988:60;;;2066:6;2061:3;2054:19;2090:4;2085:3;2081:14;2074:21;;2138:3;2180:4;2172:6;2168:17;2163:3;2159:27;2206:62;2262:5;2206:62;;;2289:1;2274:301;2299:6;2296:1;2293:13;2274:301;;;2361:9;2355:4;2351:20;2346:3;2339:33;2387:70;2452:4;2443:6;2437:13;2387:70;;;2379:78;;2474:66;2533:6;2474:66;;;2464:76;;2563:4;2558:3;2554:14;2547:21;;2321:1;2318;2314:9;2309:14;;2274:301;;;2278:14;2588:4;2581:11;;2605:3;2598:10;;1967:647;;;;;;;;;2622:292;;2720:35;2749:5;2720:35;;;2772:6;2767:3;2760:19;2784:63;2840:6;2833:4;2828:3;2824:14;2817:4;2810:5;2806:16;2784:63;;;2879:29;2901:6;2879:29;;;2872:4;2867:3;2863:14;2859:50;2852:57;;2700:214;;;;;;2921:110;2994:31;3019:5;2994:31;;;2989:3;2982:44;2976:55;;;3038:193;;3146:2;3135:9;3131:18;3123:26;;3160:61;3218:1;3207:9;3203:17;3194:6;3160:61;;;3117:114;;;;;3238:209;;3354:2;3343:9;3339:18;3331:26;;3368:69;3434:1;3423:9;3419:17;3410:6;3368:69;;;3325:122;;;;;3454:365;;3624:2;3613:9;3609:18;3601:26;;3674:9;3668:4;3664:20;3660:1;3649:9;3645:17;3638:47;3699:110;3804:4;3795:6;3699:110;;;3691:118;;3595:224;;;;;3826:273;;3950:2;3939:9;3935:18;3927:26;;4000:9;3994:4;3990:20;3986:1;3975:9;3971:17;3964:47;4025:64;4084:4;4075:6;4025:64;;;4017:72;;3921:178;;;;;4106:193;;4214:2;4203:9;4199:18;4191:26;;4228:61;4286:1;4275:9;4271:17;4262:6;4228:61;;;4185:114;;;;;4306:256;;4368:2;4362:9;4352:19;;4406:4;4398:6;4394:17;4505:6;4493:10;4490:22;4469:18;4457:10;4454:34;4451:62;4448:2;;;4526:1;4523;4516:12;4448:2;4546:10;4542:2;4535:22;4346:216;;;;;4569:259;;4713:18;4705:6;4702:30;4699:2;;;4745:1;4742;4735:12;4699:2;4789:4;4785:9;4778:4;4770:6;4766:17;4762:33;4754:41;;4818:4;4812;4808:15;4800:23;;4636:192;;;;4837:127;;4952:4;4944:6;4940:17;4929:28;;4921:43;;;;4973:113;;5075:5;5069:12;5059:22;;5053:33;;;;5093:88;;5170:5;5164:12;5154:22;;5148:33;;;;5189:128;;5306:4;5298:6;5294:17;5283:28;;5276:41;;;;5325:105;;5394:31;5419:5;5394:31;;;5383:42;;5377:53;;;;5437:128;;5517:42;5510:5;5506:54;5495:65;;5489:76;;;;5572:79;;5641:5;5630:16;;5624:27;;;;5658:105;;5727:31;5752:5;5727:31;;;5716:42;;5710:53;;;;5770:79;;5839:5;5828:16;;5822:27;;;;5856:129;;5943:37;5974:5;5943:37;;;5930:50;;5924:61;;;;5992:121;;6071:37;6102:5;6071:37;;;6058:50;;6052:61;;;;6120:115;;6199:31;6224:5;6199:31;;;6186:44;;6180:55;;;;6243:145;6324:6;6319:3;6314;6301:30;6380:1;6371:6;6366:3;6362:16;6355:27;6294:94;;;;6397:268;6462:1;6469:101;6483:6;6480:1;6477:13;6469:101;;;6559:1;6554:3;6550:11;6544:18;6540:1;6535:3;6531:11;6524:39;6505:2;6502:1;6498:10;6493:15;;6469:101;;;6585:6;6582:1;6579:13;6576:2;;;6650:1;6641:6;6636:3;6632:16;6625:27;6576:2;6446:219;;;;;6673:97;;6761:2;6757:7;6752:2;6745:5;6741:14;6737:28;6727:38;;6721:49;;;","source":"pragma experimental ABIEncoderV2;\npragma solidity >0.4.99 <0.6.0;\n\nimport \"./Owned.sol\";\n\ncontract Vote is Owned{\n\n    // confirmed voters\n    address[] public voters;\n\n    // voterAddr => vote text\n    mapping (address => string)  public voterToVote;\n\n    // voterAddr => vote count\n    mapping (address => uint)  public voterAddressToCount;\n\n    //voting result\n    string[] public result;\n\n    // create vote event\n    event Create(address from);\n\n    // send vote event\n    event Send(address from);\n\n    constructor() public {\n        ownerAddr = msg.sender;\n    }\n\n    // one address has one ballot.\n    modifier onceVote(address _user) {\n        //TODO:テスト用にrequireを外しているので戻す事\n\n        // require(voterAddressToCount[_user] == 0);\n        _;\n    }\n\n    function createVote(string memory _vote) public onceVote(msg.sender){\n        //TODO:テスト用にrequireを外しているので戻す事\n        // require(voterAddressToCount[msg.sender] == 0);\n        voterAddressToCount[msg.sender]++;\n        voterToVote[msg.sender] = _vote;\n\n        emit Create(msg.sender);\n    }\n\n    function sendVote() public{\n        //TODO:テスト用にrequireを外しているので戻す事\n        // require(voterAddressToCount[msg.sender] == 1);\n        string memory myVote = voterToVote[msg.sender];\n        result.push(myVote);\n\n        emit Send(msg.sender);\n    }\n\n    function viewResult() view public returns(string[] memory){\n        return result;\n    }\n\n}","sourcePath":"/Users/andy/simple_evoting/contracts/Vote.sol","ast":{"absolutePath":"/Users/andy/simple_evoting/contracts/Vote.sol","exportedSymbols":{"Vote":[211]},"id":212,"nodeType":"SourceUnit","nodes":[{"id":110,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"0:33:2"},{"id":111,"literals":["solidity",">","0.4",".99","<","0.6",".0"],"nodeType":"PragmaDirective","src":"34:31:2"},{"absolutePath":"/Users/andy/simple_evoting/contracts/Owned.sol","file":"./Owned.sol","id":112,"nodeType":"ImportDirective","scope":212,"sourceUnit":109,"src":"67:21:2","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":113,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":108,"src":"107:5:2","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$108","typeString":"contract Owned"}},"id":114,"nodeType":"InheritanceSpecifier","src":"107:5:2"}],"contractDependencies":[108],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":211,"linearizedBaseContracts":[211,108],"name":"Vote","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":117,"name":"voters","nodeType":"VariableDeclaration","scope":211,"src":"143:23:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":115,"name":"address","nodeType":"ElementaryTypeName","src":"143:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":116,"length":null,"nodeType":"ArrayTypeName","src":"143:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"constant":false,"id":121,"name":"voterToVote","nodeType":"VariableDeclaration","scope":211,"src":"203:47:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string)"},"typeName":{"id":120,"keyType":{"id":118,"name":"address","nodeType":"ElementaryTypeName","src":"212:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"203:27:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string)"},"valueType":{"id":119,"name":"string","nodeType":"ElementaryTypeName","src":"223:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}}},"value":null,"visibility":"public"},{"constant":false,"id":125,"name":"voterAddressToCount","nodeType":"VariableDeclaration","scope":211,"src":"288:53:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":124,"keyType":{"id":122,"name":"address","nodeType":"ElementaryTypeName","src":"297:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"288:25:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":123,"name":"uint","nodeType":"ElementaryTypeName","src":"308:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"constant":false,"id":128,"name":"result","nodeType":"VariableDeclaration","scope":211,"src":"368:22:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":126,"name":"string","nodeType":"ElementaryTypeName","src":"368:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":127,"length":null,"nodeType":"ArrayTypeName","src":"368:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":132,"name":"Create","nodeType":"EventDefinition","parameters":{"id":131,"nodeType":"ParameterList","parameters":[{"constant":false,"id":130,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":132,"src":"435:12:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":129,"name":"address","nodeType":"ElementaryTypeName","src":"435:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"434:14:2"},"src":"422:27:2"},{"anonymous":false,"documentation":null,"id":136,"name":"Send","nodeType":"EventDefinition","parameters":{"id":135,"nodeType":"ParameterList","parameters":[{"constant":false,"id":134,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":136,"src":"489:12:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":133,"name":"address","nodeType":"ElementaryTypeName","src":"489:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"488:14:2"},"src":"478:25:2"},{"body":{"id":144,"nodeType":"Block","src":"530:39:2","statements":[{"expression":{"argumentTypes":null,"id":142,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":139,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"540:9:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":140,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"552:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":141,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"552:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"540:22:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":143,"nodeType":"ExpressionStatement","src":"540:22:2"}]},"documentation":null,"id":145,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":137,"nodeType":"ParameterList","parameters":[],"src":"520:2:2"},"returnParameters":{"id":138,"nodeType":"ParameterList","parameters":[],"src":"530:0:2"},"scope":211,"src":"509:60:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":150,"nodeType":"Block","src":"643:143:2","statements":[{"id":149,"nodeType":"PlaceholderStatement","src":"778:1:2"}]},"documentation":null,"id":151,"name":"onceVote","nodeType":"ModifierDefinition","parameters":{"id":148,"nodeType":"ParameterList","parameters":[{"constant":false,"id":147,"name":"_user","nodeType":"VariableDeclaration","scope":151,"src":"628:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":146,"name":"address","nodeType":"ElementaryTypeName","src":"628:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"627:15:2"},"src":"610:176:2","visibility":"internal"},{"body":{"id":178,"nodeType":"Block","src":"860:254:2","statements":[{"expression":{"argumentTypes":null,"id":164,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"999:33:2","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":160,"name":"voterAddressToCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":125,"src":"999:19:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":163,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":161,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"1019:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":162,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1019:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"999:31:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":165,"nodeType":"ExpressionStatement","src":"999:33:2"},{"expression":{"argumentTypes":null,"id":171,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":166,"name":"voterToVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":121,"src":"1042:11:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string storage ref)"}},"id":169,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":167,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"1054:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":168,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1054:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1042:23:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":170,"name":"_vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":153,"src":"1068:5:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1042:31:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":172,"nodeType":"ExpressionStatement","src":"1042:31:2"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":174,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"1096:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":175,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1096:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":173,"name":"Create","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"1089:6:2","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":176,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1089:18:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":177,"nodeType":"EmitStatement","src":"1084:23:2"}]},"documentation":null,"id":179,"implemented":true,"kind":"function","modifiers":[{"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":156,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"849:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":157,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"849:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"id":158,"modifierName":{"argumentTypes":null,"id":155,"name":"onceVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":151,"src":"840:8:2","typeDescriptions":{"typeIdentifier":"t_modifier$_t_address_$","typeString":"modifier (address)"}},"nodeType":"ModifierInvocation","src":"840:20:2"}],"name":"createVote","nodeType":"FunctionDefinition","parameters":{"id":154,"nodeType":"ParameterList","parameters":[{"constant":false,"id":153,"name":"_vote","nodeType":"VariableDeclaration","scope":179,"src":"812:19:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":152,"name":"string","nodeType":"ElementaryTypeName","src":"812:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"811:21:2"},"returnParameters":{"id":159,"nodeType":"ParameterList","parameters":[],"src":"860:0:2"},"scope":211,"src":"792:322:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":200,"nodeType":"Block","src":"1146:253:2","statements":[{"assignments":[183],"declarations":[{"constant":false,"id":183,"name":"myVote","nodeType":"VariableDeclaration","scope":200,"src":"1285:20:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":182,"name":"string","nodeType":"ElementaryTypeName","src":"1285:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"id":188,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":184,"name":"voterToVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":121,"src":"1308:11:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string storage ref)"}},"id":187,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":185,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"1320:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":186,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1320:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1308:23:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"VariableDeclarationStatement","src":"1285:46:2"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":192,"name":"myVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":183,"src":"1353:6:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":189,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":128,"src":"1341:6:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":191,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1341:11:2","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":193,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1341:19:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":194,"nodeType":"ExpressionStatement","src":"1341:19:2"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":196,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"1381:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":197,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1381:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":195,"name":"Send","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":136,"src":"1376:4:2","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":198,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1376:16:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":199,"nodeType":"EmitStatement","src":"1371:21:2"}]},"documentation":null,"id":201,"implemented":true,"kind":"function","modifiers":[],"name":"sendVote","nodeType":"FunctionDefinition","parameters":{"id":180,"nodeType":"ParameterList","parameters":[],"src":"1137:2:2"},"returnParameters":{"id":181,"nodeType":"ParameterList","parameters":[],"src":"1146:0:2"},"scope":211,"src":"1120:279:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":209,"nodeType":"Block","src":"1463:30:2","statements":[{"expression":{"argumentTypes":null,"id":207,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":128,"src":"1480:6:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"functionReturnParameters":206,"id":208,"nodeType":"Return","src":"1473:13:2"}]},"documentation":null,"id":210,"implemented":true,"kind":"function","modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":202,"nodeType":"ParameterList","parameters":[],"src":"1424:2:2"},"returnParameters":{"id":206,"nodeType":"ParameterList","parameters":[{"constant":false,"id":205,"name":"","nodeType":"VariableDeclaration","scope":210,"src":"1447:15:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_string_memory_$dyn_memory_ptr","typeString":"string[]"},"typeName":{"baseType":{"id":203,"name":"string","nodeType":"ElementaryTypeName","src":"1447:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":204,"length":null,"nodeType":"ArrayTypeName","src":"1447:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"internal"}],"src":"1446:17:2"},"scope":211,"src":"1405:88:2","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":212,"src":"90:1406:2"}],"src":"0:1496:2"},"legacyAST":{"absolutePath":"/Users/andy/simple_evoting/contracts/Vote.sol","exportedSymbols":{"Vote":[211]},"id":212,"nodeType":"SourceUnit","nodes":[{"id":110,"literals":["experimental","ABIEncoderV2"],"nodeType":"PragmaDirective","src":"0:33:2"},{"id":111,"literals":["solidity",">","0.4",".99","<","0.6",".0"],"nodeType":"PragmaDirective","src":"34:31:2"},{"absolutePath":"/Users/andy/simple_evoting/contracts/Owned.sol","file":"./Owned.sol","id":112,"nodeType":"ImportDirective","scope":212,"sourceUnit":109,"src":"67:21:2","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":113,"name":"Owned","nodeType":"UserDefinedTypeName","referencedDeclaration":108,"src":"107:5:2","typeDescriptions":{"typeIdentifier":"t_contract$_Owned_$108","typeString":"contract Owned"}},"id":114,"nodeType":"InheritanceSpecifier","src":"107:5:2"}],"contractDependencies":[108],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":211,"linearizedBaseContracts":[211,108],"name":"Vote","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":117,"name":"voters","nodeType":"VariableDeclaration","scope":211,"src":"143:23:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":115,"name":"address","nodeType":"ElementaryTypeName","src":"143:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":116,"length":null,"nodeType":"ArrayTypeName","src":"143:9:2","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"constant":false,"id":121,"name":"voterToVote","nodeType":"VariableDeclaration","scope":211,"src":"203:47:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string)"},"typeName":{"id":120,"keyType":{"id":118,"name":"address","nodeType":"ElementaryTypeName","src":"212:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"203:27:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string)"},"valueType":{"id":119,"name":"string","nodeType":"ElementaryTypeName","src":"223:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}}},"value":null,"visibility":"public"},{"constant":false,"id":125,"name":"voterAddressToCount","nodeType":"VariableDeclaration","scope":211,"src":"288:53:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":124,"keyType":{"id":122,"name":"address","nodeType":"ElementaryTypeName","src":"297:7:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"288:25:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":123,"name":"uint","nodeType":"ElementaryTypeName","src":"308:4:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"public"},{"constant":false,"id":128,"name":"result","nodeType":"VariableDeclaration","scope":211,"src":"368:22:2","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string[]"},"typeName":{"baseType":{"id":126,"name":"string","nodeType":"ElementaryTypeName","src":"368:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":127,"length":null,"nodeType":"ArrayTypeName","src":"368:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":132,"name":"Create","nodeType":"EventDefinition","parameters":{"id":131,"nodeType":"ParameterList","parameters":[{"constant":false,"id":130,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":132,"src":"435:12:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":129,"name":"address","nodeType":"ElementaryTypeName","src":"435:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"434:14:2"},"src":"422:27:2"},{"anonymous":false,"documentation":null,"id":136,"name":"Send","nodeType":"EventDefinition","parameters":{"id":135,"nodeType":"ParameterList","parameters":[{"constant":false,"id":134,"indexed":false,"name":"from","nodeType":"VariableDeclaration","scope":136,"src":"489:12:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":133,"name":"address","nodeType":"ElementaryTypeName","src":"489:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"488:14:2"},"src":"478:25:2"},{"body":{"id":144,"nodeType":"Block","src":"530:39:2","statements":[{"expression":{"argumentTypes":null,"id":142,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":139,"name":"ownerAddr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":60,"src":"540:9:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":140,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"552:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":141,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"552:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"src":"540:22:2","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":143,"nodeType":"ExpressionStatement","src":"540:22:2"}]},"documentation":null,"id":145,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":137,"nodeType":"ParameterList","parameters":[],"src":"520:2:2"},"returnParameters":{"id":138,"nodeType":"ParameterList","parameters":[],"src":"530:0:2"},"scope":211,"src":"509:60:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":150,"nodeType":"Block","src":"643:143:2","statements":[{"id":149,"nodeType":"PlaceholderStatement","src":"778:1:2"}]},"documentation":null,"id":151,"name":"onceVote","nodeType":"ModifierDefinition","parameters":{"id":148,"nodeType":"ParameterList","parameters":[{"constant":false,"id":147,"name":"_user","nodeType":"VariableDeclaration","scope":151,"src":"628:13:2","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":146,"name":"address","nodeType":"ElementaryTypeName","src":"628:7:2","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"627:15:2"},"src":"610:176:2","visibility":"internal"},{"body":{"id":178,"nodeType":"Block","src":"860:254:2","statements":[{"expression":{"argumentTypes":null,"id":164,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"999:33:2","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":160,"name":"voterAddressToCount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":125,"src":"999:19:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":163,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":161,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"1019:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":162,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1019:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"999:31:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":165,"nodeType":"ExpressionStatement","src":"999:33:2"},{"expression":{"argumentTypes":null,"id":171,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":166,"name":"voterToVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":121,"src":"1042:11:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string storage ref)"}},"id":169,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":167,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"1054:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":168,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1054:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"1042:23:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":170,"name":"_vote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":153,"src":"1068:5:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"1042:31:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":172,"nodeType":"ExpressionStatement","src":"1042:31:2"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":174,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"1096:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":175,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1096:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":173,"name":"Create","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":132,"src":"1089:6:2","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":176,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1089:18:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":177,"nodeType":"EmitStatement","src":"1084:23:2"}]},"documentation":null,"id":179,"implemented":true,"kind":"function","modifiers":[{"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":156,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"849:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":157,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"849:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"id":158,"modifierName":{"argumentTypes":null,"id":155,"name":"onceVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":151,"src":"840:8:2","typeDescriptions":{"typeIdentifier":"t_modifier$_t_address_$","typeString":"modifier (address)"}},"nodeType":"ModifierInvocation","src":"840:20:2"}],"name":"createVote","nodeType":"FunctionDefinition","parameters":{"id":154,"nodeType":"ParameterList","parameters":[{"constant":false,"id":153,"name":"_vote","nodeType":"VariableDeclaration","scope":179,"src":"812:19:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":152,"name":"string","nodeType":"ElementaryTypeName","src":"812:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"811:21:2"},"returnParameters":{"id":159,"nodeType":"ParameterList","parameters":[],"src":"860:0:2"},"scope":211,"src":"792:322:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":200,"nodeType":"Block","src":"1146:253:2","statements":[{"assignments":[183],"declarations":[{"constant":false,"id":183,"name":"myVote","nodeType":"VariableDeclaration","scope":200,"src":"1285:20:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":182,"name":"string","nodeType":"ElementaryTypeName","src":"1285:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"id":188,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":184,"name":"voterToVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":121,"src":"1308:11:2","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_string_storage_$","typeString":"mapping(address => string storage ref)"}},"id":187,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":185,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"1320:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":186,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1320:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"1308:23:2","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"VariableDeclarationStatement","src":"1285:46:2"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":192,"name":"myVote","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":183,"src":"1353:6:2","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"expression":{"argumentTypes":null,"id":189,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":128,"src":"1341:6:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"id":191,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1341:11:2","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_string_storage_$returns$_t_uint256_$","typeString":"function (string storage ref) returns (uint256)"}},"id":193,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1341:19:2","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":194,"nodeType":"ExpressionStatement","src":"1341:19:2"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":196,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":226,"src":"1381:3:2","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":197,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"1381:10:2","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"}],"id":195,"name":"Send","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":136,"src":"1376:4:2","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":198,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"1376:16:2","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":199,"nodeType":"EmitStatement","src":"1371:21:2"}]},"documentation":null,"id":201,"implemented":true,"kind":"function","modifiers":[],"name":"sendVote","nodeType":"FunctionDefinition","parameters":{"id":180,"nodeType":"ParameterList","parameters":[],"src":"1137:2:2"},"returnParameters":{"id":181,"nodeType":"ParameterList","parameters":[],"src":"1146:0:2"},"scope":211,"src":"1120:279:2","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":209,"nodeType":"Block","src":"1463:30:2","statements":[{"expression":{"argumentTypes":null,"id":207,"name":"result","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":128,"src":"1480:6:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage","typeString":"string storage ref[] storage ref"}},"functionReturnParameters":206,"id":208,"nodeType":"Return","src":"1473:13:2"}]},"documentation":null,"id":210,"implemented":true,"kind":"function","modifiers":[],"name":"viewResult","nodeType":"FunctionDefinition","parameters":{"id":202,"nodeType":"ParameterList","parameters":[],"src":"1424:2:2"},"returnParameters":{"id":206,"nodeType":"ParameterList","parameters":[{"constant":false,"id":205,"name":"","nodeType":"VariableDeclaration","scope":210,"src":"1447:15:2","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_string_memory_$dyn_memory_ptr","typeString":"string[]"},"typeName":{"baseType":{"id":203,"name":"string","nodeType":"ElementaryTypeName","src":"1447:6:2","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"id":204,"length":null,"nodeType":"ArrayTypeName","src":"1447:8:2","typeDescriptions":{"typeIdentifier":"t_array$_t_string_storage_$dyn_storage_ptr","typeString":"string[]"}},"value":null,"visibility":"internal"}],"src":"1446:17:2"},"scope":211,"src":"1405:88:2","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":212,"src":"90:1406:2"}],"src":"0:1496:2"},"compiler":{"name":"solc","version":"0.5.0+commit.1d4f565a.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0x724eD04eE250123b67F9FfB0fA4aF971b1131Ec3","transactionHash":"0xcbf1e9ce465ecd44ea0283b63c03b3eb0d633eefd62ac895a7ce74d6888ee45c"}},"schemaVersion":"3.0.0","updatedAt":"2019-01-10T06:51:11.220Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./web3/createVote.js":
/*!****************************!*\
  !*** ./web3/createVote.js ***!
  \****************************/
/*! exports provided: SetUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserInfo", function() { return SetUserInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json");
var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json", 1);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/andy/simple_evoting/client/web3/createVote.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SetUserInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SetUserInfo, _React$Component);

  function SetUserInfo(props) {
    var _this;

    _classCallCheck(this, SetUserInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SetUserInfo).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setName",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name) {
        var storage, addresses;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

              case 2:
                storage = _context.sent;
                _context.next = 5;
                return _provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

              case 5:
                addresses = _context.sent;
                _context.next = 8;
                return storage.createVote(name, {
                  from: addresses[0]
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sendVote",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var storage, addresses;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

            case 2:
              storage = _context2.sent;
              _context2.next = 5;
              return _provider__WEBPACK_IMPORTED_MODULE_2__["eth"].getAccounts();

            case 5:
              addresses = _context2.sent;
              _context2.next = 8;
              return storage.sendVote({
                from: addresses[0]
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _this.state = {
      value: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setName = _this.setName.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.sendVote = _this.sendVote.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SetUserInfo, [{
    key: "handleChange",
    value: function () {
      var _handleChange = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.setState({
                  value: event.target.value
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function handleChange(_x2) {
        return _handleChange.apply(this, arguments);
      };
    }()
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log("User was Created:" + this.state.value);
                event.preventDefault();
                _context4.next = 4;
                return this.setName(this.state.value);

              case 4:
                _context4.next = 6;
                return this.sendVote();

              case 6:
                // this.props.addUser(this.state.value)
                this.setState({
                  value: ""
                });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function handleSubmit(_x3) {
        return _handleSubmit.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Please input your select:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "submit",
        value: "Submit Ballot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })));
    }
  }]);

  return SetUserInfo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ }),

/***/ "./web3/provider.js":
/*!**************************!*\
  !*** ./web3/provider.js ***!
  \**************************/
/*! exports provided: getInstance, eth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstance", function() { return getInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eth", function() { return eth; });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! truffle-contract */ "truffle-contract");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_1__);


var getInstance = function getInstance(artifact) {
  var contractObj = truffle_contract__WEBPACK_IMPORTED_MODULE_1___default()(artifact);
  contractObj.setProvider(provider());
  return contractObj.deployed();
};

var provider = function provider() {
  // If the user has MetaMask:
  if (typeof web3 !== 'undefined') {
    return web3.currentProvider;
  } else {
    console.error("You need to install MetaMask for this app to work!");
  }
};

var eth = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider()).eth;

/***/ }),

/***/ "./web3/sendVote.js":
/*!**************************!*\
  !*** ./web3/sendVote.js ***!
  \**************************/
/*! exports provided: GetOwnerInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOwnerInfo", function() { return GetOwnerInfo; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json");
var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json", 1);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/andy/simple_evoting/client/web3/sendVote.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var GetOwnerInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GetOwnerInfo, _React$Component);

  function GetOwnerInfo(props) {
    var _this;

    _classCallCheck(this, GetOwnerInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GetOwnerInfo).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var storage, ownerProfile;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

            case 2:
              storage = _context.sent;
              _context.next = 5;
              return storage.ownerAddr.call();

            case 5:
              ownerProfile = _context.sent;
              // console.log(ownerProfile)
              console.log(_this.state.address);

              _this.setState({
                address: ownerProfile
              });

              console.log(_this.state.address);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      address: ""
    };
    _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(GetOwnerInfo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Get Owner Address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Owner Address is : ", this.state.address));
    }
  }]);

  return GetOwnerInfo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ }),

/***/ "./web3/viewResult.js":
/*!****************************!*\
  !*** ./web3/viewResult.js ***!
  \****************************/
/*! exports provided: ViewResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResult", function() { return ViewResult; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./web3/provider.js");
/* harmony import */ var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json");
var _web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../web3/artifacts/Vote.json */ "./web3/artifacts/Vote.json", 1);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/andy/simple_evoting/client/web3/viewResult.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var ViewResult =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ViewResult, _React$Component);

  function ViewResult(props) {
    var _this;

    _classCallCheck(this, ViewResult);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewResult).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnClick",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var storage, resultVoting;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_provider__WEBPACK_IMPORTED_MODULE_2__["getInstance"])(_web3_artifacts_Vote_json__WEBPACK_IMPORTED_MODULE_3__);

            case 2:
              storage = _context.sent;
              console.log("result", storage.result.call());
              _context.next = 6;
              return storage.viewResult();

            case 6:
              resultVoting = _context.sent;
              console.log(resultVoting); // console.log(ownerProfile)

              console.log(_this.state.result);

              _this.setState({
                result: resultVoting
              });

              console.log(_this.state.result);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      result: []
    };
    _this.handleOnClick = _this.handleOnClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ViewResult, [{
    key: "render",
    value: function render() {
      var list = this.state.result.map(function (user) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: user,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, user);
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Get Result"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Result"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Ballots List"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, list));
    }
  }]);

  return ViewResult;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "domain":
/*!*************************!*\
  !*** external "domain" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("domain");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "truffle-contract":
/*!***********************************!*\
  !*** external "truffle-contract" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("truffle-contract");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map