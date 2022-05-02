const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
        const am_embed =  new MessageEmbed()
        .setColor("#a1c6db")
        .setTitle("About Anniversary Modding")
        .setDescription("To start world editing with Anniversary: \n-You must have Fable Anniversary on Steam as well as Fable TLC. \n-Download the modding DLC (for cosmetic changes).\n-And the mod package provided below that includes FA-Symblinker, updated Def file, updated ShadowNet and Freeroam 0.1.")
        .addField("Watch the full tutorial","[Click here to watch the video guide](https://www.youtube.com/watch?v=-GoY4-dn7Hc&list=PLYyUOBD-Jzmzx-j4AxpyjeTJfWQxRrdw7).")
        .addField("Ressources", "Mod package:\n[Click here to download the package](https://drive.google.com/file/d/1sGEaSjcOQmcd3bCv3-4RjZURP6KLgtC2/view).\n-Ways to link the folders:\nNew-Item -ItemType SymbolicLink -Path `Link` -Target `Target`")
        .setImage("https://th.bing.com/th/id/R31337325d3a5c42c9c1462eaefbfd13c?rik=7m%2b9XI4LwIkgLQ&riu=http%3a%2f%2fwww.htxt.co.za%2fwp-content%2fuploads%2f2014%2f03%2fFable-Anniversary.jpg&ehk=PRkZCRkU6knLsrY%2bgrJENPoVdx0s0xFI1mdWGNd%2bd7c%3d&risl=&pid=ImgRaw")
        .setFooter("Powered by xOneManLegacy", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png")
      
        message.channel.send({embeds: [am_embed]})
};

module.exports.help = {
    name: "am",
    aliases: ["anniversarymodding", "anniversary", "fa"],
    category: "available",
    description: "Return a guide to begin with Fable Anniversary modding and more.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};