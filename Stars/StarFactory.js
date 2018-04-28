var Red = require("./Red.js");
var White = require("./White.js");

var RedStrength = require("./RedStrength.js");


module.exports = function (type, lvl) {
    type = type.toLowerCase();
    switch (type) {
        case "red":
        case "rs":
            if (lvl) return new Red(RedStrength[lvl]);
            else return "Impossible de créer une RS sans niveau";
        case "white":
        case "ws":
            return new White();
    }
};