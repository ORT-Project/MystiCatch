module.exports = {
    deleted: true, // Supprime la commande pour les utilisateurs
    name: 'ping', // Nom de la commande exécutée
    description: 'Pong!', // Description de la commande

    callback: (client, interaction) => { // Fonctions pour le message
        interaction.reply(`Pong ! ${client.ws.ping}ms`) // Equivalent du "return"
    }
};