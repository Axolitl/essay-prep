import React, { useState, useEffect } from "react";
import PromptSlider from "../components/PromptSlider";
import { db } from "../firebase";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { addDoc } from "firebase/firestore";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export default function BoardPage({ courseId }) {
    const [prompts, setPrompts] = useState([]);

    // Add a new prompt
    const addPrompt = async (title) => {
        if (!title) return;

        try {
            await addDoc(collection(db, "courses", courseId, "prompts"), {
                title,
                response: []
            });
        } catch (err) {
            console.error("Error adding prompt:", err);
        }
    };

    // Add response to prompt
    const addResponse = async (promptId, responseText) => {
        try {
    // Reference the prompt document
            const promptRef = doc(db, "courses", courseId, "prompts", promptId);

    // Add the response to Firestore
            await updateDoc(promptRef, {
                responses: arrayUnion(responseText)
            });

    // No need to call setPrompts manually — onSnapshot will update local state
        } catch (err) {
            console.error("Error adding response:", err);
        }
    };

    // fetch prompts from firestore
    useEffect(() => {
        if (!courseId) return;

        const unsub = onSnapshot(
            collection(db, "courses", courseId, "prompts"),
            (snapshot) => {
                const data = snapshot.docs.map(doc => ({
                    id: doc.id, // use Firestore ID as unique id
                    ...doc.data(),
                    responses: Array.isArray(doc.data().responses) ? doc.data().responses : []
                }));
                setPrompts(data); // <-- this updates your state
            },
            (err) => console.error("Firestore error:", err)
        );

        return () => unsub();
    }, [courseId]);

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