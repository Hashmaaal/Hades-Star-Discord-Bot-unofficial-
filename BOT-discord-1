const Discord = require('discord.js')

var bot = new Discord.Client()
var attente = new Array(7)  // nb de pers en att pour CHAQUE niv de rs. |idem que en dessous|
var tblatt = new Array([7][4])  // pers en att ------------------------ (-1 car commence à 0)

for(var i = 0; i<7; i++)
    attente[i] = 0

bot.login() 

bot.on('ready', function() {
    //bot.user.setAvatar('./image.jpg')
    bot.user.setActivity("!helpRS pour aide")
}) 

bot.on('message', function (message) {

    if(message.content == '!in')    //tblatt[place dans la fille d'att][niveau de rs]
    {
        message.reply('Tu es en attente pour la prochaine rs.')  
        switch(message.channel.name)
        {
            case "rs1":
            {
                tblatt[attente[0],0] = message.author
                attente[0]++
                break;
            }

            case "rs2":
            {
                tblatt[attente[1],1] = message.author
                attente[1]++
                break;
            }

            case "rs3":
            {
                tblatt[attente[2],2] = message.author
                attente[2]++
                break;
            }
            
            case "rs4":
            {
                tblatt[attente[3],3] = message.author
                attente[3]++
                break;
            }

            case "rs5":
            {
                tblatt[attente[4],4] = message.author
                attente[4]++
                break;
            }

            case "rs6":
            {
                tblatt[attente[5],5] = message.author
                attente[5]++
                break;
            }

            case "rs7":
            {
                tblatt[attente[6],6] = message.author
                attente[6]++
                break;
            }

            case "rs8":
            {
                tblatt[attente[7],7] = message.author
                attente[7]++
                break;
            }
            
        }
        message.channel.send('attente : '+attente)
    }
    
    if(message.content == '!out')    // le filter regardera tte ligne et cologne, donc pas besoin de refaire comme au dessus sauf pour attente[]..
    {
        switch(message.channel.name)
        {
            case 'rs1':
            {
                attente[1]--
                break;
            }

            case 'rs2':
            {
                attente[2]--
                break;
            }

            case 'rs3':
            {
                attente[3]--
                break;
            }
            
            case 'rs4':
            {
                attente[4]--
                break;
            }

            case 'rs5':
            {
                attente[5]--
                break;
            }

            case 'rs6':
            {
                attente[6]--
                break;
            }

            case 'rs7':
            {
                attente[7]--
                break;
            }

            case 'rs8':
            {
                attente[8]--
                break;
            }

        }
        message.reply("Tu ne fais plus partie de l'attente.")
        tblatt = tblatt.filter(x => x != message.author)
    }
    

    if(message.content == '!q')
    {
        switch(message.channel.name)
        {
            case 'rs1':    
            {
                message.channel.send("il y a : \n"+tblatt[0,0]+"\n"+tblatt[0,1]+"\n"+tblatt[0,2]+"\n"+tblatt[0,3]+"\n"+tblatt[0,4])
                break;
            }

            case 'rs2':
            {
                message.channel.send("il y a : "+tblatt[1,0]+"\n"+tblatt[1,1]+"\n"+tblatt[1,2]+"\n"+tblatt[1,3]+"\n"+tblatt[1,4])
                break;
            }

            case 'rs3':
            {
                message.channel.send("il y a : "+tblatt[2,0]+"\n"+tblatt[2,1]+"\n"+tblatt[2,2]+"\n"+tblatt[2,3]+"\n"+tblatt[2,4])
                break;
            }
            
            case 'rs4':
            {
                message.channel.send("il y a : "+tblatt[3,0]+"\n"+tblatt[3,1]+"\n"+tblatt[3,2]+"\n"+tblatt[3,3]+"\n"+tblatt[3,4])
                break;
            }

            case 'rs5':
            {
                message.channel.send("il y a : "+tblatt[4,0]+"\n"+tblatt[4,1]+"\n"+tblatt[4,2]+"\n"+tblatt[4,3]+"\n"+tblatt[4,4])
                break;
            }

            case 'rs6':
            {
                message.channel.send("il y a : "+tblatt[5,0]+"\n"+tblatt[5,1]+"\n"+tblatt[5,2]+"\n"+tblatt[5,3]+"\n"+tblatt[5,4])
                break;
            }

            case 'rs7':
            {
                message.channel.send("il y a : "+tblatt[6,0]+"\n"+tblatt[6,1]+"\n"+tblatt[6,2]+"\n"+tblatt[6,3]+"\n"+tblatt[6,4])
                break;
            }

            case 'rs8':
            {
                message.channel.send("il y a : "+tblatt[7,0]+"\n"+tblatt[7,1]+"\n"+tblatt[7,2]+"\n"+tblatt[7,3]+"\n"+tblatt[7,4])
                break;
            } 
        } 
    }

    if(message.content == '!start')
    {
        switch(message.channel.name)
        {
            case 'rs1':
            {
                message.channel.send('Il y a : **' + attente[0] + '** joueurs, lancez le scan dans **10s**.')
                attente[0] = 0
                setTimeout(() => {                //delai 10s
                    message.channel.send('__**Lancez le scan.**__') 
                }, 10000)
                break
            }

            case 'rs2':
            {
                message.channel.send('Il y a : **' + attente[1] + '** joueurs, lancez le scan dans **10s**.')
                attente[1] = 0
                setTimeout(() => {                //delai 10s
                    message.channel.send('__**Lancez le scan.**__') 
                }, 10000)
                break
            }

            case 'rs3':
            {
                message.channel.send('Il y a : **' + attente[2] + '** joueurs, lancez le scan dans **10s**.')
                attente[2] = 0
                setTimeout(() => {                //delai 10s
                    message.channel.send('__**Lancez le scan.**__') 
                }, 10000)
                break
            }
            
            case 'rs4':
            {
                message.channel.send('Il y a : **' + attente[3] + '** joueurs, lancez le scan dans **10s**.')
                attente[3] = 0
                setTimeout(() => {                //delai 10s
                    message.channel.send('__**Lancez le scan.**__') 
                }, 10000)
                break
            }

            case 'rs5':
            {
                message.channel.send('Il y a : **' + attente[4] + '** joueurs, lancez le scan dans **10s**.')
                attente[4] = 0
                setTimeout(() => {                //delai 10s
                    message.channel.send('__**Lancez le scan.**__') 
                }, 10000)
                break
            }

            case 'rs6':
            {
                message.channel.send('Il y a : **' + attente[5] + '** joueurs, lancez le scan dans **10s**.')
                attente[5] = 0
                setTimeout(() => {                //delai 10s
                    message.channel.send('__**Lancez le scan.**__') 
                }, 10000)
                break
            }

            case 'rs7':
            {
                message.channel.send('Il y a : **' + attente[6] + '** joueurs, lancez le scan dans **10s**.')
                attente[6] = 0
                setTimeout(() => {                //delai 10s
                    message.channel.send('__**Lancez le scan.**__') 
                }, 10000)
                break
            }
            case 'rs8':
            {
                message.channel.send('Il y a : **' + attente[7] + '** joueurs, lancez le scan dans **10s**.')
                attente[7] = 0
                setTimeout(() => {                //delai 10s
                    message.channel.send('__**Lancez le scan.**__') 
                }, 10000)
                break
            }
        }
    }
    
    

    if(message.content == '!helpRS')
    {
        message.channel.send("Pour utiliser le bot rs, il te faut connaitre certaines commandes :\n !in et !out pour entrer / sortir de l'attente pour une rs\n !q pour voir qui est en attente, et aussi pour appeler les participants,\n !start pour lancer la rs de force.")
    }
    
});
