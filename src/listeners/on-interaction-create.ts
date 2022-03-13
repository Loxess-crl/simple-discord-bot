import { BaseCommandInteraction, Client, Interaction } from 'discord.js';
import { Commands } from '../commands';

export const onInteractionCreate = (client: Client): void => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenu()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  interaction: BaseCommandInteraction
): Promise<void> => {
  const slashCommand = Commands.find(
    (command) => command.name === interaction.commandName
  );

  await interaction.deferReply();

  if (!slashCommand) {
    interaction.followUp({ content: 'An error has occurred' });
    return;
  }

  slashCommand.run(client, interaction);
};
