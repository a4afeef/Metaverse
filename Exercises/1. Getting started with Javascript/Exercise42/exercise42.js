
var magicians_list = ['Adam', 'Smith', 'Axel', 'Den'];
show_magicians(make_great(magicians_list));

function make_great(magicians){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = magicians[i] + ' the Great';
    }

    return magicians;
}

function show_magicians(magicians){
    magicians.forEach(magician => {
        console.log(magician);
    });
}