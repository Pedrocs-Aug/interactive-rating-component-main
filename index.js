const button_submit = document.getElementById('button-submit');

button_submit.addEventListener('click', () => {
    button_submit.classList.toggle('selecionado');
    document.querySelector('.container').classList.toggle('primeiro_banner');

})

const button_numbers = [];

for (let i = 1 ; i <= 5 ; i++) {
    button_numbers.push(document.getElementById(`button-${i}`));
}

const active = () => {
    button_numbers.map( button => {
        button.classList.remove('active');
    })
    event.target.classList.add('active');
}

const selected_rating = document.getElementById('selected-rating');

button_numbers.forEach( (button, index) => {
    button.addEventListener('click', () => {
        selected_rating.innerText = `You selected ${index + 1} out of 5`;
    });
})