const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const mod_embed = new MessageEmbed()
        .setColor("#a1c6db")
        .setTitle("Fable Modding")
        .addField("Before starting", "Backing up your game is simply just copying a fresh installation of the game and pasting it somewhere else on your hard drive.\nJust in case you make any mistakes along the way.\nThis can also be done with modded games.\nFable TLC is over 2GB, so this can be done plenty of times without filling up a modern HDD / SSD.")
        .addField("Tutorial video", "[Back up tutorial video](https://www.youtube.com/watch?v=Aq_6GhKgBJo).")
        .addField("TLC Modding tools", "`.cb` to learn more about ChocolateBox.\n`.fr` to learn more about FreeRoam.\n`.sn` to learn more about ShadowNet.")
        .addField("Anniversary", "`.am` to learn more about Anniversary Modding.")
        .addField("Fable2 Modding tools", "`.f2m` to learn more about fable2 Modding.")
        .setImage("https://images-ext-2.discordapp.net/external/eIG7G8BOhBIZKooWo7eHUm154boYIWl-UTAxx1wiRMo/https/i.pinimg.com/originals/b8/03/c4/b803c40816bddacde862cf87e59642b5.jpg?width=955&height=597")
        .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");
      
        message.channel.send({embeds: [mod_embed]})
};

module.exports.help = {
    name: "modding",
    aliases: ["mod"],
    category: "available",
    description: "Return a guide to help you to begin with Fable modding skills and tools.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};