
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    courseName: "babu",
    age: 21
  }


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      
      <Card courseName="babuNair" someObje={myObj}/>
      <Card courseName="UI design" />
      <Card />
      
    </>
  )
}

export default App
