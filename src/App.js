import Header from "./Header";
import TindalCards from "./TindalCards"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from "./SwipeButtons";
import Profile from "./Profile";
import Chats from "./Chats"
import "./ChatScreen"
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">

    
     <Router>

     

       <Switch>



       <Route path="/profile">
          <Header hideChat="/" />
           
           <Profile />
         </Route>




         <Route path="/chat/:person">

           <Header backButton="/chat"/>
           
           <ChatScreen />
         </Route>




       <Route path="/chat">

           <Header backButton="/"/>
           <Chats />
         </Route>





         <Route path="/">

            <Header />

           <TindalCards />
           
           <SwipeButtons />

         </Route>

         

         

       </Switch>
      

       </Router> 
    </div>
  );
}

export default App;



{/*Header*/}
      {/*Cards*/}
      {/*Buttons*/}

      {/*Chat Screen*/}

      {/*Individual Chat Screen*/}