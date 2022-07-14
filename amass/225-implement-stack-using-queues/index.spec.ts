import { describe, expect, it } from "vitest";
import { MyStack } from ".";

describe("用队列实现栈", () => {
  it("should ", () => {
    const myStack = new MyStack();
    expect(myStack.push(1)).toBe(undefined);
    expect(myStack.push(2)).toBe(undefined);
    expect(myStack.top()).toBe(2); // 返回 2
    expect(myStack.pop()).toBe(2); // 返回 2
    expect(myStack.empty()).toBe(false); // 返回 False
  });
});
