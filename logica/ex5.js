const techOpsPrint = (limit, steps, position) =>{
    if(steps === 0){
        console.error("step param incorrect; steps must be more then 0 ")
    }else{
        position++;
        if (position <= limit){
            if( position % 3 == 0 && position % 5 == 0){
                console.log('TechOps');
            }else if(position % 3 == 0){
                console.log('Tech');
            }else if(position % 5 == 0){
                console.log('Ops');
            }else{
                console.log(position);
            }   
            techOpsPrint(limit,steps, position)
        }
    }
}
techOpsPrint(23,3,0);