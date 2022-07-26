const firstList = [13,21,40,8,37,15,39,41,19,17,3,4,48,27,38,24,47,31,45,10,5,29,11,46,49];
const secondList = [6,44,33,17,21,41,13,31,35,10,48,8,49,45,25,50,5,4,18,34,26,1,3,32,42];

const getReplyNumbers = () =>{
    const thirdyList = [];
    firstList.forEach(e => {
        if(secondList.find((eSecond)=> eSecond === e)){
            thirdyList.push(e);
        }
    });
    console.log(thirdyList);
}

getReplyNumbers(firstList,secondList);