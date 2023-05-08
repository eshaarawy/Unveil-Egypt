// JavaScript source code
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(button => button.classList.remove('active'));
        this.classList.add('active')
    });
});
