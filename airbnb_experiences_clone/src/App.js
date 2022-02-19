import React from 'react';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import './App.css';
import {data} from "./data";  
import Footer from './components/footer';     
      

function App() {   
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            item={item}
        />
    )
})        

return (
    <div>
        <NavBar />
        <Hero />
        <section className="cards-list">
                {cards}
        </section>
        <br/>
        <br/>
        <Footer />
    </div>

  )
}
export default App;