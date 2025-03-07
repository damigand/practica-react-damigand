import { useEffect, useState } from "react";

const useTimer = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setTimeout(() => {
            setDate(new Date());
        }, 1000);
    }, [date]);

    return { date };
};

export default useTimer;
