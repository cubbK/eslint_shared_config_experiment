/* eslint pure/pure: 2 */
// eslint should complain because the variable is unused
const fragment = 123123123;

// should complain from plugin
function unpure_fragment(array) {
  array.push(1);
}

unpure_fragment([]);
