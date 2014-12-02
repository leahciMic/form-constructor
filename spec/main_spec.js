var FormConstructor = require('../lib/form-constructor.js');

describe('FormConstructor', function() {
    it('should construct a form', function() {
        var form = new FormConstructor();
        form.add('foo', 'bar');
        form.add('foo', 'baz');
        form.add('foo=', 'bar=');
        expect(form.toString()).toEqual('foo=bar&foo=baz&foo%3D=bar%3D');
    });
});