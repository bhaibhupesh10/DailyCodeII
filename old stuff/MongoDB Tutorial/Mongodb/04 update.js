U - Update // update operation from CRUD 
// We can update any document by using update command 
// before updating command we should use the find command to find the document for which we are going to update the document 
db.movies.find({"title": 'Tag'}) // now the document is finded we can read it 
// now we are going to update it 
db.movies.updateOne( { title: "Tag" },
{
  $set: {
    rated: "PG-14" ,
  },
  $currentDate: { lastUpdated: true }
})

db.dbname.replace() // this command is used for replace the entire data from the database

//  UPDATE commands are
    db.dbname.updateOne()
    db.dbname.updateMany()
    db.dbname.replace()
    