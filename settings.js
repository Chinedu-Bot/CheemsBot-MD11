//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUR2am55SVJZdHB1bGlyaE1PRkI1dDVGa2hNNDFhWnZweUl5WjIybFEwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0pLNThLMFJjQ2MyNlRFQXExYUxlbU1Za21sclpaUHFmK0VzaklqY0l5ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXR3NyZzFaa3BLZk1ZUEtoaDdPVHNJbTVlbTJtRHJpSlVJRjFvOU9oRW1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPS1lVcS8rQW9IUlhXdnRaK1d4YXBxcDJQT0F2Q3diS1VwbXVLdkZDS2o0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1JbnVzS05mSXBVaGhMa1ZReHR2VnkrR1VOWXViTEJXS0F4K1FWMkhGMTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjUySS9jeU9UN0F4Skg5VVdkMTV5Y3YzbWd6SVRHTE5XSTZYN0p3VVdyWHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1QbmZYWmdnQWtOMjJTcEx6N2N3aVNJNENyZkVhWVNPQXdFQzd1TE5sND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUJQQ2t6WGRSSkM0U2oxZE5uWDdUd1JZR1dTMHZVcEFYVFFJTFZJWDJEUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inpwb3k4UStNVE1yZXRKeHRUU2g1a3JkTFEwTWFqVFNyNlVWRFJOM1Q5RCsvUUF2N2ZYZjc4ekZuZ1RjWUFmT3JwQWNCTDVNUmdPRmI0S1A5V0lLS2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6InVjL1RSNVhlaWtkY0REMlJyVXliK0E3aWIwVkxqQ2FXQkZ6ZHVseThBNWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBQRFhLYkZnVC1HNjdQeEJKU1k2OUEiLCJwaG9uZUlkIjoiMGQ4YzEyNjYtYzcxYi00M2QwLWFjZGQtMTFhYzhiNWU2NjM2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpNOERkbEI3R2FNZk9rM1IzV0FGdXgwZ0VHQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHM1BaT1pGVGVLaTZBMU45OWJ3Tk1nckJRWXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTUFCQlZNNlIiLCJtZSI6eyJpZCI6IjIzNDcwNDc1MDQ4NjA6MTJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lhbnI2RUhFT2pObGJrR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Inc2cGh0T09qd2lqVUQ5d0orOXFIR2loM0FtWGxCNmF3b1JhUHRhSzc2QUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkdUbndnOXZUOTNXdE5TNVgzMFB0eEhpQTdXYjE5MFBHRlJ2YnE3dGtqY1lqWmQ1NmUweGNaR0lOTER3eDBoeXZHYjNXK01pdkFXMU9WWWNTd29XekFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMSG5KYW1SSkJMSEZJYWtBWE1qcWxlenhRdG9NaThnSFduSTUyRGhQVFNySUxuUHpINWU0YlZGM00ybndka2RRZ1BienRtNmRDVzlwbXNvVEhnZkxoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDc1MDQ4NjA6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY09xWWJUam84SW8xQS9jQ2Z2YWh4b29kd0psNVFlbXNLRVdqN1dpdStnQSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDUwNDQzNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFbloifQ=='

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '916909137213' //ur owner number
global.ownername = '🦄드림 가이 Xeon' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+916909137213"
global.creator = "916909137213@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["916909137213"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
