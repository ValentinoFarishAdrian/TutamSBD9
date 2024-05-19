import React, {useState, useEffect} from "react";
import { getAllNotes } from "../actions/note.actions";
import Card from "../components/Cards";
import NavBar from "../components/NavBar";

function Home() {
    const [notes, setNotes] = useState([]);
    const [user, setUser] = useState([]);
    
    const getNotes = async () => {
        const apiResponse = await getAllNotes();
        if (apiResponse.success) {
            console.log("Response In Home.jsx");
            console.log(apiResponse.data);
            setNotes(apiResponse.data);
        } else {
            alert("Failed to fetch notes");
        }
    };

    useEffect(() =>{
        getNotes();
    },[]);

    return (
        <div>
            <NavBar />
            <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-gray-700 to-gray-900">
                <h1 className="text-5xl font-extrabold mb-4 text-yellow-400 p-8">Your Notes</h1>
                <div className="w-full px-4 pb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {notes.map((note, index) => (
                            <Card key={index} id={note.id} title={note.title} />
                        ))}
                    </div>
                </div>
                <a href="/create" className="font-semibold bg-yellow-400 text-gray-900 px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition">
                    Create Notes
                </a>
            </div>
        </div>
    );
}

export default Home;