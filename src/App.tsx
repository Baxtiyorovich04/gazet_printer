import './App.css'
import NewspaperViewer from './components/NewspaperViewer'
import NewspaperLayoutClassic from './components/NewspaperLayoutClassic'
import NewspaperLayoutModern from './components/NewspaperLayoutModern'
import Newspaperpage3 from "./components/Newspaper3"


function App() {
  return (
    <NewspaperViewer>
      <NewspaperLayoutClassic />
      <NewspaperLayoutModern />
      <Newspaperpage3 />
    </NewspaperViewer>
  )
}

export default App
