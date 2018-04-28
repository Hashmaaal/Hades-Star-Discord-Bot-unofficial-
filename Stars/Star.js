function Star (type, access) {
    var _access = access || "private";
    var _type = type;
    
    this.getAccess = function () { return _access; };
    this.getType = function () { return _type; };
}

module.exports = Star;