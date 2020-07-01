class RandomF {
    /**
     * @param {number} min included
     * @param {number} max excluded
     */
    randInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    /**
     * @param {number} min included
     * @param {number} max excluded
     */
    randFloat(min, max) {
        return (Math.random() * (max - min)) + min;
    }
    /**
     * picks an random element from an array
     * @param {Array} array 
     */
    randPick(array) {
        return array[this.randInt(0, array.length)];
    }
}
const randomF = new RandomF();
module.exports = randomF;