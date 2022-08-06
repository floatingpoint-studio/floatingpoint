let cards = document.getElementById('cards')

const data = [
  {
    title: "Web Development",
    desc: "Websites",
    more_desc: "Build with us",
    img: ["./assets/react-icon.png", "./assets/mongodb.png"],
  },
  {
    title: "App Development",
    desc: "Apps",
    more_desc: "Build with us",
    img: ["./assets/flutter.png", "./assets/kotlin.png"],
  },
  {
    title: "Graphics Designing",
    desc: "Graphics",
    more_desc: "Build with us",
    img: ["./assets/figma.png", "./assets/photoshop.png"],
  }
]

let str = ""

data.forEach((item) => {
  str += `
  <div class="infocontainer">
    <div class="infoheading">${item.title}</div>
    <div class="infodescription">${item.desc}</div>
    <div class="build-button"><span class="build text">${item.more_desc}</span></div>
      <div class="iconholder"><div class="iconone"><img src=${item.img[0]}  alt="" class="icons"></div>
      <div class="icontwo"><img src=${item.img[1]} alt="" class="icons"></div></div>
  </div>
`
})

cards.innerHTML = str

