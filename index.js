const express = require("express");
const app = express();

app.listen(() => console.log("start btrolie"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

//لا تلعب اي شي في الكود



const prefix = "!"
const developers = "496996678088392725"

////////


client.on("message", message => {
            if(message.content.startsWith("!تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "التقديمات")
            if(!channel) return message.reply("**لانشاء روم التقديمات #room1 من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى  ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **كم عمرك 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', ** لماذا اخترت سيرفر اوتاوا؟ **' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ تحط الشعار ؟🤔**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم على رتبه** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`لماذا اخترت سيرفر اوتاوا`**',`${ask}`)
                        .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**` لماذ علينا ان نقبلك`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);
 
                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });

        client.on('message', message=>{
            if(message.content.startsWith("!room1")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("التقديمات", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تم انشاء روم التقديمات بنجاح**")
            }
            })

    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  if(message.content.startsWith("!قبول")) {
    let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
    if(!acRoom) return message.reply("$!setac من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');
 
    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
}
});

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("!رفض")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
  if(!acRoom) return message.reply("!!setac من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});

          client.on('message', message=>{
            if(message.content.startsWith("!room2")) {
         if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("القبول-الرفض", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تم انشاء روم القبول والرفض بنجاح**")
            }
});

client.on('message', message => {                   
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'tic')) {
        let modlog = client.channels.find('name', 'tic');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح لفتح تكت `).then(msg => {
       
       
        msg.react('✅')
       .then(() => msg.react('✅'))
     
     
 
       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                       
                               active.on("collect", r => {
                                  if (
      message.guild.channels.exists(
        "name",
        `ticket-${message.author.id}`
      )
    )
      return;
    message.guild
      .createChannel(`ticket-${message.author.id}`, "text")
      .then(c => {
        let role = message.guild.roles.find("name", "support");
        let role2 = message.guild.roles.find("name", "@everyone");
        let role3 = message.guild.roles.find("name", "support");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        
        const embed = new Discord.RichEmbed()
          .setColor(0xcf40fa)
          .addField(
            `Hey ${message.author.username}!`,
            `ولكم يحلو `
          )
          .setTimestamp();
        c.send({
          embed: embed
        }
              )
                                   })
                                   })
       }
                                                                    
                                   );
       }
}
          )

client.on("message", (message) => {
    if (message.content.startsWith('!closer')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('id', args.join(' '));
        if (!channel) return message.reply('**يحلو اكتب ايدي الروم**').catch(console.error);
        channel.delete()
    }
});



client.on('message', message => {
    if(message.content === "!bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
      .addField('**عدد المستخدمين 👥 **', `${client.users.size}`, true)
    message.channel.sendEmbed(embed);
  }
});



const cuttweets = [
  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت | الحرية لـ ... ؟',
  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت ‏| كلمة للصُداع؟',
  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت | وش يفسد الصداقة؟',
  '‏كت تويت | شخص لاترفض له طلبا ؟',
  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت |أقوى كذبة مشت عليك ؟',
  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت | مطلبك الوحيد الحين ؟',
  '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
  'اش رئيك بسيرفرنا'
]

client.on('message', async (toxicc) => {
  if (!toxicc.guild || toxicc.author.bot) return false;
  switch (toxicc.content.split(' ')[0]) {
    case prefix + 'cut':

      var embed = new Discord.RichEmbed().setTitle("Cut Tweet")
        .setDescription(cuttweets[Math.floor(Math.random() * cuttweets.length)])
        .setFooter(toxicc.author.tag, toxicc.author.displayAvatarURL)
      toxicc.channel.send(embed);
      break;
  }
})




var viper = ["https://f.top4top.net/p_682it2tg6.png%22", "https://e.top4top.net/p_682a1cus5.png%22", "https://d.top4top.net/p_682pycol4.png%22", "https://c.top4top.net/p_682vqehy3.png%22", "https://b.top4top.net/p_682mlf9d2.png%22", "https://a.top4top.net/p_6827dule1.png%22", "https://b.top4top.net/p_682g1meb10.png%22", "https://a.top4top.net/p_682jgp4v9.png%22", "https://f.top4top.net/p_682d4joq8.png%22", "https://e.top4top.net/p_6828o0e47.png%22", "https://d.top4top.net/p_6824x7sy6.png%22", "https://c.top4top.net/p_682gzo2l5.png%22", "https://b.top4top.net/p_68295qg04.png%22", "https://a.top4top.net/p_682zrz6h3.png%22", "https://f.top4top.net/p_6828vkzc2.png%22", "https://e.top4top.net/p_682i8tb11.png",]
client.on('message', message => {
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + 'لوخيروك')) {
    if (!message.channel.guild) return message.reply('** ممنوع كتابة الاوامر في خاص البوت**');
    var lo = new Discord.RichEmbed()
      .setImage(viper[Math.floor(Math.random() * viper.length)])
    message.channel.sendEmbed(lo);
  }
});



var memes = ["https://cdn.discordapp.com/attachments/422454766468202511/426482204835708938/fkk1.png", "https://cdn.discordapp.com/attachments/422454766468202511/426482399757467648/fkk2.png", "https://cdn.discordapp.com/attachments/422454766468202511/426486610729762816/fkk3.png", "https://cdn.discordapp.com/attachments/422454766468202511/426486726907789332/fkk4.png", "https://cdn.discordapp.com/attachments/422454766468202511/426486904343625729/fkk5.png", "https://cdn.discordapp.com/attachments/422454766468202511/426487095943495703/fkk6.png", "https://cdn.discordapp.com/attachments/422454766468202511/426487229796450304/fkk7.png", "https://cdn.discordapp.com/attachments/422454766468202511/426487556461559819/fkk8.png", "https://cdn.discordapp.com/attachments/422454766468202511/426487784736423956/fkk9.png", "https://cdn.discordapp.com/attachments/422454766468202511/426487945554558991/fkk10.png", "https://cdn.discordapp.com/attachments/422454766468202511/426488069672140800/fkk11.png", "https://cdn.discordapp.com/attachments/422454766468202511/426488213872312330/fkk12.png", "https://cdn.discordapp.com/attachments/422454766468202511/426488358097649688/fkk13.png", "https://cdn.discordapp.com/attachments/422454766468202511/426488491359338516/fkk14.png"]
client.on('message', message => {

  if (message.content.startsWith(prefix + 'فكك')) {
    if (!message.channel.guild) return message.reply('** ممنوع كتابة الاوامر في خاص البوت**');
    var embed = new Discord.RichEmbed()
      .setImage(memes[Math.floor(Math.random() * memes.length)])
      .setColor('#7400ff')
    message.channel.sendEmbed(embed);
  }
});



var viper = ["https://imgur.com/jxNXIRi.png", "", "https://imgur.com/bZ77C4N.png", "https://imgur.com/JoEkxeB.png", "https://imgur.com/ytMmA53.png", "https://imgur.com/Tz6leGv.png", "https://imgur.com/5cMhvzx.png", "https://imgur.com/aP6CJjh.png", "https://imgur.com/EZb852E.png", "https://imgur.com/kIiz33v.png"]
client.on('message', message => {
  var args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + 'اسرع')) {
    if (!message.channel.guild) return message.reply('** ممنوع كتابة الاوامر في خاص البوت**');
    var lo = new Discord.RichEmbed()
      .setImage(viper[Math.floor(Math.random() * viper.length)])
    message.channel.sendEmbed(lo);
  }
});



const Sra7a = [
  'صراحه  |  صوتك حلوة؟',
  'صراحه  |  التقيت الناس مع وجوهين؟',
  'صراحه  |  شيء وكنت تحقق اللسان؟',
  'صراحه  |  أنا شخص ضعيف عندما؟',
  'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
  'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
  'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
  'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
  'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
  'صراحه  |  أشجع شيء حلو في حياتك؟',
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
  'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
  'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
  'صراحه  |  نظرة و يفسد الصداقة؟',
  'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
  'صراحه  |  شخص معك بالحلوه والمُره؟',
  'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
  'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
  'صراحه  |  وش تتمنى الناس تعرف عليك؟',
  'صراحه  |  ابيع المجرة عشان؟',
  'صراحه  |  أحيانا احس ان الناس ، كمل؟',
  'صراحه  |  مع مين ودك تنام اليوم؟',
  'صراحه  |  صدفة العمر الحلوة هي اني؟',
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  'صراحه  |  صفة تحبها في نفسك؟',
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  'صراحه  |  تصلي صلواتك الخمس كلها؟',
  'صراحه  |  ‏تجامل أحد على راحتك؟',
  'صراحه  |  اشجع شيء سويتة بحياتك؟',
  'صراحه  |  وش ناوي تسوي اليوم؟',
  'صراحه  |  وش شعورك لما تشوف المطر؟',
  'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
  'صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  اي الدول تتمنى ان تزورها؟',
  'صراحه  |  متى اخر مره بكيت؟',
  'صراحه  |  تقيم حظك ؟ من عشره؟',
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
  'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
  'صراحه  |  كلمة تود سماعها كل يوم؟',
  'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
  'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
  'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
  'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
  '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
  'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
  '‏صراحه | هل تحب عائلتك ام تكرههم؟',
  '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
  '‏صراحه  |  هل خجلت من نفسك من قبل؟',
  '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
  '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
  '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
  '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
  '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
  'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
  '‏صراحه  |  ما هو عمرك الحقيقي؟',
  '‏صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
  'صراحه | هل قبلت فتاه؟'
]
client.on('message', message => {
  if (message.content.startsWith(prefix + 'صراحه')) {
    if (!message.channel.guild) return message.reply('** ممنوع كتابة الاوامر في خاص البوت**');
    var client = new Discord.RichEmbed()
      .setTitle("لعبة صراحة ..")
      .setColor('RANDOM')
      .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
      .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
      .setTimestamp()

    message.channel.sendEmbed(client);
    message.react("??")
  }
});



client.on("message", msg => {
  var prefix = "!";
  if (msg.content.startsWith(prefix + "id")) {
    if (!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
    const embed = new Discord.RichEmbed();
    embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
      .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
      .setColor("RANDOM")
      .setFooter(msg.author.username, msg.author.avatarURL)
      .setThumbnail(`${msg.author.avatarURL}`)
      .setTimestamp()
      .setURL(`${msg.author.avatarURL}`)
      .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
      .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
      .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
      .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
    msg.channel.send({ embed: embed })
  }
});

const sug = require("./suggestions.json")
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
  let message = msg;
  let messageArray = msg.content.split(" ");
  let args = messageArray.slice(1);
  let caseid = Date.now() + msg.author.discriminator
  if (msg.content.startsWith(prefix + "sug" || msg.content.startsWith(prefix + "sug"))) {
    let suggestionchat = msg.guild.channels.find(channel => channel.name === "suggestions⎹⎸أقتراحات・")
    // ^^^^^^^^^وأكيد يمديك تعدل اسم الروم لو تبي 
    let suggestion = args.join(' '); // بتلاقون تعريف الأرقز حقي فوق
    if (!suggestion) return message.channel.send('الرجاء وضع اقتراحك بعد الأمر');
    if (!suggestionchat) return message.channel.send('لا يمكنني ايجاد الشات');
    let suggestionembed = new Discord.RichEmbed()
      .setAuthor('New Suggestion!')
      .addField('الأقتراح من قبل', `${message.author.tag} **|** ${message.author.id}`, true)
      .addField('اسم السيرفر المرسل منه الأقتراح', `${message.guild.name} **|** ${message.guild.id}`)
      .addField('الأقتراح', `${suggestion}`)
      .setColor('#ffffff')
      .setFooter(`ID: ${Date.now() + msg.author.discriminator}`)
      .setThumbnail(message.author.avatarURL)
      .setTimestamp();
    suggestionchat.send(suggestionembed).then(send => {
      sug[caseid] = {
        message: suggestion,
        by: msg.author.id,
        Time: message.createdAt,
        thisisimportant: send.id
      }
      fs.writeFile("./suggestions.json", JSON.stringify(sug, null, 4), err => {
        console.log(err);
      })
    })
    message.channel.send("**تم أرسال اقتراحك**")
  }

  if (msg.content.startsWith(prefix + "allsuggestions")) {
    let data = undefined;
    for (i in sug) {
      if (data === undefined) {
        data = "";
      }
      let data1 = sug[i].message
      let data2 = sug[i].by
      const stuff = `${data1} **By** <@${data2}>`;
      data += (stuff) + "\n\n";
    }
    if (data !== undefined) {
      const richEmbed = new Discord.RichEmbed();
      richEmbed.addField("Messages", data)
      msg.channel.send(richEmbed)
    } else if (data === undefined) return message.channel.send("Couldn't find any suggestion")
  }
  if (msg.content.startsWith(prefix + "dsug")) {
    let that = args.join(' ')
    if (!that) return message.channel.send("Hmmm please put an id")
    if (sug[that] === undefined) return message.channel.send("Couldn't find that suggestion id!")
    message.channel.send("Deleted!")
    message.guild.channels.find(ch => ch.name === "الاقتراحات").fetchMessage(sug[that].thisisimportant).then(msg => msg.delete());
    delete sug[that];
    fs.writeFile("./suggestions.json", JSON.stringify(sug, null, 4), err => {
      console.log(err)
    })
  }

})




client.login(process.env.token);