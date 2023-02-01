// const express = require("express");
// const app = express(); //app - our express server (represents Express app object),

// //make a route
// app.get("/", (req,res)=>{ //.get() - the HTTP verb/method needed to access this page,
//     res.send("<h1>yes it worked2</h1>")
// });


// app.listen(3000, ()=>{
//     console.log('now listening')
// });

const express = require("express");
const app = express(); //app - our express server (represents Express app object),


app.use(express.static('public'));

// creates an absolute path pointing to a folder called "views"
app.set("views", __dirname + "/views");

app.set("view engine", "ejs")

// app.get("/", (req, res, next)=> res.render("index"));

// app.js

// app.get("/", (req, res, next) => {
//     let data = {
//       name: "Ironhacker",
//       bootcamp: "Ironhack Web Dev"
//     };
  
//     res.render("index", data);
//   });

// app.get("/", (req, res, next) => {
//     let data = {
//       name: "Ironhacker",
//       bootcamp: "<span>Ironhack Web Dev</span>"
//     };
//     res.render("index", data);
//   });

app.get("/", (req, res, next) => {
    let data = {
      name: "Ironhacker",
      lastname: "web dev ft"
    };
   
    res.render("index", data);
  });
  

// app.get("/", (req,res)=>{
//     res.send("it worked")
// })

// //make a route to home page
// app.get('/home', (req,res)=>{ //.get() - the HTTP verb/method needed to access this page,
//     res.sendFile(__dirname + '/views/home.html')
// });

// //make route to about page
// app.get("/about", (req,res)=>{
//     res.sendFile(__dirname + "/views/about.html")
// })


app.listen(3000, ()=>{
    console.log('now listening')
});