const { Client, Collection, Intents } = require('discord.js');
const { TOKEN } = require('./config');
const { readdirSync } = require("fs");
const intents = new Intents(32767)

const client = new Client({
  partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER", "REACTION"], 
  intents: intents,
  allowedMentions: {
    parse: ['users', 'roles'],
    repliedUser: false,
  }
 });
client.cooldowns = new Collection();
client.commands = new Collection();

const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      console.log(`Command loaded: ${getFileName.help.name}`);
    };
  });
};

const loadEvents = (dir = "./events/") => {
  readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const event of events) {
      const evt = require(`${dir}/${dirs}/${event}`);
      const evtName = event.split(".")[0];
      client.on(evtName, evt.bind(null, client));
      console.log(`Event loaded: ${evtName}`);
    };
  });
};   

loadCommands();
loadEvents();

client.login(TOKEN);

//Welcome/leave improved, randomized 
client.on("guildMemberAdd", member =>{

    const channel = member.guild.channels.cache.find(x => x.name === "general-chat")
    const role = member.guild.roles.cache.find(x => x.name === "Chicken Chaser")
    if(!role) console.log("Welcome error: The role 'Chicken Chaser' has not been found.");
    const fs = require('fs');
    const welcometxt = fs.readFileSync("./welcome.txt", "utf8").split('\n');
    const randomWlcm = welcometxt[Math.floor(Math.random() * welcometxt.length)];
    if(!channel) return;
    channel.send({content: `Welcome ${member} to **${member.guild.name}**, ${randomWlcm}`});
    if(role) member.roles.add(role);  
});

client.on("guildMemberRemove", member =>{

    const channel = member.guild.channels.cache.find(x => x.name === "general-chat")
    const fs = require('fs');
    const leavetxt = fs.readFileSync("./leave.txt", "utf8").split('\n');
    const randomleav = leavetxt[Math.floor(Math.random() * leavetxt.length)];
    if(!channel) return;
    channel.send({content: `**${member}**, ${randomleav}`});

});


//random reac
client.on('messageCreate', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === "hits") { 
        let answers = [
        "What ? Oh. You're not one of them, are you? My eyesight's not what it used to be.", 
        "Where is the Gallant Knight i await?", 
        "I recognise you! The Michievous Bandit!",  
        "It's said that inside every fat person is a thin one trying to get out. But no - I say, outside every thin person is a fat one trying to get in.",
        "Well, well, well... Aren't you the master in the art of love! What's it like?",
        "That was wicked. Literally.",
        "Your path is dark. Only a light will reveal it. And you are not bright enough.",
        "I never wanted to be a Demon Door. All this waiting around. All the riddles. It's no life.",
        "Oh, if only i'd been born a Silver Key chest. I just love those Silver Keys. So shiny... So silver...",
        "I never open on a first date. My heart has been broken too many times before.",
        "You've made me so happy. I can feel pebbles welling up in my eyes.",
        "So you worked out my name. Big deal.",
        "Ahh... Meat. Meat good!",
        "The secret to unlocking me is... cheese!",
        "I beg you. Never reveal my secret to anyone.",
        "Ha ha ha. You have turned depravity into an art! You are corruption personified!",
        "I sense the presence of a lute player!",
        "Oh. I know all about you. Think Demon Doors are your little toys to open as you please.",
        "I'm the greatest, grandest and oldest of all Doors. And i open to no one.",
        "Didn't i tell you i was special? Didn't i tell you i was unique?",
        "Oh, you really know how to treat a door. I will always be open to you.",
        "Yes?",
        "No."
      ]
      message.channel.send({content: answers[Math.floor(Math.random() * answers.length)]})
    }
});


// daily lore and tips post
setInterval(() => {
    const Discord = require('discord.js');
    const fs = require('fs');
    const storiestxt = fs.readFileSync("./stories.txt", "utf8").split('\n');
    const strategytxt = fs.readFileSync("./strategy.txt", "utf8").split('\n');   
    const index = Math.floor(Math.random() * storiestxt.length);
    const index2  = Math.floor(Math.random() * strategytxt.length);
    const randomMsg = storiestxt[index].replace(/\\n/g, '\n');
    const randomMsg2 = strategytxt[index2].replace(/\\n/g, '\n');
    const TalesEmbed = new Discord.MessageEmbed()
    .setColor("#a1c6db")
    .setDescription(randomMsg)
    .setImage("https://images-ext-1.discordapp.net/external/KqeMLznqnxMG1srMkGQx5KYE3GCnsHADqXwd-ABpfWM/%3Fcb%3D20141003015430/https/vignette.wikia.nocookie.net/steamtradingcards/images/2/2c/Fable_Anniversary_Artwork_4.jpg/revision/latest?width=1062&height=597")
    .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");
    const TipsEmbed = new Discord.MessageEmbed()
    .setColor("#a1c6db")
    .setDescription(randomMsg2)
    .setImage("https://images-ext-2.discordapp.net/external/HovRyXm_waIeXLzgRy-8STxz3RplCtCly8j4bisP3a4/https/i.pinimg.com/originals/55/fc/d9/55fcd97a06e7a4dce18a29c5879e112c.jpg?width=955&height=597")
    .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");
    client.guilds.cache.forEach(guild => { 
        const channel = guild.channels.cache.find(x => x.name === "fable-lore");
        const channel2 = guild.channels.cache.find(x => x.name === "fable-tips");
        if (channel) {
            channel.send({embeds: [TalesEmbed]})
        } else {
            console.log("Automated post error: Lore post failed to send! Verify channel names.")
        }
        if (channel2) {
            channel2.send({embeds: [TipsEmbed]})
        } else {
            console.log("Automated post error: Tips post failed to send. Verify channel names.")
          }
        });
 
    },84600000);



// quest of the week post
/*
setInterval(() => {
    const Discord = require('discord.js');
    const fs = require('fs');
    const questtxt = fs.readFileSync("./quest.txt", "utf8").split('\n');
    const questindex = Math.floor(Math.random() * questtxt.length);
    const randomQuest = questtxt[questindex].replace(/\\n/g, '\n');
    const QuestEmbed = new Discord.MessageEmbed()
    .setColor("#a1c6db")
    .setTitle("Quest of the week")
    .setDescription(randomQuest)
    .setImage("https://images-ext-1.discordapp.net/external/dJG_koAzu4y2rH05-HzVya9Lg8SN9AglhqPE7Vs_RZw/https/i.pinimg.com/originals/07/02/e0/0702e0a78464ae6f3b9cdff399dd67ec.jpg?width=955&height=597")
    .setFooter("Made by the Fable Community", "https://cdn.discordapp.com/attachments/789155916209192960/799273130215735326/PC_GUILD_SEAL.png");
    client.guilds.cache.forEach(guild => { 
        const questChannel = guild.channels.cache.find(x => x.name === "general-chat");
        if (questChannel) {
            questChannel.send({embeds: [QuestEmbed]})
        } else {
            guild.owner.send({content: 'Hero! You must create a #general-chat channel if you want me to be usefull.'})
         }
       });

    },870000000);
    */
