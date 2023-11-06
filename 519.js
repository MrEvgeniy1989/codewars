// https://www.codewars.com/kata/5822b65bb81f702016000026/train/javascript
function linuxType(fileAttribute) {
    var fileTypes = {
        '-': 'file',
        'd': 'directory',
        'l': 'symlink',
        'c': 'character_file',
        'b': 'block_file',
        'p': 'pipe',
        's': 'socket',
        'D': 'door',
    };

    return fileTypes[fileAttribute[0]];
}