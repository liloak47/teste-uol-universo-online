const getProductsCart = () =>{
    let listIdProducts = []
    let totalValue = 0;
    dataLayer.forEach(function(e){
        if(e.product){
            e.product.forEach(function(product){
                listIdProducts.push(product.id)
            })
        }
        if(e.valorSacola){
            totalValue =  e.valorSacola
        }
    });
    console.log('ID de produtos : ',listIdProducts.toString());
    console.log('Valor total da Sacola : R$',totalValue);
}
getProductsCart();