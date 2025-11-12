const lottery = (str) => [...new Set(str.match(/\d/g)).values()].join("") || "One more run!"
