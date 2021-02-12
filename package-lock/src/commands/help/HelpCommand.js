const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'help', []);
  }

  async run(client, message, args) {
    const helpEmbed = new Discord.MessageEmbed()
    .setTitle('**Prefix = >**')
    .addField('__**Moderation**__', '\`s-kick\`, \`s-purge\`')
    .addField('__**Fun**__', '\`s-say\`')
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/attachments/795761622424879127/806556199151337522/715785cdcac0ee48d9b27a363ad88b0f.png')
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    message.channel.send(helpEmbed)
  }
}