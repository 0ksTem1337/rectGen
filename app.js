const horizontal = document.querySelector('#horizontal')
const vertical = document.querySelector('#vertical')
const theme = document.querySelector('#theme')
const createRectBtn = document.querySelector('#createRectBtn')
const rowCells = document.querySelector('#row')
const colCells = document.querySelector('#col')

const cell = `<div id="cell" class="cell"></div>`
const outputField = document.querySelector('#outputField')

let rect = []
let patternX = []
let patternY = []

const library = [
	{
		name: 'default',
		fill: 'X',
		empty: '-',
		colorFill: '#27ae60',
		colorEmpty: '#ecf0f1',
		colorFillText: '#ecf0f1',
		colorEmptyText: '#27ae60',
	},
	{
		name: 'binary',
		fill: '1',
		empty: '0',
		colorFill: '#27ae60',
		colorEmpty: '#ecf0f1',
		colorFillText: '#ecf0f1',
		colorEmptyText: '#27ae60',
	},
	{
		name: 'palette-green',
		fill: 'X',
		empty: '-',
		colorFill: '#27ae60',
		colorEmpty: '#ecf0f1',
		colorFillText: '#27ae60',
		colorEmptyText: '#ecf0f1',
	},
	{
		name: 'palette-carrot',
		fill: 'X',
		empty: '-',
		colorFill: '#e67e22',
		colorEmpty: '#ecf0f1',
		colorFillText: '#e67e22',
		colorEmptyText: '#ecf0f1',
	},
]

const createRect = (x, y, theme, row, col) => {
	totalCells = row * col

	if (x > row) {
		x = row
		horizontal.value = row
	}

	if (y > col) {
		y = col
		vertical.value = col
	}

	if (row < 10) {
		row = 10
		rowCells.value = 10
	} else if (row > 100) {
		row = 100
		rowCells.value = 100
	}

	if (col < 10) {
		col = 10
		colCells.value = 10
	} else if (col > 100) {
		col = 100
		colCells.value = 100
	}

	const cellSetting = [
		{ margin: 5, height: 40, width: 40, fontSize: 20, lineHeight: 40 },
		{ margin: 3, height: 15, width: 15, fontSize: 7, lineHeight: 15 },
		{ margin: 2, height: 12, width: 12, fontSize: 5, lineHeight: 12 },
		{ margin: 1, height: 9, width: 9, fontSize: 4, lineHeight: 9 },
	]

	if (outputField.children.length > 0) {
		outputField.innerHTML = ''
	}

	for (let i = 0; i < totalCells; i++) {
		outputField.insertAdjacentHTML('beforeend', cell)
	}

	let cells = document.querySelectorAll('#cell')

	const rectReset = () => {
		patternX = []
		patternY = []
		rect = []
		for (let i = 0; i < totalCells; i++) {
			cells[i].replaceChildren('')
		}
		for (let i = 0; i < totalCells; i++) {
			cells[i].style.background = library[0].colorEmpty
		}
	}

	rectReset()

	if (row === 10) {
		document.querySelector('.container').style.width = `720px`
		outputField.style.width = `720px`
		outputField.style.gridTemplateColumns = `repeat(${row}, 1fr)`
		for (let i = 0; i < totalCells; i++) {
			cells[i].style.margin = `10px`
			cells[i].style.height = `50px`
			cells[i].style.width = `50px`
			cells[i].style.lineHeight = `50px`
			cells[i].style.fontSize = `48px`
		}
	} else if (row <= 25 && row > 10) {
		document.querySelector('.container').style.width = `${
			row * cellSetting[0].width + row * cellSetting[0].margin * 2
		}px`
		outputField.style.width = `${
			row * cellSetting[0].width + row * cellSetting[0].margin * 2
		}px`
		outputField.style.gridTemplateColumns = `repeat(${row}, 1fr)`
		for (let i = 0; i < totalCells; i++) {
			cells[i].style.margin = `${cellSetting[0].margin}px`
			cells[i].style.height = `${cellSetting[0].height}px`
			cells[i].style.width = `${cellSetting[0].width}px`
			cells[i].style.lineHeight = `${cellSetting[0].lineHeight}px`
			cells[i].style.fontSize = `${cellSetting[0].fontSize}px`
		}
	} else if (row <= 50 && row > 10) {
		document.querySelector('.container').style.width = `${
			row * cellSetting[1].width + row * cellSetting[1].margin * 2
		}px`
		outputField.style.width = `${
			row * cellSetting[1].width + row * cellSetting[1].margin * 2
		}px`
		outputField.style.gridTemplateColumns = `repeat(${row}, 1fr)`
		for (let i = 0; i < totalCells; i++) {
			cells[i].style.margin = `${cellSetting[1].margin}px`
			cells[i].style.height = `${cellSetting[1].height}px`
			cells[i].style.width = `${cellSetting[1].width}px`
			cells[i].style.lineHeight = `${cellSetting[1].lineHeight}px`
			cells[i].style.fontSize = `${cellSetting[1].fontSize}px`
		}
	} else if (row <= 75 && row > 10) {
		document.querySelector('.container').style.width = `${
			row * cellSetting[2].width + row * cellSetting[2].margin * 2
		}px`
		outputField.style.width = `${
			row * cellSetting[2].width + row * cellSetting[2].margin * 2
		}px`
		outputField.style.gridTemplateColumns = `repeat(${row}, 1fr)`
		for (let i = 0; i < totalCells; i++) {
			cells[i].style.margin = `${cellSetting[2].margin}px`
			cells[i].style.height = `${cellSetting[2].height}px`
			cells[i].style.width = `${cellSetting[2].width}px`
			cells[i].style.lineHeight = `${cellSetting[2].lineHeight}px`
			cells[i].style.fontSize = `${cellSetting[2].fontSize}px`
		}
	} else if (row <= 100 && row > 10) {
		document.querySelector('.container').style.width = `${
			row * cellSetting[3].width + row * cellSetting[3].margin * 2
		}px`
		outputField.style.width = `${
			row * cellSetting[3].width + row * cellSetting[3].margin * 2
		}px`
		outputField.style.gridTemplateColumns = `repeat(${row}, 1fr)`
		for (let i = 0; i < totalCells; i++) {
			cells[i].style.margin = `${cellSetting[3].margin}px`
			cells[i].style.height = `${cellSetting[3].height}px`
			cells[i].style.width = `${cellSetting[3].width}px`
			cells[i].style.lineHeight = `${cellSetting[3].lineHeight}px`
			cells[i].style.fontSize = `${cellSetting[3].fontSize}px`
		}
	}

	for (let i = 0; i < library.length; i++) {
		if (theme === library[i].name) {
			theme = library[i]
		}
	}

	for (let i = 0; i < x; i++) {
		patternX[i] = theme.fill
		for (let j = 0; j < row; j++) {
			if (patternX.lastIndexOf(theme.fill) < j) {
				patternX[j] = theme.empty
			}
		}
	}

	for (let i = 0; i < x; i++) {
		if (i === 0 || i === x - 1) {
			patternY[i] = theme.fill
		} else {
			patternY[i] = theme.empty
		}
		for (let j = 0; j < col; j++) {
			if (patternY.lastIndexOf(theme.fill) < j) {
				patternY[j] = theme.empty
			}
		}
	}

	for (let i = 0; i < y; i++) {
		if (i === 0 || i === y - 1) {
			rect.push(patternX)
		} else {
			rect.push(patternY)
		}
	}

	let rectIdx = ''

	for (let i = 0; i < rect.length; i++) {
		rectIdx += rect[i].join('')
	}

	for (let i = 0; i < rect.length * row; i++) {
		cells[i].innerHTML += rectIdx[i]
		if (cells[i].outerText === theme.fill) {
			cells[i].style.background = theme.colorFill
			cells[i].style.color = theme.colorFillText
		} else if (cells[i].outerText === theme.empty) {
			cells[i].style.background = theme.colorEmpty
			cells[i].style.color = theme.colorEmptyText
		}
	}
}

createRectBtn.addEventListener('click', function () {
	createRect(
		Number(horizontal.value),
		Number(vertical.value),
		theme.value,
		Number(rowCells.value),
		Number(colCells.value)
	)
})
