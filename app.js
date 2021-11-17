const inputField = document.querySelector('#input')
const inputGroup = document.querySelector('.input-parent')

inputGroup.addEventListener('click', e => {
    if (e.target.id === 'shorten') {
        if (inputField.value === '') {
            errorMessage()
            setTimeout(() => {
                clearError()
            }, 3000)
        }
    }
})


function errorMessage() {
    document.querySelector('#error').innerHTML = `
    <div class='text-danger' id='message'>
    please input something in the field
    </div>
    `
}

function clearError() {
    document.querySelector('#error').style.display = 'none';
}