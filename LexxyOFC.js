/*
𝑊𝐸𝐵𝑆𝐼𝑇𝐸 𝑅𝐸𝑆𝑇 𝐴𝑃𝐼 𝑌𝐴𝑁𝐺 𝐷𝐼 𝑆𝐶 𝐼𝑁𝐼
LolHuman = https://api.lolhuman.xyz/
Zekais = http://zekais-api.herokuapp.com/
XziyApi = https://ziy.herokuapp.com/
ZeksApi = https://zeks.me/

Kalo Mau Work All Fitur Ya Beli Apikey Di Webnya
Cuman LolHuman & ZekaisApi Doang Kurang

𝑵𝒐𝒕𝒆 : 𝘎𝘪𝘭𝘪𝘳𝘢𝘯 𝘙𝘋𝘗 𝘒𝘦 𝘉𝘦𝘭𝘪 , 𝘌𝘩𝘩 𝘈𝘱𝘪𝘬𝘦𝘺 𝘕𝘺𝘢 𝘒𝘢𝘨𝘢:v
*/

const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const crypto = require('crypto')  
const yts = require('yt-search')
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require('child_process')
const { color, bgcolor } = require('./lib/color')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { fetchJson, fetchText } = require('./lib/fetcher')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require("./lib/functions");
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

const game = require("./lib/game");

//Database
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var _registered = JSON.parse(fs.readFileSync('./storage/user.json'))

//Setting
prefix = setting.PrefixNya
const gcount = setting.gcount
var owner = setting.OwnerNumber
var ownerName = setting.OwnerName
var botName = setting.BotName
var fakeyoi = setting.FakeNya
var lolkey = setting.LolHuman
var zekais = setting.ZekaisApi
var xziyApi = setting.XziyApi
var zeksApi = setting.ZeksApi
var creator = 'Lexxy Official'

img1 = fs.readFileSync('./img/fake.jpg')
img2 = fs.readFileSync('./img/thumb.jpg')

var todd = '𝘚𝘊 𝘉𝘢𝘴𝘦 𝘐𝘯𝘪 𝘉𝘶𝘢𝘵𝘢𝘯 𝘓𝘦𝘹𝘹𝘺 𝘖𝘧𝘧𝘪𝘤𝘪𝘢𝘭 𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘋𝘪 𝘗𝘢𝘬𝘦 𝘑𝘪𝘬𝘢 𝘐𝘯𝘨𝘪𝘯 𝘙𝘦𝘤𝘰𝘥𝘦 𝘈𝘵𝘢𝘶 𝘙𝘦𝘶𝘱𝘭𝘰𝘢𝘥 𝘛𝘰𝘭𝘰𝘯𝘨 𝘊𝘳𝘦𝘢𝘵𝘰𝘳 𝘑𝘢𝘯𝘨𝘢𝘯 𝘋𝘪 𝘏𝘢𝘱𝘶𝘴 𝘋𝘢𝘯 𝘏𝘢𝘳𝘨𝘢𝘪 𝘒𝘢𝘳𝘺𝘢 𝘖𝘳𝘢𝘯𝘨'

//Jam
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const tima = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
//Modul
module.exports = LexxyOFC = async (LexxyOFC, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked		
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const date = new Date().toLocaleDateString()
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(prefix)
const timestampi = speed();
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss')
const latensyi = speed() - timestampi
const ownerNumber = [`6285789004732@s.whatsapp.net`,`${owner}@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await LexxyOFC.chats.all()
const groupMetadata = isGroup ? await LexxyOFC.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const Verived = "0@s.whatsapp.net"
const num = "6285789004732@s.whatsapp.net"
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const conts = mek.key.fromMe ? LexxyOFC.user.jid : LexxyOFC.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? LexxyOFC.user.name : conts.notify || conts.vname || conts.name || '-'
const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
const q = args.join(' ')

//Mess
mess = {
			wait: "[❗] 𝘛𝘶𝘯𝘨𝘨𝘶 𝘚𝘦𝘣𝘦𝘯𝘵𝘢𝘳...",
			success: "[❗] 𝘋𝘰𝘯𝘦 𝘕𝘪𝘩 𝘒𝘢𝘬",
			error: {
				stick: "[❗] 𝘎𝘢𝘨𝘢𝘭 𝘬𝘢𝘬 𝘤𝘰𝘣𝘢 𝘭𝘢𝘨𝘪",
				Iv: "Link Nya Eror Kack"
			},
			only: {
				admin: "Fitur ini Khusus Admin Grup",
				owner: "Fitur ini Khusus Owner",
				group: "Fitur Hanya Bisa di Grup"
			}
		}
const katalog = (teks) => {
             res = LexxyOFC.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© Lexxy Official_*", "thumbnail": img2, "surface": 'CATALOG' }}, {quoted:ftrol})
             LexxyOFC.relayWAMessage(res)
             }
const reply = (teks) => {
            LexxyOFC.sendMessage(from, teks, text, {quoted: mek})
        }
var costum = (pesan, tipe, target, target2) => {
LexxyOFC.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}       

//button
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = LexxyOFC.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝑴𝑬𝑵𝑼","footerText": `Sc By LexxyOFC`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return LexxyOFC.relayWAMessage(po, {waitForAck: true})
        }
		// GAME 
             game.cekWaktuFam(LexxyOFC, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n** *Jawaban Benar🎉 *\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                LexxyOFC.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))
                }
            }        
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
LexxyOFC.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
LexxyOFC.sendMessage(from, hasil, type, options).catch(e => {
LexxyOFC.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{	    	
        if(mids.length > 0){		    
        text = normalizeMention(to, text, mids)	    	
        }		    
        const fn = Date.now() / 10000;		    
        const filename = fn.toString()	     	
        let mime = ""		    
        var download = function (uri, filename, callback) {		   
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);		   
        });		   
        };		    
        download(url, filename, async function () {		    
        console.log('done');		    
        let media = fs.readFileSync(filename)		    
        let type = mime.split("/")[0]+"Message"		    
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif		    
        }		    
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio		    
        }		    
        LexxyOFC.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})		    		    
        fs.unlinkSync(filename)		    
        });	       
        }
        
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));  
      }
          	        
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " ℎ𝑎𝑟𝑖, " : " 𝐻𝑎𝑟𝑖, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " 𝑗𝑎𝑚, " : " 𝐽𝑎𝑚, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " 𝑚𝑒𝑛𝑖𝑡, " : " 𝑀𝑒𝑛𝑖𝑡, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " 𝑑𝑒𝑡𝑖𝑘" : " 𝐷𝑒𝑡𝑖𝑘") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
//Jam Hari Tanggal Tahun
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan = datw.getMonth();
    var tanggal = datw.getDate();
      var hari = datw.getDay();
        var jams = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
       case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
   case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
        }
switch(bulan) {
case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
                 case 2: bulan = "Maret"; break;
                          case 3: bulan = "April"; break;
                                   case 4: bulan = "Mei"; break;
                                            case 5: bulan = "Juni"; break;
                                                     case 6: bulan = "Juli"; break;
                                                              case 7: bulan = "Agustus"; break;
                                                                       case 8: bulan = "September"; break;
                                                                                case 9: bulan = "Oktober"; break;
                                                                                         case 10: bulan = "November"; break;
                                                                                                  case 11: bulan = "Desember"; break;
        }
switch(jams){
case 0: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 1: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 2: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌃'; break;
case 3: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 4: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break; 
case 5: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 6: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 7: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🎑'; break;
case 8: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 9: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 10: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢 🏞️'; break;
case 11: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break; 
case 12: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 13: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 14: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠 🏞️'; break;
case 15: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 16: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 17: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞 🌅'; break;
case 18: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
case 19: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 20: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 21: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
case 22: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break; 
case 23: jams = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦 🌌'; break;
			}
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

//Auto Ketik
await LexxyOFC.updatePresence(from, Presence.composing)

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

var fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 "h": `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${wib} *𝑾𝒊𝒃*\n       ${wita} *𝑾𝒊𝒕𝒂*\n       ${wit} *𝑾𝒊𝒕*`,
                 'jpegThumbnail': fs.readFileSync('./Logo.jpg')
                        }
                       }
	                  } 
var flexx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `𝐇𝐚𝐥𝐥𝐨 𝐊𝐚𝐤 ${jams}\n𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐚𝐡𝐚𝐠𝐢𝐚 𝐘𝐚`,
                 "title": ``,
                 'jpegThumbnail': fs.readFileSync("./img/loli.jpg"),
                        }
	                  } 
                     }   
var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 9999999,
status: 1,
surface : 1,
message: `©𝑩𝒚 𝑳𝒆𝒙𝒙𝒚𝑶𝑭𝑪`, 
orderTitle: `©𝑩𝒚 𝑳𝒆𝒙𝒙𝒚𝑶𝑭𝑪`,
thumbnail: img2,
sellerJid: '0@s.whatsapp.net' 
}
}
}
    var fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6283871990243-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
  
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//
        let sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            LexxyOFC.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: mek
            })
        }
        let sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await LexxyOFC.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            LexxyOFC.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: mek,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        
//━━━━━━━━━━━━━━━[ REGISTER ]━━━━━━━━━━━━━━━━━//      
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await LexxyOFC.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
		
// PEMBATASAN		            
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./storage/user.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
LexxyOFC.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `𝐇𝐚𝐥𝐥𝐨 𝐊𝐚𝐤 ${jams} \n𝐒𝐞𝐛𝐞𝐥𝐮𝐦 𝐌𝐞𝐧𝐠𝐚𝐤𝐬𝐞𝐬 𝐁𝐨𝐭 𝐖𝐚𝐣𝐢𝐛\n𝐕𝐞𝐫𝐢𝐟𝐢𝐤𝐚𝐬𝐢 𝐓𝐞𝐫𝐥𝐞𝐛𝐢𝐡 𝐃𝐚𝐡𝐮𝐥𝐮 𝐘𝐚 𝐊𝐚𝐤`
const daftar2 = '𝑺𝒊𝒍𝒂𝒉𝒌𝒂𝒏 𝑲𝒍𝒊𝒌 𝑩𝒖𝒕𝒕𝒐𝒏 𝑫𝒊 𝑩𝒂𝒘𝒂𝒉 𝑲𝒂𝒌'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `Verify`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//
const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      LexxyOFC.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    
//Conektion
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//Auto Read
LexxyOFC.chatRead(from, "read")

//Menu
switch (command) {
case 'daftar':
case 'verify':
if (isRegistered) return reply('𝑲𝒂𝒎𝒖 𝑺𝒖𝒅𝒂𝒉 𝑻𝒆𝒓𝒅𝒂𝒇𝒕𝒂𝒓 𝑫𝒊 𝑫𝒂𝒕𝒂𝒃𝒂𝒔𝒆')
namaUser = args.join(" ")
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
            fs.writeFileSync('./storage/user.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
const jancok =`╭─⚘ 「  𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧  」 ⚘
➳ 𝑵𝒂𝒎𝒂 : *${pushname}*
➳ 𝑵𝒐𝒎𝒆𝒓 : *@${sender.split('@')[0]}*
➳ 𝑺𝒆𝒓𝒊 : *${serialUser}*
➳ 𝑷𝒆𝒏𝒈𝒈𝒖𝒏𝒂: *${_registered.length}*
└❏─────────────`
jancok2 =`${fakeyoi}`
but = [
{buttonId:`${prefix}menu`, buttonText: {displayText: '«⟨ MENU ⟩»'}, type: 1},
{buttonId:`${prefix}info`, buttonText: {displayText: '«⟨ INFO ⟩»'}, type: 1}
]
sendButLocation(from, jancok, jancok2, img2, but)
hh = fs.readFileSync('./vn/gktw.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: mek, mimetype: 'audio/mp4', ptt:true})  
break
case 'tes':
tes =`𝐁𝐨𝐭 𝐓𝐞𝐥𝐚𝐡 𝐎𝐧𝐥𝐢𝐧𝐞 𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐊𝐞𝐭𝐢𝐤 𝐦𝐞𝐧𝐮`
reply(tes)
break
case 'status':
anu = await fetchJson(`https://api.mcsrvstat.us/bedrock/2/play.nikosmp.live`)
ini_txt =`*Status:* ${anu.online}\n`
ini_txt +=`*Online:* ${anu.players.online}\n`
ini_txt +=`*Map:* ${anu.map}\n`
ini_txt +=`*Gamemode:* Survival`
reply(ini_txt)
break
// RANDOM TEXT //
case 'quotes':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
get = anu.result
ini_txt =`Quotes : ${get.quote}\n\n`
ini_txt +=`By ${get.by}`
reply(ini_txt)
break
case 'quotesislami':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${lolkey}`)
ini_txt =`Quotes : ${anu.result}\n\n`
ini_txt +=`By Lexxy Official`
reply(ini_txt)
break
case 'quotesdilan':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
ini_txt =`Quotes : ${anu.result}\n\n`
ini_txt +=`By Lexxy Official`
reply(ini_txt)
break
case 'quotesanime':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
get = anu.result
ini_txt =`Quotes : ${get.quote}\n\n`
ini_txt +=`Character : ${get.character}\n`
ini_txt +=`Anime : ${get.anime}\n`
ini_txt +=`Episode : ${get.episode}`
reply(ini_txt)
break
case 'quotesimage':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
LexxyOFC.sendMessage(from, anu, image, {quoted: flexx, caption: 'Quotes By Lexxy Official' })
break
case 'faktaunik':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=${lolkey}`)
ini_txt =`Fakta : ${anu.result}\n\n`
ini_txt +=`By Lexxy Official`
reply(ini_txt)
break
case 'katabijak':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${lolkey}`)
reply(anu.result)
break
case 'pantun':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`)
reply(anu.result)
break
case 'puisi':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/puisi?apikey=${lolkey}`)
reply(anu.result)
break
case 'katabucin1':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/bucin?apikey=${lolkey}`)
reply(anu.result)
break
case 'katabucin2':
reply(mess.wait)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/katabucin?apikey=${lolkey}`)
reply(anu.result)
break

//PEMBATAS EPHOTO MENU//
case 'luxurygold':
case 'watercolor':
case 'multicolor3d':
case 'wetglass':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalaxy':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
case 'cartoongravity':
case 'anonymhacker':
case 'mlwall':
case 'pubgmaskot':
case 'aovwall':
case 'logogaming':
case 'fpslogo':
case 'avatarlolnew':
case 'lolbanner':
case 'avatardota':
case 'juventusshirt':
case 'cutegravity':
case 'realvintage':
case 'codwarzone':
case 'valorantbanner':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto`)
bo = args.join(" ")
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${bo}`)
LexxyOFC.sendMessage(from, anu, image, {quoted: mek, caption: 'Nih Kak Hasilnya ^_^' })
break
 //PEMBATAS EPHOTO MENU//
case 'tiktok':
case 'tiktokdl':
case 'tiktoknowm':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Dj Gratata`)
bo = args.join(" ")
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${bo}`).catch(e => {
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break

// MENU MAKER
case 'hartatahta':
case 'naruto':
case 'bneon':
case 'matrix':
case 'breakwall':
case 'gneon':
case 'dropwater':
case 'flowertext':
case 'crosslogo':
case 'silktext':
case 'flametext':
case 'glowtext':
case 'smoketext':
case 'skytext':
case 'cslogo':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'epep':
case 'text3dbox':
case 'logobp':
case 'leavest':
case 'thundertext':
case 'tlight':
case 'nulis':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto`)
bo = args.join(" ")
reply(mess.wait)
res = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${zeksApi}&text=${bo}`)
LexxyOFC.sendMessage(from, res, image, {quoted: flexx, caption: 'Nih Kak Hasilnya ^_^' })
break
case 'wolflogo':
case 'pubglogo':
case 'snowwrite':
case 'watercolour':
case 'logoaveng':
case 'phlogo':
case 'marvellogo':
case 'gtext':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto`)
txt1 = args[0]
txt2 = args[0]
reply(mess.wait)
wll = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${zeksApi}&text1=${txt1}&text2=${txt2}`)
LexxyOFC.sendMessage(from, wll, image, {quoted: flexx, caption: 'Nih Kak Hasilnya ^_^' })
break
case 'artinama':
if (args.length == 0) return reply(`Nama Nya Mana Kak?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Haikal`)
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${bo}`)
reply(ini.result)
break
case 'blackpink':
case 'neon':
case 'greenneon':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
case 'magma':
case 'impressiveglitch':
case 'harrypotter':
case 'foggywindow':
case 'watercolor':
case 'wonderfulgraffiti':
if (args.length == 0) return reply(`𝑻𝒆𝒙𝒕 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌?\n𝑪𝒐𝒏𝒕𝒐𝒉 : ${prefix + command} Naruto`)
bo = args.join(" ")
reply(mess.wait)
blck = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${bo}`)
LexxyOFC.sendMessage(from, blck, image, {quoted: flexx, caption: 'Nih Kak Hasilnya ^_^' })
break
case 'caklontong':
              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
              pertanyaan = get_result.question
              LexxyOFC.sendMessage(from, '*+* ```Caklontong```\n\n *soal* :'+pertanyaan+'\n *kisi²* :'+kisi_kisi, text, { quoted: ftrol}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
case 'tebakgambar':
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
get_result = get_result.result
ini_image = get_result.image
jawaban = get_result.answer
ini_buffer = await getBuffer(ini_image)
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
buff = await getBuffer(ini_image)

LexxyOFC.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk : Gak Ada\nWaktu : 30 Detik' }).then(() => {
  tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  titid = "*Jawaban*: " + jawaban
  sendButton(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
  {
 buttonId: `${prefix}tebakgambar`,
 buttonText: {
displayText: `⬡ NEXT `,
 },
 type: 1,
  },]);

  delete tebakgambar[sender.split('@')[0]]
  fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
}
gameAdd(sender, glimit)
break
case 'donasi':
dns = fs.readFileSync('./donasi.jpg')
txtnya =`╭─◪ *DONASI BOT*
│  ───────────
├─ ❏ *PULSA*
├─ ❏ 085789004732
├─ ❏ *DANA*
├─ ❏ 082279915237
├─ ❏ *OVO*
├─ ❏ 085789004732
└────────────────`
LexxyOFC.sendMessage(from, dns, image, {quoted: flexx, caption: txtnya })
break
case 'menu':
res = await LexxyOFC.prepareMessageFromContent(from,{
"listMessage": {
"title": '「 𝑰𝑵𝑭𝑶 𝑼𝑺𝑬𝑹 」',
"description": `𝐍𝐚𝐦𝐚 : ${pushname}
𝐍𝐨𝐦𝐨𝐫 : @${sender.split('@')[0]}

「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」
✇ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐁𝐨𝐭 :  ⌜  ${prefix}  ⌟
✇ 𝐍𝐚𝐦𝐚 𝐁𝐨𝐭 : ${botName}
✇ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
✇ 𝐒𝐩𝐞𝐞𝐝 : ${latensyi.toFixed(4)} 𝘴𝘦𝘤𝘰𝘯𝘥
✇ 𝐋𝐢𝐛 : 𝐁𝐚𝐢𝐥𝐞𝐲𝐬 
✇ 𝐓𝐲𝐩𝐞 : 𝐍𝐨𝐝𝐞𝐉𝐒

𝗝𝗔𝗠 & 𝗪𝗔𝗞𝗧𝗨
${wib} 𝐖𝐈𝐁
${wita} 𝐖𝐈𝐓𝐀
${wit} 𝐖𝐈𝐓
────────────────`,
"buttonText": "𝐌𝐄𝐍𝐔",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `${hari} - ${tanggal} - ${bulan} - ${tahun}`,
    "rows": [ 
       {
           "title": "【  𝚂𝙾𝚄𝙽𝙳 𝙼𝙴𝙽𝚄  】 ",
           "rowId": `${prefix}soundmenu`
           },
	       {
           "title": "【  𝙵𝚄𝙽 𝙼𝙴𝙽𝚄  】",
           "rowId": `${prefix}funmenu`
           },
	       {
           "title": "【  𝙾𝚃𝙷𝙴𝚁 𝙼𝙴𝙽𝚄  】",
           "rowId": `${prefix}simplemenu`
           },
	       {
	       "title": "【  𝙶𝚊𝚖𝚎 𝙼𝚎𝚗𝚞  】",
           "rowId": `${prefix}gamemenu`
           },
           {
	       "title": "【  𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄  】",
           "rowId": `${prefix}animemenu`
           },
           {
           "title": "【  𝚃𝙴𝚇𝚃𝙿𝚁𝙾 𝙼𝙴𝙽𝚄  】",
           "rowId": `${prefix}textpromenu`
           },
           {
           "title": "【  𝙽𝙴𝙺𝙾𝙿𝙾𝙸 𝙼𝙴𝙽𝚄  】",
           "rowId": `${prefix}nekopoimenu`
           },
           {
	       "title": "【  𝙴𝙿𝙷𝙾𝚃𝙾 𝙼𝙴𝙽𝚄  】",
           "rowId": `${prefix}ephotomenu`
           },
           {
           "title": "【  𝙼𝙰𝙺𝙴𝚁 𝙼𝙴𝙽𝚄  】",
           "rowId": `${prefix}makermenu`
           },
           {
           "title": "【  𝚁𝙰𝙽𝙳𝙾𝙼 𝚃𝙴𝚇𝚃  】",
           "rowId": `${prefix}randomtext`
           },
           {
           "title": "【  𝙾𝚆𝙽𝙴𝚁 𝙱𝙾𝚃  】",
           "rowId": `${prefix}owner`
           },
	       {
           "title": "【  𝚂𝙲𝚁𝙸𝙿𝚃 𝙱𝙾𝚃  】",
           "rowId": `${prefix}scnya`
           },
           {
           "title": "【  𝙸𝙽𝙵𝙾 𝙱𝙾𝚃  】",
           "rowId": `${prefix}info`
           }
        ]
      }
    ]
  }
 }, {quoted: flexx})
 LexxyOFC.relayWAMessage(res)
 break
case 'gamemenu':
gme =`╭─⚘ ⌜ 𝐆𝐚𝐦𝐞 𝐌𝐞𝐧𝐮 ⌟ ⚘
│❁ ${prefix}𝘵𝘦𝘣𝘢𝘬𝘨𝘢𝘮𝘣𝘢𝘳 
│❁ ${prefix}𝘤𝘢𝘬𝘭𝘰𝘯𝘵𝘰𝘯𝘨
└❏─────────────`
reply(gme)
break
case 'textpromenu':
txtpro =`╭─⚘ ⌜ 𝐓𝐞𝐱𝐭𝐏𝐫𝐨 𝐌𝐞𝐧𝐮 ⌟ ⚘
│❁ ${prefix}𝘣𝘭𝘢𝘤𝘬𝘱𝘪𝘯𝘬 
│❁ ${prefix}𝘯𝘦𝘰𝘯 
│❁ ${prefix}𝘨𝘳𝘦𝘦𝘯𝘯𝘦𝘰𝘯 
│❁ ${prefix}𝘧𝘶𝘵𝘶𝘳𝘦𝘯𝘦𝘰𝘯 
│❁ ${prefix}𝘴𝘢𝘯𝘥𝘸𝘳𝘪𝘵𝘪𝘯𝘨 
│❁ ${prefix}𝘴𝘢𝘯𝘥𝘴𝘶𝘮𝘮𝘦𝘳 
│❁ ${prefix}𝘴𝘢𝘯𝘥𝘦𝘯𝘨𝘳𝘢𝘷𝘦𝘥 
│❁ ${prefix}𝘮𝘦𝘵𝘢𝘭𝘥𝘢𝘳𝘬 
│❁ ${prefix}𝘯𝘦𝘰𝘯𝘭𝘪𝘨𝘩𝘵 
│❁ ${prefix}𝘩𝘰𝘭𝘰𝘨𝘳𝘢𝘱𝘩𝘪𝘤 
│❁ ${prefix}𝘵𝘦𝘹𝘵1917 
│❁ ${prefix}𝘮𝘪𝘯𝘪𝘰𝘯 
│❁ ${prefix}𝘥𝘦𝘭𝘶𝘹𝘦𝘴𝘪𝘭𝘷𝘦𝘳 
│❁ ${prefix}𝘯𝘦𝘸𝘺𝘦𝘢𝘳𝘤𝘢𝘳𝘥 
│❁ ${prefix}𝘣𝘭𝘰𝘰𝘥𝘧𝘳𝘰𝘴𝘵𝘦𝘥 
│❁ ${prefix}𝘩𝘢𝘭𝘭𝘰𝘸𝘦𝘦𝘯 
│❁ ${prefix}𝘫𝘰𝘬𝘦𝘳𝘭𝘰𝘨𝘰 
│❁ ${prefix}𝘧𝘪𝘳𝘦𝘸𝘰𝘳𝘬𝘴𝘱𝘢𝘳𝘬𝘭𝘦 
│❁ ${prefix}𝘯𝘢𝘵𝘶𝘳𝘦𝘭𝘦𝘢𝘷𝘦𝘴 
│❁ ${prefix}𝘣𝘰𝘬𝘦𝘩 
│❁ ${prefix}𝘵𝘰𝘹𝘪𝘤 
│❁ ${prefix}𝘴𝘵𝘳𝘢𝘸𝘣𝘦𝘳𝘳𝘺 
│❁ ${prefix}𝘣𝘰𝘹3𝘥 
│❁ ${prefix}𝘳𝘰𝘢𝘥𝘸𝘢𝘳𝘯𝘪𝘯𝘨 
│❁ ${prefix}𝘣𝘳𝘦𝘢𝘬𝘸𝘢𝘭𝘭 
│❁ ${prefix}𝘪𝘤𝘦𝘤𝘰𝘭𝘥 
│❁ ${prefix}𝘭𝘶𝘹𝘶𝘳𝘺 
│❁ ${prefix}𝘤𝘭𝘰𝘶𝘥 
│❁ ${prefix}𝘴𝘶𝘮𝘮𝘦𝘳𝘴𝘢𝘯𝘥 
│❁ ${prefix}𝘩𝘰𝘳𝘳𝘰𝘳𝘣𝘭𝘰𝘰𝘥 
│❁ ${prefix}𝘵𝘩𝘶𝘯𝘥𝘦𝘳 
│❁ ${prefix}𝘮𝘢𝘨𝘮𝘢 
│❁ ${prefix}𝘪𝘮𝘱𝘳𝘦𝘴𝘴𝘪𝘷𝘦𝘨𝘭𝘪𝘵𝘤𝘩 
│❁ ${prefix}𝘩𝘢𝘳𝘳𝘺𝘱𝘰𝘵𝘵𝘦𝘳 
│❁ ${prefix}𝘧𝘰𝘨𝘨𝘺𝘸𝘪𝘯𝘥𝘰𝘸
│❁ ${prefix}𝘸𝘢𝘵𝘦𝘳𝘤𝘰𝘭𝘰𝘳
│❁ ${prefix}𝘸𝘰𝘯𝘥𝘦𝘳𝘧𝘶𝘭𝘨𝘳𝘢𝘧𝘧𝘪𝘵𝘪
└❏─────────────`
reply(txtpro)
break
case 'makermenu':
mker =`╭─⚘ ⌜ 𝐌𝐚𝐤𝐞𝐫 𝐌𝐞𝐧𝐮 ⌟ ⚘
│❁ ${prefix}𝘩𝘢𝘳𝘵𝘢𝘵𝘢𝘩𝘵𝘢 
│❁ ${prefix}𝘯𝘢𝘳𝘶𝘵𝘰 
│❁ ${prefix}𝘣𝘯𝘦𝘰𝘯 
│❁ ${prefix}𝘮𝘢𝘵𝘳𝘪𝘹 
│❁ ${prefix}𝘣𝘳𝘦𝘢𝘬𝘸𝘢𝘭𝘭 
│❁ ${prefix}𝘨𝘯𝘦𝘰𝘯 
│❁ ${prefix}𝘥𝘳𝘰𝘱𝘸𝘢𝘵𝘦𝘳 
│❁ ${prefix}𝘧𝘭𝘰𝘸𝘦𝘳𝘵𝘦𝘹𝘵 
│❁ ${prefix}𝘤𝘳𝘰𝘴𝘴𝘭𝘰𝘨𝘰 
│❁ ${prefix}𝘴𝘪𝘭𝘬𝘵𝘦𝘹𝘵 
│❁ ${prefix}𝘧𝘭𝘢𝘮𝘦𝘵𝘦𝘹𝘵 
│❁ ${prefix}𝘨𝘭𝘰𝘸𝘵𝘦𝘹𝘵 
│❁ ${prefix}𝘴𝘮𝘰𝘬𝘦𝘵𝘦𝘹𝘵 
│❁ ${prefix}𝘴𝘬𝘺𝘵𝘦𝘹𝘵 
│❁ ${prefix}𝘤𝘴𝘭𝘰𝘨𝘰 
│❁ ${prefix}𝘭𝘪𝘵𝘩𝘨𝘵𝘦𝘹𝘵 
│❁ ${prefix}𝘤𝘳𝘪𝘴𝘮𝘦𝘴 
│❁ ${prefix}𝘵𝘧𝘪𝘳𝘦 
│❁ ${prefix}𝘴𝘢𝘯𝘥𝘸 
│❁ ${prefix}𝘦𝘱𝘦𝘱 
│❁ ${prefix}𝘵𝘦𝘹𝘵3𝘥𝘣𝘰𝘹 
│❁ ${prefix}𝘭𝘰𝘨𝘰𝘣𝘱 
│❁ ${prefix}𝘭𝘦𝘢𝘷𝘦𝘴𝘵 
│❁ ${prefix}𝘵𝘩𝘶𝘯𝘥𝘦𝘳𝘵𝘦𝘹𝘵 
│❁ ${prefix}𝘵𝘭𝘪𝘨𝘩𝘵 
│❁ ${prefix}𝘯𝘶𝘭𝘪𝘴 
│❁ ${prefix}𝘸𝘰𝘭𝘧𝘭𝘰𝘨𝘰 
│❁ ${prefix}𝘱𝘶𝘣𝘨𝘭𝘰𝘨𝘰 
│❁ ${prefix}𝘴𝘯𝘰𝘸𝘸𝘳𝘪𝘵𝘦 
│❁ ${prefix}𝘸𝘢𝘵𝘦𝘳𝘤𝘰𝘭𝘰𝘶𝘳 
│❁ ${prefix}𝘭𝘰𝘨𝘰𝘢𝘷𝘦𝘯𝘨 
│❁ ${prefix}𝘱𝘩𝘭𝘰𝘨𝘰 
│❁ ${prefix}𝘮𝘢𝘳𝘷𝘦𝘭𝘭𝘰𝘨𝘰 
│❁ ${prefix}𝘨𝘵𝘦𝘹𝘵
└❏─────────────`
reply(mker)
break
case 'ephotomenu':
eph =`╭─⚘ ⌜ 𝐄𝐩𝐡𝐨𝐭𝐨 𝐌𝐞𝐧𝐮 ⌟ ⚘
│❁ ${prefix}𝘭𝘶𝘹𝘶𝘳𝘺𝘨𝘰𝘭𝘥 
│❁ ${prefix}𝘸𝘢𝘵𝘦𝘳𝘤𝘰𝘭𝘰𝘳 
│❁ ${prefix}𝘮𝘶𝘭𝘵𝘪𝘤𝘰𝘭𝘰𝘳3𝘥 
│❁ ${prefix}𝘸𝘦𝘵𝘨𝘭𝘢𝘴𝘴
│❁ ${prefix}𝘨𝘢𝘭𝘢𝘹𝘺𝘸𝘢𝘭𝘭𝘱𝘢𝘱𝘦𝘳 
│❁ ${prefix}𝘭𝘪𝘨𝘩𝘵𝘵𝘦𝘹𝘵 
│❁ ${prefix}𝘣𝘦𝘢𝘶𝘵𝘪𝘧𝘶𝘭𝘧𝘭𝘰𝘸𝘦𝘳 
│❁ ${prefix}𝘱𝘶𝘱𝘱𝘺𝘤𝘶𝘵𝘦 
│❁ ${prefix}𝘳𝘰𝘺𝘢𝘭𝘵𝘦𝘹𝘵 
│❁ ${prefix}𝘩𝘦𝘢𝘳𝘵𝘴𝘩𝘢𝘱𝘦𝘥 
│❁ ${prefix}𝘣𝘪𝘳𝘵𝘩𝘥𝘢𝘺𝘤𝘢𝘬𝘦 
│❁ ${prefix}𝘨𝘢𝘭𝘢𝘹𝘺𝘴𝘵𝘺𝘭𝘦 
│❁ ${prefix}𝘩𝘰𝘭𝘰𝘨𝘳𝘢𝘮3𝘥 
│❁ ${prefix}𝘨𝘳𝘦𝘦𝘯𝘯𝘦𝘰𝘯 
│❁ ${prefix}𝘨𝘭𝘰𝘴𝘴𝘺𝘤𝘩𝘳𝘰𝘮𝘦 
│❁ ${prefix}𝘨𝘳𝘦𝘦𝘯𝘣𝘶𝘴𝘩 
│❁ ${prefix}𝘮𝘦𝘵𝘢𝘭𝘭𝘰𝘨𝘰 
│❁ ${prefix}𝘯𝘰𝘦𝘭𝘵𝘦𝘹𝘵
│❁ ${prefix}𝘨𝘭𝘪𝘵𝘵𝘦𝘳𝘨𝘰𝘭𝘥 
│❁ ${prefix}𝘵𝘦𝘹𝘵𝘤𝘢𝘬𝘦 
│❁ ${prefix}𝘴𝘵𝘢𝘳𝘴𝘯𝘪𝘨𝘩𝘵 
│❁ ${prefix}𝘸𝘰𝘰𝘥𝘦𝘯3𝘥 
│❁ ${prefix}𝘵𝘦𝘹𝘵𝘣𝘺𝘯𝘢𝘮𝘦 
│❁ ${prefix}𝘸𝘳𝘪𝘵𝘦𝘨𝘢𝘭𝘢𝘹𝘺 
│❁ ${prefix}𝘴𝘯𝘰𝘸3𝘥 
│❁ ${prefix}𝘣𝘪𝘳𝘵𝘩𝘥𝘢𝘺𝘥𝘢𝘺 
│❁ ${prefix}𝘨𝘰𝘭𝘥𝘱𝘭𝘢𝘺𝘣𝘶𝘵𝘵𝘰𝘯 
│❁ ${prefix}𝘴𝘪𝘭𝘷𝘦𝘳𝘱𝘭𝘢𝘺𝘣𝘶𝘵𝘵𝘰𝘯
│❁ ${prefix}𝘧𝘳𝘦𝘦𝘧𝘪𝘳𝘦 
│❁ ${prefix}𝘤𝘢𝘳𝘵𝘰𝘰𝘯𝘨𝘳𝘢𝘷𝘪𝘵𝘺 
│❁ ${prefix}𝘢𝘯𝘰𝘯𝘺𝘮𝘩𝘢𝘤𝘬𝘦𝘳 
│❁ ${prefix}𝘮𝘭𝘸𝘢𝘭𝘭 
│❁ ${prefix}𝘱𝘶𝘣𝘨𝘮𝘢𝘴𝘬𝘰𝘵 
│❁ ${prefix}𝘢𝘰𝘷𝘸𝘢𝘭𝘭 
│❁ ${prefix}𝘭𝘰𝘨𝘰𝘨𝘢𝘮𝘪𝘯𝘨 
│❁ ${prefix}𝘧𝘱𝘴𝘭𝘰𝘨𝘰 
│❁ ${prefix}𝘢𝘷𝘢𝘵𝘢𝘳𝘭𝘰𝘭𝘯𝘦𝘸 
│❁ ${prefix}𝘭𝘰𝘭𝘣𝘢𝘯𝘯𝘦𝘳 
│❁ ${prefix}𝘢𝘷𝘢𝘵𝘢𝘳𝘥𝘰𝘵𝘢 
│❁ ${prefix}𝘫𝘶𝘷𝘦𝘯𝘵𝘶𝘴𝘴𝘩𝘪𝘳𝘵 
│❁ ${prefix}𝘤𝘶𝘵𝘦𝘨𝘳𝘢𝘷𝘪𝘵𝘺 
│❁ ${prefix}𝘳𝘦𝘢𝘭𝘷𝘪𝘯𝘵𝘢𝘨𝘦 
│❁ ${prefix}𝘤𝘰𝘥𝘸𝘢𝘳𝘻𝘰𝘯𝘦 
│❁ ${prefix}𝘷𝘢𝘭𝘰𝘳𝘢𝘯𝘵𝘣𝘢𝘯𝘯𝘦𝘳
└❏─────────────`
reply(eph)
break
case 'randomtext':
txttt =`╭─⚘ ⌜ 𝐑𝐚𝐧𝐝𝐨𝐦 𝐓𝐞𝐱𝐭 ⌟ ⚘
│❁ ${prefix}𝘲𝘶𝘰𝘵𝘦𝘴
│❁ ${prefix}𝘬𝘢𝘵𝘢𝘣𝘪𝘫𝘢𝘬
│❁ ${prefix}𝘱𝘢𝘯𝘵𝘶𝘯
│❁ ${prefix}𝘧𝘢𝘬𝘵𝘢𝘶𝘯𝘪𝘬
│❁ ${prefix}𝘱𝘶𝘪𝘴𝘪
│❁ ${prefix}𝘬𝘢𝘵𝘢𝘣𝘶𝘤𝘪𝘯1
│❁ ${prefix}𝘬𝘢𝘵𝘢𝘣𝘶𝘤𝘪𝘯2
│❁ ${prefix}𝘲𝘶𝘰𝘵𝘦𝘴𝘪𝘴𝘭𝘢𝘮𝘪
│❁ ${prefix}𝘲𝘶𝘰𝘵𝘦𝘴𝘥𝘪𝘭𝘢𝘯
│❁ ${prefix}𝘲𝘶𝘰𝘵𝘦𝘴𝘢𝘯𝘪𝘮𝘦
│❁ ${prefix}𝘲𝘶𝘰𝘵𝘦𝘴𝘪𝘮𝘢𝘨𝘦
└❏─────────────`
reply(txttt)
break
case 'yoii':
	menunyai = `Hai Kak *${pushname}* ${jams}
	
*──────" INFORMASI "──────*
*──────" LIST MENU "──────*
*1>* ${prefix}owner
*2>* ${prefix}runtime
*3>* ${prefix}sticker
*4>* ${prefix}toimg
*5>* ${prefix}tourl
*6>* ${prefix}play
*7>* ${prefix}ytmp3
*8>* ${prefix}ytmp4
*9>* ${prefix}tiktok
*10>* ${prefix}faktaunik
*11>* ${prefix}katabijak
*12>* ${prefix}pantun
*13>* ${prefix}bucin
*14>* ${prefix}randomnama
*15>* ${prefix}welcome
*16>* ${prefix}antilink
*17>* ${prefix}asmaulhusna
*18>* ${prefix}jadwalsholat
*19>* ${prefix}quotes
*21>* ${prefix}cerpen
*22>* ${prefix}tagall
*23>* ${prefix}hidetag
*24>* ${prefix}xnxxsearch
*25>* ${prefix}xnxx
*26>* ${prefix}quotesanime
*27>* ${prefix}nulis
*28>* ${prefix}nuliskanan
*29>* ${prefix}nuliskiri
*30>* ${prefix}foliokanan
*31>* ${prefix}foliokiri
*32>* ${prefix}ssweb
*33>* ${prefix}cogan
*34>* ${prefix}cecan
*35>* ${prefix}cecanvietnam
*36>* ${prefix}cecanrandom
*37>* ${prefix}hijaber
*38>* ${prefix}santuy
*39>* ${prefix}ukhti
*40>* ${prefix}bocil
*41>* ${prefix}ghea
*42>* ${prefix}rika
*43>* ${prefix}cecanmalaysia
*44>* ${prefix}cecankorea
*45>* ${prefix}cecanthailand
*46>* ${prefix}cecanjapan
*47>* ${prefix}cecanindonesia
	`
var imgs = await LexxyOFC.prepareMessage('0@c.us', img2, image, { thumbnail: img2 })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await LexxyOFC.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `ALL MENU`,
                        "description": menunyai,
                        "footerText": `メLexxy Official̵`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `YouTube : Lexxy Official×`,
                        "url": "OWNER : https://wa.me/6285789004732\nYT : https://bit.ly/3BpBe1Z\nGROUP : https://bit.ly/3Ene2TO"
                    },
                    "businessOwnerJid": "6285789004732@s.whatsapp.net",
                }
            }, { quoted: fgi, mimetype: 'image/jpeg' })
            LexxyOFC.relayWAMessage(ctlg)
            break
case 'nekopoimenu':
ne =`╭─⚘ ⌜ 𝐍𝐞𝐤𝐨𝐩𝐨𝐢 𝐌𝐞𝐧𝐮 ⌟ ⚘
│❁ ${prefix}𝘯𝘦𝘬𝘰1 
│❁ ${prefix}𝘯𝘦𝘬𝘰2 
│❁ ${prefix}𝘯𝘦𝘬𝘰3 
│❁ ${prefix}𝘯𝘦𝘬𝘰4 
│❁ ${prefix}𝘯𝘦𝘬𝘰5 
│❁ ${prefix}𝘯𝘦𝘬𝘰6 
│❁ ${prefix}𝘯𝘦𝘬𝘰7 
│❁ ${prefix}𝘯𝘦𝘬𝘰8 
│❁ ${prefix}𝘯𝘦𝘬𝘰9 
│❁ ${prefix}𝘥𝘰𝘴𝘢1 
│❁ ${prefix}𝘥𝘰𝘴𝘢2 
│❁ ${prefix}𝘥𝘰𝘴𝘢3 
│❁ ${prefix}𝘥𝘰𝘴𝘢4 
│❁ ${prefix}𝘥𝘰𝘴𝘢5 
│❁ ${prefix}𝘥𝘰𝘴𝘢6 
│❁ ${prefix}𝘥𝘰𝘴𝘢7 
│❁ ${prefix}𝘥𝘰𝘴𝘢8 
│❁ ${prefix}𝘥𝘰𝘴𝘢9 
│❁ ${prefix}𝘥𝘰𝘴𝘢10 
│❁ ${prefix}𝘥𝘰𝘴𝘢11 
│❁ ${prefix}𝘥𝘰𝘴𝘢12
│❁ ${prefix}𝘥𝘰𝘴𝘢13 
│❁ ${prefix}𝘥𝘰𝘴𝘢14 
│❁ ${prefix}𝘥𝘰𝘴𝘢15
└❏─────────────`
reply(ne)
break
case 'animemenu':
an =`╭─⚘ ⌜ 𝐀𝐧𝐢𝐦𝐞 𝐌𝐞𝐧𝐮 ⌟ ⚘
│❁ ${prefix}𝘤𝘩𝘢𝘳𝘢𝘤𝘵𝘦𝘳 
│❁ ${prefix}𝘮𝘢𝘯𝘨𝘢 
│❁ ${prefix}𝘢𝘯𝘪𝘮𝘦 
│❁ ${prefix}𝘬𝘶𝘴𝘰𝘯𝘪𝘮𝘦𝘴𝘦𝘢𝘳𝘤𝘩 
│❁ ${prefix}𝘰𝘵𝘢𝘬𝘶𝘥𝘦𝘴𝘶𝘴𝘦𝘢𝘳𝘤𝘩 
│❁ ${prefix}𝘯𝘩𝘦𝘯𝘵𝘢𝘪𝘴𝘦𝘢𝘳𝘤𝘩 
│❁ ${prefix}𝘯𝘦𝘬𝘰𝘱𝘰𝘪𝘴𝘦𝘢𝘳𝘤𝘩
└❏─────────────`
reply(an)
break
case 'scnya':
reply(`Nih Kak Sc Bot Nya\n\nhttps://youtu.be/P-GNgWXh0KU`)
break
case 'simplemenu':
smp =`╭─⚘ 「 𝙎𝙄𝙈𝙋𝙇𝙀 𝙈𝙀𝙉𝙐 」 ⚘
│❁ ${prefix}𝘴𝘵𝘪𝘤𝘬𝘦𝘳 
│❁ ${prefix}𝘱𝘭𝘢𝘺 
│❁ ${prefix}𝘵𝘪𝘬𝘵𝘰𝘬 
│❁ ${prefix}𝘲𝘶𝘰𝘵𝘦𝘴𝘪𝘥 
│❁ ${prefix}𝘲𝘶𝘰𝘵𝘦𝘴𝘪𝘮𝘨 
│❁ ${prefix}𝘧𝘢𝘬𝘵𝘢 
│❁ ${prefix}𝘣𝘪𝘫𝘢𝘬 
│❁ ${prefix}𝘣𝘶𝘤𝘪𝘯 
│❁ ${prefix}𝘮𝘦𝘮𝘦𝘴 
│❁ ${prefix}𝘤𝘦𝘳𝘱𝘦𝘯 
│❁ ${prefix}𝘱𝘰𝘭𝘺 
│❁ ${prefix}𝘣𝘰𝘭𝘥 
│❁ ${prefix}𝘬𝘪𝘳𝘬𝘰𝘯
│❁ ${prefix}𝘢𝘳𝘵𝘪𝘯𝘢𝘮𝘢
└❏─────────────`
reply(smp)
break
case 'soundmenu':
snd =`╭─⚘ ⌜ 𝐒𝐨𝐮𝐧𝐝 𝐌𝐞𝐧𝐮 ⌟ ⚘
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥1 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥2 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥3 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥4 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥5 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥6 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥7 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥8 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥9 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥10 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥11 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥12 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥13 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥14 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥15
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥16
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥17
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥18
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥19
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥20
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥21 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥22 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥23 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥24 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥25 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥26 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥27 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥28 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥29 
│❁ ${prefix}𝘴𝘰𝘶𝘯𝘥30 
│❁  ───────────
│❁  𝑇𝑜𝑡𝑎𝑙 𝑆𝑜𝑢𝑛𝑑 ; 1-75
└❏─────────────`
reply(snd)
break
case 'funmenu':
fun =`╭─⚘ ⌜ 𝐅𝐮𝐧 𝐌𝐞𝐧𝐮 ⌟ ⚘
│❁ ${prefix}𝘲𝘶𝘰𝘵𝘦𝘴
│❁ ${prefix}𝘥𝘢𝘳𝘬𝘫𝘰𝘬𝘦
│❁ ${prefix}𝘮𝘦𝘮𝘦
│❁ ${prefix}𝘳𝘢𝘵𝘦
│❁ ${prefix}𝘬𝘢𝘱𝘢𝘯𝘬𝘢𝘩
│❁ ${prefix}𝘢𝘱𝘢𝘬𝘢𝘩
│❁ ${prefix}𝘣𝘪𝘴𝘢𝘬𝘢𝘩
│❁ ${prefix}𝘤𝘢𝘳𝘪𝘱𝘦𝘴𝘢𝘯
│❁ ${prefix}𝘴𝘭𝘰𝘵
│❁ ${prefix}𝘴𝘶𝘪𝘵𝘴
│❁ ${prefix}𝘵𝘢𝘨𝘮𝘦
│❁ ${prefix}𝘵𝘢𝘨
│❁ ${prefix}𝘳𝘦𝘢𝘥𝘮𝘰𝘳𝘦
│❁ ${prefix}𝘧𝘪𝘵𝘯𝘢𝘩𝘱𝘤
└❏─────────────`
reply(fun)
break

    //━━━━━━━━━━━━━━━[ Neko Menu  ]━━━━━━━━━━━━━━━━━//        
                 case 'neko1':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko2':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko3':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko4':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko5':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko6':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko7':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko8':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko9':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5b+poi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break                
case 'character':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await LexxyOFC.sendMessage(from, thumbnail, image, { quoted: flexx, caption: ini_txt })
break
case 'manga':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await LexxyOFC.sendMessage(from, thumbnail, image, { quoted: flexx, caption: ini_txt })
break
case 'anime':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await LexxyOFC.sendMessage(from, thumbnail, image, { quoted: flexx, caption: ini_txt })
break
case 'kusonimesearch':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await LexxyOFC.sendMessage(from, ini_buffer, image, { quoted: flexx, caption: ini_txt })
break
case 'otakudesusearch':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'nhentaisearch':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch':
 
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break
        //━━━━━━━━━━━━━━━[ Dosa Menu  ]━━━━━━━━━━━━━━━━━//
case 'dosa1':				 

qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })

break

case 'dosa2':

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })

break

case 'dosa3':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    

break

case 'dosa4':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   

break

case 'dosa5':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   

break

case 'dosa6':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   

break

case 'dosa7':

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   

break

case 'dosa8':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   

break

case 'dosa10':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   

break

case 'dosa11':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   

break

case 'dosa12':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   

break

case 'dosa13':	

qute = fs.readFileSync('./img/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   

break
case 'dosa14':	
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
break
case 'dosa15':
qute = fs.readFileSync('./img/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: flexx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
break

//MKASIH
case 'darkjoke':
case 'meme':
buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`)
await LexxyOFC.sendMessage(from, buff, image, {qouted: flexx, caption: 'Nih Kak'})  
break
case 'rate':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: ftrol })
break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
const kah = apa[Math.floor(Math.random() * apa.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: ftrol })
break
case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: ftrol })
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Mimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: ftrol })
break
case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await LexxyOFC.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
LexxyOFC.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
case 'slot':
case 'slots':
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
LexxyOFC.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: flexx })
break
case 'suit':
case 'suits':
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
"Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'tag':
if (args.length < 1) return reply(`Nomernya Mana ?\nContoh ${prefix}tag 62xnxx`)
var nomqm = `${body.slice(5)}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
LexxyOFC.sendMessage(from, tagq, text, { quoted: flexx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'tagme':
var nomqm = mek.participant
tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
LexxyOFC.sendMessage(from, tagu, text, { quoted: flexx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'readmore':
case 'more':
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return  reply(mess.error.api)
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply( text1 + readmore + text2)
break
case 'fitnahpc':
 if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
var gh = body.slice(10)
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
LexxyOFC.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
break
case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      case 'sound70':
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      LexxyOFC.sendMessage(from, omkeh, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
      break
      case 'sound71':
      case 'sound71':
      case 'sound72':
      case 'sound73':
      case 'sound74':
      case 'sound75':
      omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
      LexxyOFC.sendMessage(from, omkeh, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
          break      
case 'ssweb':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Lexxy Gantenk`)
ini_url = args.join(" ")
reply(mess.wait)
getBuffer(`https://ziy.herokuapp.com/api/ssweb?apikey=${xziyApi}&url=${ini_url}`).then((hasil) => {
LexxyOFC.sendMessage(from, hasil, image, { thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe Lexxy Official`, quoted : flexx })
})
break
case 'nulis':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy Official`)
bo = args.join(" ")
reply(mess.wait)
nul = await getBuffer(`https://ziy.herokuapp.com/api/nulis?text=${bo}&apikey=${xziyApi}`)
LexxyOFC.sendMessage(from, nul, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'bold':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy`)
bo = args.join(" ")
reply(mess.wait)
bl = await getBuffer(`http://zekais-api.herokuapp.com/oxy/bold?text=${bo}&apikey=${zekais}`)
LexxyOFC.sendMessage(from, bl, MessageType.video,{mimetype:'video/mp4',quoted: mek, caption: '𝑁𝑖ℎ 𝐵𝑟𝑜 𝑉𝑖𝑑𝑒𝑜 𝑁𝑦𝑎'})
break
case 'poly':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy`)
bo = args.join(" ")
reply(mess.wait)
pl = await getBuffer(`http://zekais-api.herokuapp.com/oxy/poly?text=${bo}&apikey=${zekais}`)
LexxyOFC.sendMessage(from, pl, MessageType.video,{mimetype:'video/mp4',quoted: mek, caption: '𝑁𝑖ℎ 𝐵𝑟𝑜 𝑉𝑖𝑑𝑒𝑜 𝑁𝑦𝑎'})
break
case 'cerpen':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/cerpen?apikey=${zekais}`)
ini_txt =`Judul :${get.title}\n`
ini_txt +=`Pengarang : ${get.pengarang}\n`
ini_txt +=`Category : ${get.category}\n\n`
ini_txt +=`Cerita : ${get.post}`
reply(ini_txt)
break
case 'memes':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/dankmemes?apikey=${zekais}`)
ini = await getBuffer(`${get.result}`)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek })
break
case 'bucin':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/bucin?apikey=${zekais}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'bijak':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/bijak?apikey=${zekais}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'fakta':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/fakta?apikey=${zekais}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'quotesimg':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/quotepic?apikey=${zekais}`)
ini = await getBuffer(`${get.quotes}`)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek, caption: '𝑸𝒖𝒐𝒕𝒆𝒔 𝑩𝒚 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍' })
break
case 'quotesid':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/quotes?apikey=${zekais}`)
ini_txt =`*${get.quotes}*\n\n`
ini_txt +=`*Author : @${get.author}*`
reply(ini_txt)
break
case 'ttmp4':
if (!isRegistered) return reply(dftr1)
url = args.join(" ")
reply(mess.wait)
get = await fetchJson(`https://mirip-lolhuman.herokuapp.com/docs/download/tiktok?url=${url}&apikey=Alphabot`)
ini = await getBuffer(get.result.nowm)

LexxyOFC.sendMessage(from, ini, MessageType.video,{mimetype:'video/mp4',quoted: flexx})
break
case 'ttmp3':
if (!isRegistered) return reply(dftr1)
ttmp = args.join(" ")
reply(mess.wait)
get = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ttmp}`)

LexxyOFC.sendMessage(from, get, MessageType.audio,{mimetype:'audio/m4a',quoted: flexx})
break 
case 'sc':
case 'infosc':
case 'info':
scnya = `┏━➤ 「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」
✯ 𝐍𝐚𝐦𝐚 : ${botName}
✯ 𝐎𝐰𝐧𝐞𝐫 : ${ownerName}
✯ 𝐏𝐫𝐞𝐟𝐢𝐱 : 「 𝐌𝐮𝐥𝐭𝐢 𝐏𝐫𝐞𝐟𝐢𝐱 」
✯ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦 : 𝐀𝐧𝐝𝐫𝐨𝐢𝐝 11
✯ 𝐋𝐢𝐛 : 𝐁𝐚𝐢𝐥𝐞𝐲𝐬
✯ 𝐓𝐲𝐩𝐞 : 𝐍𝐨𝐝𝐞𝐉𝐒
✯ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
┗━━━━━━━━━━━━━
━➤ 「 𝙄𝙉𝙁𝙊 𝘿𝙀𝙑 」
✍️ 𝑆𝑐𝑟𝑖𝑝𝑡 𝑀𝑎𝑑𝑒 𝑖𝑛 𝐵𝑦 𝐿𝑒𝑥𝑥𝑦 𝑂𝑓𝑓𝑖𝑐𝑖𝑎𝑙
🌟 𝑉𝑒𝑟𝑠𝑖𝑜𝑛 : 6.0
📈 𝐿𝑎𝑠𝑡 𝑈𝑝𝑑𝑎𝑡𝑒 : 14-𝐷𝑒𝑠-2021

📦 𝐺𝑟𝑢𝑝:
https://chat.whatsapp.com/LeGxfgT6gjV0sdAOkYC5fG

🌐 𝑌𝑜𝑢𝑇𝑢𝑏𝑒:
https://youtube.com/c/LEX4YOUU

𝑺𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆 𝑭𝒐𝒓 𝑵𝒆𝒘 𝑼𝒑𝒅𝒂𝒕𝒆!`
buttons = [
{buttonId:`${prefix}menu`, buttonText: {displayText: '</BACK MENU'}, type: 1}
]
const info = {
    contentText: `${scnya}`,
    footerText: ``,
    buttons: buttons,
    headerType: 1
}
await LexxyOFC.sendMessage(from, info, MessageType.buttonsMessage, {quoted: mek})
hh = fs.readFileSync('./vn/gktw.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: flexx, mimetype: 'audio/mp4', ptt:true})  
break
case 'playmp3':
case 'play':
if (args.length < 1) return reply('Masukin Judul Lagunya')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
var tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
• *Judul :* ${res.all[0].title}
• *ID Video :* ${res.all[0].videoId}
• *Diupload Pada :* ${res.all[0].ago}
• *Views :* ${res.all[0].views}
• *Durasi :* ${res.all[0].timestamp}
• *Channel :* ${res.all[0].author.name}
• *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `${fakeyoi}`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
LexxyOFC.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'owner':
sendKontak(from, `${owner}`, `${ownerName} ✨`)
break      
case 'kirkon':
if (args.length < 1) return reply(`𝑵𝒐𝒎𝒐𝒓 𝑵𝒚𝒂 𝑴𝒂𝒏𝒂 𝑲𝒂𝒌? \n𝑪𝒐𝒏𝒕𝒐𝒉 : \n${prefix}kirkon 6282279915237 Lexxy`)
txt1 = args[0]
txt2 = args[1]
sendKontak(from, `${txt1}`, `${txt2} ✨`)
break

	
//BATASNYA
default:
           if (budy.startsWith("$ ")){
           if (!mek.key.fromMe && !isOwner) return reply('```khusus owner bro```')
           	console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Dari owner ni`))
           	exec(chats.slice(2), (err, stdout) => {
           	if (err) return reply(`${err}`)
           	if (stdout) reply(`${stdout}`)
           	})
            }
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return LexxyOFC.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'pink'))
        }
	}
}


	
    
