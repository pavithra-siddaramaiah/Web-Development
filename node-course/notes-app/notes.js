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

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}