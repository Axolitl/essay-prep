import React, { useState } from "react";

export default function ResponseInput({ onSubmit }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onSubmit(text.trim());
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "16px" }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your response..."
                style={{ width: "100%", padding: "8px", fontSize: "14px" }}
            />
            <button type="submit" style={{ marginTop: "8px", padding: "8px 12px" }}>
                Submit
            </button>
        </form>
    );
}