const buyClay = () => {
    let clayObject = {}
    return clayObject
}

const makePottery = (clayObject) => {
   return clayObject.shape = "Bowl"
}

const bisqueFire = (clayObject) => {
    clayObject.readyForGlazing = true
    return clayObject
}

const glazePottery = (clayObject) => {
    if (clayObject.readyForGlazing !== true){
        console.log("Make sure you bisque fire the pottery before you glaze it")
    } else {
        clayObject.glazing = "Midnight Blue"
    }
    return clayObject
}

const finalFiring = (clayObject, kilntemperature) => {
    if(kilntemperature > 1200){clayObject.cracked = true
} else { clayObject.cracked = false
}
return clayObject
}

let pottery = buyClay()

let bowl = makePottery(pottery)

let fire = bisqueFire(pottery)

let glaze = glazePottery(pottery)

let finalPottery = finalFiring(pottery, 1200)
console.log(finalPottery)