function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  function myFunction() {
    var x = document.getElementById("mission");
    if (x.className === "mission") {
      x.className += " responsive";
    } else {
      x.className = "mission";
    }
  }
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
   
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
   
    slides[slideIndex-1].style.display = "block";  
  
    setTimeout(showSlides, 3000); // Change image every 2 seconds
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function search_mission() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('buttonsM');
    
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
      }
      else {
        x[i].style.display="list-item";				
      }
    }
  }
  
   // When the user clicks on div, open the popup
   function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  function myFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
  }
  function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
  }
/*function auth() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "admin@gmail.com" && password === "user") {
      window.location.replace("./index.html");
      // alert("You Are a ADMIN");

  } else {
      alert("Invalid information");
      return;
  }
}
*/
