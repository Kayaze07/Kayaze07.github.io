const dice=document.getElementById("dice");

const faces=[

"⚀",

"⚁",

"⚂",

"⚃",

"⚄",

"⚅"

];

dice.onclick=rollDice;

function rollDice(){

dice.classList.add("roll");

setTimeout(function(){

let random=Math.floor(Math.random()*6);

dice.innerHTML=faces[random];

document.getElementById("number").innerHTML=random+1;

document.getElementById("move").innerHTML=

"เดินได้ "+(random+1)+" ช่อง";

dice.classList.remove("roll");

},800);

}

const cards=[

{

title:"โดนหลอกให้ขนสิ่งผิดกฎหมายขึ้นเครื่องบินข้ามประเทศ",

desc:"หยุดเดิน 2 ตา",

img:"1.1f.png"

},

{

title:"รู้ทันกลโกง โดนหลอกให้ขนสิ่งผิดกฎหมายขึ้นเครื่องบินข้ามประเทศ",

desc:"เดินไปข้างหน้า 3 ช่อง",

img:"1.2f.png"

},

{

title:"โดนหลอกให้เซ็นค้ำประกันเงินกู้จำนวนมาก",

desc:"ถอยไปข้างหลัง 3 ช่อง",

img:"2.1f.png"

},

{

title:"รู้ทันกลโกง โดนหลอกให้เซ็นค้ำประกันเงินกู้จำนวนมาก",

desc:"เดินไปข้างหน้า 2 ช่อง",

img:"2.2f.png"

},

{

title:"โดนคนรู้จักชวนลงทุนในเว็บไซต์แปลกๆ",

desc:"ถอยไปข้างหลัง 2 ช่อง",

img:"3.1f.png"

},

{

title:"รู้ทันกลโกง โดนคนรู้จักชวนลงทุนในเว็บไซต์แปลกๆ",

desc:"เดินไปข้างหน้า 1 ช่อง",

img:"3.2f.png"

},

{

title:"โดนหลอกเปิดบัญชีม้า",

desc:"หยุดเดิน 1 ตา",

img:"4.1f.png"

},

{

title:"รู้ทันกลโกง โดนหลอกเปิดบัญชีม้า",

desc:"เดินไปข้างหน้า 2 ช่อง",

img:"4.2f.png"

},

{

title:"โดนหลอกให้กดลิงก์ปลอม",

desc:"ถอยไปข้างหลัง 2 ช่อง",

img:"5.1f.jpg"

},

{

title:"รู้ทันกลโกง โดนหลอกให้กดลิงก์ปลอม",

desc:"เดินไปข้างหน้า 1 ช่อง",

img:"5.2f.jpg"

},

{

title:"มีเพื่อนชวนคุณให้ลงทุนในธุรกิจของเขา",

desc:"ถอยไปข้างหลัง 4 ช่อง",

img:"6.1f.png"

},

{

title:"รู้ทันกลโกง มีเพื่อนชวนคุณให้ลงทุนในธุรกิจของเขา",

desc:"เดินไปข้างหน้า 5 ช่อง",

img:"6.2f.png"

},

{

title:"โดนหลอกเซ็นชื่อเปิดบริษัท",

desc:"หยุดเล่น 3 ตา",

img:"7.1f.png"

},

{

title:"รู้ทันกลโกง โดนหลอกเซ็นชื่อเปิดบริษัท",

desc:"เดินไปข้างหน้า 4 ช่อง",

img:"7.2f.png"

},

{

title:"คุณกำลังเซ็นสัญญารับจ้างทำงาน",

desc:"การทอยลูกเต๋าทั้งถัดไป แต้มที่ทอยจะถูกหักออก ครึ่งหนึ่ง",

img:"8.1f.png"

},

{

title:"รู้ทันกลโกง คุณกำลังเซ็นสัญญารับจ้างทำงาน",

desc:"การทอยลูกเต๋าทั้งถัดไป แต้มที่ทอยจะถูกเพิ่มขึ้น ครึ่งหนึ่ง",

img:"8.2f.png"

},

{

title:"คุณได้รับข้อความแจ้งว่าได้รับรางวัลใหญ่",

desc:"ถอยไปข้างหลัง 3 ช่อง",

img:"9.1f.jpg"

},

{

title:"รู้ทันกลโกง คุณได้รับข้อความแจ้งว่าได้รับรางวัลใหญ่",

desc:"เดินไปข้างหน้า 2 ช่อง",

img:"9.2f.jpg"

},

{

title:"มีคนเสนอขายสินค้าออนไลน์ในราคาถูกผิดปกติ",

desc:"ถอยไปข้างหลัง 2 ช่อง",

img:"10.1f.jpg"

},

{

title:"รู้ทันกลโกง มีคนเสนอขายสินค้าออนไลน์ในราคาถูกผิดปกติ",

desc:"เดินไปข้างหน้า 1 ช่อง",

img:"10.2f.jpg"

}

];

function randomCard(){

let random=Math.floor(Math.random()*cards.length);

let card=cards[random];

document.getElementById("cardImg").src=card.img;

document.getElementById("cardTitle").innerHTML=card.title;

document.getElementById("cardDesc").innerHTML=card.desc;

}