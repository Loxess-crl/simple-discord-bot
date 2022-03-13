import Discord from 'discord.js';

export const onMessage = (client: Discord.Client): void => {
  client.on('message', (msg) => {
    console.log(msg);
    if (msg.content === 'ping') {
      msg.reply('pong');
    }
  });
};
