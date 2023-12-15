import { DataTypes } from "sequelize";
import { User } from "../config/database.js";

export const noteModel = (sequelize) => {

    const Note = sequelize.define("Note", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        head: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        userId: {  // Update the data type to INTEGER
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    // Define the association between User and Note
    Note.belongsTo(User, {
        foreignKey: {
            name: 'userId',
            allowNull: false,
        }
    });

    return Note;
};
