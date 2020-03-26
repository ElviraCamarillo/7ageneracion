const saveProductToDb = (productObject) =>{
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
        }
    }
    xhttp.open("POST","https://javascript-ajax-d0ce6.firebaseio.com/elvira/products.json",true)

    xhttp.send(JSON.stringify(productObject))

}


const getProductData = () =>{
    let name = document.getElementById("product-name").value
    let description = document.getElementById("product-description").value
    let price = document.getElementById("product-price").value
    price = parseInt(price)
    let productObject = {name, description, price}
    console.log(productObject)
    saveProductToDb(productObject)
}

let saveButton = document.getElementById("submit-button")

saveButton.addEventListener("click", getProductData)

const getProducts = () =>{
    console.log("getting products")
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.responseText)
            console.log(response)
        }
    }
    xhttp.open("GET","https://javascript-ajax-d0ce6.firebaseio.com/elvira/products.json",true)

    xhttp.send()
 }
 let saveButton2 = document.getElementById("get-products")

saveButton2.addEventListener("click", getProducts)

 /* const putProducts = (productId, productObject) =>{
    console.log("getting products")
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.responseText)
            console.log(response)
        }
    }
    xhttp.open("PUT",`https://javascript-ajax-d0ce6.firebaseio.com/elvira/products/${productId}.json`,true)
    xhttp.send(productObject)
 }
 const deleteProduct = (productId) => {
    console.log("getting products")
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            let response = JSON.parse(this.responseText)
            console.log(response)
        }
    }
    xhttp.open("DELETE",`https://javascript-ajax-d0ce6.firebaseio.com/elvira/koders/${productId}.json`,true)
    xhttp.send()
} */