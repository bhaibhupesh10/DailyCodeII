// R - Read (Read karne ke liye mongo db database find karne ke liye hota hai)
db.database_name.find() // fetch all documents

// database selector
db.database_name.find({}) // {} selector, (we can find any database by keyword through this selector)

//use sample_mflix

db.movies.find( { "genres": "Action" } )

use database_name

db.movies.find( { rated: { $in: [ "PG", "PG-13" ] } } )

//AND operator (we don't need to write AND operator explicitely )
    // in a title there is a keyword name 'Tag' which is less then 2020
db.movies.find({title:"Tag" , year:{$lt:2020}})

// Greater than or equal to keyword 'gte'
db.movies.find( { Title: "Tag", "year": { $gte: 7 } } )

// OR opertor (we need to write OR operator explicitely)
db.movies.find({$or title:"Tag" , year:{$lt:2020}})

// OR operator in which one data is equal to finding entered value and the other one is find either first one is founded or not. in both of the entered key anyone of them matches then execute it
db.movies.find( {
     year: 2018,
     $or: [ { "runtime": { $gte: 105 } }, { genres: "Drama" } ]
} )

