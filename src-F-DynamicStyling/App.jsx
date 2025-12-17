import {useState} from 'react';

// don't change the Component name "App"
export default function App() {
    const [isActive, setIsActive] = useState(false);

    function handleToggle() {
        setIsActive(prev => !prev);
    }

    return (
        <div>
                <p className={isActive ? "activeButton" : "passiveButton"}>
                    Style me!
                </p>
            <button onClick={handleToggle}>Toggle style</button>
        </div>
    );
}
