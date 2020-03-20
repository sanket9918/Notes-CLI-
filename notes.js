const fs = require('fs')
const chalk = require('chalk')


const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length ===0)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(notes)
    }else{
        console.log('Title taken')
    }

    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }

}

const removeNotes  = function(title){
    const notes = loadNotes()
    const notestoKeep = notes.filter(function(note){
        return note.title !==title
    })
    saveNotes(notestoKeep)

    if (notestoKeep.length < notes.length){
        console.log(chalk.green('Note removed'))
    }else{
        console.log(chalk.red('No note found'))

    }
}

const listNotes = function(){
    const notes=  loadNotes()
    notes.forEach(element => {
        console.log('Title:'+element.title)
        console.log('Body:' +element.body)
    });

}
module.exports = {
    addNote: addNote,
    removeNotes:removeNotes,
    listNotes:listNotes
}