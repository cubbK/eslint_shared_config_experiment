const garn = require("garn");

garn.lint();
// eslint should complain because the variable is unused
const fragment = 123123123;
