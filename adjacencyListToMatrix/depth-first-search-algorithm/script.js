function dfs(graph, root) {
  // Array to store the final list of visited nodes in the order they were discovered
  const visitedNodes = [];
  
  // Track visited status using a boolean array or Set to avoid adding duplicates
  const visitedTracker = new Array(graph.length).fill(false);
  
  // Initialize the stack with our starting root node
  const stack = [root];

  while (stack.length > 0) {
    // Pop the most recently added node from the stack (LIFO)
    const current = stack.pop();

    // If we haven't visited this node yet, process it
    if (!visitedTracker[current]) {
      // Mark as visited
      visitedTracker[current] = true;
      // Add it to our reachable results list
      visitedNodes.push(current);

      // Look at all potential neighbors in the adjacency matrix row
      // We loop backwards (from graph.length - 1 down to 0) so that lower-indexed
      // neighbors end up at the top of the stack and get explored first.
      for (let neighbor = graph.length - 1; neighbor >= 0; neighbor--) {
        // graph[current][neighbor] === 1 means a connection exists
        // !visitedTracker[neighbor] means we haven't officially visited it yet
        if (graph[current][neighbor] === 1 && !visitedTracker[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }

  // Return the collection of all reachable node labels
  return visitedNodes;
}