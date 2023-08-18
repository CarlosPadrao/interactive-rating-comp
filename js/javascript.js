// Marcar li como selected
let rate = document.querySelectorAll('.stars_rate li')

rate.forEach(Li => {
    Li.addEventListener('click', function justOneRate() {
        for (let i = 0; i < rate.length; i++) {
            rate[i].classList.remove('selected');
        }

        Li.classList.add('selected');
        valor = Li.innerText;
    });
});

// Exibir resultado
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    const before = document.querySelector('.popup__before')
    const after = document.querySelector('.popup__after')
    const resultado = document.querySelector('.response span')

    before.classList.add('hide')
    after.classList.remove('hide')
    after.classList.add('show')
    resultado.innerText = valor
})