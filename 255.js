var Ghost = function () {
    // your code goes here
    const colors = ['white', 'yellow', 'purple', 'red'];
    const colorIndex = Math.floor(Math.random() * (colors.length));
    this.color = colors[colorIndex]
};