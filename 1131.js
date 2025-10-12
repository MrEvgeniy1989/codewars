const obfuscate = (email) => email.replace(/@/gi, " [at] ").replace(/\./gi, " [dot] ")
