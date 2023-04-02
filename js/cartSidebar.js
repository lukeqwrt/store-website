const cart_icon = document.querySelector('#cart_icon')
const remove_sidebar = document.querySelector('.remove_sidebar')
const sidebar_cart = document.querySelector('.sidebar_cart')
const product_cart_wrapper = document.querySelector('.product_cart_wrapper')

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

const renderCartItem = (cartItem) => {
    // console.log(cartItem)
    if(cartItem == null){
        return
    }else{
        const items = cartItem
        items.forEach(i => {
            let item = document.createElement('div')
            item.classList.add('product_on_cart')

            let itemHTML = `
            <div class="cart_product_image">
                <img src="${i.image}" alt="">
                <div class="remove_overlap">
                    <span>&times;</span>
                </div>
            </div>
            <div class="cart_on_details">
                <span>${i.title}</span>
                <span>${i.itemNum} x ${i.price}</span>
            </div>
            `
            item.innerHTML = itemHTML
            product_cart_wrapper.appendChild(item)

                // console.log(i.title)
                // console.log(i.size)
                // console.log(i.price)
                // console.log(i.color)
                // console.log(i.itemNum)
                // console.log(i.image)
        });

    }


}

var cached = JSON.parse(window.sessionStorage.getItem('cart_items'));
        
if(cached === null){
    renderCartItem(null)    
}else{
    renderCartItem(cached)
}

