export enum PriceTypes {
  SET_SELECTED_PRICE = 'SET_SELECTED_PRICE'
}

interface SetSelectedPriceAction {
  type: typeof PriceTypes.SET_SELECTED_PRICE
  payload: [number, number]
}

export const setSelectedPrice = (selectedPrice: [number, number]) => ({
  type: PriceTypes.SET_SELECTED_PRICE,
  payload: selectedPrice
})

export type PriceActionTypes = SetSelectedPriceAction
