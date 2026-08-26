const { REST, Routes, SlashCommandBuilder } = require("discord.js");

const commands = [
  new SlashCommandBuilder()
    .setName("regras")
    .setDescription("Exibe as regras do servidor")
    .toJSON()
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registrando comandos...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        "1507953305945505812"
      ),
      { body: commands }
    );

    console.log("Comando /regras registrado no servidor!");
  } catch (error) {
    console.error(error);
  }
})();
