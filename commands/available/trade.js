const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config");

module.exports.run = (client, message, args) => {
    if (!args.length) {
        message.channel.send("Please provide more details to send your trading offer. \nExample: `.trade [fable2 item1 for item2]`.")
        } else {

            const trader = message.author;
            const joinTrader = message.url
            const helpLocation = message.channel;
            const inGuild = message.guild.name;
            const questionArgs = message.content.slice(PREFIX.length).trim().split();

            const tradeEmbed = new MessageEmbed()
            .setColor("#a1c6db")
            .setTitle("New Trading Offer!")
            .setURL(joinTrader)
            .setDescription(`[${trader}] is looking for a trade:`)
            .addField("Details", `${questionArgs}`)
            .addField("Guild", `${inGuild}`)
            .addField("Channel", `${helpLocation}`)
            .setImage("https://i.ytimg.com/vi/x-WzFkAD_VU/maxresdefault.jpg")
            .setTimestamp()
            .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");

            client.guilds.cache.forEach(guild => {

                const logChannel = guild.channels.cache.find(x => x.name === "fable-trades");

                if (logChannel) {
                logChannel.send({embeds: [tradeEmbed]})
                } else {
                    return console.log("Trade error: verify channel names!");
                }
            })
            message.channel.send("Your offer has been sended!")}
};

module.exports.help = {
    name: "trade",
    aliases: ["announce", "trades"],
    category: "available",
    description: "Share your trading offers with all Demon Door users, so you may find easily someone to trade with.",
    cooldown: 20,
    usage: "[details]",
    isUserAdmin: false,
    permissions: false,
    args: false
}