const stepLayer = () =>{
    listIds = []
    step = ''
    
    dataLayer.forEach((e) => {
        if(e.pagetype){
            step = e.pagetype
        }
        if(e.ecommerce && e.ecommerce.impressions){
            e.ecommerce.impressions.forEach((product)=>{
                listIds.push(product.id)
            });
        }
    });

    console.log('Estamos na etapa: ',step );
    if(listIds.length > 0){
        console.log("Lista de ID's de produtos :", listIds.toString());
    }
}
stepLayer();