// we can find the document according to our need
db.dbname.find().limit(1) // by this command we can find out how the first document if write 2 it will only show first  2 document
db.dbname.find().skip(1) // we will get the other then 1 document after skiping the first document if type 2 it will skip first 2 documents
db.dbname.find().sort({qty:1}) // by this command we will get the output according to increasing order of qty
    db.dbname.find().sort({qty:+1}) // we will get according to increasing order of qty
    db.dbname.find().sort({qty:-1}) // we will get the according to decreasing order of qty 
