const getEventsDataLayer = () =>{
    
    dataLayer.forEach((e) => {
        if(e.event === "xhr response" && (e.requestBody !== null && e.requestBody !== undefined)){
            console.log(e);
        }
    });
}

getEventsDataLayer();