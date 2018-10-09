let container, colorPicker

window.onload = () => {
  colorPicker = document.querySelector('input')
  container = document.querySelector('#results')
  const hex = colorPicker.value
  loadColors(hex)
  colorPicker.addEventListener('change', (event) => {
    const { value } = event.target
    loadColors(value)
  })
}

function loadColors(hex) {
  fetch(`/search/${hex.slice(1)}${location.search}`)
    .then(res => res.json() )
    .then(renderResults)
}

function renderResults(colorData) {
  container.innerHTML = ''
  const listItems = colorData.map(toColorResult)
  listItems.forEach(li => {
    container.appendChild(li)
  })
}

function toColorResult({ hex, name, distance }) {
  p = document.createElement('p')
  p.style.backgroundColor = hex
  p.innerText = `${name} (${distance})`
  return p
}
