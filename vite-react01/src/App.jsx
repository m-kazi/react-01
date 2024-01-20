import Kazzcode from "./kazzcode";

function App() {
    //variables will always passed in {},
    //it's called evaluated expression
    const username = "kazzcode";
    return (
        <>
            <Kazzcode />
            <h2>Lets code with {username}</h2>
            <p>Hey yo</p>
        </>
    );
}

export default App;
