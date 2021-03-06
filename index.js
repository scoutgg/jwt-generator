/*
* NODE.JS server side example
*/

const faker = require('faker') // Generates fake data
const jwt = require('jwt-simple')
const moment = require('moment')

const secret = 'Hsja/218#2891djsac!%ja8s910927BhbdsagATtha782'

// Dummy userdata which would be loaded from the DB
const user = {
  id: faker.random.uuid(),
  username: faker.internet.userName(),
  name: faker.name.findName(),
}

const payload = {
  iss: 'scout-demo',
  aud: 'scout-customer',
  username: user.username,
  role: 'user', // Available roles are ['user', 'admin', 'tester']
  uid: user.id,
  iat: +moment.utc().format('X'),
  exp: +moment.utc().add(1,'hour').format('X'),
}

// PLEASE NOTE THAT THIS ACTION NEEDS TO BE DONE SERVER SIDE,
// AS EXPOSING THE SECRET WOULD BE A BIG SECURITY CONCERN.
console.log(jwt.encode(payload, secret))
