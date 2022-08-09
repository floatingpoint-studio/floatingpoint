let cards = document.getElementById('cards')

const web = document.getElementById('BuildWeb')
const app = document.getElementById('DeployApp')
const design = document.getElementById('Design')
const contacform = document.getElementById('contact')

const data = [
  {
    title: "Web",
    desc: `
    <div class="infoquoteparent">
    <div class="infoquote" style="font-size:1.2em; line-height:25px;">“Websites promote you 24/7: No employee will do that.”</div>
    <div class="right" style="font-size:1.2em; line-height:25px;">-Paul Cookson</div></div>`,
    moredes: `<a onclick="function modify(){var text = document.getElementById('solution');
    text.value = 'Web';};modify()" class="buildbtnlink" id="web" href="#contact">Deploy with us</a>`,
    img: ["./assets/react-icon.png", "./assets/mongodb.png" , "./assets/html.png", "./assets/css.png", "./assets/nodejs.png" , "./assets/wordpress.png"],
  },
  {
    title: "App",
    desc: `<div class="infoquoteparent"><div class="infoquote" >"I don't consider ideas for apps all that valuable. It's the implementation of an idea that matters."</div>
    <div class="right" >-John Gruber</div></div>`,
    moredes: `<a onclick="function modify(){var text = document.getElementById('solution');
    text.value = 'App';};modify()" class="buildbtnlink" id="app" href="#contact">Build with us</a>`,
    img: ["./assets/flutter.png", "./assets/kotlin.png", "./assets/android.png", "./assets/swift.png", "./assets/firebase.png", "./assets/androidstudio.png" ],
  },
  {
    title: "Graphics",
    desc: `<div class="infoquoteparent"><div class="infoquote" >“There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for”</div>
    <div class="right" >-Milton Glaser</div></div>`,
    moredes: `<a onclick="function modify(){var text = document.getElementById('solution');
    text.value = 'Graphic Designing';};modify()" class="buildbtnlink" id="design" href="#contact">Design with us</a>`,
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


