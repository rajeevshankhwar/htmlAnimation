// var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var timePeriodInMs = 4000;

// setTimeout(function () {
//     // document.getElementById("img").style.display = "none";
// },
//     timePeriodInMs);


/**
 * working code Start
 */

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




/**
 * working code End
 */

// // var c = canvas.getContext('2d');
// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(300, 300, 100, 100);

// console.log(canvas);

//lines
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "red";
// c.stroke();

//Arc/Circlec
// for (var i = 1; i <= 1500; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
// }
// for (var i = 1; i <= 2000; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'red';
//     c.stroke();
// // }
// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'red';
// c.stroke();
// var x = 200;
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight);
//     // var x = Math.random() * window.innerWidth;
//     // var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, 200, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'red';
//     c.stroke();
//     x += 1;
// }
// animate();