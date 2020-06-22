//Objective is to design a max stack w/ methods of 'push', 'pop', 'top', 'peekmax', and 'popmax'.
//Push, pop, and top are the same as of the 'min stack' question.
//Peekmax should return the greatest element in the stack
//Popmax should pop out the greatest element in the stack. If there are more than one
//max value, then pop out the most recently pushed one.
//All methods should have a O(N) runtime at worst.


//Design of a max stack using 2 stacks.

class MaxStack {
    constructor() {
        this.arr = []
        this.max = []
    }

    push(val) {
        this.arr.push(val)
        //If a new max value comes in, push it into the max array
        if (this.max.length == 0 || val >= this.max[this.max.length - 1]) {
            this.max.push(val)
        }

        return val
    }

    pop() {
        let top = this.arr.pop()
        //If a max value is being popped, pop it out of the max stack as well
        if (top == this.max[this.max.length - 1]) {
            this.max.pop()
        }

        return top
    }

    top() {
        if (this.arr.length !== 0) {
            return this.arr[this.arr.length - 1]
        }
        return null
    }

    peekMax() {
        if (this.max.length !== 0) {
            return this.max[this.max.length - 1]
        }
        return null
    }

    popMax() {
        let max = this.max.pop()
        let temp = []

        //We want the most recent value if there's more than 1 highest value
        for (let i = this.arr.length - 1; i >= 0; i--) {
            if (this.arr[i] == max) {
                this.arr.splice(i, 1)
                break
            } else {
                temp.push(this.arr.pop())
            }
        }

        while (temp.length) {
            this.push(temp.pop())
        }

        return max
    }
}

let stack = new MaxStack()
stack.push(5)
stack.push(1)
stack.push(5)
stack.top()
stack.popMax()
stack.top()
stack.peekMax()
stack.pop()
stack.top()