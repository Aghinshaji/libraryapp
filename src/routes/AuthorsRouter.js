var express = require("express");
const authorsRouter = express.Router();

var authors = [
    {
        name: 'lev necolayevich',
        dob: '9 September 1828',
        image: "lv.jfif"
    },
    {
        name: 'onv kurup',
        dob: '27 May 1931',
        image: "onv.jfif"

    },

    {
        name: 'kottayam pushpanath',
        dob: '1938',
        image: "kp.jfif"

    },
    {
        name: 'basheer',
        dob: '21 January 1908',
        image: "vm.jfif"

    }
];

function Router(nav){
    authorsRouter('/')
    .get((req,res)=>{
        res.render("authers.ejs",{nav,title:'Authors'})
    }
    )
}