import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteNote } from "../actions/note.actions";

const Card = ({ title, id }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await deleteNote(id);
            console.log(result);
            if (result.success) {
                window.location.reload();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const editUrl = `/edit/${id}`;

    return (
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg w-72 h-96 relative">
            <img className="w-full h-56 object-cover object-center" src="https://source.unsplash.com/random" alt="Card" />
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-yellow-400">{title}</h2>
                <p className="text-gray-400">Click to check {title}.</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-between p-4">
                <Link to={editUrl}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded-full">
                        Edit
                    </button>
                </Link>
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded-full">
                        <img src="https://st2.depositphotos.com/4326917/11164/v/450/depositphotos_111649582-stock-illustration-trash-sign-illustration.jpg" alt="Trash Icon" className="h-6 w-6" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Card;
