// 11w4d assignment.

import React, { useState } from "react";

const Clock : React.FC = () => {
    const [time, setTime] = useState(new Date());

    setInterval(()=> {
        setTime(new Date());
    }, 1000);

    return (
        <div style={{fontSize : "10px"}}>
            ⏰ {time.toLocaleString()} ⏰
        </div>
    )
}

export default Clock;