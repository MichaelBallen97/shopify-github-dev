var cart_container = document.getElementById('cart_container')
cart_container.style.right = '-400px'



fetch('/cart.js')
.then(respuesta => respuesta.json())
.then(items => {
    let array_items = items.items

    if (array_items.length > 0){
        array_items.forEach(element => {
            
            const contenedor_producto = document.createElement('div')
            contenedor_producto.setAttribute('class','cart_product')
            document.getElementById('cart_products_grid').appendChild(contenedor_producto)
            const imagen_producto = document.createElement('img')
            imagen_producto.setAttribute('src', element.image)
            imagen_producto.setAttribute('class','cart_image')
            contenedor_producto.appendChild(imagen_producto)
            const titulo_producto = document.createElement('h3')
            titulo_producto.setAttribute('class','cart_title')
            titulo_producto.innerHTML = element.title
            contenedor_producto.appendChild(titulo_producto)
            const precio_producto = document.createElement('p')
            precio_producto.setAttribute('class','cart_price')
            precio_producto.innerHTML = element.quantity + ' x ' + element.price
            contenedor_producto.appendChild(precio_producto)

            /*document.getElementById('cart_products_grid').innerHTML = '<div class="cart_product"><img src="'+ product.image +'" alt="" class="cart_image"><h3 class="cart_title">'+ product.title +'</h3><p class="cart_price">'+ product.price +'</p></div>'*/

        });
    }
    else{
        document.getElementById('cart_products_grid').innerHTML = '<p>Cart is Empy</p>'
    }
    document.getElementById('total').innerHTML = items.total_price
})

 const limpiar = document.getElementById('limpiar')
 limpiar.addEventListener("click", ()=>{
    fetch('/cart/clear.js', {
        method: 'POST'
     })
     .then(resp => resp.json())
     .then(data => console.log(data))
 })


function mostrar_carrito(){
    if(cart_container.style.right == '-400px'){
        cart_container.style.right = '0'
    }
    else{
        cart_container.style.right = '-400px'
    }
}