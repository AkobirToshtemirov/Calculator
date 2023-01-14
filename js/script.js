let showCalc = document.querySelector('#show__num');
let btns = document.querySelectorAll('.btn__num');
let clear = document.getElementById('clear');
let percent = document.getElementById('percent');
let division = document.getElementById('division');
let multiplication = document.getElementById('multiplication');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let equal = document.getElementById('equal');
let allCalc = document.querySelectorAll('.allCalc');

let firstValue = [];
let secondValue = [];

let isTrue;
let calcMain;

allCalc.forEach(item => {
  item.addEventListener('click', () => {
    change(item);
    calcMain = item.textContent;
    console.log(calcMain);
    let isTrueNext;
    isTrueNext = false;
  })
})

console.log(isTrue);
// clear.addEventListener('click', () => {
//   clearValue();
// })

do {
  btns.forEach((item, index) => {
    item.addEventListener('click', () => {
      firstValue.push(item.textContent)
      showCalc.innerHTML = firstValue.join('');

      for(let i = 0; i < btns.length; i++) {
        btns[i].classList.add('btn__next__one')
      }
    })
  })

} while (isTrue)

let btnsNext = document.querySelectorAll('.btn__next__one')

  btnsNext.forEach((item, index) => {
    item.addEventListener('click', () => {
      secondValue.push(item.textContent)
      showCalc.innerHTML = secondValue.join('');
    })
  })



function change(showNewValue) {
  isTrue = false;
  showCalc.innerHTML = showNewValue.textContent;
}

// switch (calcMain) {
//   case '+':

// }

console.log(firstValue)
console.log("=====");
console.log(secondValue);