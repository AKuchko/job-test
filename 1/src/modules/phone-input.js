const onPhoneInput = (e) => {
    let target = e.target;
    let value = target.value;
    let numericValue = getNumericValue(value)
    let formattedValue = ''
    let selectionStart = target.selectionStart
    let currentSelectionStart

    if (numericValue.length === 11) e.preventDefault()

    if (!numericValue) return target.value = ''

    if (target.value.length != selectionStart) {
        if (e.data && /\D/g.test(e.data)) target.value = numericValue;
        currentSelectionStart = selectionStart;
    }

    if (['7', '8', '9'].indexOf(numericValue[0]) > -1) {
        if (numericValue[0] === '9') numericValue = '7' + numericValue
        let firstSymbol = numericValue[0] === '8' ? '8' : '+7'
        formattedValue += firstSymbol + ' '
        
        if (numericValue.length > 1) formattedValue += '(' + numericValue.substring(1, 4)
        if (numericValue.length > 4) formattedValue += ') ' + numericValue.substring(4, 7)
        if (numericValue.length > 7) formattedValue += '-' + numericValue.substring(7, 9)
        if (numericValue.length > 9) formattedValue += '-' + numericValue.substring(9, 11)

    }
    else formattedValue += '+ ' + numericValue.substring(0, 11)

    target.value = formattedValue
    
    if (currentSelectionStart) target.setSelectionRange(currentSelectionStart, currentSelectionStart) 

    console.log(numericValue.substring(0, 11));
    
    return ['7', '8'].indexOf(numericValue[0]) > -1 ? '7' + numericValue.substring(1, 11) : numericValue
}

const onPhonePaste = (e) => {

}

const onPhoneKeydown = (e) => {
    let numericValue = getNumericValue(e.target.value)
    if (numericValue.length === 1 && e.keyCode === 8) return e.target.value = ''
}

function getNumericValue(value) {
    return value.replace(/\D/g, '')
}

module.exports = { onPhoneInput, onPhoneKeydown, onPhonePaste }