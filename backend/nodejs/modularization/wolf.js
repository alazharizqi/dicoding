class Wolf {
    constructor() {
        this.strengh = Math.floor(Math.random() * 100);
    }

    howl() {
        console.log('auw!');
    }
}

module.exports = Wolf;