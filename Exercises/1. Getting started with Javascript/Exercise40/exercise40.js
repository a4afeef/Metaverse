
console.log(make_album('Akon', 'Beautiful', 5));
console.log(make_album('Akcent', 'Paradise'));
console.log(make_album('Atif Aslam', 'Jugni', 3));

function make_album(artist_name, album_title, tracks = null){
    let album = '"' + album_title + '" by ' + artist_name + '.';
    
    if(tracks != null){
        album = album + ' No. of tracks: ' + tracks + '.';
    }

    return album;
}