import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useMemo,
  useReducer
} from 'react'

import { PriceActionTypes, PriceTypes } from './types'

interface PriceState {
  selectedPrice?: {
    position: [number, number]
    value: number
  }
}

type PriceContextType = [PriceState, Dispatch<PriceActionTypes>]

const initialState: PriceState = {
  selectedPrice: undefined
}

const reducer = (state: PriceState, action: PriceActionTypes) => {
  const { payload, type } = action

  switch (type) {
    case PriceTypes.SET_SELECTED_PRICE:
      return { ...state, selectedPrice: payload }
    default:
      return state
  }
}

export const PriceContext = createContext<PriceContextType>([
  initialState,
  () => {}
])

export const PriceContextProvider = (props: PropsWithChildren<{}>) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo<PriceContextType>(() => [state, dispatch], [state])

  return <PriceContext.Provider value={value}>{children}</PriceContext.Provider>
}
