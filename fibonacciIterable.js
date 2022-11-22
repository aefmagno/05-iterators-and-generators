function fibonnaciIterable(end) {
  let counter = 0
  let number1 = 0
  let number2 = 1
  let next = 0

  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (counter < end) {
            const result = { value: number1, done: false }
            next = number1 + number2
            number1 = number2
            number2 = next
            counter += 1
            return result
          }
          return { done: true }
        },
      }
    },
  }
}

const iterable = fibonnaciIterable(10)

for (const number of iterable) {
  console.log(number)
}
