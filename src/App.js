import React from 'react';
import Header from './components/Header'
import TicketListContainer from './containers/TicketListContainer'
import CreditContainer from './containers/CreditContainer'
import ScratchContainer from './containers/ScratchContainer'
import './App.css';
import ScrollArea from 'react-scrollbar'

const App = () => (
  <div className="App">
    <Header/>
    <div className="App-body">
      <ScrollArea
        className="App-body-list"
        horizontal={false}
        speed={0.8}>
        <TicketListContainer/>
      </ScrollArea>
      <div className="App-body-content">
        <CreditContainer/>
        <ScratchContainer/>
      </div>
    </div>
  </div>
)

export default App;
