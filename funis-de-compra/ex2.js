const stepLayer = () =>{
    dataLayer.forEach(function(e){
        if(e.pagetype){
            console.log('Estamos na etapa: ',e.pagetype );
        }
    });
}
stepLayer();