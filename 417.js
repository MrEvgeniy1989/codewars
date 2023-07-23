// https://www.codewars.com/kata/56bcaedfcf6b7f2125001118/train/javascript
function htmlspecialchars(formData) {
    return formData
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

htmlspecialchars("<h2>Hello World</h2>")
htmlspecialchars("Hello, how would you & I fare?")