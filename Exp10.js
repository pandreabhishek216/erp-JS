import React from "react"; 

function App() { 
let currDate = new Date(); currDate = 
currDate.getHours(); let greeting; 
if (currDate >= 1 && currDate < 12) { greeting = "Good Morning"; 
} 
else if 
(currDate >= 12 && currDate < 18) { greeting = "Good Afternoon"; 
} 
else if 
(currDate >= 18 && currDate < 20) { greeting = "Good Evening"; 
} 
else if 
(currDate >= 20 && currDate < 24) { greeting = "Good Night"; 
} 
return ( 
<div> 
<h1> 
Wishing You a very {greeting} 
</h1> 
</div> 
); 
} 
export default App;