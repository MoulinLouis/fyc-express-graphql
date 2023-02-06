import { buildSchema } from "graphql";

const schema = buildSchema(`

    type Book {
        id: ID!,
        title: String!,
        description: String,
        author: String!,
        isAvailable: Boolean!,
        price: Float!,
        categories: [Category]!
    }

    type Category {
        category: String!
    }

    type Query {
        getBook(id: ID): Book,
        getBooks: [Book]
    }

    input CategoryInput {
        category: String!
    }

    input InputBook {
        id: ID,
        title: String,
        description: String,
        author: String,
        isAvailable: Boolean,
        price: Float,
        categories: [CategoryInput]!
    }

    type Mutation {
        createBook(input: InputBook): Book
    }

`);

export default schema;