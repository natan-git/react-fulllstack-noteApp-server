const noteService = require('../services/noteService');

module.exports = (app) => {
  app.get('https://hidden-refuge-74609.herokuapp.com/api/note', (req, res) => {
    const filterBy = req.query;

    noteService
      .query(filterBy)
      .then((notes) => {
        res.json(notes);
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  });

  app.get('/api/note/:id', (req, res) => {
    noteService
      .getNoteById(req.params.id)
      .then((notes) => {
        res.json(notes);
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  });

  app.post('/api/note', (req, res) => {
    const note = req.body;

    noteService
      .addNote(note)
      .then((note) => {
        res.json(note);
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  });

  app.delete('/api/note/:id', (req, res) => {
    noteService
      .deleteNote(req.params.id)
      .then(() => {
        res.json({ message: 'deleted!!!' });
      })
      .catch((err) => {
        res.status(500).json({ err });
      });
  });

    app.put('/api/note/:id', (req, res) => {
      const note = req.body;
      
      noteService.editNote(note, req.params.id).then((note) => {
           res.json(note);
       }).catch(err => {
           res.status(500).json({ err })
       })
  })

};
