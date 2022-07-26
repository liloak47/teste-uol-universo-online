const techOpsPrint = (limit, steps) =>{
    if(steps === 0){
        console.error("step param incorrect; steps must be more then 0 ")
    }else{
        for(let i = 0; i <= limit; i +=steps){
            if( i % 3 ==0 && i % 5 == 0){
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
}
techOpsPrint(23,3);