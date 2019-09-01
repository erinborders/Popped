const locationApi = require('./location.js')
const foodApi = require('./foodPopUp.js')
const shopApi = require('./shopPopUp.js')

//locations
const buckhead = {
    neighborhood: "Buckhead"
}

const midtown = {
    neighborhood: "Midtown"
}

const downtown = {
    neighborhood: "Downtown"
}

//food pop ups
const anotherBrokenEgg = {
    restaurantName: "Another Broken Egg",
    cuisine: "Breakfast",
    meal: {
        type: 'Pancakes',
        description: 'Pecan Pancakes with cinammon glaze',
        price: 15,
        image: 'test' //add image link here
    },
    price: "$$",
    address: "2355 Peachtree Road \n Atlanta, GA 30305",
    date: "9/3/19",
    image: 'test' //add image link
}

const papisCubanGrill = {
    restaurantName: "Papi's Cuban Grill",
    cuisine: "Caribbean",
    meal: {
        type: 'Cuban Sandwich',
        description: 'Thick cut pork on a hoagie',
        price: 10,
        image: 'test' //add image link here
    },
    price: "$",
    address: "216 Ponce De Leon Ave \n Atlanta, GA 30308",
    date: "9/2/19",
    image: 'test' //add image link
}

const foodShoppe = {
    restaurantName: "The Food Shoppe",
    cuisine: "Creole",
    meal: {
        type: 'Jambalaya',
        description: 'Andouille sausage, shrimp, chicken, and Cajun seasoning',
        price: 12,
        image: 'test' //add image link here
    },
    price: "$",
    address: "123 Luckie St \n Atlanta, GA 30303",
    date: "9/1/19",
    image: 'test' //add image link
}

//shop pop ups
const modernMystic = {
    shopName: "Modern Mystic",
    wares: "Products for the new age witch",
    product: {
        type: 'Crystals',
        description: 'Crystals for healing and centering energy',
        price: 25,
        image: 'test' //add image link here
    },
    price: "$$",
    address: "Ponce City Market",
    date: "9/30/19",
    image: 'test' //add image link
}

const lululemon = {
    shopName: "Lululemon Athletica",
    wares: "Athletic wear",
    product: {
        type: 'Leggings',
        description: 'Fitted leggings with side pockets',
        price: 30,
        image: 'test' //add image link
    },
    price: "$$$",
    address: "102 West Paces Ferry Rd \n Atlanta, GA 30305",
    date: "9/29/19",
    image: 'test' //add image link
}

const executiveShop = {
    shopName: "The Executive Shop",
    wares: "Men's hats",
    product: {
        type: 'Newsboy cap',
        description: 'Slouchy hat made of wool',
        price: 25,
        image: 'test' //add image link
    },
    price: "$$",
    address: "56 Walton St \n Atlanta, GA 30303",
    date: "9/28/19",
    image: 'test' //add image link
}

locationApi.deleteAllLocations()
    .then(() => foodApi.deleteAllFood())
    .then(() => shopApi.deleteAllShops())
    .then(() => locationApi.addLocation(buckhead))
    .then((buckhead) => {
        anotherBrokenEgg.locationId = buckhead._id
        lululemon.locationId = buckhead._id
        let brokenEgg = foodApi.addFood(anotherBrokenEgg)
        let lulu = shopApi.addShop(lululemon)
        return Promise.all([brokenEgg, lulu])
    })
    .then(() => locationApi.addLocation(midtown))
    .then((midtown) => {
        papisCubanGrill.locationId = midtown._id
        modernMystic.locationId = midtown._id
        let papis = foodApi.addFood(papisCubanGrill)
        let mystic = shopApi.addShop(modernMystic)
        return Promise.all([papis, mystic])
    })
    .then(() => locationApi.addLocation(downtown))
    .then((downtown) => {
        foodShoppe.locationId = downtown._id
        executiveShop.locationId = downtown._id
        let shoppe = foodApi.addFood(foodShoppe)
        let execShop = shopApi.addShop(executiveShop)
        return Promise.all([shoppe, execShop])
    })
    .then(() => {
        console.log('about to exit')
        process.exit()
    })
    .catch((err) => {
        console.log(err)
        process.exit()
    })