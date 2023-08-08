import { useState } from 'react'
import './App.css'
import Layout from './Layout/Layout'
import Home from './components/Pages/Home'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout>
      <Home />
    </Layout>
    </>
  )
}

export default App
