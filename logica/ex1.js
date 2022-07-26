const techOpsMultiple= () =>{
    for(let i = 0; i <= 100; i++){
        if( i % 3 == 0 && i % 5 == 0){
            console.log('TechOps');
        }else if(i % 3 == 0){
            console.log('Tech');
        }else if(i % 5 == 0){
            console.log('Ops');
        }else{
            console.log(i);
        }
    }
}
techOpsMultiple();