const switchBulb = document.querySelector("#switchBulb");
const imgBulb = document.querySelector("#bulbon");

switchBulb.addEventListener('click', function () {
    console.log(imgBulb.src);
    // Check if the image source contains 'off' using 'includes' method
    if (imgBulb.src.includes('off')) {
        imgBulb.src = "pic_bulbon.gif";
        switchBulb.innerHTML = "Turn Off";
    } else {
        imgBulb.src = "pic_bulboff.gif";
        switchBulb.innerHTML = "Turn On";
    }
});
