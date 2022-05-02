const { MessageEmbed } = require("discord.js");
const { OwnerID } = require('../../config');

module.exports.run = async (client, message,  args) => {
    if (message.author.id !== OwnerID) return console.log("Eval error: ID does not match!");
    const inGuilds = client.guilds.cache.map((guild) => guild.name + `| ${guild.memberCount}`).join('\n');
    const evalEmbed = new MessageEmbed()
    .setTitle("Server list:")
    .setDescription(inGuilds);
    message.channel.send({embeds: [evalEmbed]});
}

   
module.exports.help = {
    name: "eval",
    aliases: ["admin"],
    category: "available",
    description: "Admin details",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};