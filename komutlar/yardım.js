const Discord = require('discord.js')



exports.run = async (client, msg, args) => {

const embed = new Discord.MessageEmbed()
.setDescription(`Zynox Youtube`)
.addField(`Disco Rolü Ayarlamak İçin,`, `r!disco-rol @roletiket`, true)
.addField(`Disco Rolü Başlatmak İçin,`, `r!disco`, true)
.setFooter(`Zynox Youtube`)
.setThumbnail(msg.author.avatarURL({dynamic: true, format : "png"}))
.setTimestamp()
.setColor(`RANDOM`)
 msg.channel.send(embed)


}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help"],
    permLevel: 0
  };
  
  exports.help = {
    name: "yardım"
      };
  