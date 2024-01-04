
const accor = document.querySelectorAll('.acoo');
accor.forEach(accor => {
    accor.addEventListener('click', e => {
        accor.classList.toggle('active');
        let accorBtn = accor.querySelector('button');
        if (accorBtn.textContent === '+') {
          accorBtn.textContent = '-';
        } else {
            accorBtn.textContent = '+';
        }
    })
});

