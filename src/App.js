
import './App.css';
import { useState } from 'react'



function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState('male')
  const [alco, setAlco] = useState(0)

  const calculate = (e) => {
  e.preventDefault()
  
  let tulos = 0
  let litres = bottles * 0.33
  let grams = litres * 8 * 4.5
  let burn = weight / 10
  let gramsleft = grams - (burn * time)

 
      if (gender === 'male') {
        tulos = gramsleft / (weight * 0.7)
      } else {
        tulos = gramsleft / (weight * 0.6)
      }
      
      if (tulos < 0) {
        setAlco(0)
      } else {
    setAlco(tulos) }

  }


  return (
<form onSubmit={calculate}>
  <h3>Calculating alcholol blood level</h3>
  <div>
    <label>Weight </label>
    <input value ={weight} onChange={e => setWeight(e.target.value)}></input>
  </div>
  <div>
    <label>Bottles </label>
    <select value={bottles} onChange={e => setBottles(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  </div>
  <div>
    <label>Time </label>
    <select value={time} onChange={e => setTime(e.target.value)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>
  </div>
  <div>
    <label>Gender </label>
    <input type ="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} defaultChecked /><label>Male</label>
    <input type ="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
  </div>
 <div>
  <label>Result</label>
  <output> {alco.toFixed(1)}</output>
 </div>
 <button type="button" class="btn btn-dark">Calculate</button>
 
</form>
  );
}

export default App;
