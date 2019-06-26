// Update with your config settings.
const productionDbConnection = process.env.DATABASE_URL
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true, 
    connection: {
      filename: './data/airbnb.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations:{
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  },
   production : {
     client: 'pg',
     connection: productionDbConnection,
     migrations: {
       directory: './data/migrations',
     },
     seeds: {
       directory:'./data/seeds',
     }
   }
};
