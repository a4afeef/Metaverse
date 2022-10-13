
make_shirt('large', 'hello world');

function make_shirt(size = '', message = ''){
    if(size.toLowerCase() === 'large'){
        console.log('Shirt size: large and message: I love JavaScript!');
    }
    else if(size.toLowerCase() === 'medium'){
        console.log('Shirt size: medium and message: I love Metaverse!');
    }
    else{
        console.log('Shirt size: ' + size + ' and message: ' + message);
    }
}