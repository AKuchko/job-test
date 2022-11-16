const POST = async ({ data }) => {
    await setTimeout(() => console.log(data), 1000) // Вывод валидного значения в консоль 
}

module.exports = { POST }