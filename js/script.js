let showCalc = document.querySelector('#show__num');
let btns = document.querySelectorAll('.btn');

btns.forEach(item => {
  item.addEventListener('click', () => {
    let id = item.id;

    if(id == 'clear') {
      showCalc.innerText = '';
    } else if (id == 'backspace') {
      let string = showCalc.innerText.toString();
      showCalc.innerText = string.substr(0, string.length - 1);
    } else if(showCalc.innerText != '' && id =='equal') {
      showCalc.innerText = eval(showCalc.innerText)
    } else if(showCalc.innerText == '' && id == 'equal') {
      showCalc.innerText = 'Empty!';
      setTimeout(() => (showCalc.innerText = '', 2000))
    } else {
      showCalc.innerText += id;
    }
  })
})
