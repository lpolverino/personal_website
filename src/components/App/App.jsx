import { useState } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import ParticlesBg from '../ParticlesBg/ParticlesBg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParticlesBg/>
      <Header></Header>
      <Main></Main>
    </>
  )
}

export default App
