const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
const _$ = {
  bySelector: (selector, cb = false) => {
    const node = document.querySelector(selector);
    return cb ? cb(node) : node;
  },
  bySelectorAll: (selector, cb = false) => {
    const nodeList = document.querySelectorAll(selector);
    return cb ? cb(nodeList) : nodeList;
  },
  mapAll: (selector, cb) => {
    const nodeArr = Array.from(document.querySelectorAll(selector));
    return nodeArr.map(cb);
  },
};

// Nav Section -- Start
const navLinkValues = Object.values(siteContent.nav);
const logoImgSrcValue = navLinkValues.pop();
const navLinks = _$.bySelectorAll('nav > a');

navLinkValues.forEach((value, index) => {
  navLinks[index].innerText = value;
});

// Task-3-Section -- Start
navLinks.forEach(link => {
  link.style = 'color: green;';
});
const nav = _$.bySelector('nav');

const newNavItemOne = document.createElement('a');
newNavItemOne.href = '#';
newNavItemOne.innerText = 'Foo';
newNavItemOne.style = 'color: green;';

const newNavItemTwo = document.createElement('a');
newNavItemTwo.href = '#';
newNavItemTwo.innerText = 'Bar';
newNavItemTwo.style = 'color: green;';

nav.appendChild(newNavItemOne);
nav.prepend(newNavItemTwo);
// Task-3-Section -- End

_$.bySelector('#logo-img').src = logoImgSrcValue;
// Nav Section -- End

// CTA Section -- Start
const { h1: ctaH1, button: ctaButton, 'img-src': ctaImg } = siteContent.cta;
_$.bySelector('.cta-text > h1').innerHTML = ctaH1.split(' ').join('<br />');
_$.bySelector('.cta-text > button').innerText = ctaButton;
_$.bySelector('#cta-img').src = ctaImg;
// CTA Section -- End

// Main-Content - Top-Section -- Start
const topContentSelector = '.top-content .text-content >';
const {
  'about-content': aboutContent,
  'about-h4': aboutH4,
  'features-content': featuresContent,
  'features-h4': featuresH4,
} = siteContent['main-content'];

const topHeaders = _$.bySelectorAll(`${topContentSelector} h4`);
const topParagraphs = _$.bySelectorAll(`${topContentSelector} p`);

topHeaders[0].innerText = featuresH4;
topParagraphs[0].innerText = featuresContent;

topHeaders[1].innerText = aboutH4;
topParagraphs[1].innerText = aboutContent;
// Main-Content - Top-Section -- End

// Main-Content - Middle-Image -- Start
_$.bySelector('#middle-img').src =
  siteContent['main-content']['middle-img-src'];
// Main-Content - Middle-Image -- End

// Main-Content - Bottom-Section -- Start
const {
  'services-h4': servicesH4,
  'services-content': servicesContent,
  'product-h4': productH4,
  'product-content': productContent,
  'vision-h4': visionH4,
  'vision-content': visionContent,
} = siteContent['main-content'];
const bottomContentSelector = '.bottom-content .text-content >';

const bottomHeaders = _$.bySelectorAll(`${bottomContentSelector} h4`);
const bottomParagraphs = _$.bySelectorAll(`${bottomContentSelector} p`);

bottomHeaders[0].innerText = servicesH4;
bottomParagraphs[0].innerText = servicesContent;

bottomHeaders[1].innerText = productH4;
bottomParagraphs[1].innerText = productContent;

bottomHeaders[2].innerText = visionH4;
bottomParagraphs[2].innerText = visionContent;
// Main-Content - Bottom-Section -- End

// Contact-Section -- Start
const { 'contact-h4': contactH4, address, phone, email } = siteContent.contact;
const contactSelector = 'section.contact >';
const contactHeader = _$.bySelector(`${contactSelector} h4`);
const contactParagraphs = _$.bySelectorAll(`${contactSelector} p`);

const addressFirstLine = address.substr(0, address.indexOf('Somewhere') - 1);
const addressSecondLine = address.substr(address.indexOf('Somewhere'));
const addressHTML = `${addressFirstLine}<br />${addressSecondLine}`;

contactHeader.innerText = contactH4;
contactParagraphs[0].innerHTML = addressHTML;
contactParagraphs[1].innerText = phone;
contactParagraphs[2].innerText = email;
// Contact-Section -- End

// Footer-Section -- Start
const { copyright } = siteContent.footer;
_$.bySelector('footer > p').innerText = copyright;
// Footer-Section -- End

// Stretch-Section -- Start
_$.bySelector('body').style = 'background-color: #a5a5a5';
_$.bySelector('button').style.borderRadius = '.5rem';
_$.bySelector('button').style.backgroundColor = 'dodgerblue';
_$.mapAll('nav > a', link => {
  const originalColor = link.style.color;
  link.addEventListener('mouseenter', () => {
    link.style.color = 'blue';
  });
  link.addEventListener('mouseleave', () => {
    link.style.color = originalColor;
  });
});
// Stretch-Section -- End
