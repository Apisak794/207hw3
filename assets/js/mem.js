const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#message');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    // console.log(nameInput.Value + ' ' + emailInput.Value);


    if (nameInput.value === '' || emailInput.value === '') {

        msg.classList.add('error');
        msg.innerHTML = ('please enter all fields');

    } else {
        const li = document.createElement('li');
        console.log(li);
        const text = document.createTextNode(`${nameInput.value},${emailInput.value}`);

        li.appendChild(text);
        //userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}
