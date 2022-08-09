let cards = document.getElementById('cards')

const web = document.getElementById('BuildWeb')
const app = document.getElementById('DeployApp')
const design = document.getElementById('Design')
const contacform = document.getElementById('contact')

const data = [
  {
    title: "Web",
    desc: `<div class="infoquote">“Websites promote you 24/7: No employee will do that.”</div>
    <div class="right">-Paul Cookson</div>
    <div class="motto">Let us help you build websites that SELL!</div>`,
    moredes: `<a class="buildbtnlink" id="BuildWeb" href="#contact">Build with us</a>`,
    img: ["./assets/react-icon.png", "./assets/mongodb.png" , "./assets/html.png", "./assets/css.png", "./assets/nodejs.png" , "./assets/wordpress.png"],
  },
  {
    title: "App",
    desc: "Apps",
    moredes: `<a class="buildbtnlink" id="DeployApp" href="#contact">Deploy with us</a>`,
    img: ["./assets/flutter.png", "./assets/kotlin.png", "./assets/android.png", "./assets/swift.png", "./assets/firebase.png", "./assets/androidstudio.png" ],
  },
  {
    title: "Graphics",
    desc: "Graphics",
    moredes: `<a class="buildbtnlink" id="Design" href="#contact">Design with us</a>`,
    img: ["./assets/figma.png", "./assets/photoshop.png", "./assets/after effects.png", "./assets/adobe xd.png" , "./assets/adobe premiere pro.png", "./assets/adobe illustrator.png"],
  }
]

let str = ""

data.forEach((item) => {
  str += `
    <div class="infocontainer">
      <div class="textholder">
          <h2 class="infoheading">${item.title}</h2>
          <div class="infodes">${item.desc}</div>
      </div>
      <div class="btnandicons">
      <button class="buildbtn">${item.moredes}</button>
        <div class="iconsmarquee">
            <div class="marqueeholder">
                <div class="iconholder"><img src="${item.img[0]}" alt="" class="icons"></div>
                <div class="iconholder"><img src="${item.img[1]}" alt="" class="icons"></div>
                <div class="iconholder"><img src="${item.img[2]}" alt="" class="icons"></div>
                <div class="iconholder"><img src="${item.img[3]}" alt="" class="icons"></div>
                <div class="iconholder"><img src="${item.img[4]}" alt="" class="icons"></div>
                <div class="iconholder"><img src="${item.img[5]}" alt="" class="icons"></div>

            </div>
        </div>
      </div>
    </div>
`
})





cards.innerHTML = str


