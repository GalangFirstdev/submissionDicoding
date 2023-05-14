const { handlerAddNoteapp,
  getbyAllbook,
  getBookByidhandler,
  editbooksHandler,
  handlerBydeleteBooks
} = require('./handler');


const router = [
  {
    method: 'POST',
    path: '/books',
    handler: handlerAddNoteapp,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getbyAllbook,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByidhandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editbooksHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: handlerBydeleteBooks,
  }
];




module.exports = router;