const Discord = require("discord.js");
const db = require("megadb");
let server = new db.crearDB('server');


exports.run = async (client, message, args) => {

  let discorol = message.mentions.roles.first();

  if (!discorol) {
    return message.channel.send(
      ` Disco Rol Olarak Ayarlamak İstediğin Rolü Etiketlemelisin.`
    );
  }

  server.set(`discorol_${message.guild.id}`, discorol.name);

  message.channel.send(`Disco Rolü \`${discorol.name}\` Olarak Ayarlandı.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["disco-rol"],
  kategori: "ayarlar",
  permLevel: 0
};

exports.help = {
  name: "disco-rol-ayarla",
  description: "Disco Rolünü Ayarlar.",
  usage: "disco-rol-ayarla <@rol>"
};
