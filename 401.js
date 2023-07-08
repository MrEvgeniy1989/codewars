// https://www.codewars.com/kata/55a75e2d0803fea18f00009d/javascript
function slope(points) {
    return points[2] - points[0] !== 0 ? String((points[3] - points[1]) / (points[2] - points[0])) : "undefined"
}

slope([19, 3, 20, 3])
slope([2, 7, 4, -7])
slope([10, 50, 30, 150])