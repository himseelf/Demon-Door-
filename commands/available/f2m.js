const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
        const am_embed =  new MessageEmbed()
        .setColor("#a1c6db")
        .setTitle("About Fable2 Modding")
        .setDescription("Guides and ressources to get you started with Fable2 modding.")
        .addField("Script Modding Tutorial","[Click here to watch the video guide](https://www.youtube.com/watch?v=Gvi9v9_c6KY). \n-If you are using goty/platinum hits (v10.1) you MUST add the external scripts path to a file called dir.manifest in the data folder! \n-When you dump the game with a USB you do NOT get it in loose/xex format and are instead presented with a 'Content' folder. \n-You need to convert it from 'GoD' to 'ISO',  then to 'XEX' to follow this tutorial. (see ressources for guide)")
        .addField("Ressources", "[ISO convertion guide](https://youtu.be/4ALyB36Gnes?t=200).")
        .setImage("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages5.alphacoders.com%2F377%2Fthumb-1920-377907.jpg&f=1&nofb=1")
        .setFooter("Powered by JustSomeGuy", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png")
      
        message.channel.send({embeds: [am_embed]})
};

module.exports.help = {
    name: "f2m",
    aliases: ["fable2modding", "fable2m"],
    category: "available",
    description: "Return a guide to begin with Fable 2 modding and more.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};