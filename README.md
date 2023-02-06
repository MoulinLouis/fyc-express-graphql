# FYC - Express with GraphQL

## Description
Source code for the videos related to the implementation of an express server with graphql for the FYC 2023.

## How to use

1. Clone the repository.
2. Run `npm install`
3. Run `npm start`

Access to the **GraphiQL** : http://localhost:3000

Some query to work with the schema :

**Create a book** :
```
mutation {
  createBook(input: {
    title: "1984",
    description: "1984 is a philosophical and anticipation novel describing a totalitarian world.",
  	author: "George Orwell",
    isAvailable: true,
    price: 10,
    categories: [
    	{
        category: "fiction",
      },   	
      {
        category: "dystopian",
      },
      {
        category: "anticipation",
      },
    ]
  }) {
    id,
    title,
    price
  }
}
```

**Get all books** :
```
query {
  getBooks {
    id,
    title,
    price
  }
}
```

**Get book by id** :
```
query {
  getBook(id: <insert id here>) {
    id,
    title,
    price
  }
}
```

## Technologies used

* Express
* GraphQL

## Contributors

* **Louis Moulin** - [github](https://github.com/MoulinLouis)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
