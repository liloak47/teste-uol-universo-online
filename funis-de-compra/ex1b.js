const getProductsCart = () =>{
    let listIdProducts = []
    let totalValue = 0;
    dataLayer.forEach((e) => {
        if(e.product){
            e.product.forEach((product)=>{
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