//Array results//
//create an array
let sweets = ['lollipop', 'liquorice', 'sherbet']

//Update innerHTML of 'arrayResult' id
document.getElementById('arrayResult').innerHTML = 'Results: ' + sweets[0]

//Object results//
//create object
let car = {
  make: 'toyota',
  model: 'camry',
  color: 'blue',
}

//update innerHTML of 'objectResult' id//
document.getElementById('objectResult').innerHTML = 'Results: ' + car.make

//functionResult//
//function to add two numbers when called//

function add(x, y) {
  let result = x + y
  return result
}

console.log(add(2, 3))

document.getElementById('functionResult').innerHTML = 'Result:' + add(2, 3)

//HIDE PARAS IN HEADER/

//retreive header from id header//
//let header = document.getElementById('header')
//let text = document.getElementById('text')

//ADD CLICK EVENT AND SPECIFY IF STATEMENT CONDITIONS//
//header.addEventListener('click', function () {
//if (text.classList.contains('hidden')) {
//text.classList.remove('hidden')
//} else {
//text.classList.add('hidden')
//}
//})

//STRETCH FOR SELF LEARNING - figure out how to use a forEach function to set up the function above for multiple headers. Currently I can't get it to work as when clicking one header it hides all the texts as they all have the same id
