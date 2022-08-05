const data = {
  web: {
    title: "Web Development",
    desc: "Websites",
    more_desc: "Build with us",
    img: ["assets\react-icon.png", "assetsmongodb.png"],
  },
  apps: {
    title: "App Development",
    desc: "Apps",
    more_desc: "Build with us",
    img: ["assets\flutter.png", "assetskotlin.png"],
  },
  design: {
    title: "Design",
    desc: "Design",
    more_desc: "Build with us",
  },
};

for (key in data) {
  var v = (document.createElement(
    "div"
  ).innerHTML += `<div class="infocontainterparent" style="margin-top:4vh ;">
    <div class="infocontainer">
      <div class="infoheading">${data[key]["title"]}</div>
      <div class="infodescription"><br><br>${data[key]["desc"]}</div>
      <div class="build-button"><span class="build text">${data[key]["more_desc"]}</span></div>
        <div class="iconholder"><div class="iconone"><img src=${data[key]["img"][0]}  alt="" class="icons"></div>
        <div class="icontwo"><img src=${data[key]["img"][1]} alt="" class="icons"></div></div>
    </div>
  </div>`);

  document.getElementById("cards").appendChild(v);
}
