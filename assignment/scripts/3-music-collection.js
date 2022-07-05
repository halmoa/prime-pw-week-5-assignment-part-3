console.log('***** Music Collection *****')
let collection = [];//empty array

let myMusic = [{
    title: 'Lungs',
    artist: 'Florence and The Machine',
    yearPublished: 2009
},
{
    title: 'Dance Fever',
    artist: 'Florence and The Machine',
    yearPublished: 2022,
},
{
    title:'Planet Her',  
    artist: 'Doja Cat',
    yearPublished: 2021,
},
{
    title: 'Sour',
    artist: 'Olivia Rodrigo',
    yearPublished: 2021,
},
{
    title: 'Golden Hour',
    artist: 'Kacey Musgraves',
    yearPublished: 2018,
},
{
    title: 'AM',
    artist: 'Arctic Monkeys',
    yearPublished: 2013,
}];

// console.log(collection.title, 'Lungs');


function addToCollection(titleInput, artistInput, yearPublishedInput){
    collection.push(myMusic);
    return myMusic;
    // for(let title of titleInput){
    //     console.log(title);
    // }
    // for(let title of myMusic){
    //     console.log(myMusic.title);
    //     // return myMusic;
    // }
    // for(let i = 0; i < collection.length; i++){
    //         console.log(collection);
    //      }
}
console.table(addToCollection());
console.log('This record is', myMusic[0]);
console.log('This record is', myMusic[1]);
console.log('This record is', myMusic[2]);
console.log('This record is', myMusic[3]);
console.log('This record is', myMusic[4]);
console.log('This record is', myMusic[5]);

console.log('this is the collection',collection);
// Object.keys(myMusic).forEach((prop)=> console.log(prop));

// console.console.);(myMusic.title);log(
// console.log([myMusic.title.artist.yearPublished])
// console.log(Object.values(collection));

function showCollection(array){
    for(let i = 0; i < array.length; i++){
        // console.log(collection);
        return array;
     }

}//end of showCollection function
console.log(showCollection('number of items in',array));




let emptyArray = [];
function findByArtist(artistInput, collectionInput){
    for(let i =0;i < collectionInput.length;i++){
        if(artistInput === collectionInput[i].artist){
            emptyArray.push(collectionInput[i])
        }
    }

}
findByArtist('Doja Cat', myMusic);
console.log(emptyArray);
