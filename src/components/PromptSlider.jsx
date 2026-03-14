import React, { useState } from "react";
import PromptCard from "./PromptCard";

export default function PromptSlider({ prompts, addResponse }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!prompts || prompts.length === 0) {
    return <p style={{ color: "white" }}>No prompts yet.</p>;
  }

  const prompt = prompts[currentIndex];

  const prevPrompt = () => setCurrentIndex(i => Math.max(i - 1, 0));
  const nextPrompt = () => setCurrentIndex(i => Math.min(i + 1, prompts.length - 1));

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
        <button onClick={prevPrompt}>←</button>
        <div style={{ width: "600px", margin: "0 20px" }}>
          {prompt ? <PromptCard prompt={prompt} addResponse={addResponse} /> : null}
        </div>
        <button onClick={nextPrompt}>→</button>
      </div>
      <p style={{ color: "white", marginTop: "10px" }}>
        {currentIndex + 1} / {prompts.length}
      </p>
    </div>
  );
}