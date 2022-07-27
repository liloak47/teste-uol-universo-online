const getProductClickCustom = () =>{
    let nodeListProductClick = document.querySelectorAll(".js-productClick");
    let nodeListToArray = Array.from(nodeListProductClick);
    let listElements = []
    nodeListToArray.forEach((e)=>{
        if (e.attributes.title && e.dataset.productSku % 3 == 0){
            listElements.push(e);
        }
    })
    listElements.forEach((e)=>{
        console.log(e);
    })
}

getProductClickCustom();