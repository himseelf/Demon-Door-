const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args) => {
  if (!args.length) {
    const help_embed = new MessageEmbed()
      .setColor("#a1c6db")
      .setTitle("About me")
      .addField("Optional Requirements", `Channels: #general-chat, #fable-lore, #fable-tips, #fable-trades, #logs.\nRoles: Chicken Chaser.`)
      .addField("Invite & support", "You can join the [support server](https://discord.gg/Ka8CNt6) in case you need some help. Here is the [bot invite](https://discord.com/oauth2/authorize?client_id=742744187480440904&scope=bot&permissions=0) if you want to add a demon door to your guild. ")
      .addField("Commands", `You can use  \`${PREFIX}help <command name>\` to look at a command description -> Example: \`.help modding\``)
      .setImage("https://images-ext-2.discordapp.net/external/ARKfCxqNlXefBt-0D87y8z4cX7N1okML1bVj01Za4Fo/%3Fwidth%3D1062%26height%3D597/https/images-ext-2.discordapp.net/external/Vd_HAMgVJ2Pgqf0GIOcOfSjckCoaAAFpyjEflDYUgJs/%253Fcb%253D20141002040741/https/vignette.wikia.nocookie.net/steamtradingcards/images/a/a6/Fable_Anniversary_Artwork_1.jpg/revision/latest?width=1060&height=596")
      .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");

      for (const category of categoryList) {
          help_embed.addField(
              `${category}`,
              `${client.commands.filter(cat => cat.help.category === category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
          );
      };

      return message.channel.send({embeds: [help_embed]});
  } else {
    const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
    if (!command) return message.channel.send({content: "Wrong command, i can't do it!"}); 
    const cmdInf_embed = new MessageEmbed()
    .setTitle(`\`${command.help.name}\``) 
    .setColor("#a1c6db")
    .addField("Description", `${command.help.description}`)
    .addField("Usage", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name}`, true)
    .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");
    if (command.help.aliases.length > 1) cmdInf_embed.addField("Aliases", `${command.help.aliases.join(', ')}`, true);
    return message.channel.send({embeds: [cmdInf_embed]});
    
  } 
};

module.exports.help = {
    name: "help",
    aliases: ["bot", "command", "commands", "invite", "support"],
    category: "available",
    description: "Return the command list and more infos.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};