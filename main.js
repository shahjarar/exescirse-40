// 40
//album: write a function called make_album(that builds a object describing a music album. the function should take in an artist
// name and an album tilte, and i should return a object conntainingthese two places of information. use the fuunction to make
//three dictionaries representing different  albums.print each return value to show that objects are storing the ablum
//information correctly. add an optional parameter to make_album that allows you to store the number of tracks on an album.
//if the calling line includes a value for the number of tracks ,add thatr value to the voalue to the album's object. make at least one new
// function call that includes the number of tracks on an album.
function makealbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makealbum("ali", "light");
console.log(album);
album = makealbum("belial", "red");
console.log(album);
album = makealbum("Hamza", "seebreeze");
console.log(album);
