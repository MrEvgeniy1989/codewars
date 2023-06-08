// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
function generateHashtag(str) {
    if (str.trim() === '') return false
    str = "#" + str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    return str.length > 140 ? false : str
}

generateHashtag("do We have A Hashtag")
generateHashtag("CodeWars")