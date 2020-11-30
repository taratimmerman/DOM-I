const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM\n Is\n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Images:
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Selectors:
// --cta--
const links = document.querySelectorAll("nav a");
const title = document.querySelector("h1");
const button = document.querySelector("button");

// --main-content--
const topTitles = document.querySelectorAll(".top-content h4")
const bottomTitles = document.querySelectorAll(".bottom-content h4")

const topContent = document.querySelectorAll(".top-content p")
const bottomContent = document.querySelectorAll(".bottom-content p")

// --contact--

// --footer
const footer = document.querySelector("footer p");

// Update HTML:
// --cta--
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

title.innerText = siteContent["cta"]['h1'];
button.textContent = siteContent["cta"]["button"];

// --main-content--
topTitles[0].textContent = siteContent["main-content"]["features-h4"];
topTitles[1].textContent = siteContent["main-content"]["about-h4"];
bottomTitles[0].textContent = siteContent["main-content"]["services-h4"];
bottomTitles[1].textContent = siteContent["main-content"]["product-h4"];
bottomTitles[2].textContent = siteContent["main-content"]["vision-h4"];

topContent[0].textContent = siteContent["main-content"]["features-content"];
topContent[1].textContent = siteContent["main-content"]["about-content"];
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

// --contact--

// --footer
footer.textContent = siteContent["footer"]["copyright"];

// New content: