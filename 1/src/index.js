import './index.scss'

import * as Phonelogic from './modules/phone-input';
import * as FormClient from './modules/form-logic';

let inputs = document.querySelectorAll('input[type=tel]')
let validationMessage = document.querySelector('#valiidation-message')
let phoneModel = ''

inputs.forEach(el => {
    el.addEventListener('input', event => phoneModel = Phonelogic.onPhoneInput(event))
    el.addEventListener('keydown', Phonelogic.onPhoneKeydown)
})

document.querySelector('#form').addEventListener('submit', event => { 
    validationMessage.innerHTML = FormClient.onFormSubmit(event, phoneModel)
})