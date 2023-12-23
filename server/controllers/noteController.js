import { Note } from "../config/database.js"
import CustomError from "../utils/CustomError.js";

export default {

    getUserNotes: async(req, res, next ) => {
        try {
            const notes = await Note.findAll({ where: {userId: req.userId}});
            return res.status(201).json({ message: "Notes fetched successfully", data: notes });
        } catch (error) {
            next(error)
        }
    },

    getSingleNote: async (req, res, next) => {
        try {
            const note = await Note.findByPk(req.params.id);
            if (!note) {
                throw new CustomError("Note item not found", 404);
            }
            return res.status(201).json({ message: "Notes fetched successfully", data: note });
        } catch (error) {
            next(error)
        }
    },

    createNote: async(req, res, next ) => {
        try {
            const { head, text } = req.body;
            const noteData = {
                head, text,
                userId: req.userId,
            };
            const newNote = await Note.create(noteData);
            return res.status(201).json({ message: "Note created successfully", data: newNote });
        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    updateNote: async(req, res, next) => {
        try {
            const { head, text } = req.body
            const prevNote = await Note.findOne({ where: { id: req.params.id } })
            if (!prevNote) {
                throw new CustomError("Note item not found", 404);
            }
            const updatedNote = await prevNote.update({ head, text})
            return res.status(201).json({ message: "Note updated successfully", data: updatedNote });
        } catch (error) {
            next(error)
        }
    },

    deleteNote: async( req, res, next ) => {
        try {
            await Note.destroy({ where: { id: req.params.id } })
            return res.status(201).json({ message: "Note deleted successfully" });
        } catch (error) {
            next(error)
        }
    }

}