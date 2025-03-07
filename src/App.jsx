import "./App.css";
import Timer from "./components/Timer/Timer";
import Calculator from "./components/Calculator/Calculator";
import useTimer from "./hooks/useTimer";

function App() {
    const { date } = useTimer(1000);

    return (
        <>
            <Timer date={date.toLocaleTimeString("es-ES")} />
            <Calculator />
        </>
    );
}

export default App;
