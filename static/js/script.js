let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//  Scroll sectioino active link
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // Sticky navabr

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navar when click navbar link (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container , .portfolio-box , .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
});

// typed js

const typed = new Typed(".multiple-text", {
  strings: [
    "Website Devlopment",
    "Software Devlopment",
    "Web Designing",
    "Graphic Designing",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
$(document).ready(function () {
  $('#contact_form').on('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Gather form data
    var formData = {
      name: $('#name').val(),
      email: $('#email').val(),
      mobile: $('#mobile').val(),
      subject: $('#subject').val(),
      message: $('#message').val(), // Make sure to include the message
    };

    // AJAX request
    $.ajax({
      type: 'POST',
      url: 'contact_form.php', // Your PHP script that processes the form
      data: formData,
      dataType: 'json',
      success: function (response) {
        if (response.success) {
          alert('Message sent successfully!');
        } else {
          alert(response.message); // Handle validation errors
        }
      },
      error: function (xhr, status, error) {
        console.error('AJAX Error: ' + status + error);
      },
    });
  });
});
