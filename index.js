// Left-Handed Seat at the Table
// Given a 4x2 matrix (array of arrays) representing the seating arrangement for a meal, determine how many seats a left-handed person can sit at.

// A left-handed person cannot sit where a right-handed person would be in the seat to the immediate left of them.
// In the given matrix:

// An "R" is a seat occupied by a right-handed person.
// An "L" is a seat occupied by a left-handed person.
// A "U" is an unoccupied seat.
// Only unoccupied seats are available to sit at.
// The seats in the top row are facing "down", and the seats in the bottom row are facing "up" (like a table), so left and right are relative to the seat's orientation.
// Corner seats only have one seat next to them.
// For example, in the given matrix:

// [
//   ["U", "R", "U", "L"],
//   ["U", "R", "R", "R"]
// ]
// The top-left seat is cannot be sat in because there's a right-handed person to the left. The other two open seats can be sat in because there isn't a right-handed person to the left.

function findLeftHandedSeats(table) {
  console.log(table);

  // left-handed person cannot sit to left of right-handed person
  // "L" - "R" NO!

  // reverse first inner arr?
  const reversed = table[0].reverse();
  console.log(reversed);
  console.log(table[1]);

  // count how many seats a lefthanded person can sit at, find the "U"s
  let counter = 0;

  for (let i = 0; i < 4; i++) {
    if (reversed[i] === 'U' || table[1][i] === 'U') {
      if (reversed[i - 1] !== 'R' || table[1][i] !== 'R' || null) {
        counter++;
      }
    }
  }

  console.log(counter);
  return counter;

  // flaten map?
  // handling edge cases?
  // just find "U"s and check if the rightside is an "R"

  // return table;
}
