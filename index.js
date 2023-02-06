import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

class Book {
    constructor(id, { title, description, author, isAvailable, price, categories }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.isAvailable = isAvailable;
        this.price = price;
        this.categories = categories;

    }

}

const bookDatabase = {};

const resolvers = {
    getBook: ({ id }) => {
        return new Book(id, bookDatabase[id])
    },
    getBooks: () => {
        return Object.keys(bookDatabase).map(id => new Book(id, bookDatabase[id]));
    },
    createBook: ({ input }) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        bookDatabase[id] = input;
        return new Book(id, input);
    }
}

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});