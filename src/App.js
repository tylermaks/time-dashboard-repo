import React, {useState} from "react"
import Tracker from "./Tracker";
import Profile from "./Profile";

import data from "./data.json"
import './Assets/Styles/AppStyles/App.css';

function App() {

  const [timeframe, setTimeframe] = useState("Weekly")

  const handleClick = (e) =>{
    setTimeframe(e.target.innerText)
  }

  return (
    <main className="App">
      <div className="tracker-container">
        <Profile 
          handleClick={handleClick}
          timeframe={timeframe}
        />

        {
          data.map((item, index) => {

            return(
              <Tracker 
                key={index}
                id={index}
                title={item.title}
                current={item["timeframes"][timeframe.toLowerCase()]["current"]}
                previous={item["timeframes"][timeframe.toLowerCase()]["previous"]}
                timeframe={timeframe}
              />
            )
          })
        }
      </div>
    </main>
  );
}

export default App;
