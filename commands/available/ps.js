const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
        const am_embed =  new MessageEmbed()
        .setColor("#a1c6db")
        .setTitle("About Project Seasons")
        .setDescription("Project Seasons is an expansion to Fable. \nIt adds hours of new content including new maps, gameplay mechanics, weapons, armour, collectibles, riddles, lore and much more. This mod does not alter or interfere with the base game, so you can play both without any issues.")
        .addField("Download", "[Project Seasons](https://www.nexusmods.com/fablethelostchapters/mods/122?tab=files&file_id=594) from nexusmods.")
        .addField("Installation","1) Replace the game files with the mod files by drag and dropping the files inside the .zip archive inside the game's folder. \n2) Go to [Game's Directory]/Data/Levels and delete or rename FinalAlbion.wad. (This step is not needed for those who have patched their game levels witch Chocolate Box.)")
        .addField("Details", "3) Although the mods will work with current save files, It is highly recommended to create a new save game then playing the expansions. \n4) Without a new save game many bugs may occur and some features will be disabled. \n5) Beware, the mod works only with the English version of the game!")
        .setImage("https://staticdelivery.nexusmods.com/mods/3310/images/122/122-1606503327-1056857713.jpeg")
        .setFooter("Powered by AeoN", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png")
      
        message.channel.send({embeds: [am_embed]})
};

module.exports.help = {
    name: "ps",
    aliases: ["seasons", "projectseasons"],
    category: "available",
    description: "Return instructions to install one of the best mod ever made for Fable TLC.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};