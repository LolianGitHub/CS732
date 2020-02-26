import React from 'react';
import Greeting from './greeting';
import BusinessCard from './business-card';
import ToDoList from './to-do-list';
import Counter from './counter';

const App = () =>
  <div>
    <Greeting firstName="Ash" lastName="Ketchum" />
    <BusinessCard name="Ash Ketchum" email="ash@silphco.biz" />
    {/* {["a", "b", "c"].map((item, index) => <p key={index}>{item}</p>)} */}
    <p>Empty to-do list:</p>
    <ToDoList />
    <p>To-do list with items:</p>
    <ToDoList items={["Finish lecture", "Do homework", "Sleep"]} />
    <p>Counter:</p>
    <Counter />
  </div>

export default App;