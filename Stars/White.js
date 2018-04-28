var StarAccess = require("./StarAccess.js");
var Star = require("./Star.js");

/**
 * @description A White star. Launched only on private.
 */
function White () {
    Star.call(this, StarAccess.white);
}

module.exports = White;