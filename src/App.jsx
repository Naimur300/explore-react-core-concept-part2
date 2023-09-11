import './App.css'
import Friends from './Friends'
import Users from './Users'
import Counter from './counter'


function App() {
  function handleClick(){
    alert('button clicked')
    // const g = document.getElementById('btn')
    // g.innerText = 'Clicked'
    
  }

  const handleClick2 = () => {
    alert('Thanks man you save me')
  }

  const addFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
     
      <h2>React Core Concept 2</h2>

      <Friends></Friends>

      <Users></Users>

      <Counter></Counter>

      <button id='btn' onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Here</button>
      <button onClick={() => addFive(5)}>Add</button>
     
    </>
  )
}

export default App
