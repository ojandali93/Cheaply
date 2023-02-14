import data from './data.json'

const allCategories = data.map(obj => obj.category)
const categorieSet = new Set(allCategories) 
const categoriesUnique = Array.from(categorieSet)
let temNameAndCounterObj = []

const categoriesWithCounts = data.reduce((obj, cat) => {
  obj[cat] ? obj[cat] = obj[cat] + 1 : obj[cat] = 1
  return obj
}, {}) 

const namesAndCategories = categoriesUnique.map((name) => {
  temNameAndCounterObj.push({'name':name, 'count': categoriesWithCounts[name]})
})

export default data

export { categorieSet, categoriesUnique, categoriesWithCounts, namesAndCategories }