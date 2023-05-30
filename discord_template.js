
const { SlashCommandBuilder } = require('discord.js');

class Person {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    addSlash(name, desc, callback) {
        module.exports = {
            data: new SlashCommandBuilder()
                .setName(name)
                .setDescription(desc),
            async execute(interaction) {
                await callback;
                return interaction;
            },
        };
    }
    shoutMessage(text, name){
        client.on("ready", function(message) {
            message.channel.send(message.author.username + ': ' + text);
        });
    }
  }