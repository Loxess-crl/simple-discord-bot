import Discord from 'discord.js';

export const onReady = (client: Discord.Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return;
    }

    console.log(`${client.user.username} is online`);
  });
};
