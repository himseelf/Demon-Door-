const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const stats_embed = new MessageEmbed()
        .setAuthor(`${client.user.username}'s statistics`, client.user.avatarURL())
        .setColor("#a1c6db")
        .setThumbnail("https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png")
        .setTimestamp()
        .addFields(

            { name: 'Memory', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true},
            { name: 'Uptime', value: `${Math.floor(client.uptime / 1000 / 60).toString()} minute(s)`, inline: true},
            { name: '\u200b', value: `\u200b`, inline: true},
            { name: 'Servers', value: `${client.guilds.cache.size.toString()}`, inline: true},
            { name: 'Version', value: `discord.js 13.3.1`, inline: true}
        )
        .setFooter(message.author.username, message.author.avatarURL());
    message.channel.send({embeds: [stats_embed]})
};

module.exports.help = {
    name: "stats",
    aliases: ["stat", "info"],
    category: "available",
    description: "Return some bot stats and details.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: true,
    args: false
};