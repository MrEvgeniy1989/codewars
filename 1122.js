const decode = ($) => $.replace(/[a-z]/g, (x) => "zyxwvutsrqponmlkjihgfedcba"["abcdefghijklmnopqrstuvwxyz".indexOf(x)])
