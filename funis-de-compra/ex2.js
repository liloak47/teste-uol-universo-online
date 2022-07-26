const stepLayer = () =>{
    dataLayer.forEach((e) => {
        if(e.pagetype){
            console.log('Estamos na etapa: ',e.pagetype );
        }
    });
}
stepLayer();