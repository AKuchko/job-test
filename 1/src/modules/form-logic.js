import * as client from './server';

function resetAnimation(form, anim) {
    form.style.animationName = 'none'
    requestAnimationFrame(() => form.style.animationName = anim)
}

function validNumber(value) {
    if (value.length === 0) return {valid: false, message: 'Поле не может быть пустым.'}
    if (value[0] !== '7') return {valid: false, message: 'Должно быть это не Российский номер.'}
    if (value.length < 11 ) return {valid: false, message: 'Слишком корорткий номер.'}
    if (value.length > 11) return  {valid: false, message: 'Слишком длинный номер.'}
    return {valid: true, message: 'Все хорошо )'}
}

const onFormSubmit = (e, phoneModel) => {
    e.preventDefault();
    let form = e.target;

    form.classList.remove('incorrect')
    form.classList.remove('success')
    
    let isValid = validNumber(phoneModel)

    if (!isValid.valid) {
        resetAnimation(form, '')
        form.classList.add('incorrect')
        return isValid.message
    }

    client.POST({ data: phoneModel })
    
    form.classList.add('success')
    return isValid.message
}

export { onFormSubmit }