// https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript
const cannonsReady = (gunners) => {
    return Object.values(gunners).includes('nay') ? 'Shiver me timbers!' : 'Fire!'
}

cannonsReady({'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye'})