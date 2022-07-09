require('core-js/modules/es.object.define-property.js');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const _react = _interopRequireDefault(require('react'));

const _server = require('react-dom/server');

const _CountUp = _interopRequireDefault(require('./CountUp'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const ssr = function ssr() {
  return '\n<html>\n<head>\n  <title>CountUp</title>\n  <meta charset="utf-8"/>\n</head>\n<body>\n  <div id="app">\n    '.concat(
    (0, _server.renderToString)(
      /* #__PURE__ */ _react.default.createElement(_CountUp.default, null)
    ),
    '\n  </div>\n</body>\n</html>\n'
  );
};

const _default = ssr;
exports.default = _default;
