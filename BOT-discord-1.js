const Discord = require('discord.js');
const login = require('./login.js');
const instructions = require('./RS/instructions.js');

var bot = new Discord.Client();
bot.login(login);

bot.on('ready', function() {
    //bot.user.setAvatar('./image.jpg')
    bot.user.setActivity('!helpRS pour aide');
    console.log("Bot Runing");
}) 

bot.on('message', function (message) {
    for (var i in instructions) {
        if (message.content === i) {
            instructions[i](message);
        }
    }
});
