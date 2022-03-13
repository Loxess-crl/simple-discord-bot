import { TOKEN } from './config';
import { Client, Intents } from 'discord.js';
import { onInteractionCreate, onMessageCreate, onReady } from './listeners';

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

onReady(client);
onMessageCreate(client);
onInteractionCreate(client);

client.login(TOKEN);
