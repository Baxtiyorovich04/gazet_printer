import './App.css'
import NewspaperViewer from './components/NewspaperViewer'
import NewspaperLayoutClassic from './components/NewspaperLayoutClassic'
import NewspaperLayoutModern from './components/NewspaperLayoutModern'

function App() {
  return (
    <NewspaperViewer>
      <NewspaperLayoutClassic />
      <NewspaperLayoutModern />
    </NewspaperViewer>
  )
}

export default App
