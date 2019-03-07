# inso

:mag_right: Case-insensitive object search

### Install

`npm install inso`

### Usage

```javascript
const inso = require("inso");

const obj = {
  foo: 1,
  BAR: 2,
  bAz: 3
};

inso(); // undefined
inso(obj); // undefined
inso(obj, "foo"); // 1
inso(obj, "FOO"); // 1
inso(obj, "Foo"); // 1
inso(obj, "a", "b", "c", "Bar"); // 2
```
