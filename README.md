## Examples

### Plant of the day
```js
const plants = require('@oblakotilo/plants');

const plant = plants.random(new Date().toDateString());

console.log('url', 'https://wikipedia.org/wiki/' + plant.replace(' ', '_'));
// url https://wikipedia.org/wiki/Lavandula_latifolia
```
