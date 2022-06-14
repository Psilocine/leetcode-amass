import { describe, expect, it } from "vitest";
import { validTicTacToe } from ".";

describe("有效的井字游戏", () => {
  describe("Name of the group", () => {
    testCase(validTicTacToe);
  });
});

function testCase(fn: (board: string[]) => boolean) {
  it.each([
    // test cases
    [["O  ", "   ", "   "], false],
    [["XOX", " X ", "   "], false],
    [["XOX", "O O", "XOX"], true],
    [["XXX", "OOX", "OOX"], true],
  ])("示例%#", (board, expected) => {
    expect(fn(board)).toBe(expected);
  });
}
