import React, { useState, useEffect } from 'react';
import '../App.css';

const message = "Welcome to the Animated Greeting Page!";

export default function App() {
  let currDate = new Date(); currDate = 
currDate.getHours(); let greeting; 
if (currDate >= 1 && currDate < 12) { greeting = 
"Good Morning"; 
} else if (currDate >= 12 && currDate < 18) { greeting = 
"Good Afternoon"; 
} else if (currDate >= 18 && currDate < 20) { greeting = 
"Good Evening"; 
} else if (currDate >= 20 && currDate < 24) { greeting = 
"Good Night"; 
} 
  return (
    <div className="typewriter-bg">
      <h1 class="animate__animated animate__backInLeft">Wishing You a very {greeting}<span className="cursor">|</span></h1>
    </div>
  );
}