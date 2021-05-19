const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { token } = require('./env.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.channel.send('pong');
//   }
  if (msg.author.id != client.user.id && /咪咪貓貓/.exec(msg.content) !== null){
    msg.channel.send(msg.author.toString() + "您好!，\n真虧你能走到這裡，接下來就由我**咪咪貓貓**做你的對手了😾")
  }
  if (msg.channel.id=='677914761211543573' && /^-p/.exec(msg.content) !== null){
      msg.channel.send(msg.author.toString() + `\n請不要在這裡播歌!!\n請去\`機器人點歌區\`!!`)
      console.log(`\`${msg.author.name}\` 不太乖誒`)
  }
});

client.login(token);

