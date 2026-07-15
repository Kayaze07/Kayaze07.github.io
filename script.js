const faces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");

[dice1, dice2, dice3].forEach(d=>{
    d.addEventListener("click", rollDice);
    d.addEventListener("keydown", (e)=>{
        if(e.key === "Enter" || e.key === " "){
            e.preventDefault();
            rollDice();
        }
    });
});

function rollDice(){

    dice1.classList.add("roll");
    dice2.classList.add("roll");
    dice3.classList.add("roll");

    setTimeout(()=>{

        let d1 = Math.floor(Math.random()*6)+1;
        let d2 = Math.floor(Math.random()*6)+1;
        let d3 = Math.floor(Math.random()*6)+1;

        dice1.innerHTML = faces[d1-1];
        dice2.innerHTML = faces[d2-1];
        dice3.innerHTML = faces[d3-1];

        let total = d1+d2+d3;

        document.getElementById("number").innerHTML =
        `${d1} + ${d2} + ${d3} = <b>${total}</b>`;

        document.getElementById("move").innerHTML =
        `เดินได้ <b>${total}</b> ช่อง`;

        dice1.classList.remove("roll");
        dice2.classList.remove("roll");
        dice3.classList.remove("roll");

    },800);

}

const cards = [
  {
    title:"โดนหลอกให้ขนสิ่งผิดกฎหมายขึ้นเครื่องบินข้ามประเทศ",
    desc:"หยุดเดิน 2 ตา",
    img:"1.1.jpg",
    video:"https://www.tiktok.com/@minpro6670/video/7660376184483613960"
  },
  {
    title:"รู้ทันกลโกง โดนหลอกให้ขนสิ่งผิดกฎหมายขึ้นเครื่องบินข้ามประเทศ",
    desc:"เดินไปข้างหน้า 3 ช่อง",
    img:"1.2.jpg",
    video:"https://www.tiktok.com/@minpro6670/video/7660376534502526226"
  },
  {
    title:"โดนหลอกให้เซ็นค้ำประกันเงินกู้จำนวนมาก",
    desc:"ถอยไปข้างหลัง 3 ช่อง",
    img:"2.1.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660376712659619079"
  },
  {
    title:"รู้ทันกลโกง โดนหลอกให้เซ็นค้ำประกันเงินกู้จำนวนมาก",
    desc:"เดินไปข้างหน้า 2 ช่อง",
    img:"2.2.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660376919262727432"
  },
  {
    title:"โดนคนรู้จักชวนลงทุนในเว็บไซต์แปลกๆ",
    desc:"ถอยไปข้างหลัง 2 ช่อง",
    img:"3.1.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660377160724778258"
  },
  {
    title:"รู้ทันกลโกง โดนคนรู้จักชวนลงทุนในเว็บไซต์แปลกๆ",
    desc:"เดินไปข้างหน้า 1 ช่อง",
    img:"3.2.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660377349615013127"
  },
  {
    title:"โดนหลอกเปิดบัญชีม้า",
    desc:"หยุดเดิน 1 ตา",
    img:"4.1.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660377415096569096"
  },
  {
    title:"รู้ทันกลโกง โดนหลอกเปิดบัญชีม้า",
    desc:"เดินไปข้างหน้า 2 ช่อง",
    img:"4.2.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660377635507145992"
  },
  {
    title:"โดนหลอกให้กดลิงก์ปลอม",
    desc:"ถอยไปข้างหลัง 2 ช่อง",
    img:"5.1.jpeg",
    video:"https://www.tiktok.com/@minpro6670/video/7660377738804579602"
  },
  {
    title:"รู้ทันกลโกง โดนหลอกให้กดลิงก์ปลอม",
    desc:"เดินไปข้างหน้า 1 ช่อง",
    img:"5.2.jpeg",
    video:"https://www.tiktok.com/@minpro6670/video/7660377843276500232"
  },
  {
    title:"มีเพื่อนชวนคุณให้ลงทุนในธุรกิจของเขา",
    desc:"ถอยไปข้างหลัง 4 ช่อง",
    img:"6.1.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660378047966694663"
  },
  {
    title:"รู้ทันกลโกง มีเพื่อนชวนคุณให้ลงทุนในธุรกิจของเขา",
    desc:"เดินไปข้างหน้า 5 ช่อง",
    img:"6.2.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660378227449400584"
  },
  {
    title:"โดนหลอกเซ็นชื่อเปิดบริษัท",
    desc:"หยุดเล่น 3 ตา",
    img:"7.1.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660378321481518343"
  },
  {
    title:"รู้ทันกลโกง โดนหลอกเซ็นชื่อเปิดบริษัท",
    desc:"เดินไปข้างหน้า 4 ช่อง",
    img:"7.2.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660378425512693000"
  },
  {
    title:"คุณกำลังเซ็นสัญญารับจ้างทำงาน",
    desc:"การทอยลูกเต๋าทั้งถัดไป แต้มที่ทอยจะถูกหักออกครึ่งหนึ่ง",
    img:"8.1.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660378640378514696"
  },
  {
    title:"รู้ทันกลโกง คุณกำลังเซ็นสัญญารับจ้างทำงาน",
    desc:"การทอยลูกเต๋าทั้งถัดไป แต้มที่ทอยจะถูกเพิ่มขึ้นครึ่งหนึ่ง",
    img:"8.2.png",
    video:"https://www.tiktok.com/@minpro6670/video/7660378697496530184"
  },
  {
    title:"คุณได้รับข้อความแจ้งว่าได้รับรางวัลใหญ่",
    desc:"ถอยไปข้างหลัง 3 ช่อง",
    img:"9.1.jpeg",
    video:"https://www.tiktok.com/@minpro6670/video/7660378776076930312"
  },
  {
    title:"รู้ทันกลโกง คุณได้รับข้อความแจ้งว่าได้รับรางวัลใหญ่",
    desc:"เดินไปข้างหน้า 2 ช่อง",
    img:"9.2.jpeg",
    video:"https://www.tiktok.com/@minpro6670/video/7660378884138913032"
  },
  {
    title:"มีคนเสนอขายสินค้าออนไลน์ในราคาถูกผิดปกติ",
    desc:"ถอยไปข้างหลัง 2 ช่อง",
    img:"10.1.jpg",
    video:"https://www.tiktok.com/@minpro6670/video/7660378934487354631"
  },
  {
    title:"รู้ทันกลโกง มีคนเสนอขายสินค้าออนไลน์ในราคาถูกผิดปกติ",
    desc:"เดินไปข้างหน้า 1 ช่อง",
    img:"10.2.jpg",
    video:"https://www.tiktok.com/@minpro6670/video/7660379106860633351"
  }
];

function randomCard(){

    let random = Math.floor(Math.random()*cards.length);
    let card = cards[random];

    // --- image, with graceful fallback if the file isn't present ---
    const img = document.getElementById("cardImg");
    const fallback = document.getElementById("imgFallback");

    img.hidden = false;
    fallback.hidden = true;
    img.onerror = () => {
        img.hidden = true;
        fallback.hidden = false;
    };
    img.src = card.img;

    // --- text ---
    document.getElementById("cardTitle").innerHTML = card.title;
    document.getElementById("cardDesc").innerHTML = card.desc;

    // --- case number, pulled from the filename e.g. "3.1f.png" -> case 3 ---
    const caseMatch = card.img.match(/^(\d+)/);
    const caseNumber = caseMatch ? caseMatch[1] : "?";
    document.getElementById("caseNumber").innerHTML = `เหตุการณ์ที่ ${caseNumber}`;

    // --- stamp: green "รู้ทัน!" for the awareness card, red "ระวัง!" for the trap ---
    const isAware = card.title.startsWith("รู้ทันกลโกง");
    const stamp = document.getElementById("stampBadge");
    stamp.hidden = false;
    stamp.classList.remove("aware","warning");
    stamp.classList.add(isAware ? "aware" : "warning");
    stamp.textContent = isAware ? "รู้ทัน!" : "ระวัง!";
    // restart the stamp animation on every draw
    stamp.style.animation = "none";
    void stamp.offsetWidth;
    stamp.style.animation = "";

    // --- video link ---
    const videoLink = document.getElementById("videoLink");
    if (card.video) {
        videoLink.href = card.video;
        videoLink.hidden = false;
    } else {
        videoLink.hidden = true;
    }

}
