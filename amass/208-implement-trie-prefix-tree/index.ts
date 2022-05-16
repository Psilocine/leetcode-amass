export class Trie {
  private children: { isEnd?: boolean };
  constructor() {
    this.children = {};
  }

  insert(word: string): void {
    let node = this.children;
    for (let ch of word) {
      if (!node[ch]) {
        node[ch] = {};
      }

      node = node[ch];
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    let node = this.children;
    for (let ch of word) {
      if (!node[ch]) {
        return false;
      }

      node = node[ch];
    }

    return !!node.isEnd;
  }

  startsWith(prefix: string): boolean {
    let node = this.children;
    for (let ch of prefix) {
      if (!node[ch]) {
        return false;
      }

      node = node[ch];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
