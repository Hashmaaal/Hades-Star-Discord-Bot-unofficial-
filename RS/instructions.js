var _attente = [];

/**
 * @description Add a player to the next RS
 * @param {object} message
 */
function add (message) {
    /*if (notFull(attente)) {*/
    if (_attente.indexOf(message.author) === -1) {
        _attente.push(message.author);
        message.reply("Tu es en attente pour la prochaine rs.");
    } else {
        message.reply("Tu es déjà dans la liste d'attente pour la prochaine rs.");
    }
    /*}*/
}
/**
 * @description Remove a player from the next RS
 * @param {object} message
 */
function remove (message) {
    if (_attente.length > 0 && _attente.indexOf(message.author) !== -1) {
        _attente.splice(_attente.indexOf(message.author), 1);
        message.reply("Tu ne fais plus partie de l'attente.");
    } else {
        message.reply("Tu n'est dans aucune liste d'attente.");
    }
}
/**
 * @description Show the current RS
 * @param {object} message
 */
function list (message) {
    if (_attente.length > 0) {
        message.reply("Il y a **"+ _attente +"**  qui attendent.");
    } else {
        message.reply('Personne en attente pour une rs.');
    }
}
/**
 * @description Start the timer for the RS
 * @param {object} message
 */
function start (message) {
    if(_attente.length > 0) {
        message.channel.send('Il y a : **' + _attente + '** joueurs, lancez le scan dans 10s.');
        var second = 10;
        var interval = setInterval(function () {
            if (second > 0) {
                message.channel.send(second);
                second--;
            } else {
                message.channel.send('__**Lancez le scan.**__');
                _attente = [];
                clearInterval(interval);
            }
        }, 1000);
    } else {
            message.reply('Personne en attente pour une rs.');
    }
}
/**
 * @description Prompt the help message
 * @param {type} message
 */
function help (message) {
    message.channel.send("Pour utiliser le bot rs, il te faut connaitre certaines commandes :\n !in et !out pour entrer / sortir de l'attente pour une rs,\n !q pour voir qui est en attente, et aussi pour appeler les participants,\n !start pour lancer la rs de force.");
}

module.exports = {
    "!in": add,
    "!out": remove,
    "!q": list,
    "!start": start,
    "!helpRS": help
};