function adjacencyListToMatrix(adjList) {
  // 1. Determine the number of nodes (vertices) in the graph
  const numNodes = Object.keys(adjList).length;

  // 2. Initialize a square matrix of size numNodes x numNodes filled with 0s
  const matrix = [];
  for (let i = 0; i < numNodes; i++) {
    matrix.push(new Array(numNodes).fill(0));
  }

  // 3. Populate the matrix based on the adjacency list connections
  for (const node in adjList) {
    const rowIndex = parseInt(node); // Convert the key string to an integer index
    const neighbors = adjList[node];

    neighbors.forEach(neighborIndex => {
      matrix[rowIndex][neighborIndex] = 1;
    });
  }

  // 4. Print each row in the adjacency matrix as required by the user story
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }

  // 5. Return the completed adjacency matrix
  return matrix;
}