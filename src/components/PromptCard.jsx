import React from "react";
import ResponseFeed from "./ResponseFeed";
import ResponseInput from "./ResponseInput";

export default function PromptCard({ prompt, addResponse }) {
    return (
        <div style={{
            backgroundColor: "#333",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            minHeight: "300px",
            maxHeight: "500px",
            overflowY: "auto"
        }}>
            <h3>{prompt.title}</h3>

            <ResponseInput
                onSubmit={(text) => addResponse(prompt.id, text)}
            />

            <ResponseFeed responses={prompt.responses} />
        </div>
    );
}