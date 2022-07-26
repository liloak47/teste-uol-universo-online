const verifyNumberPrint = (i) =>{
    if(i == 0){
        console.log(i);
    }else if( i%3 == 0 && i%5 == 0){
        console.log('TechOps');
    }else if(i%3 == 0){
        console.log('Tech');
    }else if(i%5 == 0){
        console.log('Ops');
    }else{
        console.log(i);
    }
}
const techOpsPrint = (start,end, steps) =>{
    if (end > start){
        for(let i = start; i <= end; i +=steps){
            verifyNumberPrint(i)
        }
    }else{
        for(let i = start; i >= end; i -=steps){
            verifyNumberPrint(i)
        }
    }
}

techOpsPrint(0,25,2);
console.log('-----Descrescente---------');
techOpsPrint(25,0,2);

