const images = document.querySelectorAll(".image-container img");
let i = 0;
let j = images.length;

function next() {
   document.getElementById("content" + (i + 1)).style.display = "none"
   i = (j + i + 1) % j;
   document.getElementById("content" + (i + 1)).style.display = "block"
}
setInterval(() => {
   next()
}, 2000);

var a = document.getElementById('home')
var b = document.getElementById('about')
var c = document.getElementById('service')
var d = document.getElementById('gallery')
var e = document.getElementById('contact')
function homeClick() {

   if (a.style.height !== "fit-content") {
      a.style.height = "fit-content"
      b.style.height = '0px'
      c.style.height = '0px'
      d.style.height = '0px'
      e.style.height = '0px'
   } else {
      a.style.height = "0px"
   }

}

function aboutClick() {

   if (b.style.height !== "fit-content") {
      b.style.height = "fit-content"
      a.style.height = '0px'
      c.style.height = '0px'
      d.style.height = '0px'
      e.style.height = '0px'
   } else {
      b.style.height = "0px"
   }

}

function serviceClick() {

   if (c.style.height == '0px') {
      c.style.height = "fit-content"
      a.style.height = '0px'
      b.style.height = '0px'
      d.style.height = '0px'
      e.style.height = '0px'
   } else {
      c.style.height = "0px"
   }

}

function galleryClick() {

   if (d.style.height == '0px') {
      d.style.height = "fit-content"
      a.style.height = '0px'
      b.style.height = '0px'
      c.style.height = '0px'
      e.style.height = '0px'
   } else {
      d.style.height = "0px"
   }

}

function contactClick() {

   if (e.style.height == '0px') {
      e.style.height = "fit-content"
      a.style.height = '0px'
      b.style.height = '0px'
      d.style.height = '0px'
      c.style.height = '0px'
   } else {
      e.style.height = "0px"
   }

}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}


// 

const loginBtn = document.querySelector(".login");
const loginPanel = document.getElementById("loginPanel");
const closeBtn = document.getElementById("closeBtn");

loginBtn.addEventListener("click", (e) => {
   e.preventDefault();
   loginPanel.classList.add("active");
});

closeBtn.addEventListener("click", () => {
   loginPanel.classList.remove("active");
});



// LOGIN PANEL
function validatelogin() {

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  let isValid = true;

  document.getElementById("emailErr").innerHTML = "";
  document.getElementById("passErr").innerHTML = "";

  if (email === "") {
    document.getElementById("emailErr").innerHTML = "** Please enter email";
    isValid = false;
  }

  if (password === "") {
    document.getElementById("passErr").innerHTML = "** Please enter password";
    isValid = false;
  }

  return isValid;
}
// ===================
// 2ND PAGE

const img = document.getElementById("mainImage");

document.getElementById("homee").addEventListener("click", () => {
   img.src = 'img1.jpg'
});

document.getElementById("servicee").addEventListener("click", () => {
   img.src = "img2.jpg";
});

document.getElementById("contactt").addEventListener("click", () => {
   img.src = "img3.jpg";
});


// ===================
// 3RD PAGE
function filterItem(category) {
   const items = document.querySelectorAll(".item");

   items.forEach(item => {
      if (category === "all") {
         item.classList.remove("hide");
      }
      else if (item.classList.contains(category)) {
         item.classList.remove("hide");
      }
      else {
         item.classList.add("hide");
      }
   });
}


// 4TH PAGE
function validateContactForm() {

   let name = document.getElementById("name").value.trim();
   let email = document.getElementById("email").value.trim();
   let password = document.getElementById("password").value;
   let message = document.getElementById("message").value.trim();

   let isValid = true;

   document.getElementById("nameErr").innerHTML = "";
   document.getElementById("emailErr").innerHTML = "";
   document.getElementById("passErr").innerHTML = "";
   document.getElementById("msgErr").innerHTML = "";

   if (name === "") {
      document.getElementById("nameErr").innerHTML = "** Please enter name";
      isValid = false;
   }

   if (email === "") {
      document.getElementById("emailErr").innerHTML = "** Please enter email";
      isValid = false;
   }

   if (password === "") {
      document.getElementById("passErr").innerHTML = "** Please enter password";
      isValid = false;
   }


   if (message === "") {
      document.getElementById("msgErr").innerHTML = "** Please enter message";
      isValid = false;
   }

   return isValid;
}