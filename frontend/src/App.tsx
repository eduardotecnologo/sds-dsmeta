import { useState } from 'react'
import { NotificationButton } from './components/NotificationButton'
import { Header } from './components/Header'
import { SalesCard } from './components/SalesCard/SalesCard'

function App() {
  return (
    <> 
      <Header/>
      <main>
        <section id="sales">
          <div className='edumeta-container'>
            <SalesCard/>
          </div>
        </section>
      </main>
      {/* <NotificationButton/> */}
    </>
  )
}

export default App
