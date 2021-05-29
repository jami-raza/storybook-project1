import React from 'react';

import { Button } from 'react-bootstrap';
import {Primary,Secondary} from './Components/StatusButtons.stories'
import {Active} from './Components/CampaignStatusButton.stories'
import {Button_1, Button_22, Button_22_sm} from './Components/OtherButtons.stories'
import Abc from './Components/DatePicker'
import Header from './Components/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <Button>Hello <i class="fa fa-close"></i></Button>
      <Primary />
      <Secondary />
      <Active />
      <Button_22 />
      <Button_22_sm />
      <Abc/>
      
    </div>
  );
}

export default App;
