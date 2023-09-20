export const formatNumberWithCommas = (value: number) => {
  const numberArray = value.toString().split('')
  const startPosition = numberArray.length % 3

  for (let i = startPosition; i < numberArray.length; i += 3) {
    if (i === 0) continue

    numberArray[i] = `,${numberArray[i]}`
  }

  return numberArray.join('')
}
