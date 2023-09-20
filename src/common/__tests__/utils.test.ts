import { formatNumberWithCommas } from '../utils'

describe(formatNumberWithCommas.name, () => {
  it('should not insert any comma for number less than 1000', () => {
    expect(formatNumberWithCommas(999)).toEqual('999')
  })

  it('should insert commas for number greater or equal 1000 at the correct positions', () => {
    expect(formatNumberWithCommas(1000)).toEqual('1,000')
    expect(formatNumberWithCommas(10000)).toEqual('10,000')
    expect(formatNumberWithCommas(100000)).toEqual('100,000')
    expect(formatNumberWithCommas(1000000)).toEqual('1,000,000')
  })
})
