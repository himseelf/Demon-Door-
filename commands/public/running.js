const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const shadowguide_embed =  new MessageEmbed()
        .setColor("#a1c6db")
        .setTitle("Fable Speedrunning")
        .setDescription("Do not hesitate to join the official [Fable Speedrunning](https://discord.gg/Sv8P6Ef) server if you want to become the best runner, however, you will find the starter pack under this message.")
        .addField("Speedrun Guides", "-[Xbox Guides](https://www.speedrun.com/fablexbox/guides).\n-[TLC Guides](https://www.speedrun.com/fabletlc/guides).\n-[Anniversary Guides](https://www.speedrun.com/anniversary/guides).\n-[Fable II Guides](https://www.speedrun.com/fable_2/guides).\n-[Fable III Guides](https://www.speedrun.com/fable_3/guides).")
        .setImage("https://images-ext-2.discordapp.net/external/0wXjl9lduo8Q5kGjotc__6dXhs4V1H3hV-weTz7MFCg/https/i.pinimg.com/originals/02/0f/96/020f96f812638030d2ec713e42fe8853.jpg?width=954&height=596")
        .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");
      
        message.channel.send({embeds: [shadowguide_embed]})
    };

module.exports.help = {
    name: "running",
    aliases: ["speedrunning", "sr", "run"],
    category: "public",
    description: "Return a guide to help you to begin with Fable speedrunning skills and tools.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};