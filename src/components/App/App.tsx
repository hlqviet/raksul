import { PaperSizeContextProvider } from '../../contexts/PaperSizeContext'
import { PriceContextProvider } from '../../contexts/PriceContext'
import Container from '../Container'
import PriceSection from '../PriceSection'

const App = () => {
  return (
    <PaperSizeContextProvider>
      <PriceContextProvider>
        <Container>
          <PriceSection />
        </Container>
      </PriceContextProvider>
    </PaperSizeContextProvider>
  )
}

export default App
