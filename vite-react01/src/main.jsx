import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

//testing code

function MyApp() {
    return (
        <>
            <h1>My App !</h1>
        </>
    );
}

//React way to create element
const reactElement = React.createElement(
    "a",
    { href: "https://google.com", target: "_blank" },
    "visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
