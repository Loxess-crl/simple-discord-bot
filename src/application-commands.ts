import { APPLICATION_ID, GUILD_ID, TOKEN } from './config';

import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Commands } from './commands';

const commands = Commands.map(({ name, description }) => ({
  name,
  description,
}));

const rest = new REST({ version: '9' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(APPLICATION_ID, GUILD_ID), {
      body: commands,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
