const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'summon',
    description: 'Permet de d\'invoquer des pokémons',

    callback: (client, interaction) => {
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle(`Articuno ✨`)
                    // .setDescription(`Avatar de [${avatarmention.username}](${avatarmention.displayAvatarURL({ size: 1024 })})`)
                    .setImage(`https://cdn.discordapp.com/attachments/1188959445141692566/1226535292576469043/articuno_1.gif?ex=66251f01&is=6612aa01&hm=ee9172d3cabc003c08ae2dae5e0e17b2433a8382f7ebcff0ab7b6f725b2dc006&`)
                    // .setColor("18d67e")
                    .setColor("DarkPurple")
            ]
        })
    }
}
