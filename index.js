console.log('file connected')

const formButton=document.getElementById('story-button')

// console.dir(formButton)

const listItems = document.getElementsByTagName('li')
// console.dir(listItems)

const headerText = document.querySelector('.title')

// console.dir(headerText)

headerText.classList.add('dark-mode')

console.dir(headerText.classList)
console.dir(headerText.innerText)

headerText.innerText = 'I am in control now'

// const updatedStyles = {
//    color: 'red',
//    fontSize: '16px',
//    textDecoration: 'underline',
// }

// headerText.style = {... headerText.style, ... updatedStyles}

headerText.style.color = 'red'

