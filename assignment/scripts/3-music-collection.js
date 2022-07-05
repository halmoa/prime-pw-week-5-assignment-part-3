console.log('***** Music Collection *****')
let collection = [{
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

console.log(collection.title, 'Lungs');

let myMusic = {
    title: ' ',
    artist: ' ',
    yearPublished: ' ',
};

function addToCollection(titleInput, artistInput, yearPublishedInput){
    collection.push(myMusic);
    return collection;
}
console.table(addToCollection());


function showCollection(collection){
    for(let i = 0; i < collection.length; i++){
        console.log(collection);
     }

}//end of showCollection function
console.log(showCollection());


function findByArtist(){




}
