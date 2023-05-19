const { addNoteHandler, getAllNoteHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
    // route for add note
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        // config cors per route
        // options: {
        //     cors: {
        //         origin: ['*'],
        //     }
        // }
    },

    // route for display all of note
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNoteHandler,
    },

    // route for display note by id
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },

    // route for update note by id
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },

    // route for delete note by id
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;