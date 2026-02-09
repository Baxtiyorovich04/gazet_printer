import { useState } from 'react'
import type { TravelData } from './components/TravelBooking'
import './App.css'
import NewspaperViewer from './components/NewspaperViewer'
import NewspaperLayoutClassic from './components/NewspaperLayoutClassic'
import NewspaperLayoutModern from './components/NewspaperLayoutModern'
import Newspaperpage3 from "./components/Newspaper3"
import News4 from "./components/News4"
import News5 from "./components/News5"
import TravelBooking from './components/TravelBooking'


function App() {
  const [hasBooking, setHasBooking] = useState(false)

  const handleBookingSubmit = (_data: TravelData) => {
    setHasBooking(true)
  }

  if (!hasBooking) {
    return <TravelBooking onSubmit={handleBookingSubmit} />
  }

  return (
    <NewspaperViewer>
      <NewspaperLayoutClassic />
      <NewspaperLayoutModern />
      <Newspaperpage3 />
      <News4 />
      <News5 />
    </NewspaperViewer>
  )
}

export default App
