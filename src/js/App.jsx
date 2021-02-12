import React from 'react';

import Search from './components/Search/Search';
import Slider from './components/Slider/Slider';
import AddMovie from './components/Slider/Add-movie';

const App = () => (
  <div className="App">
    <Search />
    <Slider />
    <AddMovie />
  </div>  
)

export default App;