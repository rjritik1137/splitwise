import { EdgeHelper } from "./EdgeHelper.js";

class Edges {
  static instance;
  constructor() {
    this.edges = [];
  }
  static getInstance() {
    if (Edges.instance) return Edges.instance;
    return new Edges();
  }
  add(edge) {
    for (let i = 0; i < this.edges.length; i++) {
      try {
        this.edge[i] = EdgeHelper.add(this.edges[i], edge);
        return;
      } catch (e) {}
    }
    this.edges.push(edge);
  }
}

export { Edges };
