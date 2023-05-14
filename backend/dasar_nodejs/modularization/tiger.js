class Tiger {
    constructor() {
        this.strengh = Math.floor(Math.random() * 100);
    }
    growl() {
        console.log('Grrrrr!');
    }
}

module.exports = Tiger;