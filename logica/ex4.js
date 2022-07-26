const techOpsPrint = (limit, steps, position) =>{
    if(steps === 0){
        console.error("step param incorrect; steps must be more then 0 ")
    }else{
        let nextPosition = position + 1;
        if (nextPosition <= limit){
            if( nextPosition%3 ==0 && nextPosition%5 == 0){
                console.log('TechOps');
            }else if(nextPosition%3 ==0){
                console.log('Tech');
            }else if(nextPosition % 5 == 0){
                console.log('Ops');
            }else{
                console.log(nextPosition);
            }   
            techOpsPrint(limit,steps, nextPosition)
        }
    }
}
techOpsPrint(23,3,0);