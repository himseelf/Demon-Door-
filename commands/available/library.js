const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  const item_embed =  new MessageEmbed()
  .setColor("#a1c6db")
  .setTitle("Fable Games library")
  .setThumbnail("https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png")
  .setDescription("Do not hesitate to join the [support server](https://discord.gg/Ka8CNt6) if you found useful Fable games materials to share with the community, we will make sure it is featured in this command.")
  .addField("Anniversary Files", "-InGame icons and more PNJ's by Etem [click here](https://drive.google.com/file/d/1-ZUvNk2l5xI3GBWWcWHVyIo7joqUiRAn/view?usp=sharing).")
  .addField("Fable Font", "-Fable 2 Font by fel64 [click here](https://drive.google.com/file/d/1-UUf3ZlAHLm--V9nTMZJXzvOXU8jIA28/view?usp=sharing).")
  .addField("Lionhead Studios", "-The inside story by Eurogamer [click here](https://www.eurogamer.net/articles/2016-05-12-lionhead-the-inside-story).")
  .addField("Soundtrack", "-All Fable games musics by Russell Shaw [click here](https://www.youtube.com/channel/UCPv_a8IakkTobNaMRoJbVTA/playlists).")
  .addField("TLC CutContent", "-CutQuest guide by AeoN [click here](https://discord.com/channels/724886463858212867/754445560907431988/777581276370698281).\n-Restored content by Avarice [click here](https://www.youtube.com/watch?v=_eIb9YDSu4o&list=PLPOVgJGt6qPdsCZzot0LtnUU5fI0JBWoj).")
  .addField("TLC Files", "-InGame icons and more PNJ's by Etem [click here](https://drive.google.com/file/d/1ElYrpNqIkEAykYljGrRNZtBGnEotiTiE/view).")
  .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");

  message.channel.send({embeds: [item_embed]})
};


module.exports.help = {
    name: "library",
    aliases: ["item", "lib","items"],
    category: "available",
    description: "Return Fable goodies extracted from the game files, and others related materials.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};