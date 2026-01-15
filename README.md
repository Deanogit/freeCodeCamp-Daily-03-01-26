## Left-Handed Seating Parser

A spatial logic utility designed to calculate the number of available seats for left-handed individuals at a rectangular dining table. It accounts for the relative "Left" of each seat based on the sitter's orientation to avoid elbow collisions with right-handed neighbours.

### The Challenge

The table is represented as a 4x2 matrix (two rows of four seats). Because the two rows face each other, the direction of "Left" is mirrored:

    - Top Row (Row 0): Facing "Down" (towards the other row). Their relative left is the person at the higher index (`i + 1`).

    - Bottom Row (Row 1): Facing "Up" (towards the other row). Their relative left is the person at the lower index(`i - 1`).

### Constaints:

    - "R": Right-handed person.
    - "L": Left-handed person.
    - "U": Unoccupied seat (the only available spots).
    - The Rule: A left-handed person cannot sit if there is an "R" to their immediate left.

### Implementation

The solution iterates through both rows. For every unoccupied seat, it checks the relevant neighbour on that row's orientation.

```JavaScript

function findLeftHandedSeats(table) {
  let counter = 0;
  const topRow = table[0];
  const bottomRow = table[1];

  for (let i = 0; i < 4; i++) {
    // Top Row Check
    if (topRow[i] === 'U') {
      // For Top Row, Left is i + 1
      if (topRow[i + 1] !== 'R') {
        counter++;
      }
    }

    // Bottom Row Check
    if (bottomRow[i] === 'U') {
      // For Bottom Row, Left is i - 1
      if (bottomRow[i - 1] !== 'R') {
        counter++;
      }
    }
  }

  return counter;
}
```

### What I Learned

1. Relative Orientation Logic
   I learned that when working with 2D arrays representing physical spaces, "left" and "right" are often relative. By identifying that the top row's left is `i + 1` and the bottom row's left is `i - 1`, I avoided complex array transformations like reversing or rotating the data.

2. Defensive Inequality Checks
   I used `!== "R"` check. This is more robust than checking if a seat is "U" or "L" because it also correctly handles `undefined`. When checking the edge of the table (like index `4` or index `-1`), JavaScript returns `undefined`. Since `undefined` is not `R`, the code correctly identifies corner seats as safe.

3. Avoiding Matrix Mutation
   Initially, I considered using `.reverse()` on the first row. However, I learned that `.reverse()` mutates the original array in place. By accessing the indiced directly based on logic, I kept the input data pure and the function free of side effects.
