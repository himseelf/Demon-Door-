const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const froam_embed =  new MessageEmbed()
        .setColor("#a1c6db")
        .setTitle("About FreeRoam")
        .setDescription("the FreeRoam App, which is fairly small in comparison to other mods you might have installed, still serves a great purposes for those who can't get the ChocolateBox program running or anyone who wants to walk outside the boundaries of a map. As the name of this mod suggests, it allows you to roam freely outside the intended parts of the maps. This can be great fun for people who want to take a few screenshots, make a mod that edits the space outside the intended map area or just to see Albion from a different perspective.")
        .addField("Installing FreeRoam", "1) Download the zip file [click here](http://www.mediafire.com/file/3k68slsiaybhjyt/freeroam.zip/file).\n2) Extract it into its own folder.\n3) Open the new .exe file you just extracted.\n4) Press file and then open at the top of the window that pops up.\n5) Look for the .WAD file that is located in your game's level folder.\n6) Once that has finished, press the giant 'RIP!' button.\n7) Use the WAD ripper outside the level folder (inside data).")
        .addField("Watch the install tutorial", "[click here to watch the video guide](https://youtu.be/Q4I7d-28qdY).")
        .setImage("https://images-ext-2.discordapp.net/external/eIG7G8BOhBIZKooWo7eHUm154boYIWl-UTAxx1wiRMo/https/i.pinimg.com/originals/b8/03/c4/b803c40816bddacde862cf87e59642b5.jpg?width=955&height=597")
        .setFooter("Powered by Avarice", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");
      
        message.channel.send({embeds: [froam_embed]})
    };

module.exports.help = {
    name: "freeroam",
    aliases: ["fr", "freemod"],
    category: "public",
    description: "Return a guide for FreeRoam tool install and more.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};