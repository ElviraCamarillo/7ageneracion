var productsArray = [
    {
        name:"Sabritas 340gr",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:60,
        imgUrl:"https://images.rappi.com.mx/products/975004512-1580921567558.png?d=200x200&e=webp"
    },
    {
        name:"Paketaxo verde",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:50,
        imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rappi.com.mx%2Fproducto%2F1306702047_975660166&psig=AOvVaw3YBh8WdC-2_2BJspHGouUd&ust=1584932461382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjg7Y-MregCFQAAAAAdAAAAABAH"
    },
    {
        name:"Sabritas Moradas 170gr",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:45,
        imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rappi.com.mx%2Fproducto%2F1306702047_14255&psig=AOvVaw3YBh8WdC-2_2BJspHGouUd&ust=1584932461382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjg7Y-MregCFQAAAAAdAAAAABAN"
    },
    {
        name:"Coca Cola lata 335ml",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:14,
        imgUrl:"https://constantmotions.files.wordpress.com/2011/08/urban-hifi-coca-cola-8175.png"
    },
    {
        name:"Coca Cola sin azúcar",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:18,
        imgUrl:"https://images.rappi.com.mx/products/975607512-1579282803636.png?d=200x200&e=webp"
    },
    {
        name:"Six pack XX Lager",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:84,
        imgUrl:"https://images.rappi.com.mx/products/15324-1580920453948.png?d=200x200"
    },
    {
        name:"Six Pack Modelo Especial",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:112,
        imgUrl:"https://images.rappi.com.mx/products/7501064193156-1571349064824.png?d=200x200&e=webp"
    },
    {
        name:"Six Pack Negra Modelo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:140,
        imgUrl:"https://images.rappi.com.mx/products/895653002095-1571349176987.png?d=200x200&e=webp"
    },
    {
        name:"Jägermeister",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:270,
        imgUrl:"https://images.freshop.com/00083089660402/d6b255063a4f51e45b72c732690dc109_medium.png"
    },
    {
        name:"Alka-seltzer",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:60,
        imgUrl:"https://images.freshop.com/00016500040118/1b1dc11809542e9a198633e7ee4e53a1_medium.png"
    }
    

]

const cardProductsArray = () => {
    const listProducts = document.getElementById("cardproduct")
    let newCard= '';
    productsArray.forEach(product => {
      let name = product.name;
      let price = product.price;
      newCard+=`
        
            <li class="list-group-item list-group-item-info mb-3">
                <div class="product-name font-weight-bold">${name}</div>
                <div class="product-price">Costo: ${price}</div>
                <div class="form-group row">
                    <label for="inputPassword" class="col-sm-4 col-form-label">Cantidad:</label>
                    <div class="col-sm-8">
                            <input type="number" class="form-control">
                    </div>
                </div>
                <div class="btn-wrapper d-flex justify-content-between" id="btn-description">
                    <div class="btn btn-primary w-50 show-product-detail">Ver Detalle</div>
                    <div class="btn btn-success w-50 ml-2">Agregar al carrito</div>
                </div>
            </li>
        
      `      
    })
    listProducts.innerHTML = newCard

}
cardProductsArray()



const showProductDetail =(event) => {
    let clickedProduct = event.target
    console.log(clickedProduct)
    let productIndex = clickedProduct.dataset.productIndex
    console.log(productIndex)
    let selectedProduct=productsArray[productIndex]
    console.log(selectedProduct)
    let detailCard = document.getElementsById("detail-card")
    detailCard.innerHTML = ` 
    <img src=" ${selectedProduct.imgUrl}class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Sabritas 340 gr</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.</p>
    </div>
    `

}

var detailBtn = document.getElementsByClassName("show-product-detail")
console.log(detailBtn)

var i:
for(i=0; i<detailBtn.length; i++){
    detailBtn[i].addEventListener("click", showProductDetail)

}
 
