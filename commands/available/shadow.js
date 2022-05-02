const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const shadowguide_embed =  new MessageEmbed()
        .setColor("#a1c6db")
        .setTitle("About ShadowNet")
        .setDescription("To put it simply, Shadownet is a program that allows the user to analyze certain parts of the game's data and edit them how they see fit. Let's say you want to change the colour of a piece of armour or edit the damage values of a certain weapon, this is the program that allows you to do that. It doesn't have too many steps in order to get it to work, but you do have some extra things to do if you want it running on a Steam version of the game.")
        .addField("Installing ShadowNet", "1) Download ShadowNet.zip [click here](http://www.mediafire.com/file/ujoz03l3f5grxlt/ShadowNet.zip/file).\n2) Extract it into its own folder.\n3) Download the Def.xml file [click here](https://www.nexusmods.com/fablethelostchapters/mods/445?tab=files).\n4) Put it into the same folder.\n5) If it still won't work, install .Net Framework 4.8 [click here](https://dotnet.microsoft.com/download/dotnet-framework/net48).")
        .addField("Watch the install tutorial", "[Click here to watch the video guide](https://www.youtube.com/watch?v=tzZB0a0l7oM).")
        .setImage("https://images-ext-2.discordapp.net/external/eIG7G8BOhBIZKooWo7eHUm154boYIWl-UTAxx1wiRMo/https/i.pinimg.com/originals/b8/03/c4/b803c40816bddacde862cf87e59642b5.jpg?width=955&height=597")
        .setFooter("Powered by Avarice", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");
      
        message.channel.send({embeds: [shadowguide_embed]})
    };

module.exports.help = {
    name: "shadow",
    aliases: ["shadownet", "sn"],
    category: "available",
    description: "Return a guide for shadow net install and more.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};