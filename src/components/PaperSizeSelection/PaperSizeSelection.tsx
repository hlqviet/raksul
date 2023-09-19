import {
  ChangeEventHandler,
  MouseEventHandler,
  useContext,
  useState
} from 'react'

import { PaperSize } from '../../common/enums'
import {
  PaperSizeContext,
  setPaperSize as setPaperSizeAction
} from '../../contexts/PaperSizeContext'
import Button from '../Button'
import Select from '../Select'
import styles from './PaperSizeSelection.module.css'

const PaperSizeSelection = () => {
  const [state, dispatch] = useContext(PaperSizeContext)
  const [paperSize, setPaperSize] = useState(state.paperSize)

  const handlePaperSizeChange: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    const {
      target: { value }
    } = event

    setPaperSize(value as PaperSize)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (paperSize === state.paperSize) return

    dispatch(setPaperSizeAction(paperSize as PaperSize))
  }

  return (
    <div>
      <h3>Select paper size</h3>
      <Select
        className={styles.paperSizeSelect}
        value={paperSize}
        onChange={handlePaperSizeChange}>
        {Object.values(PaperSize).map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </Select>
      <div style={{ textAlign: 'right' }}>
        <Button className={styles.applyButton} onClick={handleClick}>
          Apply
        </Button>
      </div>
    </div>
  )
}

export default PaperSizeSelection
