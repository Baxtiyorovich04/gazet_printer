import './App.css'
import NewspaperViewer from './components/NewspaperViewer'
import NewspaperLayoutClassic from './components/NewspaperLayoutClassic'
import NewspaperLayoutModern from './components/NewspaperLayoutModern'
import Newspaperpage3 from "./components/Newspaper3"
import News4 from "./components/News4"


function App() {
  return (
    <NewspaperViewer>
      <NewspaperLayoutClassic />
      <NewspaperLayoutModern />
      <Newspaperpage3 />
      <News4 />
    </NewspaperViewer>
  )
}

export default App
