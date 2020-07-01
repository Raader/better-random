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
}
const randomF = new RandomF();

module.exports = randomF;