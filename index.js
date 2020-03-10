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

function showMeTheMoney(){
   console.log('$$$$$$$$$$$$$$$$')

}

function changeColor(/*event*/e){
   e.preventDefault()
   const contentHold = document.querySelector('.content-hold')
   const colorInput = document.getElementById('color-input')
   // console.log(contentHold)
   // console.log(colorInput)
   // console.log(colorInput.value)
   contentHold.style.background = colorInput.value
}

formButton.addEventListener('click', changeColor)












function addAPart(){
   e.stopPropagation()
   // e.stopPropagation()
   // console.log('Hit function addAPart')


   const newLi = document.createElement('li')
   newLi.innerText = "THE GREATEST"
   const partList = document.getElementById('part-list')
   partList.appendChild(newLi)
}

document.getElementById('part-button').addEventListener('click',addAPart)

