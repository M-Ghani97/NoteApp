var express = require("express");
var router = express.Router({mergeParams: true});
var Note = require("../models/noteSchema");

//Index Route
router.get("/notes", (req, res) => {
    Note.find({})
        .then(note => res.render("index", {note: note}))
        .catch(err =>  console.log(err));
})

//Create Route - Show form to add new route
router.get("/notes/new", (req, res) => {
    res.render("new");
})

//Show Route
router.get("/notes/:id", (req, res) => {
    res.render("show");
})

//Create Route - Add new post 
router.post("/notes", (req, res) => {
    Note.create(req.body.note)
    .then(note => {
        console.log(note);
        res.redirect("/notes");
    })
    .catch(err => {
        console.log(err);
    });
})

//Edit Route
router.get("/notes/:id/edit", (req, res) => {
    Note.findById(req.params.id)
        .then(note => res.render("edit", {note: note}))
        .catch(err => console.log(err));
})

//Update Route
router.put("/notes/:id", (req, res) => {
    Note.findByIdAndUpdate(req.params.id, req.body.note)
        .then(updatedNote => {
            console.log(updatedNote);
            res.redirect("/notes");
        })
        .catch(err => console.log(err));
})

//Delete Route
router.delete("/notes/:id", (req, res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(() => {
            console.log("blog deleted");
            res.redirect("/notes");
        })
        .catch(err => console.log(err));
})

module.exports = router;