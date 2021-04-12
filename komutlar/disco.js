const Discord = require("discord.js");
const db = require("megadb");
let server = new db.crearDB('server');

exports.run = async (client, msg, args) => {
  
  let discoR = await server.get(`discorol_${msg.guild.id}`);
  setInterval(() => {
    msg.guild.roles.cache.find(x => x.name === discoR).setColor("RANDOM");
  }, 2000);
  msg.channel.send(
    `⚡ Disco Başladı! ⚡`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["disko"],
  permLevel: 3
};

exports.help = {
  name: "disco",
  description: "Disco",
  usage: "disco"
};
