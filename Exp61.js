import React, { useState, useEffect } from 'react';

function Exp6() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
        <div className='App'>
            <header className='app-header'>
                
                <h1>{currentTime}</h1>

            </header>
        </div>
        </div>
    );
}

export default Exp6;