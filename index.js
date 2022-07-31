const Discord = require("discord.js");
const { SlashCommandBuilder } = require ("@discordjs/builders");
const ytdl = require("ytdl-core");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

Client.login("OTc5NzExOTEzNjAyNzQwMjg1.G42Pm8.bJDALo8lxMS5olWphmErwKqrj_sozPaetwRp5I");

Client.on("ready", () => {

    //Client.application.commands.create(data);
    //Client.guilds.cache.get("966450965769224323").commands.create(data);

    console.log("bot operationnel");
});

Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "suuu"){
            if(interaction.member.voice.channel){
                interaction.reply("Ok")
                interaction.member.voice.channel.join().then(connection =>{
                    connection.play("https://www.youtube.com/watch?v=DHdIJenXysY", { quality: "hightestaudio" })
                })
            }
            else {
                interaction.reply("Tu n est pas connecte a un salon vocal gros zig!")
            }
        }
    }
});

Client.on("messageCreate", message => {
    if(message.content === "feur"){
        message.reply("Arretez avec cette blague completement pourri!")
    }
    if(message.content === "SUS"){
        message.reply("AMOGUS")
    }
});