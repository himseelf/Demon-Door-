const { MessageEmbed } = require("discord.js");
const request = require('request');
const cheerio = require('cheerio');

module.exports.run = async (client, message,  args) => {
    request('https://www.nexusmods.com/fablethelostchapters?tab=popular+%28all+time%29', (error, response, html) => {
        if(!error && response.statusCode == 200){
           const $ = cheerio.load(html);
           const div = $('mod-tile-gallery-3310-3');
           const result = div.find("mod-tile-left").text();
           let [...data] = result.split(/\s+/);
           const nexusEmbed = new MessageEmbed()
           .setColor("#a1c6db")
           .setTitle("Latest Mods")
           .setTimestamp()
           .addField("Mods", '1'+data[3]+ '2'+data[2], true)
           .setFooter("Powered by nexusmods", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd15e55tqlrbrds.cloudfront.net%2Flogo-nexus-mods-1601501188525-nexus-mods-350.png&f=1&nofb=1");
        message.channel.send({embeds: [nexusEmbed]});
        }
    }
)};
 


module.exports.help = {
    name: "nexus",
    aliases: ["nm", "nexusmods"],
    category: "available",
    description: "Return nexus mods fable mods.",
    cooldown: 10,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false
};