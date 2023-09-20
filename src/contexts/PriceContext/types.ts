export enum PriceTypes {
  SET_SELECTED_PRICE = 'SET_SELECTED_PRICE'
}

interface SetSelectedPriceAction {
  type: typeof PriceTypes.SET_SELECTED_PRICE
  payload: { position: [number, number]; value: number }
}

export const setSelectedPrice = (selectedPrice: {
  position: [number, number]
  value: number
}): SetSelectedPriceAction => ({
  type: PriceTypes.SET_SELECTED_PRICE,
  payload: selectedPrice
})

export type PriceActionTypes = SetSelectedPriceAction
