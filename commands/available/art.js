const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
        const fs = require("fs");
        const arttxt = fs.readFileSync("./art.txt", "utf8").split('\n');
        const randomart = Math.floor(Math.random() * arttxt.length);
        const artpost = arttxt[randomart].replace(/\\n/g, '\n');
        const artpost_embed =  new MessageEmbed()
        .setColor("#a1c6db")
        .setTitle("Community art and more")
        .setDescription("Join the [support server](https://discord.gg/Ka8CNt6) if you want to add some art to the command, and gain more renown.\nHere is your piece of art:")
        .setImage(artpost)
        .setFooter("Powered by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png")
        message.channel.send({embeds: [artpost_embed]})
};

module.exports.help = {
    name: "art",
    aliases: ["pic", "picture", "arts"],
    category: "available",
    description: "Return a random piece of Fable art.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};