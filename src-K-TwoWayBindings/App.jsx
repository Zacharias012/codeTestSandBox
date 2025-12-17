import {useState} from 'react';

import Review from './Review';

// don't change the Component name "App"
function App() {
    const [feedbackTextInput, setFeedbackTextInput] = useState();
    const [studentName, setStudentName] = useState();

    function handleFeedbackTextChange(event) {
        setFeedbackTextInput(event.target.value);
    }

    function handleStudentNameChange(event) {
        setStudentName(event.target.value);
    }

    return (
        <>
            <section id="feedback">
                <h2>Please share some feedback</h2>
                <p>
                    <label>Your Feedback</label>
                    <textarea onChange={handleFeedbackTextChange}/>
                </p>
                <p>
                    <label>Your Name</label>
                    <input type="text" onChange={handleStudentNameChange}/>
                </p>
            </section>
            <section id="draft">
                <h2>Your feedback</h2>

                <Review feedback={feedbackTextInput} student={studentName} />

                <p>
                    <button>Save</button>
                </p>
            </section>
        </>
    );
}

export default App;