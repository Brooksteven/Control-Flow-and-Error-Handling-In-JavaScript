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
 * prune = > 80%
 * monitor = 80% - 50%
 * plant = < 50%
 * 
 * show these decisions at week 1, 2, and 3.
 */

const firstWeek = 20
const secondWeek = 40
const thirdWeek = 80
const fourthWeek  = 160
const space = 0.8
const totalArea = 78

//week one
if ((firstWeek * space) / totalArea < 50){
    console.log('plant')
}

else if (((firstWeek * space) / totalArea > 50 && (firstWeek * space) / totalArea < 80)){
    console.log('monitor')
}
else(
    console.log('prune')
)

//week two 
if ((secondWeek * space) / totalArea < 50){
    console.log('plant')
}

else if (((secondWeek * space) / totalArea > 50 && (secondWeek * space) / totalArea < 80)){
    console.log('monitor')
}
else(
    console.log('prune')
)

