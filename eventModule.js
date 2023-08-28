// eslint-disable-next-line import/extensions
const oo = require('./eventModule_1.js');
// listener
const var1 = new oo();
var1.on('BellRang', ({ period }) => {
    console.log(`Marzun ${period}`);
});
var1.helloDot();
// raise an event
