import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useMemo,
  useReducer
} from 'react'

import { PaperSize } from '../../common/enums'
import { PaperSizeActionTypes, PaperSizeTypes } from './types'

interface PaperSizeState {
  paperSize: PaperSize
}

type PaperSizeContextType = [PaperSizeState, Dispatch<PaperSizeActionTypes>]

const initialState: PaperSizeState = {
  paperSize: PaperSize.A4
}

const reducer = (state: PaperSizeState, action: PaperSizeActionTypes) => {
  const { payload, type } = action

  switch (type) {
    case PaperSizeTypes.SET_PAPER_SIZE:
      return { ...state, paperSize: payload }
    default:
      return state
  }
}

export const PaperSizeContext = createContext<PaperSizeContextType>([
  initialState,
  () => {}
])

export const PaperSizeContextProvider = (props: PropsWithChildren<{}>) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo<PaperSizeContextType>(() => [state, dispatch], [state])

  return (
    <PaperSizeContext.Provider value={value}>
      {children}
    </PaperSizeContext.Provider>
  )
}
