const express = require("express");

const route = express.Router();
const StudentModel = require("../models/studentModel")
const { sendResponse } = require("../helper/helper");


route.get('/', async (req, res) => {
    try {
        const result = await StudentModel.find();
        if (!result) {
            res.send(sendResponse(false, null, "No data Found")).status(404)
        } else {
            res.send(sendResponse(true, result)).status(400)
        }

    } catch (e) {
        console.log(e)
        res.send(sendResponse(false)).status(404)
    }
});

route.get("/:id", (req, res) => {
    res.send("Get Single student data")
})


route.post("/", async (req, res) => {
    let { firstName, lastName, contact, course } = req.body;
    try {

        let arr = []
        if (!firstName) {
            arr.push('Required : First Name')
        }
        if (!contact) {
            arr.push('Required : Contact')
        }
        if (!course) {
            arr.push('Required : Course')
        }

        if (arr.length > 0) {
            res.send(sendResponse(false, arr, null, "Required all fields")).status(400)
            return;
        } else {
            let obj = { firstName, lastName, contact, course };
            let student = new StudentModel(obj);
            await student.save()
            if (!student) {
                res.send(sendResponse(false, null, "internal server error")).status(400)
            } else {
                res.send(sendResponse(true, student, "Saved successfully")).status(200)
            }
        }
    } catch (e) {
        res.send(sendResponse(false, null, "Internal server error")).status(400)
    }
})

route.put("/:id", (req, res) => {
    res.send("Edit Single student data")
})

route.delete("/:id", (req, res) => {
    res.send("Delete Single student data")
})

module.exports = route;


