const process = require('process');
const fs = require('fs');
const from = process.argv[2];
const to = process.argv[3];
const tableName = process.argv[4];

console.log(from, to);

const knex = require('knex');
let knexFrom;
if(from.indexOf('@') >= 0) {
  const [user, password] = from.split('@')[0].split(':');
  const [address, database] = from.split('@')[1].split('/');
  const host = address.split(':')[0];
  const port = address.split(':')[1] || 3306;
  knexFrom = knex({
    client: 'mysql',
    connection: {
      host,
      port,
      user,
      password,
      database,
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    },
    useNullAsDefault: true,
  });
} else {
  knexFrom = knex({
    client: 'sqlite3',
    connection: {
      filename: from,
    },
    useNullAsDefault: true,
  });
}

let knexTo;
if(to.indexOf('@') >= 0) {
  const [user, password] = to.split('@')[0].split(':');
  const [host, database] = to.split('@')[1].split('/');
  knexTo = knex({
    client: 'mysql',
    connection: {
      host,
      user,
      password,
      database,
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    },
    useNullAsDefault: true,
  });
} else {
  knexTo = knex({
    client: 'sqlite3',
    connection: {
      filename: to,
    },
    useNullAsDefault: true,
  });
}

const transDb = name => {
  const promises = [];
  const table = require('./db/' + name);
  return knexTo.schema.createTableIfNotExists(name, table)
  .then(success => {
    return knexFrom(name).count();
  }).then(success => {
    const count = success[0]['count(*)'];
    const insert = number => {
      return knexFrom(name).select().limit(50).offset(number * 50)
      .then(data => {
        return knexTo(name).insert(data);
      });
    };
    let i = 0;
    const promiseList = () => {
      return insert(i).then(success => {
        console.log(`${name} ${ i * 50 } - ${ i * 50 + 50 } success`);
        i += 1;
        if(i < Math.ceil(count/50)) {
          return promiseList();
        } else {
          console.log(`${name} finish\n`);
          return;
        }
      });
    };
    return promiseList();
  });
};

if(tableName) {
  transDb(tableName);
} else {
  fs.readdir('./db', (err, files) => {
    if(err) { return; }
    const tables = files.filter(f => {
      return f.match(/\.js$/);
    }).map(f => {
      return f.substr(0, f.length - 3);
    });
    let i = 0;
    const tablePromise = () => {
      transDb(tables[i]).then(success => {
        i += 1;
        if(i >= tables.length) {
          console.log('all talbes finish');
          return;
        } else {
          return tablePromise();
        }
      })
    };
    tablePromise();
  });
}
