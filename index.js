function shortestKnightMove(start, end) {
  // possible positions of a Knight
  const possiblePositions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];

  //   Implementing Breadth-first Search Algorithm

  //   Add the start position, number of moves and the knight's path in a queue
  const queue = [[start, 0, []]];

  //   Add the visited path in a Set
  const visited = new Set();
  visited.add(start.toString());

  //   Traverse the graph till the queue is empty
  while (queue.length > 0) {
    // Get the first value from the queue
    const [currentPosition, moves, path] = queue.shift();

    for (const position of possiblePositions) {
      // Check if the currentPosition position is the end position
      if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
        return path.concat([currentPosition]);
      }

      const newPosition = [
        currentPosition[0] + position[0],
        currentPosition[1] + position[1],
      ];

      //   Check if the new position is valid and it hasn't been visited before
      if (
        isValidPosition(newPosition) &&
        !visited.has(newPosition.toString())
      ) {
        // Add the new position to the visited Set
        visited.add(newPosition.toString());

        // Push the new position in the queue and add the move count by 1 as it's been visited. Also concat the current position to the path array
        queue.push([newPosition, moves + 1, path.concat([currentPosition])]);
      }
    }
  }
}

function isValidPosition(position) {
  // Check if the position is an array and has the length of two
  if (!Array.isArray(position) || position.length < 2) return false;

  //   Check if the position still points inside the board
  if (position[0] < 0 && position[0] > 7 && position[1] < 0 && position[1] > 7)
    return false;

  return true;
}
