import { Client } from 'discord.js';

export const onMessageCreate = (client: Client): void => {
  client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    const result = message.content.replace(/\u200B/g, '');
    if (result === 'ping') {
      await message.reply(`${message.author.username} here is your pong`);
    }
  });
};
