// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();
const port = 4000;

// Create a new Discord client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ],
});

// Retrieve the Discord bot token from environment variables
const token = process.env.TOKEN;

// Configure Express to parse JSON request bodies
app.use(bodyParser.json());

// Endpoint to handle role assignment
app.post('/assignRole', async (req, res) => {
    try {
        const { userId } = req.body;

        console.log('Received Role Assignment Request For: ' + userId);

        // Your logic to assign a custom role to the user based on the userID
        const guildId = '// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();
const port = 4000;

// Create a new Discord client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ],
});

// Retrieve the Discord bot token from environment variables
const token = process.env.TOKEN;

// Configure Express to parse JSON request bodies
app.use(bodyParser.json());

// Endpoint to handle role assignment
app.post('/assignRole', async (req, res) => {
    try {
        const { userId } = req.body;

        console.log('Received Role Assignment Request For: ' + userId);

        // Your logic to assign a custom role to the user based on the userID
        const guildId = '1038740889289367592'; 
        const guild = await client.guilds.fetch(guildId);

        if (!guild) {
            return res.status(404).json({ success: false, message: 'Guild not found.' });
        }

        const member = await guild.members.fetch(userId);
        await member.fetch();  // Fetch the latest member data

        // Specify the custom role name here
        const customRoleName = 'SKALE Compaseers';
        const customRole = guild.roles.cache.find(role => role.name === customRoleName) ||
                           (await guild.roles.create({ name: customRoleName, reason: 'Creating missing role for assignment' }));

        await member.roles.add(customRole);
        res.json({ success: true, message: `Custom role assigned for user ID: ${userId}` });
    } catch (error) {
        console.error('Error assigning custom role:', error);
        res.status(500).json({ success: false, message: 'Error assigning custom role.' });
    }
});

// Endpoint to handle role removal
app.post('/removeRole', async (req, res) => {
    try {
        const { userId } = req.body;

        console.log('Received Removal Request For: ' + userId);

        // Specify the server guild here
        const guildId = '1038740889289367592'; 
        const guild = await client.guilds.fetch(guildId);

        if (!guild) {
            return res.status(404).json({ success: false, message: 'Guild not found.' });
        }

        const member = await guild.members.fetch(userId);
        await member.fetch();  // Fetch the latest member data

        // Specify the custom role name here
        const customRoleName = 'SKALE Compaseers';
        const customRole = guild.roles.cache.find(role => role.name === customRoleName);

        if (customRole) {
            // Check if the member has the role before trying to remove it
            if (member.roles.cache.has(customRole.id)) {
                await member.roles.remove(customRole);
                res.json({ success: true, message: `Custom role removed for user ID: ${userId}` });
            } else {
                res.json({ success: false, message: `User ID: ${userId} does not have the custom role.` });
            }
        } else {
            res.status(404).json({ success: false, message: 'Custom role not found.' });
        }
    } catch (error) {
        console.error('Error removing custom role:', error);
        res.status(500).json({ success: false, message: 'Error removing custom role.' });
    }
});


// Login to Discord using the provided bot token
client.login(token);

// Event handler for when the bot is ready
client.on('ready', () => {
    console.log('The Bot is Ready!');
});

// Start the HTTP server
app.listen(port, () => {
    console.log(`Role assignment server is running - Preparing discord bot!`);
});'; 
        const guild = await client.guilds.fetch(guildId);

        if (!guild) {
            return res.status(404).json({ success: false, message: 'Guild not found.' });
        }

        const member = await guild.members.fetch(userId);
        await member.fetch();  // Fetch the latest member data

        // Specify the custom role name here
        const customRoleName = 'SKALE Compaseers';
        const customRole = guild.roles.cache.find(role => role.name === customRoleName) ||
                           (await guild.roles.create({ name: customRoleName, reason: 'Creating missing role for assignment' }));

        await member.roles.add(customRole);
        res.json({ success: true, message: `Custom role assigned for user ID: ${userId}` });
    } catch (error) {
        console.error('Error assigning custom role:', error);
        res.status(500).json({ success: false, message: 'Error assigning custom role.' });
    }
});

// Endpoint to handle role removal
app.post('/removeRole', async (req, res) => {
    try {
        const { userId } = req.body;

        console.log('Received Removal Request For: ' + userId);

        // Your logic to remove a custom role from the user based on the userID
        const guildId = '1038740889289367592'; 
        const guild = await client.guilds.fetch(guildId);

        if (!guild) {
            return res.status(404).json({ success: false, message: 'Guild not found.' });
        }

        const member = await guild.members.fetch(userId);
        await member.fetch();  // Fetch the latest member data

        // Specify the custom role name here
        const customRoleName = 'SKALE Compaseers';
        const customRole = guild.roles.cache.find(role => role.name === customRoleName);

        if (customRole) {
            // Check if the member has the role before trying to remove it
            if (member.roles.cache.has(customRole.id)) {
                await member.roles.remove(customRole);
                res.json({ success: true, message: `Custom role removed for user ID: ${userId}` });
            } else {
                res.json({ success: false, message: `User ID: ${userId} does not have the custom role.` });
            }
        } else {
            res.status(404).json({ success: false, message: 'Custom role not found.' });
        }
    } catch (error) {
        console.error('Error removing custom role:', error);
        res.status(500).json({ success: false, message: 'Error removing custom role.' });
    }
});


// Login to Discord using the provided bot token
client.login(token);

// Event handler for when the bot is ready
client.on('ready', () => {
    console.log('The Bot is Ready!');
});

// Start the HTTP server
app.listen(port, () => {
    console.log(`Role assignment server is running - Preparing discord bot!`);
});
