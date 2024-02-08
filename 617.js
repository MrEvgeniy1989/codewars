function dblLinear(n) {
  let u = [1] // Последовательность
  let xIndex = 0 // Индекс для числа вида 2 * x + 1
  let yIndex = 0 // Индекс для числа вида 3 * x + 1

  while (u.length <= n) {
    let x = 2 * u[xIndex] + 1
    let y = 3 * u[yIndex] + 1

    if (x < y) {
      u.push(x)
      xIndex++
    } else if (x > y) {
      u.push(y)
      yIndex++
    } else {
      // Если x и y равны, добавляем оба числа и увеличиваем оба индекса
      u.push(x)
      xIndex++
      yIndex++
    }
  }

  return u[n]
}

dblLinear(20)
