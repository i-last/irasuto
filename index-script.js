/*==================== menu icon ng navbar kapag maliit window size ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== sections may kulay sa navbar kapag active ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar nasa taas lang ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /*==================== wala menu icon tas navbar kapag click navbar link ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Multimedia Artists?'],
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 1000,
    loop: false
});






function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }
  
  function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? "◐" : "◑";
    buttonEl.setAttribute("aria-label", newCta);
    buttonEl.innerText = newCta;
  }
  
 
  function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
  }
  
  const button = document.querySelector("[data-theme-toggle]");
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  
  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
  
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
  updateThemeOnHtmlEl({ theme: currentThemeSetting });
  
  button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
  
    currentThemeSetting = newTheme;
  }); 
