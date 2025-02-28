// Part 1: Growing Pains

/**Task
 * Create a program that helps a group of scientist 
 * how?
 * by telling them how to handle the growth and spread of a plant under their supervision.
 * 
 * Info given:
 * area = circle 
 * radius of circle = 5 meters
 * Area of a circle Formula = PI * radius
 * 3.1415 * 5 * 5 = area
 * total area = 78
 * space = 0.8 
 * area 1st week = 20
 * area 2nd week = 40
 * area 3rd week = 80
 * area 4th week = 160
 * 
 * Assignment Objectives
 * predict the plant growth after a certain amount of weeks
 * after what certain amount of weeks?
 * 
 * Decisions when observing
 * prune = > 80% or .80
 * monitor = 80% - 50% or .80 - .50
 * plant = < 50% or .50
 * 
 * show these decisions at week 1, 2, and 3.
 */

const firstWeek = 20
const secondWeek = 40
const thirdWeek = 80
const fourthWeek  = 160
const space = 0.8
const totalArea = 78
const PI = 3.14

//week one
if ((firstWeek * space) / totalArea < .50){
    console.log('plant')
}

else if (((firstWeek * space) / totalArea > .50 && (firstWeek * space) / totalArea < .80)){
    console.log('monitor')
}
else(
    console.log('prune')
)

//week two 
if ((secondWeek * space) / totalArea < .50){
    console.log('plant')
}

else if (((secondWeek * space) / totalArea > .50 && (secondWeek * space) / totalArea < .80)){
    console.log('monitor')
}
else(
    console.log('prune')
)


//week three 
if ((thirdWeek * space) / totalArea < .50){
    console.log('plant')
}

else if (((thirdWeek * space) / totalArea > .50 && (thirdWeek * space) / totalArea < .80)){
    console.log('monitor')
}
else(
    console.log('prune, time to stop')
)


//week four 
if ((fourthWeek * space) / totalArea < .50){
    console.log('plant')
}

else if (((fourthWeek * space) / totalArea > .50 && (fourthWeek * space) / totalArea < .80)){
    console.log('monitor')
}
else(
    console.log(`prune we've gone to far`)
)


// //Part Two: Thinking Bigger

// /**
//  * 
//  */

// for (let i = 1; i < 100; i*=2){
//     if(i > 50 && i < 80){
//         console.log('monitor')
//     }
// }

// let x = 20
// let y = .8

// while ((x * y) / 78 < 50) {
//     console.log('plant')
//         x*=2
//     if ((x * y) / 78 < 80) {
//         console.log('monitor')
//         x*=2
//     }else if ((x * y) / 78 >= 80){
        
//         break
//     }
//     console.log('prune')
// }


//Looking for:
/**amount of additional space that would be required if starts at 100 plants
 * didn't prune for 10 weeks
 * 
 * what we know:
 * if we didn't prune for 10 weeks and now prunning at week 10
 * then week 10 we are at 80% (.80) at week 10.
 */

const plants = 100

amtAddSpace = totalArea * .8
console.log(amtAddSpace)

if ((plants * space) / totalArea < .50){
    console.log('plant')
}

else if (((fourthWeek * space) / totalArea > .50 && (fourthWeek * space) / totalArea < .80)){
    console.log('monitor')
}
else(
    console.log(`prune we've gone to far`)
)

// if ((totalArea / space) > (plants * 0.8))
//     console.log('week 10 and were over capacity time to prune')

// newArea = (plants * (2 ** 10)) * space 
// console.log(newArea)

// radius = ((newArea / PI) / 2)
// console.log(radius)

// if (newArea > (totalArea * space)){
//     console.log("week 10 so prune")
// }
// else if(newArea >= totalArea * 0.5){
//     console.log("week 10, monitor")
// }
// else("week 10, plant")