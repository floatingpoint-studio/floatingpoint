let cards = document.getElementById('cards')

const data = [
  {
    title: "Web Development",
    desc: "Websites",
    more_desc: "Build with us",
    img: ["./assets/react-icon.png", "./assets/mongodb.png" , "./assets/html.png", "./assets/css.png", "./assets/nodejs.png" , "./assets/wordpress.png"],
  },
  {
    title: "App Development",
    desc: "Apps",
    more_desc: "Deploy with us",
    img: ["./assets/flutter.png", "./assets/kotlin.png", "./assets/android.png", "./assets/swift.png", "./assets/firebase.png", "./assets/androidstudio.png" ],
  },
  {
    title: "Graphics Designing",
    desc: "Graphics",
    more_desc: "Design with us",
    img: ["./assets/figma.png", "./assets/photoshop.png", "./assets/after effects.png", "./assets/adobe xd.png" , "./assets/adobe premiere pro.png", "./assets/adobe illustrator.png"],
  }
]

let str = ""

data.forEach((item) => {
  str += `
    <div class="infocontainer">
        <div class="textholder">
            <h2 class="infoheading">${item.title}</h2>
            <p class="infodes">${item.desc}
            </p>
      </div>
      <div class="btnandicons">
        <button class="buildbtn">${item.more_desc}</button>
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


