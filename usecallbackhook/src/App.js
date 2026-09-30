// import React, { useState } from "react";

// const funcSet = new Set();

// const App = () => {
//     const [cnt, setCnt] = useState(0);
//     const [num, setNum] = useState(0);

//     const incCnt = () => setCnt(cnt + 1);
//     const decCnt = () => setCnt(cnt - 1);
//     const incNum = () => setNum(num + 1);

//     funcSet.add(incCnt);
//     funcSet.add(decCnt);
//     funcSet.add(incNum);
//     alert(funcSet.size);

//     return (
//         <div>
//             <h2>Without useCallback Hook</h2>
//             <button onClick={incCnt}>Increase Counter</button>
//             <button onClick={decCnt}>Decrease Counter</button>
//             <button onClick={incNum}>Increase Number</button>
//         </div>
//     );
// };

// export default App;

import React, { useState, useCallback } from "react";

const funcSet = new Set();

const App = () => {
    const [cnt, setCnt] = useState(0);
    const [num, setNum] = useState(0);

    const incCnt = useCallback(() => setCnt(cnt + 1), [cnt]);
    const decCnt = useCallback(() => setCnt(cnt - 1), [cnt]);
    const incNum = useCallback(() => setNum(num + 1), [num]);

    funcSet.add(incCnt);
    funcSet.add(decCnt);
    funcSet.add(incNum);
    alert(funcSet.size);

    return (
        <div>
            <h2>With useCallback Hook</h2>
            <button onClick={incCnt}>Increase Counter</button>
            <button onClick={decCnt}>Decrease Counter</button>
            <button onClick={incNum}>Increase Number</button>
        </div>
    );
};

export default App;