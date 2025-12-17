function Summary() {
    return (
        <>
            <h1>Summary</h1>
            <p>"Fragments help you avoid unnecessary HTML elements."</p>
        </>
    );
}

function App() {
    return (
        <div id="app" data-testid="app">
            <Summary/>
        </div>
    );
}

export default App;
