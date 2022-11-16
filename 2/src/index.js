import './index.scss'
import './views/product-page.html'

import ProductService from './services/products'
import { renderShop } from './modules/render'
import * as DataModule from './modules/data'

let data
let currentData

(async () => {
    data = await ProductService.getAllProducts()
    currentData = DataModule.cloneData(data)
    renderShop(currentData)
})()


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search').addEventListener('input', event => {
        let inputValue = event.target.value.toLowerCase() 

        currentData = inputValue 
                        ? DataModule.filterData(data, inputValue)
                        : DataModule.cloneData(data)

        renderShop(currentData)
    })

    document.querySelector('#products').addEventListener('click', event => {
        let target = event.target
        if (target.className !== 'product-card__more-btn') return

        let parent = target.parentNode
        let card = parent.parentNode
        card.classList.toggle('product-card--active-desc')
        target.innerHTML = card.classList.contains('product-card--active-desc') ? 'less' : 'more'
    })
})