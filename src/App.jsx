import Stars from './components/Stars';

function App() {
  return (
    <>
      <div>
        Film 1:
        <br />
        <Stars count={5} />
      </div>
      <div>
        Film 2:
        <br />
        <Stars count={3} />
      </div>
    </>
  )
}

export default App
