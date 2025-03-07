import "./Timer.css";

const Timer = ({ date }) => {
    return (
        <div className="date">
            <h2>TIMER</h2>
            <span>{date}</span>
        </div>
    );
};

export default Timer;
