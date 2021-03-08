var express = require('express');
var {graphqlHTTP} = require('express-graphql');
var {buildSchema} = require('graphql');


// Graphql schema
var schema = buildSchema(`
    type Query {
        course(id: Int!) : Course
        courses(topic :String) : [Course]
    }

    type Course {
        id : Int
        title : String
        author : String
        description : String
        topic : String
        url : String

    }
   `);

var courseData = [
    {
        id : 1,
        title : 'The Complete Nodejs Developer Course',
        author : 'Andreq Med,RoR developer',
        description : 'Learn Nodejs in an easiest way',
        topic : 'Node.Js',
        url : 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id : 2,
        title : 'The Complete Javascript Developer Course',
        author : 'Prashant vnai',
        description : 'Awesome video with practical aspects',
        topic : 'Javascript',
        url : 'https://javascript.info/'
    },
    {
        id : 3,
        title : 'GraphQl',
        author : 'Prashant vnai',
        description : 'The GraphQL Foundation',
        topic : 'GraphQl',
        url : 'https://graphql.org/faq/#why-should-i-use-graphql'
    },
    
]

/**@ function : get courses by id */
var getCourse = function(args) {
    var id = args.id;

    return courseData.filter(course => {
        return course.id = id;
    })[0];
}

// @function : get courses
var getCourses = function(args) {
    if(args.topic) {
        var topic = args.topic;

       
        return courseData.filter(course => course.topic === topic);
    }
    else {
        return courseData;
    }
}
var root = {
    course : getCourse,
    courses : getCourses
};


// Create express server
var app = express();

app.use('/graphql',graphqlHTTP({
    schema: schema,
  rootValue: root,
  graphiql: true,
}));


app.listen(4000,() => console.log(`Server listeing on port : 4000`));
