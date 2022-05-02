const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message,  args) => {
 const credit_embed =  new MessageEmbed()
    .setColor("#a1c6db")
    .setTitle("The greatest heroes of Albion")
    .setDescription("Thanks to all of those who contributed in any way to the project!")
    .addField("Ressources", "AeoN [Discord](https://discord.gg/NsWU72Vr6m), Avarice [Youtube](https://www.youtube.com/channel/UCrar6lN4P4tNeGG4UVt9CzQ), Eurogamer [Website](https://www.eurogamer.net/), fable.fandom.com [Website](https://fable.fandom.com/wiki/Main_Page), FableQuotes [Youtube](https://www.youtube.com/channel/UC5xCpTceaE4LZaj14mqPgIw/videos), Microsoft© [Website](https://www.microsoft.com), Skyrionn [Youtube](https://www.youtube.com/user/Skyrionn/videos), The Fable Historian [Youtube](https://www.youtube.com/channel/UCkO1sigUpQf0HiHXN8qSoMg), xOneManLegacy [Youtube](https://www.youtube.com/user/xOneManLegacy).")
    .addField("Art Makers", "Ben_Jovi, Honolex, Killwa111, king_jest, Tinalbion [Instagram](https://www.instagram.com/tinalbion/), Vexillifer.")
    .setImage("https://images-ext-1.discordapp.net/external/4gGDx_V1AlnrNViKEAL01wLnJx3isa-5DRKE3y6FmKE/%3Fcb%3D20141001051811/https/vignette.wikia.nocookie.net/steamtradingcards/images/4/47/Fable_Anniversary_Artwork_5.jpg/revision/latest?width=1062&height=597")
    .setFooter("Made by the Fable Community (ISC)", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");

    message.channel.send({embeds: [credit_embed]})
};

module.exports.help = {
    name: "credit",
    aliases: ["copyrights", "license", "mit", "credits", "isc"],
    category: "available",
    description: "Return thanks and copyrights details about those who helped us making this project.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};