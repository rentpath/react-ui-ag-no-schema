'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _reactUiCore = require('@rentpath/react-ui-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Banner = (_dec = (0, _reactThemed2.default)(['Banner'], {
  pure: true
}), _dec(_class = (_temp = _class2 = function (_PureComponent) {
  (0, _inherits3.default)(Banner, _PureComponent);

  function Banner() {
    (0, _classCallCheck3.default)(this, Banner);
    return (0, _possibleConstructorReturn3.default)(this, (Banner.__proto__ || (0, _getPrototypeOf2.default)(Banner)).apply(this, arguments));
  }

  (0, _createClass3.default)(Banner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          name = _props.name,
          className = _props.className,
          value = _props.value,
          props = (0, _objectWithoutProperties3.default)(_props, ['theme', 'name', 'className', 'value']);


      return _react2.default.createElement(
        _reactUiCore.Text,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(theme.Banner, className),
          'data-tid': 'banner'
        }, props),
        name
      );
    }
  }]);
  return Banner;
}(_react.PureComponent), _class2.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  name: _propTypes2.default.node.isRequired,
  value: _propTypes2.default.any
}, _class2.defaultProps = {
  theme: {}
}, _temp)) || _class);
exports.default = Banner;