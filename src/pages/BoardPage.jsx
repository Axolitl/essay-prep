import React, { useState } from "react";
import PromptSlider from "../components/PromptSlider";

export default function BoardPage({ courseId }) {
    const [prompts, setPrompts] = useState([]);

  // Add a new prompt
    const addPrompt = (title) => {
        const newPrompt = {
            id: Date.now(), // simple unique id
            title,
            responses: []
        };
        setPrompts([...prompts, newPrompt]);
    };

  // Add response to prompt
    const addResponse = (promptId, responseText) => {
        setPrompts(
            prompts.map((p) =>
                p.id === promptId
                    ? { ...p, responses: [...p.responses, responseText] }
                    : p
            )
        );  
    };

  return (
    <div>
        <header style={{ display: "flex", justifyContent: "space-between", padding: "16px" }}>
            <h2>Course: {courseId}</h2>
            <button onClick={() => {
                const title = prompt("Enter new prompt question:");
                if (title) addPrompt(title);
            }}>
                + Add Prompt
            </button>
        </header>

        <PromptSlider prompts={prompts} addResponse={addResponse} />
    </div>
  );
}