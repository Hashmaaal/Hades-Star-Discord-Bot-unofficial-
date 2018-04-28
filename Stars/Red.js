var Star = require("./Star.js");
var StarAccess = require("./StarAccess.js");

/**
 * @description A Red star. Launched in public or private.
 * @param {number} strength The number of maximum player available in this Red star.
 */
function Red (strength) {
    Star.call(this, "Red", StarAccess.red);
    var self = this;
    
    var maxPlayer = strength;
    var _players = [];
    var _ready = [];
    
    /**
     * @description Add a player to the list of players
     * @param {string} player
     */
    this.add = function (player) {
        if (_players.length < maxPlayer) {
            if (_players.indexOf(player.id) === -1) {
                _players.push(player.id);
                return {status:true, message:"<@" + player.id + "> a bien été ajouté à la liste."};
            } else 
                return {status:false, message:"C'est bon tu es déjà dedans."};
        } else return {status:false, message:"Impossible d'ajouter, la liste est pleine."};
    };
    /**
     * @description Remove a player from the list of players
     * @param {string} player
     */
    this.remove = function (player) {
        if (_players.length === 0)return {status:false, message:"Impossible d'enlever, la liste est vide."};
        if (_players.indexOf(player.id) !== -1) { /* Le player existe bien dans la liste */
            _players.splice(_players.indexOf(player.id), 1);
            return {status:true, message:player + " a été retiré de la liste."};
        } else return {status: false, message:player + " n'est pas dans la liste."};
    };
    /**
     * @description Give the list of players for the next RS
     * @returns {String}
     */
    this.list = function () {
        return {
            status:true, 
            message:(
                    _players.length > 0 ?
                    "<@" + _players.join(">, <@") + (_players.length === 1 ? "> " : " ") + (_players.length > 1 ? "sont" : "est") + " sur la liste de la prochaine RS." :
                    "Il n'y a personne dans la liste d'attente pour l'instant."
                    )
        };
    };
    /**
     * @description Tells that this player is ready. If all players are ready trigger the start function
     * @param {type} player
     */
    this.ready = function (player) {
        if (_players.indexOf(player.id) === -1) return {status:false, message:player + " n'est pas dans la liste d'attente."};
        if (_ready.indexOf(player.id) !== -1) 
            return {
                status:true, 
                message: "Oui tu l'as déjà dit.\n<@" + _players.filter(playerId => _ready.indexOf(playerId) === -1).join(">, <@") + " on vous attend pour jouer."
            };
        else {
            _ready.push(player);
            if (_ready.length === _players.length) return self.start();
            else return {status:true, message:player + " est prêt."};
        }
    };
    /**
     * @description Inform all player that the RS is launching
     */
    this.start = function () {
        return {
            status:true,
            message:"Recherchez la RS !",
            interval: 10,
            each: 1,
            start:"<@" + _players.join(">, <@") + (_players.length === 1 ? ">" : "") + " lancez le scan dans **10s**.",
            end:"__**Lancez le scan.**__"
        };
    };
    /**
     * @description Give the instructions to add to the channel
     */
    this.getInstructions = function () {
        return {
            "in": self.add,
            "out": self.remove,
            "q": self.list,
            "ready": self.ready,
            "start": self.start
        };
    };
    /**
     * @description Give some info about the Star
     * @returns {String}
     */
    this.info = function () {
        return self.getType() + " star avec un maximum de " + maxPlayer + " joueur.";
    };
}

module.exports = Red;