const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  run(client, message, args) {
    const messageToSay = args.join(" ");
    const sayEmbed = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag} says: ${messageToSay}`)
    .setFooter(message.author.tag, message.author.displayAvatarURL())
    .setColor("#84daf8")
    message.channel.send(sayEmbed)
  }
}