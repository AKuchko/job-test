import { getCategories } from './data'

let shopList = document.querySelector('#products')
let sidebar = document.querySelector('#sidebar')

const renderCards = (data) => {
    shopList.innerHTML = ''

    if (!data.length) {
        let li = document.createElement('li')
        li.className = 'shop__list-item shop__list-item--no-matches product-card'
        li.innerHTML = '<h3 class="product-card__title">no matches</h3>'
        shopList.appendChild(li)
        return
    }

    data.forEach(product => {
        let li = document.createElement('li')
        li.className = 'shop__list-item product-card'
        li.innerHTML = `
                        <div class="product-card__image">
                            <img src="${product.image}" alt="${product.title}">
                        </div>
                        <div class="product-card__head">
                            <h3 class="product-card__title"><a href="./product-page.html">${product.title}</a></h3>
                            <p class="product-card__category">${product.category}</p>
                            <p class="product-card__price">${product.price}$</p>
                        </div>
                        <div class="product-card__description">
                            <p class="product-card__desc-text">${product.description}</p>
                            <button class="product-card__more-btn">more</button>
                        </div>`
        shopList.appendChild(li)
    })
}

const renderSidebar = (data) => {
    sidebar.innerHTML = ''

    if (!data) return

    let categories = getCategories(data)

    for (const [key, value] of Object.entries(categories)) {
        let li = document.createElement('li')
        li.className = 'sidebar__list-item'
        li.innerHTML = `<a href="#" class="sidebar__link">${key}</a>
                        <span class="sidebar__count">${value}</span>`
        
        sidebar.appendChild(li)
    }
}

const renderShop = (data) => {
    renderCards(data)
    renderSidebar(data)
}

export { renderShop }