/* eslint pure/pure: 2 */
// should complain
const garn = "123";

// should complain from plugin
function unpure(array) {
  array.push(1);
  return 1;
}

unpure([]);
