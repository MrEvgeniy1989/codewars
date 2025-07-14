const gap = (num) => (num.toString(2).match(/10+(?=1)/g) || [" "]).sort().pop().length - 1
