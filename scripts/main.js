/* Get cavas context. */
let c = document.getElementById("canvas").getContext("2d");

/* Load images. */
let images = [];

images.push(new Image());
images[images.length - 1].src = "images/Skull.png";
images.push(new Image());
images[images.length - 1].src = "images/House 1.png";
images.push(new Image());
images[images.length - 1].src = "images/House 2.png";
images.push(new Image());
images[images.length - 1].src = "images/House 3.png";

images[0].onload = function() {
    c.drawImage(images[0], 5, 5, 100, 200);
}

images[1].onload = function() {
    c.drawImage(images[1], 110, 5, 100, 200);
}

images[2].onload = function() {
    c.drawImage(images[1], 220, 5, 100, 200);
}
