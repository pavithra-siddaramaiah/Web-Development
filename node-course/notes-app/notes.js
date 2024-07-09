const chalk = require('chalk')
const fs = require('fs')

const getNotes = function(){
    return 'Adding Notes...'
}

const addNote = function(title, body) {
    const notes = loadNote()

    const duplicateNotes = notes.filter(function(notes){
        return notes.title === title
    })
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        // console.log(notes);
        saveNote(notes)
    }
    else {
        console.log('title repeated, please choose another title')
    }
    

}

const saveNote = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNote = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        return JSON.parse(data);
    }
    catch (e) {
        return [];
    }
}

const removeNote = function(title){
    
    const notes = loadNote();
    const countNote = notes.filter(function(note){
        return note.title === title
    })
    if (countNote.length !== 0) {
        const matchNote = notes.filter(function(note) {
            return note.title !== title
           })
           const removedData = JSON.stringify(matchNote)
           fs.writeFileSync('notes.json', removedData)
           console.log(chalk.bgGreen('Note Removed!'));
    }
    else {
        console.log(chalk.bgRed('No note found!'));
    }
   
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}