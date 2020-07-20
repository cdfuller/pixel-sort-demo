let canvas = document.getElementById('display');
let ctx = canvas.getContext('2d');

let img = new Image();
img.onload = function() {
    ctx.drawImage(img, 0, 0);
}

img.src = "starry_night.jpg";

function pixelSort(){
    let start = performance.now();
    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    view = new Uint32Array(imgData.data.buffer);
    view.sort();
    sorted = new Uint8ClampedArray(view.buffer);
    imgData.data.set(sorted);
    ctx.putImageData(imgData, 0, 0);
    let stop = performance.now();
    console.log(stop - start);
}

//pixelSort();
