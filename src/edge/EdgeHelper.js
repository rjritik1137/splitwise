class EdgeHelper {
  static add(edge1, edge2) {
    if (
      edge1.source === edge2.destination &&
      edge1.destination === edge2.source
    ) {
      return new Edge(
        this.source,
        this.destination,
        this.weight - edge2.weight
      );
    } else {
      if (
        edge1.source === edge2.source &&
        edge1.destination === edge2.destination
      ) {
        return new Edge(
          this.source,
          this.destination,
          this.weight + edge.weight
        );
      }
    }
    return new Error("Invalid edge, source and destination are different");
  }
}

export { EdgeHelper };
