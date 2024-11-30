const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in secs
const ut = os.uptime()
console.log(`The system uptime is ${ut} seconds`)


const currentOS = {
    name:os.type(),
    release:os.release(),
    version:os.version(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()

}

console.log(currentOS)