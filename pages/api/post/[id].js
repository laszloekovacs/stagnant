const { Client } = require('pg')

const connectionString = "postgres://pwequava:xwlLz3lRJlcnL1y9ifZDuvmTSqiQ_U6r@tyke.db.elephantsql.com/pwequava";

async function fetchPosts(id = 1) {
    const queryString = `SELECT title, content, posttime from blogposts where id = ${id}`;
    const client = new Client(connectionString)
    let result = {};

    try {
        await client.connect()
        result = await client.query(queryString);

    } catch (err) {
        console.log("failed to connect to database " + err);
    } finally {
        client.end();
    }

    return result;
}


export default function handler(req, res) {

    fetchPosts(req.query['id']).then(result => {
        console.log(result.rows[0])
        res.status(200).json(result.rows[0])
    })

}