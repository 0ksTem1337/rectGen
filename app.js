const horizontal = document.querySelector("#horizontal");
const vertical = document.querySelector("#vertical");
const theme = document.querySelector("#theme");
const createRectBtn = document.querySelector("#createRectBtn");

const cell = `<div id="cell" class="cell"></div>`;
const outputField = document.querySelector("#outputField");

for (let i = 0; i < 100; i++) {
  outputField.insertAdjacentHTML("beforeend", cell);
}

let cells = document.querySelectorAll("#cell");

let rect = [];
let patternX = [];
let patternY = [];

const library = {
  default: {
    name: "default",
    fill: "X",
    empty: "-",
    colorFill: "#27ae60",
    colorEmpty: "#ecf0f1",
    colorFillText: '#ecf0f1',
    colorEmptyText: '#27ae60'
  },
  binary: {
    name: "binary",
    fill: "1",
    empty: "0",
    colorFill: "#27ae60",
    colorEmpty: "#ecf0f1",
    colorFillText: '#ecf0f1',
    colorEmptyText: '#27ae60'
  },
  palette: {
    name: "palette",
    fill: "X",
    empty: "-",
    colorFill: "#27ae60",
    colorEmpty: "#ecf0f1",
    colorFillText: '#27ae60',
    colorEmptyText: '#ecf0f1'
  },
};

const createRect = (x, y, theme) => {
  const rectReset = () => {
    patternX = [];
    patternY = [];
    rect = [];
    for (let i = 0; i < 100; i++) {
      cells[i].replaceChildren();
    }
    for (let i = 0; i < 100; i++) {
      cells[i].style.background = library.default.colorEmpty;
    }
    cells = document.querySelectorAll("#cell");
  };

  rectReset();

  if (theme === "binary") {
    theme = library.binary;
  } else if (theme === "palette") {
    theme = library.palette;
  } else {
    theme = library.default
  }

  if (x > 10) {
    x = 10
    horizontal.value = 10
  }

  if (y > 10) {
    y = 10
    vertical.value = 10
  }

  for (let i = 0; i < x; i++) {
    patternX[i] = theme.fill;
    for (let j = 0; j < 10; j++) {
      if (patternX.lastIndexOf(theme.fill) < j) {
        patternX[j] = theme.empty;
      }
    }
  }

  for (let i = 0; i < x; i++) {
    if (i === 0 || i === x - 1) {
      patternY[i] = theme.fill;
    } else {
      patternY[i] = theme.empty;
    }
    for (let j = 0; j < 10; j++) {
      if (patternY.lastIndexOf(theme.fill) < j) {
        patternY[j] = theme.empty;
      }
    }
  }

  for (let i = 0; i < y; i++) {
    if (i === 0 || i === y - 1) {
      rect.push(patternX);
    } else {
      rect.push(patternY);
    }
  }

  let rectIdx = "";

  for (let i = 0; i < rect.length; i++) {
    rectIdx += rect[i].join("");
  }

  for (let i = 0; i < rect.length * 10; i++) {
    cells[i].innerHTML += rectIdx[i];
    if (cells[i].outerText === theme.fill) {
      cells[i].style.background = theme.colorFill;
      cells[i].style.color = theme.colorFillText;
    } else if (cells[i].outerText === theme.empty) {
      cells[i].style.background = theme.colorEmpty;
      cells[i].style.color = theme.colorEmptyText;
    }
  }
};

createRectBtn.addEventListener("click", function () {
  createRect(horizontal.value, vertical.value, theme.value);
});
