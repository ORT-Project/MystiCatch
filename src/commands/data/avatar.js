const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Permet de voir l\'avatar de l\'utilisateur.',
    options: [
        {
            name: 'mention',
            description: 'L\'utilisateur dont vous souhaitez voir l\'avatar',
            required: false,
            type: ApplicationCommandOptionType.User,
        }
    ],

    callback: (client, interaction) => {
        let user = interaction.options.getUser('user') || interaction.member;
        let avatarmention = interaction.options.getUser('mention');

        if (avatarmention) {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`Avatar de ${avatarmention.username}`)
                        .setURL(`${avatarmention.displayAvatarURL({ size: 1024 })}`)
                        // .setDescription(`Avatar de [${avatarmention.username}](${avatarmention.displayAvatarURL({ size: 1024 })})`)
                        .setImage(`${avatarmention.displayAvatarURL({ size: 1024 })}`)
                        // .setColor("18d67e")
                        .setColor("DarkPurple")
                ]
            })
        } else {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`Avatar de ${user.displayName}`)
                        .setURL(`${user.displayAvatarURL({ size: 1024 })}`)
                        // .setDescription(`Avatar de [${avatarmention.username}](${avatarmention.displayAvatarURL({ size: 1024 })})`)
                        .setImage(`${user.displayAvatarURL({ size: 1024 })}`)
                        // .setColor("18d67e")
                        .setColor("DarkPurple")
                ]
            })
        }
    }
}