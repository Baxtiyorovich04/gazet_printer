import './App.css'
import NewspaperViewer from './components/NewspaperViewer'
import NewspaperLayout from './components/NewspaperLayout'

function App() {
  return (
    <NewspaperViewer>
      <NewspaperLayout variant="v1" />
      <NewspaperLayout variant="v2" />
    </NewspaperViewer>
  )
}

export default App
