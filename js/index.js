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
const navLinks = _$.mapAll('nav > a', node => node);

navLinkValues.forEach((value, index) => {
  navLinks[index].innerText = value;
});

_$.bySelector('#logo-img').src = logoImgSrcValue;
// Nav Section -- End

// CTA Section -- Start
for (let key in siteContent.cta) {
  const value = siteContent.cta[key];
  switch (key) {
    case 'h1':
      _$.bySelector('.cta-text > h1').innerText = value;
      break;
    case 'button':
      _$.bySelector('.cta-text > button').innerText = value;
      break;
    case 'img-src':
      _$.bySelector('#cta-img').src = value;
      break;
  }
}
// CTA Section -- End
