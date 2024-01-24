import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
    const [count, setCount] = useState(0);
    let myObj = {
        name: "Tanim",
        passion: "coding",
    };

    let newArr = [1, 2, 3];

    return (
        <>
            <h1 className="bg-slate-600 text-orange-300 p-4 rounded-lg mb-4">
                Tailwind
            </h1>
            <Card username="kazzcode" btnText="click me" />
            <Card username="tanim" btnText="" />
        </>
    );
}

export default App;
