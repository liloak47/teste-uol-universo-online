const getProductClickCustom = () =>{
    let nodeListProductClick = document.querySelectorAll(".js-productClick");
    let listProductClick = Array.from(nodeListProductClick);
    
    listProductClick.forEach((e)=>{
        if (e.attributes.title && e.dataset.productSku % 3 == 0){
            console.log(e);
        }
    })
}

getProductClickCustom();