// https://www.codewars.com/kata/592fd8f752ee71ac7e00008a/solutions
function covfefe(str) {
    const res = str.replace(/coverage/g, "covfefe")
    return res === str ? str + " covfefe" : res
}