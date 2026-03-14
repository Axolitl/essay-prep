import { useState } from 'react'
import CourseEntryPage from "./pages/CourseEntryPage";
import BoardPage from "./pages/BoardPage";

function App() {
    const [courseId, setCourseId] = useState("");
    
  
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            flexDirection: "column",
            backgroundColor: "#121212",
            color: "white"
        }}>
            {courseId ? (
                <BoardPage courseId={courseId} />
            ) : (
                <CourseEntryPage setCourseId={setCourseId} />
            )}
        </div>
    );
}

export default App
