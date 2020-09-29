const address={
    name:'home',
    address:'basanavagudi',
    city:'bangalore'
}
//convert object to json
console.log(address)//{ name: 'home', address: 'basanavagudi', city: 'bangalore' }
const addressJson=JSON.stringify(address)
console.log(typeof address)//object
console.log(typeof addressJson)//string
console.log(addressJson)//{"name":"home","address":"basanavagudi","city":"bangalore"}

//convert JSoN to object
const addressObj=JSON.parse(addressJson)
console.log(typeof addressObj)//object
console.log(addressObj)//{ name: 'home', address: 'basanavagudi', city: 'bangalore' }


