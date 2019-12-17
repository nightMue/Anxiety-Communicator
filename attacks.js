const NUM_ATTACKS = 10;

const meds = ['Hydroxyzine HCL', 'Xanax', 'Advil', 'Zoloft']
const activities = ['Homework', 'Studying', 'Class', 'Athletics', 'Video Games', 'Working Out']

// create a attack
const createAttack = () => ({
    date: generateDate(), 
    severity: generateSeverity(),
    duration: generateDuration(),
    ongoing: generateOngoing(),
    medication: generateMedication(),
    dosage: generateDosage(),
    quantity: generateQuantitiy(),
    activityBefore: generateActivity(),
    activityDuration: generateActivityDuration(),
    notes: "This is a note"
})

const generateDate = () => {
    let day = rand(28)
    let month = rand(12)
    let hour = rand(12)
    let min1 = rand(1)
    let min2 = rand(9)
    return `${month}/${day}/2019  ${hour}:${min1}${min2}`;
}
const generateSeverity = () => `${rand(5)}`
const generateDuration = () => `${rand(60)}`
const generateOngoing = () => {
    if(rand(1)===0)
        return true
    return false
}
const generateMedication = () => `${meds[rand(meds.length - 1)]}`
const generateDosage = () => `${rand(500)}`
const generateQuantitiy = () => `${rand(3)}`
const generateActivity = () => `${activities[rand(activities.length - 1)]}`
const generateActivityDuration = () => `${rand(60)} minutes`



// generate a random number between min and max
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

// add key to a attack object based on index
const addKeys = (val, key) => ({key, ...val}) // ({key:key, ...val})

export default Array.from({length: NUM_ATTACKS}, createAttack).map(addKeys)