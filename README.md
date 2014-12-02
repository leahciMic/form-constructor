# Form Constructor

Useful utility I built to construct forms. I was having an interesting issue with
https://www.npmjs.org/package/request. You can construct a form with POJO, but
if your form requires to have multiple values with the same key, you're out of
luck.

## Installation

`npm install form-constructor`

## How to use

```js
var FormConstructor = require('form-constructor');

var form = new FormConstructor();

form.add('foo', 'bar');

console.log(form.toString()); // outputs foo=bar
```
