const { SlashCommandBuilder, EmbedBuilder, ApplicationCommandOptionType} = require("discord.js");

module.exports = {
    name: 'userinfo',
    description: 'Permet d\'avoir des informations sur un utilisateur.',
    options: [
        {
            name: 'user',
            description: 'Sélectionner un utilisateur.',
            required: true,
            type: ApplicationCommandOptionType.User,
        }
    ],

    callback: (client, interaction) => {
        let user = interaction.options.getUser('user');
        interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor('DarkPurple')
                        .setThumbnail(user.displayAvatarURL())
                        .setAuthor({
                            name: user.tag,
                            iconURL: user.displayAvatarURL(),
                        })
                        .addFields(
                            {
                                name: 'Compte créer le',
                                value: `${user.createdAt.toLocaleString()}`,
                                inline: true,
                            },
                            {
                                name: 'Serveur rejoint le',
                                value: `${interaction.guild.joinedAt.toLocaleString()}`,
                                inline: true,
                            },
                            {
                                name: 'ID Utilisateur',
                                value: `${user.id}`,
                                inline: true,
                            },
                            {
                                name: 'Tag Utilisateur',
                                value: `${user.tag}`,
                            },
                            {
                                name: 'Utilisateur',
                                value: `${user.username}`,
                                inline: true,
                            },
                            {
                                name: 'Est-il un bot ?',
                                value: `${user.bot}`,
                                inline: true,
                            },
                        )
                        .setFooter({
                            text: 'Les données sont modifiées en fonction de l\'utilisateur.',
                        })
                ]
        })
    }
}
