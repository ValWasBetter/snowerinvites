const Discord = require("discord.js")
// const translate = require("translate-google")
const config = require('../../config.js')

module.exports = {
name: "help",
aliases:['commands', 'bothelp', 'bot-commands'],
description: "set ur guild join message",
usage: `ghelp`,
category: "general",
botPermission: [''],
authorPermission: [''],
cooldowns: 3,
ownerOnly: false,
dmOnly:false,
run: async (client, message, args, db) => {

}
}