import { BaseCommandInteraction, Client } from 'discord.js';
import { Command } from './types';

export const HelloCommand: Command = {
  name: 'hello',
  description: 'Returns a greeting',
  type: 'CHAT_INPUT',
  run: (client: Client, interaction: BaseCommandInteraction) => {
    const content = 'Hello there!';
    interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
