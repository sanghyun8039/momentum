const images = ["0.jpg","1.jpg","2.jpg"]


const imageBody = document.createElement("img")

imageBody.src = `img/${images[Math.floor(Math.random()*images.length)]}`;

document.body.appendChild(imageBody);