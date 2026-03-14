import React from "react";

export default function ResponseFeed({ responses }) {
    if (!responses || responses.length === 0) {
        return <p style={{ fontStyle: "italic", marginTop: "10px" }}>No responses yet.</p>;
    }

    return (
        <div style={{ marginTop: "16px" }}>
            {responses.map((response, index) => (
                <p key={index} style={{borderBottom: "1px solid #555",padding: "4px 0",textAlign: "left"}}>
                    {response}
                </p>
            ))}
        </div>
    );
}