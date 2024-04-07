const { EmbedBuilder, version } = require('discord.js');
const os = require('os');
const cpuStat = require("cpu-stat"); // npm i cpu-stats

module.exports = {
    name: 'botinfo',
    description: 'Permet de voir les informations du bot',

    callback: (client, interaction) => {
        cpuStat.usagePercent(function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }

            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`Informations de ${client.user.username}`)
                        .setColor('DarkPurple')
                        .setThumbnail(`${client.user.displayAvatarURL()}`)
                        .setFields({
                                name: 'Créateur du bot : ',
                                value: '<@292800104333836309>'
                            },
                            {
                                name: 'En ligne depuis :',
                                value: (Math.round(client.uptime / (1000 * 60 * 60 * 24)) % 30) + " Jours, " + (Math.round(client.uptime / (1000 * 60 * 60))) + " h, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " min, et " + (Math.round(client.uptime / 1000) % 60) + " sec"
                            },
                            {
                                name: 'Discord.js Version : ',
                                value: `v${version}`
                            },
                            {
                                name: 'CPU : ',
                                value: `${os.cpus().map(i => i.model)[0]}`
                            },
                            {
                                name: 'Utilisation du CPU',
                                value: `${percent.toFixed(2)}%`
                            },
                            {
                                name: 'Architecture',
                                value: `${os.arch()}`
                            },
                            {
                                name: 'Plateforme',
                                value: `${os.platform()}`
                            }
                        )
                        .setTimestamp()
                ]
            })
        })
    }
}