function fibonacciGenerator(start = 0, end = 0) {
  let counter = start
  let number1 = 0
  let number2 = 1
  let next = 0
  return function* generatorFunction() {
    while (counter < end) {
      yield number1
      next = number1 + number2
      number1 = number2
      number2 = next
      counter += 1
    }
  }
}

const generatorFunction = fibonacciGenerator(0, 10)
const generatorObject = generatorFunction()

for (let number of generatorObject){
  console.log(number)
}
