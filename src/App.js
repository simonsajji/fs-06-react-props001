import './App.css';
import Card from './Card';
import { useEffect, useState } from 'react';


function App() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    // let colors = [{ name: '#FF0000', hex: '#FF0000' }, { name: '#00FF00', hex: '#00FF00' }, { name: '#0000FF', hex: '#0000FF' }, { name: '#CCEEFF', hex: '#CCEEFF' }, { name: '#C0C0C0', hex: '#C0C0C0' }, { name: '#800000', hex: '#800000' }, { name: '#CD5C5C ', hex: '#CD5C5C' }, { name: '#FA8072', hex: '#FA8072' }
    //   , { name: '#4169E1', hex: '#4169E1' }, { name: '#0000CD', hex: '#0000CD' }]
    // setColors(colors)
    fetch('https://x-colors.yurace.pro/api/random?number=150')
    .then(response => response.json())
    .then(data => setColors(data))
    .catch(error => console.error('Error fetching colors:', error));
  }, []);
  return (
    <>
      <h2>Color List</h2>
      <div className="color-list">
        {colors.map((color, index) => (
          <Card key={index} color={color} />
        ))}
      </div>
    </>
  );
}

export default App;
