import { PaperSize } from '../../common/enums'

export enum PaperSizeTypes {
  SET_PAPER_SIZE = 'SET_PAPER_SIZE'
}

interface SetPaperSizeAction {
  type: typeof PaperSizeTypes.SET_PAPER_SIZE
  payload: PaperSize
}

export const setPaperSize = (paperSize: PaperSize): SetPaperSizeAction => ({
  type: PaperSizeTypes.SET_PAPER_SIZE,
  payload: paperSize
})

export type PaperSizeActionTypes = SetPaperSizeAction
