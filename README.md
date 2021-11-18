# element-offset
get another element by offsetting the tail number of an element id

# Install
```
npm install element-offset
```

# Usage & Api
```javascript

var element_offset = require("element-offset");

//.offset(elOrId, offset)
element_offset(document.getElementById('divResult2'), 1) === document.getElementById('divResult3') &&
element_offset('divResult3', -1) === document.getElementById('divResult2') &&
element_offset('sp1A', 1) === document.getElementById('sp2A') &&
element_offset('sp2A', -1) === document.getElementById('sp1A');

```
