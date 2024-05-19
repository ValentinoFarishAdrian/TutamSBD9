import React from "react";

const LandingPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 text-yellow-400">
            <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-5xl font-extrabold mb-4">Welcome to Note(Alone)</h1>
                <p className="text-xl mb-8">Make Your Notes More Skibidi.</p>
                <a href="/login" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full shadow-lg hover:bg-yellow-300 transition">
                    Get Started
                </a>
            </main>
            <footer className="w-full p-4 text-center">
                <p>&copy; 2024 Note(Alone). All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
