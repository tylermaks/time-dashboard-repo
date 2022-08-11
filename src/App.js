import React, {useState} from "react"
import Tracker from "./Tracker";
import Profile from "./Profile";

import data from "./data.json"
import './Assets/Styles/App.css';

function App() {

  const [timeframe, setTimeframe] = useState("Weekly")

  const handleClick = (e) =>{
    setTimeframe(e.target.value)
  }

  return (
    <main className="App">
      <Profile 
        onClick={handleClick}
        timeframe={timeframe}
      />

      {
        data.map((item, index) => {

          const getTimeframe = () =>{
            if(timeframe === "Daily"){
              return item.timeframes.daily
            } else if (timeframe === "Weekly"){
              return item.timeframes.weekly
            } else {
              return item.timeframes.monthly
            }
          }

          return(
            <Tracker 
              key={index}
              id={index}
              title={item.title}
              current={getTimeframe().current}
              previous={getTimeframe().previous}
            />
          )
        })
      }

    </main>
  );
}

export default App;
