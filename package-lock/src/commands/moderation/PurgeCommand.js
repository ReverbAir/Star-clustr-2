const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You cannot use this command');
    if (!args[0]) return message.channel.send("state a number of meessages you want to delete")
    const amountToDelete = Number(args[0], 10)

    if (isNaN(amountToDelete)) return message.channe.send("Number stated is not a valid number.")
    if (!Number.isInteger(amountToDelete)) return message.channel.send("Number stated must be a whole number")
    if (!amountToDelete) return message.channel.send("please state a number")
    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete
    });

    try {
      await message.channel.bulkDelete(fetched)
        .then(messages => message.channel.send(`Deleted ${messages.size} messaages`))
    } catch (err) {
    console.log(err);
    message.channel.send(`I was unable to delete the amount stated make sure they are within \`2 weeks\` old.`)
    }
  }
}