const fizzBuzz = (input) => {
    if (typeof input !== 'number') {
      return 'Invalid input.'
    } else {
      if (input <= 0) {
        return 'Please insert input that greater than 0'
      } else {
        const answer = []
        for (let i = 1; i <= input; i++) {
          if (i % 3 === 0 && i % 5 !== 0) {
            answer.push('Fizz')
          } else if (i % 5 === 0 && i % 3 !== 0) {
            answer.push('Buzz')
          } else if (i % 3 === 0 && i % 5 === 0) {
            answer.push('FizzBuzz')
          } else {
            answer.push(i.toString())
          }
        }
        return answer
      }
    }
  }
