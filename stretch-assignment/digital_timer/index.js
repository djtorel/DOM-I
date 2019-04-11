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

const digits = _$.bySelectorAll('.digits .digit');
const secondTensNode = digits[0];
const secondOnesNode = digits[1];
const msHundredsNode = digits[3];
const msTensNode = digits[4];

let time = 0;
const startTimer = setInterval(() => {
  time += 1;
  if (time === 1000) {
    clearInterval(startTimer);
  }

  const timeStr = time.toString();
  // console.log(timeStr);
  msTensNode.innerText = timeStr.substr(timeStr.length - 1, 1);
  if (timeStr.length >= 2) {
    msHundredsNode.innerText = timeStr.substr(timeStr.length - 2, 1);
  }
  if (timeStr.length >= 3) {
    secondOnesNode.innerText = timeStr.substr(timeStr.length - 3, 1);
  }
  if (timeStr.length >= 4) {
    secondTensNode.innerText = timeStr.substr(timeStr.length - 4, 1);
  }
}, 10);
