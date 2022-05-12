const { findAllByAltText } = require('@testing-library/react');
const {MongoClient} = require('mongodb')

async function main (){
    const uri = 'mongo URI here'

    const client = new MongoClient(uri)

    try {
    await client.connect()
    } catch (e){
        console.error(e)
    } finally {
        await client.close()
    }
} 

main().catch(console.error)


O