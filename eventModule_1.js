const EventEmit = require('events');

class Class extends EventEmit {
    helloDot() {
        setTimeout(() => {
            this.emit('BellRang', {
                period: 'fisrt',
            });
        }, 2000);
    }
}
module.exports = Class;
