const books = [
    {
        title : "The Great Getsby",
        author : "F. scott fitzgerald",
        year : 1925,
    },
    {
        title : "To Kill a mockingbird",
        author : "Harper Lee",
        year : 1960,
    },
    {
        title : "Who are you?",
        author : "George orwell",
        year : 1949,
    },
    {
        title : "Pride and Prejudice",
        author : "Jane Austen",
        year : 1813,
    },
];

function logTitle(titles){
    titles.sort();
    console.log(titles.join(", "));
};

function extractTitles(books, callback){
    const titles = books.map((book) => book.title);
    callback(titles);
}
extractTitles(books, logTitle);