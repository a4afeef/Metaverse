var numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach(num => {
    let pos;
    if(num == 1){
        pos = 'st';
    }
    else if(num == 2){
        pos = 'nd';
    }
    else if(num == 3){
        pos = 'rd';
    }
    else{
        pos = 'th';
    }
    
    console.log(num + pos);
});