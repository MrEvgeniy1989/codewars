// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
function domainName(url) {
    if (url.startsWith("https://www.") || url.startsWith("http://www.")) {
        return url.split('.')[1]
    } else if (url.startsWith('http://') || url.startsWith('https://')) {
        return url.split('//')[1].split('.')[0];
    } else if (url.startsWith('www.')) {
        return url.split('.')[1]
    } else {
        return url.split('.')[0]
    }
}


domainName("http://www.yxday6s2szxyrn3d9h7nq5fogurl.io/archive/")
domainName("www.xakep.ru")
domainName("http://google.com")