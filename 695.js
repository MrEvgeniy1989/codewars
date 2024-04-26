// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript
function vaporcode(string) {
  return string.split(" ").join("").toUpperCase().split("").join("  ")
}

vaporcode("Lets go to the movies")
