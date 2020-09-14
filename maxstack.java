//Java Solution

class MaxStack {

    Stack<Integer> stack;
    Stack<Integer> max;
    
    /** initialize your data structure here. */
    public MaxStack() {
        stack = new Stack();
        max = new Stack();
    }
    
    public void push(int x) {
        stack.push(x);
        int maximum = max.isEmpty() ? x : Math.max(x, max.peek());
        max.push(maximum);
    }
    
    public int pop() {
        max.pop();
        return stack.pop();
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int peekMax() {
        return max.peek();
    }
    
    public int popMax() {
        int maximum = peekMax();
        Stack<Integer> buffer = new Stack();
        
        while (top() != maximum) {
            buffer.push(pop());
        }
        pop();
        
        while (!buffer.isEmpty()) {
            push(buffer.pop());
        }
        
        return maximum;
    }
}
