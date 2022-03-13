import { TOKEN } from './config';
import Discord from 'discord.js';
import { onMessage, onReady } from './app-listeners';

const client = new Discord.Client({ intents: [] });

onReady(client);
onMessage(client);

client.login(TOKEN);
