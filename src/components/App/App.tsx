import { PaperSizeContextProvider } from '../../contexts/PaperSizeContext'
import { PriceContextProvider } from '../../contexts/PriceContext'

const App = () => {
  return (
    <PaperSizeContextProvider>
      <PriceContextProvider></PriceContextProvider>
    </PaperSizeContextProvider>
  )
}

export default App
