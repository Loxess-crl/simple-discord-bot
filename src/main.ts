import { TOKEN } from './config';
import Discord from 'discord.js';

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on('message', (msg) => {
  console.log(msg);
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(TOKEN);
