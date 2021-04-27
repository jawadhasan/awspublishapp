const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'registration',
  password: 'sasa',
  port: 5432,
})

const sqlText = 'SELECT * from users'
 
  
client.connect()
client
  .query(sqlText)
  .then(result => console.log(result.rows))
  .catch(e => console.error(e.stack))
  .then(() => client.end())