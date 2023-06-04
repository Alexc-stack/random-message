// this program is to make random basketball training messages

// making the object to hold the arrays of data

const arrHolder = {
  catagory: ['Dribbling', 'Shooting', 'Passing'],
  reps: [10, 30, 50],
  Dribbling: ['pound dribble', 'in an out', 'crossover', 'behind the back', 'between the legs'],
  Shooting: ['freethrows', 'threepointer', 'stepback', 'midrange', 'fadeaway'],
  Passing: ['bounce pass', 'lob pass', 'bullet pass', 'no look pass'],
}

// a function that generates both the catagory a matches it with the random message

const randomMessage = () => {
    let ranIndex = Math.floor(Math.random() * arrHolder.catagory.length) 
    let ranCat = arrHolder.catagory[ranIndex];
    if (ranCat === 'Dribbling') {
        let ranDribble = Math.floor(Math.random() * arrHolder.Dribbling.length)
        return `${ranCat}: ${arrHolder.Dribbling[ranDribble]}`
    } else if (ranCat === 'Shooting') {
        let ranShoot = Math.floor(Math.random() * arrHolder.Shooting.length)
        return `${ranCat}: ${arrHolder.Shooting[ranShoot]}`
    } else if (ranCat === "Passing") {
        let ranPass = Math.floor(Math.random() * arrHolder.Passing.length)
        return `${ranCat}: ${arrHolder.Passing[ranPass]}`
    }
}
//Combines the random reps with the random messages
const ranReps = () => {
    let ranNum = Math.floor(Math.random() * arrHolder.reps.length)
    let reps = arrHolder.reps[ranNum]
    return `In this trianing session you will be doing ${randomMessage()} for ${reps}X`
}
console.log(ranReps())



