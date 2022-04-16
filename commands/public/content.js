const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
    const content_embed = new MessageEmbed()
      .setColor("#a1c6db")
      .setTitle("Community Links")
      .setDescription("Your path trought Albion is only starting. There is many servers to explore around here, like the [Fable Fans Guild](https://discord.gg/xQX5d77zuh) and the populated [Fable](https://discord.gg/W9SBFj7rJ2) community. But you may also look for specific places for your Fable related projects, or simply satisfy your curiosity.")
      .addField("Lore","\n-Skyrionn [Youtube](https://www.youtube.com/user/Skyrionn/videos).\n-The Fable Historian [Youtube](https://www.youtube.com/channel/UCkO1sigUpQf0HiHXN8qSoMg).")
      .addField("Modding", "-Avarice [Discord](https://discord.gg/aP8ynwE).\n-Avarice [Youtube](https://www.youtube.com/channel/UCrar6lN4P4tNeGG4UVt9CzQ).\n-AeoN [Discord](https://discord.gg/UjTfD39).\n-ALichUhh [Youtube](https://www.youtube.com/channel/UCODZG_5aWCTZOhfeN2wcauw/videos).\n-FableHero [Discord](https://discord.gg/VfAErSukFM).\n-FableHero [Forum](https://fablehero.com/community/).\n-Fable Modders' Guild [Discord](https://discord.gg/xUYzkCw).\n-xOneManLegacy [Youtube](https://www.youtube.com/watch?v=-GoY4-dn7Hc&list=PLYyUOBD-Jzmzx-j4AxpyjeTJfWQxRrdw7).")
      .addField("Roleplay","-New Albion [Discord](https://discord.gg/dDN8zhzDFU).")
      .addField("Speedrunning","-Budget Builds [Youtube](https://www.youtube.com/watch?v=LA3nTd1yE4M&list=PLQoN6BhPjBiOHWrnr3LCU1IDmY2kbwGpF).\n-CleanSera [Youtube](https://www.youtube.com/c/CleanSera/featured).\n-Etem [Youtube](https://www.youtube.com/user/EtemTatar).\n-Fable Speedrunning [Discord](https://discord.gg/Sv8P6Ef).\n-Rehim [Twitch](https://www.twitch.tv/rehim).")
      .setImage("https://images-ext-2.discordapp.net/external/u1_q-ZHUhlEhxUKEVXusVVaSGTQTQH2zCFtRajpM6I4/%3Fcb%3D20141003002936/https/vignette.wikia.nocookie.net/steamtradingcards/images/a/a1/Fable_Anniversary_Artwork_2.jpg/revision/latest?width=1060&height=596")
      .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png")

      message.channel.send({embeds: [content_embed]})
};

module.exports.help = {
    name: "content",
    aliases: ["creators", "creator"],
    category: "public",
    description: "Return a list of peoples we find intersting to follow, fable content creators.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};