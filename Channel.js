const StarFactory = require("./Stars/StarFactory.js");
const prefix = require("./config.js").prefix;
var _channels = {};

function Channel () {
    var self = this;
    var _star;
    
    /**
     * @description Configurate the channel for a star
     * @param {Array} args
     */
    this.config = function (args) {
        _star = StarFactory(args[0], args[1]);
        return {status:true, message:_star.info()};
    };
    /**
     * @description The bot is call from this channel
     * @param {object} message
     */
    this.bot = function (message) {
        var args = message.content.slice(prefix.length).trim().split(/ +/g);
        var command = args.shift().toLowerCase();
        var instructions = self.getInstructions();
        var response;
        
        for (var i in instructions)
            if (i === command) {
                if (i !== "config") {
                    response = instructions[i].apply(_star, args.concat(message.author));
                } else response = instructions[i](args.concat(message.author));
            }
        
        if (!response.status) message.channel.send("**" + response.message + "**");
        else {
            if (!response.interval) message.reply(response.message);
            else {
                var t = response.interval;
                var interval = setInterval(function () {
                    if (t === response.interval) {
                        message.channel.send(response.start);
                        t--;
                    } else if (t > 0) {
                        message.channel.send(t);
                        t--;
                    } else {
                        message.channel.send(response.end);
                        clearInterval(interval);
                    }
                }, response.each * 1000);
            }
        }
    };
    /**
     * @description Get all instructions for this channel
     * @returns {object}
     */
    this.getInstructions = function () {
        var instructions = { "config": self.config };
        if (_star) {
            var _starInstructions = _star.getInstructions();
            for (var i in _starInstructions) {
                if (i !== "config") instructions[i] = _starInstructions[i];
            }
        }
        return instructions;
    };
};

/**
 * @description Tells if a channel exist or not
 * @param {string} channel
 * @returns {Boolean}
 */
Channel.exist = function (channel) {
    return (_channels[channel] ? true : false);
};
/**
 * @description Create a new channel
 * @param {type} channel
 */
Channel.create = function (channel) {
    _channels[channel] = new Channel();
};
/**
 * @description The bot is called from a channel
 * @param {string} channel The name of the channel
 * @param {object} message
 */
Channel.bot = function (channel, message) { _channels[channel].bot(message); };

module.exports = Channel;