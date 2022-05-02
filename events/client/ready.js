const { MessageEmbed } = require("discord.js");

module.exports = client => {
    const onlineEmbed = new MessageEmbed()
    .setTitle(`${client.user.tag} is back online!`)
    .setDescription("Hello heroes, you can use `.help` to see my powers.")
    .setColor("#5fc58b")
    .setThumbnail("https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png")
    .setTimestamp()
    .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");
    client.guilds.cache.forEach(guild => { 
        const logChannel = guild.channels.cache.find(x => x.name === "logs");
        if (logChannel) {
            logChannel.send({embeds: [onlineEmbed]})
        } else {
            return;
         }
       });
    console.log({Starting: `${client.user.tag} is online!`});
}

