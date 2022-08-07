let cards = document.getElementById('cards')

const data = [
  {
    title: "Deploy wih us",
    desc: "Websites",
    img: ["./assets/react-icon.png", "./assets/mongodb.png" , "./assets/html.png", "./assets/css.png", "./assets/nodejs.png" , "./assets/wordpress.png"],
  },
  {
    title: "Build with us",
    desc: "Apps",
    img: ["./assets/flutter.png", "./assets/kotlin.png", "./assets/android.png", "./assets/swift.png", "./assets/firebase.png", "./assets/androidstudio.png" ],
  },
  {
    title: "Design with us",
    desc: "Graphics",
    img: ["./assets/figma.png", "./assets/photoshop.png", "./assets/after effects.png", "./assets/adobe xd.png" , "./assets/adobe premiere pro.png", "./assets/adobe illustrator.png"],
  }
]

let str = ""

data.forEach((item) => {
  str += `
    <div class="infocontainer">
      <div class="textholder">
          <h2 class="infoheading">${item.title}</h2>
          <p class="infodes">${item.desc}</p>
      </div>
      <div class="btnandicons">
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



