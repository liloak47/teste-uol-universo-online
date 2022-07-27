const getEventsDataLayer = () =>{
    listEventsCustoms = []
    dataLayer.forEach((e) => {
        if(e.event === "xhr response" && (e.requestBody !== null && e.requestBody !== undefined)){
            listEventsCustoms.push(e)
        }
    });
    listEventsCustoms.forEach((e)=>{
        console.log(e);
    })
}

getEventsDataLayer();