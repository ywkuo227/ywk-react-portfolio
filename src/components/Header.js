import React from "react";
import Navigation from "./Navigation";

export default function Header({ currentPage, handlePageChange }) {
    return (

        <div>
            <header className="header">
                <h1>Yu-Wei William Kuo</h1>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
        </div>

    )
}