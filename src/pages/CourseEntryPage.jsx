import React, { useState } from "react";

export default function CourseEntryPage({ setCourseId }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) setCourseId(input.trim().toUpperCase());
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Enter Course Code</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., CLAS2021"
                    style={{ fontSize: "16px", padding: "8px" }}
                />
                <button type="submit" style={{ fontSize: "16px", padding: "8px 16px" }}>
                    Enter
                </button>
            </form>
        </div>
    );
}