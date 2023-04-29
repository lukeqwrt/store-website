const cart_icon = document.querySelector('#cart_icon')
const remove_sidebar = document.querySelector('.remove_sidebar')
const sidebar_cart = document.querySelector('.sidebar_cart')
// const product_cart_wrapper = document.querySelector('.product_cart_wrapper')

cart_icon.addEventListener('click', () => {
    sidebar_cart.classList.toggle('cart_active')

})

sidebar_cart.addEventListener('click', (e) => {
    if(e.target.classList.contains('sidebar_cart')){
        sidebar_cart.classList.remove('cart_active')
    }
})
remove_sidebar.addEventListener('click', () => {
    sidebar_cart.classList.remove('cart_active')
})

// add cart item



