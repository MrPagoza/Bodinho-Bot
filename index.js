const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`Bot conectado como ${client.user.tag}!`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "Regras") {
    const embed = new EmbedBuilder()
      .setTitle("🤖 Meu Bot")
      .setDescription("Meu primeiro embed está funcionando! 💜")
      .setColor(0x5865F2);

    await interaction.reply({ embeds: [embed] });
  }
});

client.login(process.env.TOKEN);
