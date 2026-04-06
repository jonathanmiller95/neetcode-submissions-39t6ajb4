class MinStack {
    #val = [];
    constructor() {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.#val.push(val);
        return;
    }

    /**
     * @return {void}
     */
    pop() {
        this.#val.pop();
        return;
    }

    /**
     * @return {number}
     */
    top() {
        let top = this.#val.length-1;
        return this.#val[top];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.#val);
    }
}
