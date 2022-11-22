function fibonacciGenerator(start = 0, end = 0) {
  let counter = start
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
          return { value: undefined, done: true }
        },
      }
    },
  }
}

const generatorObject = fibonacciGenerator(0, 10)

for (const number of generatorObject) {
  console.log(number)
}
