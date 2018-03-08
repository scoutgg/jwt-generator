const faker = require('faker')
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
  name: user.name,
  uid: user.id,
  iat: +moment.utc().format('X'),
  exp: +moment.utc().add(1,'hour').format('X'),
}

console.log(jwt.encode(payload, secret))
