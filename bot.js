    const token = "MTA5NDE5NjAxNjQ4NTUwMzAyNg.GPw3r4.PybdxsbEO8NoqWwamwBP0-zy-SW_fBjjHgXF9w";
    const { ask } = require('./ai.js');
    const { Client, Events, GatewayIntentBits } = require('discord.js');
    const client = new Client({
        intents:
        [GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent]
    });

    client.once('ready', () => {
        console.log('Bot sudah online!');
    });
    client.on(Events.MessageCreate, async message => {
        if (message.content.substring(0, 1) === "!") {
            const prompt = message.content.substring(1); 
    const answer = await ask(prompt); 
    client.channels.fetch(message.channelId).then(channel => channel.send(answer));
    }
    });
    client.on("message", async (message) => {
        if (message.content.substring(0, 1) === "!") {
            const prompt = message.content.substring(1);
            const answer = await ask(prompt); 
            message.channel.send(answer); 
        }
    });
    client.login(token);
