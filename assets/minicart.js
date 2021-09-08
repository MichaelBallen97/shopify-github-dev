let cart_container = document.getElementById('cart_container')
cart_container.style.right = '-400px'
boton_add = document.getElementById('boton_add')


function showCart(){
    if(cart_container.style.right == '-400px'){
        cart_container.style.right = '0'
    }
    else{
        cart_container.style.right = '-400px'
    }
}

async function updateCart (){
    const response = await fetch('/cart/update.js', {
        method: 'POST',
     });
    const data = await response.json();
    console.log("this is update");
    console.log(data)
    return data;
}

 async function getCart(){
    const response = await fetch('/cart.js');
    const data = await response.json();
    return data;
}

function removeChilds(){
    const productsGrid = document.getElementById('cart_products_grid');
    while(productsGrid.firstChild){
        productsGrid.removeChild(productsGrid.firstChild);
    }
}

async function renderCart(){
    data = await getCart();
    dataUpdate = await updateCart();
    console.log(data.items);
    let array_items = data.items;
    if (array_items.length > 0){
        array_items.forEach(element => {            
            document.getElementById('cart_products_grid').innerHTML += '<div class="cart_product"><img src="'+ element.image +'" alt="" class="cart_image"><h3 class="cart_title">'+ element.title +'</h3><p class="cart_price">' + element.quantity + ' X ' + element.price + ' </p></div>'
        });
    }
    else{
        document.getElementById('cart_products_grid').innerHTML = '<p>Cart is Empy</p>';
    }
    document.getElementById('total').innerHTML = data.total_price;
}
renderCart();



boton_add.addEventListener("click", async ()=>{
    removeChilds();
    await updateCart();
    await renderCart();
    await showCart();
})

 const cleanCart = document.getElementById('clean');
 cleanCart.addEventListener("click", async ()=>{
    await fetch('/cart/clear.js', {
        method: 'POST'
     })
    await renderCart();
 })