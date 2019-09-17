var mongoose = require("mongoose");
var Note = require("./models/noteSchema");

var seeds = [
    {
        title: "Title_1",
        content: "Content for tite 1",
        author: "Author 1"
    },
    {
        title: "Title_2",
        content: "Content for tite 2",
        author: "Author 2"
    },
    {
        title: "Title_3",
        content: "Content for tite 3",
        author: "Author 3"
    },
    {
        title: "Title_4",
        content: "Content for tite 4",
        author: "Author 4"
    }
];

async function seedDB(){
    try{
        await Note.deleteMany({});
        console.log('Notes removed');

        for(const seed of seeds){
            let note = await Note.create(seed);
            console.log('Note created');
            note.save();
            console.log('Note added');
        }    
    } catch(err){
        console.log(err);
    }
}

module.exports = seedDB;