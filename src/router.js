const { handlerAddNoteapp,
  getbyAllbook,
  getBookByidhandler,
  editbooksHandler,
  handlerBydeleteBooks
} = require('./handler');


const router = [
  {
    method: 'POST',
    path: '/notes',
    handler: handlerAddNoteapp,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getbyAllbook,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getBookByidhandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editbooksHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handlerBydeleteBooks,
  }
];




module.exports = router;