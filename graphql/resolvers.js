
// const db = require('../models/index');

let resolvers =  {
   
    Query: {
        posts: (parent, args, {db}, info) => db.Post.findAll(),
        users: (parent, args, {db}, info) => db.User.findAll(),
        
    },
   
};

module.exports = resolvers;