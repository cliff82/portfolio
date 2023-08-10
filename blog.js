




let i = 0;
let txt = 'Welcome To My Blog Profolio';
let speed = 100;

const typeWriter = () => {
   if (i < txt.length) {
      document.getElementById("blogTitle").innerHTML += txt.charAt(i); i++;
      setTimeout(typeWriter, speed);
   }
}
typeWriter();

let i2 = 0;
let txt2 = " I am someone who you could say loves technology. Have you ever wonderd how something works and just have to find the answer to it. Its so much to learn in this field and I love the fact that its like putting the biggest piece of puzzle together, but there is no ending piece. I have played many games from board to computer , phone, console, etc, but always wonderd how does some of these things work. I feel that designing and coding gives a different feeling when it comes to creating things.";
let speed2 = 100;

const typeWriter2 = () => {
   if (i2 < txt2.length) {
      document.getElementById("paraONE").innerHTML += txt2.charAt(i2); i2++;
      setTimeout(typeWriter2, speed2);
   }
};

document.getElementById("myButton").addEventListener("click", () => {
   typeWriter2();
});
 

// button 2
function myFunction(id) {
   var x = document.getElementById(id);
   if (x.className.indexOf("w3-show") == -1) {
     x.className += " w3-show";
   } else { 
     x.className = x.className.replace(" w3-show", "");
   }
 }
 

 