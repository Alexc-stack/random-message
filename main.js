// this program is to make random messages basketball training messages

// making the object to hold the arrays of data

const arrHolder = {
  catagory: ['Dribbling', 'Shooting', 'Passing'],
  reps: [10, 30, 50],
  messages: {
    Dribbling: ['pound dribble', 'in an out', 'crossover', 'behind the back', 'between the legs'],
    Shooting: ['freethrows', 'threepointer', 'stepback', 'midrange', 'fadeaway'],
    Passing: ['bounce pass', 'lob pass', 'bullet pass', 'no look pass'],
  },
}

// this generates a random peice of data, the catagorey an the reps

const ranCatagory = () => {
    let ranIndex = Math.floor(Math.random() * 3);
    let item = arrHolder.catagory[ranIndex]
    return item
}

const ranReps = () => {
    let ranIndex = Math.floor(Math.random() * 3);
    let item = arrHolder.reps[ranIndex]
    return item
}

// now depending on what catagory pops up we need that message to populate

console.log(ranReps())