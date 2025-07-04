const moveVowel = ($) => $.replace(/[aeiou]/g, "") + $.replace(/[^aeiou]/g, "")
