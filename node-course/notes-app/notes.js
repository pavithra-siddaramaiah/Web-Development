const chalk = require('chalk')
const fs = require('fs')


const addNote = (title, body) => {
    const notes = loadNote()

    // const duplicateNotes = notes.filter((notes) => 
    //     notes.title === title
    const duplicateNote = notes.find((notes) => 
        notes.title === title
    )
    if(!duplicateNote) {
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

const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString()
        return JSON.parse(data);
    }
    catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    
    const notes = loadNote();
    const countNote = notes.filter((note) => 
         note.title === title
    )
    if (countNote.length !== 0) {
        const matchNote = notes.filter((note) =>
             note.title !== title
           )
           const removedData = JSON.stringify(matchNote)
           fs.writeFileSync('notes.json', removedData)
           console.log(chalk.bgGreen('Note Removed!'));
    }
    else {
        console.log(chalk.bgRed('No note found!'));
    }
   
}

const listNote = () => {
    const nodeList = loadNote();
        console.log(chalk.bgGreen('Your Notes...'))
        console.log(nodeList)
        nodeList.forEach((node) => {
            console.log(node.title)
        })
}

const readNote = (title) => {
    const notes = loadNote();
    const read = notes.find((note) => {
        return note.title === title
    })
    if (read) {
        console.log(chalk.bgGreen(read.title),read.body)
    }
    else {
        console.log(chalk.bgRed('No note found!!'))
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}