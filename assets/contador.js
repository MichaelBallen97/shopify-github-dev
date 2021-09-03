const contenedor = document.querySelector('.contador-contenedor')
const headers = new Headers();
let apikey = 'f5d3c9a655fd1a2cadca86fcb37178fd'
let pass = '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'

headers.append('Authorization', 'Basic ' + btoa(apikey + ':' + pass));

const api_url_cust = '/admin/api/2021-07//customers/search.json?query=customer_tag:VIP'
const api_url_fuil = '/admin/api/2021-07/orders.json?status=any&fulfillment_status=shipped'

fetch(api_url_cust, {headers: headers})
.then(res => res.json())
.then (customers => {
    let span_contador = document.getElementById('span-clientes')
    console.log(customers.customers.length)
    span_contador.innerHTML=(customers.customers.length)
})
.catch(error => console.log(error))

fetch(api_url_fuil, {headers: headers})
.then(res => res.json())
.then (orders => {
    let span_contador2 = document.getElementById('span-ordenes')
    console.log(orders.orders.length)
    span_contador2.innerHTML=(orders.orders.length)
})
.catch(error => console.log(error))
