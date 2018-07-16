const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


  const lol =
[
'**__W__elcome To 67N**',
'**W__e__lcome To 67N**',
'**We__l__come To 67N**',
'**Wel__c__ome To 67N**',
'**Welc__o__me To 67N**',
'**Welco__m__e To 67N**',
'**Welcom__e__ To 67N**',
'**Welcome __T__o 67N**',
'**Welcome T__o__ 67N**',
'**Welcome To __6__7n**',
'**Welcome To 6__7__n**',
'**Welcome To 67__N__**'
]
client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("467743319691100180");
if(!codes) return;
if(codes) {
codes.send(  `${lol[Math.floor(Math.random() * lol.length)]}`);          
}
});



client.login(process.env.BOT_TOKEN);
