var urlencode = require('urlencode');

var FormConstructor = function FormConstructor() {
  this.fields = [];
};

FormConstructor.prototype.add = function add(key, value) {
    this.fields.push({
        key: key,
        value: value
    });
    return this;
};

FormConstructor.prototype.toString = function() {
    return this.fields.reduce(function(p, c) {
        if (p != '') {
            p += '&';
        }

        return p += urlencode(c.key) + '=' + urlencode(c.value);
    }, '');
};

module.exports = FormConstructor;