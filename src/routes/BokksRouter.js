var express = require("express");
const booksRouter = express.Router();


var books = [

    {
        title: "war and peace",
        genre: "historical fiction",
        author: "lev necolayevich",
        images: "war.jfif"
    },
    {
        title: "uppe",
        genre: "short stories",
        author: "onv kurup",
        images: "uppe.jfif"
    },
    {
        title: "crime file",
        genre: "crime novel",
        author: "kottayam pushpanath",
        images: "crime.jfif"
    },
    {
        title: "pathummante adu",
        genre: "literatures",
        author: "basheer",
        images: "pathumma.jfif"
    },
];
function router(nav) {
    booksRouter.route('/')// /book vanna book.ejs lekke pokum
        .get((req, res) => {
            res.render("books.ejs", { nav, title: "Books", books });
        });
    booksRouter.route('/addbooks')
        .get((req, res) => {
            res.render("addbooks.ejs", { nav, title: "Add books" })
        });
    booksRouter.route('/save')
        .post((req, res) => {
            console.log(req.body);
            res.send("book is saved")
        });
    booksRouter.route("/:id")
        .get((req, res) => {
            var i = req.params.id;
            res.render("book.ejs", { nav, book: books[i] })

        });
    return booksRouter;
}

module.exports = router;