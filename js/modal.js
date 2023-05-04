// get quickview btn
const quickView = document.querySelectorAll('.so_view')
const main = document.querySelector('.main')
const product_cart_wrapper = document.querySelector('.product_cart_wrapper')
let sum = 0

let cartCount = 0
const renderCartItem = (cartItem) => {
    if(cartItem == null){
        return
    }else{
        const items = cartItem
        let sum = 0
        items.forEach(i => {
            
            let item = document.createElement('div')
            item.classList.add('product_on_cart')

            let itemHTML = `
            <div class="cart_product_image">
                <img src="${i.image}" alt="">
                <div class="remove_overlap">
                    <span class="times">&times;</span>
                </div>
            </div>
            <div class="cart_on_details">
                <span>${i.title}</span>
                <div><span class="itemNum">${i.itemNum}</span> x <span class="itemPrice">${i.price}</span></div>
            </div>
            `

            var s = i.price;
            while(s.charAt(0) === '$')
            {
                s = s.substring(1);
            }
            const product = i.itemNum * s
            sum = sum + product

            item.innerHTML = itemHTML

            product_cart_wrapper.appendChild(item)
            const cartitemclick = item.querySelector('.remove_overlap') 
            cartitemclick.addEventListener('click', () => {
                let cartDiv = document.querySelector('.cartCount')
                let parsecart = parseInt(cartDiv.textContent)
                
             
                cartDiv.textContent = parsecart - 1
                
                    const totalDiv = document.querySelector('.total')
                    const parentDiv = cartitemclick.parentElement.parentElement
                    const itemNum = parentDiv.querySelector('.itemNum').textContent
                    const itemPrice = parentDiv.querySelector('.itemPrice').textContent
                    var s = itemPrice;
                    while(s.charAt(0) === '$')
                    {
                        s = s.substring(1);
                    } 
                    var sum = parseFloat(totalDiv.textContent)
                    const product = parseFloat(s) * parseFloat(itemNum)
                    sum = sum - product
                    totalDiv.textContent = sum

                  
            })
        });
    }
}

const renderCartCount = (count) => {
    const cartDiv = document.querySelector('.cartCount')
    cartDiv.textContent = count
}
const renderTotalItem = (cached) => {
    if(cached == null){
        return
    }else{
        const items = cached
        // let sum = 0
        items.forEach(i => {
            var s = i.price;
            while(s.charAt(0) === '$')
            {
                s = s.substring(1);
            }
            const product = i.itemNum * s
            sum = sum + product

        });
        const totalDiv = document.querySelector('.total')
        totalDiv.textContent = sum

        // remove cart item
        const remove_overlap = document.querySelectorAll('.remove_overlap')
        remove_overlap.forEach((click_span_ex,index) => {
            click_span_ex.addEventListener('click', (e) => {
                click_span_ex.parentElement.parentElement.remove()
            
                let array = JSON.parse(sessionStorage.getItem('cart_items'));
                array.splice(index,1)
                sessionStorage.setItem('cart_items', JSON.stringify(array));
            })
        })
    }
}
const renderCartCountCached = (count) => {
    count.forEach((i,index) => {
        const cartDiv = document.querySelector('.cartCount')
        cartDiv.textContent = index + 1
    })
}

var cached = JSON.parse(window.sessionStorage.getItem('cart_items'));
if(cached === null){
    renderCartItem(null)    
}else{
    renderCartItem(cached)
    renderTotalItem(cached)
    renderCartCountCached(cached)
}


quickView.forEach(quickViewBtn => {
    quickViewBtn.addEventListener('click', (e) => {
        // target the card to get the card data
        const card = e.target.parentElement
        const cardParent = e.target.parentElement.parentElement
        
        //card data 
        const imageSrc = card.childNodes[1].src
        const title = cardParent.querySelector('.so_l_content p:nth-child(1)').textContent;
        const price = cardParent.querySelector('.so_l_content span:nth-child(2)').textContent;
        // create modal template
        let modal = document.createElement('div')
        modal.classList.add('item_modal')

        let modalHTML = `
        <div class="modal_notif">
            <div class="modal_notif_wrapper">
                <div class="check_animation check-container">
                    <div class="check-background">
                        <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="check-shadow"></div>
                </div>
                <h3>${title}</h3>
                <span>is added to cart !</span>

                <div class="button_wrapper">
                    <button id="ok_btn_notif">OK</button>
                </div>
            </div>
        </div>
        <div class="modal_container">
            <span class="remove">&times;</span>
            <div class="modal_img_l">
                <img src="${imageSrc}" alt="myimg">
            </div>
            <form id="add_to_cart_form" class="modal_content_r">
                <h3>${title}</h3>
                <h5>${price}</h5>
                <div class="details_wrapper">
                    <div class="choose size">
                        <span>Size</span>
                        <select id="sizeIdCart" class="form-select form-select-md mb-3" required/>
                            <option selected>Open this select menu</option>
                            <option value="Size S">Size S</option>
                            <option value="Size M">Size M</option>
                            <option value="Size L">Size L</option>
                            <option value="Size XL">Size XL</option>
                        </select>
                    </div>
                    <div class="choose color">
                        <span>Color</span>
                        <select id="colorIdCart" class="form-select form-select-md mb-3" required/>
                            <option selected style="padding: 30px 0;">Open this select menu</option>
                            <option value="Black">Black</option>
                            <option value="White">White</option>
                            <option value="Navy">Navy</option>
                            <option value="Green">Green</option>
                        </select>
                    </div>
                </div>
                <div class="count">
                    <button class="subtract">-</button>
                    <input id="inputNumberItem" type="text" maxlength="3"  value="1" required/>
                    <button class="add">+</button>
                </div>
                <div class="button_wrap">
                    <button class="addtocart">ADD TO CART</button>

                </div>
            </form>
        </div>
        `
        modal.innerHTML = modalHTML
        main.appendChild(modal)

  
        const myTimeout = setTimeout(addAnimation, 1);

        function addAnimation() {
            modal.classList.add('transitionopenModal')
        }


        // counter item
        const subtract = document.querySelector('.subtract')
        const add = document.querySelector('.add')
        const inputitem = document.querySelector('#inputNumberItem')


        const addNumber = (e) => {
            e.preventDefault();
            let latestnum = inputitem.value
            if(latestnum >= 999){
                latestnum = 999
            }else{
                latestnum++
                inputitem.value = latestnum
            }   
        }
        const subtractNumber = (e) => {
            e.preventDefault();
            let latestnum = inputitem.value
            if(latestnum <= 1){
                latestnum = 1
            }else{
                latestnum--
                inputitem.value = latestnum
            }   
        }
        
        inputitem.addEventListener('keydown', (e) => {
            e.preventDefault();
            add.addEventListener('click', () => addNumber)
            subtract.addEventListener('click', subtractNumber)
        })
        add.addEventListener('click', addNumber)
        subtract.addEventListener('click', subtractNumber)


            // clicking add to cart
        const add_to_cart_form = document.querySelector('#add_to_cart_form')
        add_to_cart_form.addEventListener('submit', (e) => {
            add_to_cart_form.disabled = true;
            e.preventDefault();
            const size = add_to_cart_form['sizeIdCart'].value
            const color = add_to_cart_form['colorIdCart'].value
            let objHandler = []
            let alldatacombine = {
                image:imageSrc,
                title:title,
                price:price,
                size:size,
                color:color,
                itemNum:inputitem.value
            }

            let bag;
            let cachedew = sessionStorage.getItem('cart_items');
            objHandler.push(alldatacombine)            
            
            let countNum = document.querySelector('.cartCount').textContent
            countNum++
            // add item to sidebar ps not session storage
            renderCartCount(countNum)
            renderCartItem(objHandler)
            renderTotalItem(objHandler)
            // adding item to session storage 
            if(cachedew === null){
                bag = []
            }else{
                bag = JSON.parse(cachedew)
            }
            bag.push(alldatacombine)

            sessionStorage.setItem('cart_items', JSON.stringify(bag));
        

            // modal notification
            const modal_notif_container = document.querySelector('.modal_notif')
            modal_notif_container.classList.add('active_notif')

            // check_animation.classList.add('check-container')
            const ok_btn_notif = document.querySelector('#ok_btn_notif')
            modal_notif_container.addEventListener('transitionend', () => {
                modal_notif_container.classList.add('active_notif')     
            })
            ok_btn_notif.addEventListener('click', (e) => {
                e.stopPropagation();
                modal_notif_container.classList.add('notif_remove_transition')


                modal_notif_container.addEventListener('transitionend', () => {
                    modal_notif_container.classList.remove('notif_remove_transition')     
                    modal_notif_container.classList.remove('active_notif')     
                    add_to_cart_form.disabled = false;
                })
                // location.reload();
            })
            
        })
        //
        // remove_modal
        const item_modal = document.querySelector('.item_modal')
        item_modal.addEventListener('click', (e) => {
            e.stopPropagation();
            if(e.target.classList.contains('item_modal')){
                item_modal.classList.add('transition')
                item_modal.addEventListener('transitionend', function() {
                    item_modal.remove()
                })
            }

        })
        // remove modal
        const removebtn= document.querySelector('.remove')
        // const item_modal = document.querySelector('.item_modal')
        removebtn.addEventListener('click', (e) => {
            item_modal.classList.add('transition')
            item_modal.addEventListener('transitionend', function() {
                item_modal.remove()
            })
        })

    })
})











            

