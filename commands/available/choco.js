const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
        const chocoguide_embed =  new MessageEmbed()
        .setColor("#a1c6db")
        .setTitle("About ChocolateBox")
        .setDescription("ChocolateBox gives you the capability to edit the game world by having a window that allows you to visually interact with objects in the game's maps by adding, moving, deleting and editing objects in the world of Albion as well as collision control, tng property control and the ability to copy/duplicate objects.\nIt even includes the ability to control the camera when viewing a 3D Model and an Object Builder function to help you make your own objects a lot easier by using another object as a template.")
        .addField("Installing ChocolateBox", "1) Download Cbox.zip [click here](http://www.mediafire.com/file/vneij8890szoe3x/cbox.zip/file).\n2) Extract it into its own folder.\n3) Download the ChocolateBox-x64.exe file [click here](http://www.mediafire.com/file/bzsln506gng8o4c/ChocolateBox-x64.exe/file).\n4) Put it into the same folder.\n5) Install .Net Framework 4.8 [click here](https://dotnet.microsoft.com/download/dotnet-framework/net48).\n6) Install DirectX Runtime [click here](https://www.microsoft.com/en-us/download/details.aspx?id=35).\n7) Change Directory of config, file if you are using the Steam version.")
        .addField("Watch the install tutorial", "[Click here to watch the video guide](https://www.youtube.com/watch?v=MuBH3i3qdc8).")
        .addField("Watch the mapping tutorial", "[Click here to watch the video guide](https://www.youtube.com/watch?v=Do5YOLf0ur0).")
        .setImage("https://images-ext-2.discordapp.net/external/eIG7G8BOhBIZKooWo7eHUm154boYIWl-UTAxx1wiRMo/https/i.pinimg.com/originals/b8/03/c4/b803c40816bddacde862cf87e59642b5.jpg?width=955&height=597")
        .setFooter("Powered by Avarice & AeoN", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");
      
        message.channel.send({embeds: [chocoguide_embed]})
};

module.exports.help = {
    name: "choco",
    aliases: ["chocolatebox", "cb", "chocolate"],
    category: "available",
    description: "Return a guide to install ChocolateBox and more.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};