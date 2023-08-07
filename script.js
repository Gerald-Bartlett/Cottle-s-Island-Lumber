


const mobileNav = document.querySelector('.mobile-navigation ul');
console.log("clicked");
document.querySelector(".mobile-navigation i").addEventListener("click", () => {
  mobileNav.classList.contains("show") ? mobileNav.classList.remove("show") : mobileNav.classList.add("show");
  console.log("mobileNav");
});

ScrollReveal().reveal(".lumber-row");