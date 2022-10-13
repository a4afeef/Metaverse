
var magicians_list = ['Adam', 'Smith', 'Axel', 'Den'];
show_magicians(magicians_list);

function show_magicians(magicians){
    magicians.forEach(magician => {
        console.log(magician);
    });
}