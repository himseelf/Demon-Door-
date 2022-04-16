const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
        const fs = require("fs");
        const riddltxt = fs.readFileSync("./riddl.txt", "utf8").split('\n');
        const randomriddle = Math.floor(Math.random() * riddltxt.length);
        const riddlepost = riddltxt[randomriddle].replace(/\\n/g, '\n');
        const riddlpost_embed =  new MessageEmbed()
        .setColor("#a1c6db")
        .setTitle("Here is my question:")
        .setDescription(riddlepost)
        message.channel.send({embeds: [riddlpost_embed]})

};

module.exports.help = {
    name: "riddle",
    aliases: ["quiz", "riddles", "game"],
    category: "public",
    description: "Random riddles about Fable games lore.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};