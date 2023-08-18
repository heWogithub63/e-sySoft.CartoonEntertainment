var membCount = 0;
const {MongoClient} = require('mongodb');
async function main(insertStr) {
	const uri = "mongodb+srv://wh:admin01@cluster0.kmwrpfb.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        var count = 0;
        try {    
                 
		 await client.connect(err => {
		    const collection = client.db("MeinungsSpiegel").collection("Gesundheitspolitik")
		    console.log('Connected successfully to server');
                    
                    countDocs(collection);
                    
                 });
                 
        } catch (e) {
		   console.error(e);
        }
        finally {
             
                 await client.close();
        }
}
function countDocs (collection) {
   
    collection
       .countDocuments({})
       .then(
	    (myCount) =>{console.log(myCount), 
		         membCount = myCount,
		         console.log(".-"+membCount),
		         findBrowserId(collection)
			 }
	   );
}

function findBrowserId (collection) {
   console.log("......"+membCount+"......");
    if(membCount > 0) {
       collection
	  .findOne({ 'browserid': '34d81743eb2fce74fdd815d35d13dd44' })
	  .then(
	       res => console.log(`Found ${res._id}`),
	       err => console.error(`Something went wrong: ${err}`),
	  ); 
    } 
}

main().catch(console.error);
