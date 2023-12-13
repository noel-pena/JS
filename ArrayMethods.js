const items = [
    { name: 'Bike',     price: 100  },
    { name: 'TV',       price: 200  },
    { name: 'Album',    price: 10   },
    { name: 'Book',     price: 5    },
    { name: 'Phone',    price: 500  },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25   },
]

//Filter: filtering an array by parameter filter
const filterItems = items.filter((item) => {
    return item.price <= 100
})

//Map: selects a single parameter and returns all of them
const mapItems = items.map((item) => {
    return item.name
})

//Find: returns the full first item that it finds
const findItem = items.find((item) => {
    return item.name === 'Book'
})

//For Each: looks for all the items of the specific paramater(does not need a const)
items.forEach((item) => {
    console.log(item.name)
})

//Some: returns true or false when searching the selected parameters 
const hasInexpensiveItems = items.some((some) => {
    return item.price <= 100
})

//Every: opposite of some
const everyHasInexpensiveItems = items.every((every) => {
    return item.price <= 100
})

//Reduce: adds all values in an array
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

//Includes: takes a single argument and verifies if it's there. If includes is ran on array of [1,2,3,4] to find "2" it'll return true
const items1 = [1, 2, 3 ,4]

const includesTwo = items.includes(2)