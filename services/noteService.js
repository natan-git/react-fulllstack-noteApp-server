const fs = require('fs');
const utilsService = require('./utilsService');

const dbService = require('./dbService');
const ObjectId = require('mongodb').ObjectId;

let gNotes = require('../data/notes.json');

const query = async (filterBy) => {
  const collection = await dbService.getCollection('notes');
  try {
    const notes = await collection.find(filterBy).toArray();
    return notes;
  } catch (err) {
    console.log('ERROR: cannot find customers');
    throw err;
  }
};
// const query = (filterBy) => {
//   const notes = !filterBy.name
//     ? gNotes
//     : gNotes.filter((note) => note.info.includes(filterBy.name));

//   return Promise.resolve(notes);
// };

const getNoteById = async (noteId) => {
  const collection = await dbService.getCollection('notes');
  try {
    const note = await collection.findOne({ _id: ObjectId(noteId) });
    return note;
  } catch (err) {
    console.log(`ERROR: cannot find customer ${noteId}`);
    throw err;
  }
};
// const getNoteById = (noteId) => {
//   const note = gNotes.find((note) => note._id === noteId);
//   if (note) return Promise.resolve(note);
//   else return Promise.reject('wrong ID');
// };

const addNote = async (note) => {
  const collection = await dbService.getCollection('notes');
  const newNote = {
    // _id: utilsService.getRandomID(),
    bgColor: '',
    type: 'TXT',
    isPinned: false,
    style: null,
    info: note.info,
    title: note.title,
    time: note.time,
  };
  console.log('newNote', newNote);
  try {
    await collection.insertOne(newNote);
    return newNote;
  } catch (err) {
    console.log(`ERROR: cannot insert customer`);
    throw err;
  }
};
// const addNote = (note) => {
//   const newNote = {
//     _id: utilsService.getRandomID(),
//     bgColor: '',
//     type: 'TXT',
//     isPinned: false,
//     style: null,
//     info: note.info,
//     title: note.title,
//     time: note.time,
//   };
//   console.log('newNote', newNote);
//   gNotes.push(newNote);
//   _saveToFile();

//   return Promise.resolve(newNote);
// };

const editNote = async (updateNote) => {
  let id = updateNote._id;
  delete updateNote._id;
  const collection = await dbService.getCollection('notes');
  try {
    await collection.updateOne(
      { _id: ObjectId(id) },
      { $set: { ...updateNote } }
    );
    updateNote._id = id;
    return updateNote;
  } catch (err) {
    console.log(`ERROR: cannot update note ${updateNote._id}`);
    throw err;
  }
};

// const editNote = (noteId, note) => {
//   let newNote = gNotes.find((note) => note._id === noteId);
//   if (!newNote) return Promise.reject('Wrong Id');
//   newNote.info = note.info;
//   _saveToFile();

//   return Promise.resolve(newNote);
// };

const deleteNote = async (noteId) => {
  const collection = await dbService.getCollection('notes');
  try {
    return await collection.deleteOne({"_id": ObjectId(noteId)});

  } catch (err) {
    console.log(`ERROR: cannot remove note ${noteId}`);
    throw err;
  }
};
// const deleteNote = (noteId) => {
//   let noteIndex = gNotes.findIndex((currNote) => currNote._id === noteId);
//   if (noteIndex === -1) return Promise.reject('Wrong Id');
//   gNotes.splice(noteIndex, 1);
//   _saveToFile();
//   return Promise.resolve(true);
// };

function _saveToFile() {
  fs.writeFile('data/notes.json', JSON.stringify(gNotes, null, 2), () => {
    console.log('saving to file...');
  });
}

module.exports = {
  deleteNote,
  addNote,
  getNoteById,
  editNote,
  query,
};
