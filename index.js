// 01 - Batmobile

// class Car {
//     constructor (brand, speed) {
//         this.brand = brand
//         this.speed = speed
//     }

//     accelerate (num) {
//         this.speed += num
//         console.log (this.speed)
//     }

//     brake (num) {
//         this.speed -= num
//         console.log (this.speed)
//     }

//     describe () {
//         console.log (`${this.brand} running at ${this.speed} km/h`)
//     }
// }

// const ford = new Car("ford", 0)
// ford.accelerate(50)
// console.log (ford)
// ford.brake (25)
// console.log (ford)

// const apollo = new Car ("Apollo", 0)
// apollo.accelerate (300)
// console.log (apollo)
// apollo.brake (200)
// console.log (apollo)
// console.log ("cé pété")


// --------------------------------------------------------------------------------------------------------------------------------------------------


// 02 - TV

// class Tv {

//     constructor (brand, channel, volume) {
//         this.brand = brand
//         this.channel = 1
//         this.volume = 50
//     }

//     decreaseVolume (num) {
//         if (this.volume - num >= 0) {
//             this.volume -= num
//         }
//     }
//     increaseVolume (num) {
//         if (this.volume + num <= 100) {
//             this.volume += num
//         }
//     }

//     changeChannel (num) {
//         if (num >= 0 && num <= 50) {
//             this.channel = num
//         }
//     }

//     resetTv () {
//         this.channel = 1
//         this.volume = 50
//     }

//     describe () {
//         console.log (`Your ${this.brand} is on channel ${this.channel} and the volume is ${this.volume}`)
//     }
// }


// const samsung = new Tv ("Samsung")
// // console.log (samsung)

// samsung.decreaseVolume (50)
// samsung.describe()

// samsung.increaseVolume (83)
// samsung.describe()

// samsung.changeChannel (9)
// samsung.describe()

// samsung.changeChannel (50)
// samsung.describe()

// samsung.resetTv ()
// samsung.describe()


// --------------------------------------------------------------------------------------------------------------------------------------------------


// 03 - Video Game

class Weapon {

    constructor (gunCategory, faction, factionLevel, damage, weakspotDamage, weakspotMulti, dps, rpm, burstAmmount, burstInterval, magazineSize, range) {
        this.gunCategory = gunCategory
        this.faction = faction
        this.factionLevel = factionLevel
        this.damage = damage
        this.weakspotDamage = weakspotDamage
        this.weakspotMulti = weakspotMulti
        this.dps = dps
        this.rpm = rpm
        this.burstAmmount = burstAmmount
        this.burstInterval = burstInterval
        this.magazineSize = magazineSize
        this.range = range
        this.bullets = this.magazineSize
    }

    shoot = (num) => {
        if (this.bullets > 0) {
            this.bullets -= num*this.burstAmmount
            console.log ("Piou Piou Piou")
            console.log (`${this.bullets} / ${this.magazineSize}`)
        } else {
            console.log ("Clic Clic Clic")
        }
        return this.bullets
    }
    reload = () => {
        this.bullets = this.magazineSize
        console.log ()
        console.log ("Reloading")
        console.log (`${this.bullets} / ${this.magazineSize} reloaded`)
    }
    
}


class Gear {

    constructor (armor, durability) {
        this.armor = armor
        this.durability = durability
    }

    // bulletTaken = () => {
    //     if (helmetUncommon.durability > 0) {
    //         helmetUncommon.durability -= (phasicLauncher.damage - helmetUncommon.armor)
    //     } else if (shieldUncommon > 0) {
    //         shieldUncommon.durability -= (phasicLauncher.damage - shieldUncommon.armor)
    //     }            
    // }
}


let health = 100

let phasicLauncher = new Weapon ("Battle Rifle", "Osiris", 3, 50, 87.5, "175%", 123, 148, 3, 0.06, 24, 52.5)

let helmetUncommon = new Gear (15, 700)

let shieldUncommon = new Gear (15, 275)


const shotFired = (num) => {
    while (health > 0) {
        if (phasicLauncher.bullets > 0) {
            phasicLauncher.shoot (num)
            
            if (helmetUncommon.durability > 0) {
                helmetUncommon.durability -= (phasicLauncher.damage * phasicLauncher.burstAmmount - helmetUncommon.armor)
                if (helmetUncommon.durability < 0) {
                    shieldUncommon.durability += helmetUncommon.durability
                    helmetUncommon.durability = 0
                } 
                
            } else if (shieldUncommon.durability > 0) {
                shieldUncommon.durability -= (phasicLauncher.damage * phasicLauncher.burstAmmount - shieldUncommon.armor)
                if (shieldUncommon.durability < 0) {
                    health += shieldUncommon.durability
                    phasicLauncher.bullets += phasicLauncher.burstAmmount
                    shieldUncommon.durability = 0
                }
                
            }
            
            if (helmetUncommon.durability === 0 && shieldUncommon.durability === 0) {
                health -= phasicLauncher.damage
                if (health <= 0) {
                    console.log ("You're dead, noob")
                    health = 0                    
                }
            } 
            
            if (health > 0) {
                console.log (`Helmet Durability : ${helmetUncommon.durability}`)
                console.log (`Shield Durability : ${shieldUncommon.durability}`)
                console.log (`Health : ${health}
                
                
                `)
            } 

        } else {
            console.log ()
            phasicLauncher.reload ()
            console.log ()
        }

        
    }
    
}

shotFired (1)