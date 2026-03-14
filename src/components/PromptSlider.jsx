import React, { useState } from "react";
import PromptCard from "./PromptCard";

export default function PromptSlider({ prompts, addResponse }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!prompts.length) return <p style={{ textAlign: "center", marginTop: "50px" }}>No prompts yet. Add one!</p>;

    const prevPrompt = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const nextPrompt = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, prompts.length - 1));
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
                <button onClick={prevPrompt}>←</button>

                <div style={{ width: "600px", margin: "0 20px" }}>
                    <PromptCard prompt={prompts[currentIndex]} addResponse={addResponse} />
                </div>

                <button onClick={nextPrompt}>→</button>
            </div>

            <p style={{ marginTop: "10px" }}>
                {currentIndex + 1} / {prompts.length}
            </p>
        </div>
    );
}