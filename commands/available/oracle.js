const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
        const oracl_embed =  new MessageEmbed()
        .setColor("#a1c6db")
        .setTitle("Riddle Answers")
        .setDescription("[1] Three \n[2] Weaver \n[3] Skorm \n[4] Avo \n[5] Books \n[6] Maze \n[7] Scarlet Robbe \n[8] hobbes \n[9] Blue \n[10] Queen \n[11] Oakvale \n[12] Trolls \n[13] The Spire \n[14] The Void \n[15] Gold \n[16] Trogdor \n[17] Succubus \n[18] Ralph \n[19] Maxley \n[20] Whisper \n[21] Sacrifice")
        .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");
      
        message.author.send({embeds: [oracl_embed]})
        message.channel.send("Answer list has been send.")
};

module.exports.help = {
    name: "oracle",
    aliases: ["answer", "book"],
    category: "available",
    description: "Return the list of good answers for the riddle command.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: true,
    args: false
};