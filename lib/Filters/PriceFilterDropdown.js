'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _dec, _class, _desc, _value, _class2, _class3, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactThemed = require('react-themed');

var _reactThemed2 = _interopRequireDefault(_reactThemed);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactUiCore = require('@rentpath/react-ui-core');

var _PriceFilterCard = require('./PriceFilterCard');

var _PriceFilterCard2 = _interopRequireDefault(_PriceFilterCard);

var _DropdownFilterCardWrapper = require('./DropdownFilterCardWrapper');

var _DropdownFilterCardWrapper2 = _interopRequireDefault(_DropdownFilterCardWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var PriceFilterDropdown = (_dec = (0, _reactThemed2.default)(['FilterDropdown']), _dec(_class = (_class2 = (_temp = _class3 = function (_Component) {
  (0, _inherits3.default)(PriceFilterDropdown, _Component);

  function PriceFilterDropdown(props) {
    (0, _classCallCheck3.default)(this, PriceFilterDropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PriceFilterDropdown.__proto__ || (0, _getPrototypeOf2.default)(PriceFilterDropdown)).call(this, props));

    _this.state = {
      value: null
    };
    return _this;
  }

  (0, _createClass3.default)(PriceFilterDropdown, [{
    key: 'handleValueChange',
    value: function handleValueChange(value) {
      this.setState({ value: value });
    }
  }, {
    key: 'renderAnchorButton',
    value: function renderAnchorButton() {
      var value = this.state.value;
      var anchorText = this.props.anchorText;

      var text = value && '$' + value.min + '-$' + value.max;

      if (anchorText) return (0, _react.cloneElement)(anchorText, { text: text });
      return _react2.default.createElement(
        _reactUiCore.Text,
        null,
        text
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          anchorText = _props.anchorText,
          theme = _props.theme,
          className = _props.className,
          props = (0, _objectWithoutProperties3.default)(_props, ['anchorText', 'theme', 'className']);


      return _react2.default.createElement(
        _reactUiCore.Dropdown,
        {
          className: (0, _classnames2.default)(className, theme.FilterDropdown),
          anchorField: { children: this.renderAnchorButton() }
        },
        _react2.default.createElement(_DropdownFilterCardWrapper2.default, (0, _extends3.default)({}, props, {
          FilterCard: _PriceFilterCard2.default,
          handleValueChange: this.handleValueChange
        }))
      );
    }
  }]);
  return PriceFilterDropdown;
}(_react.Component), _class3.propTypes = {
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  anchorText: _propTypes2.default.node,
  applyButton: _propTypes2.default.object,
  cancelButton: _propTypes2.default.object
}, _class3.defaultProps = {
  theme: {},
  fields: []
}, _temp), (_applyDecoratedDescriptor(_class2.prototype, 'handleValueChange', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'handleValueChange'), _class2.prototype)), _class2)) || _class);
exports.default = PriceFilterDropdown;