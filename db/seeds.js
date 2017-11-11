const mongoose    = require('mongoose');
const User        = require('../models/user');
const { db }      = require('../config/environment');
mongoose.Promise  = require('bluebird');

mongoose.connect(db, { useMongoClient: true });

User.collection.drop();

User
  .create([{
    firstName: 'Cameron',
    lastName: 'Jones',
    email: 'cameron@cameron.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336420-37401b96-bfe7-11e7-82ce-f7a9a94798c4.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Rupesh',
    lastName: 'Bhatti',
    email: 'rupesh@rupesh.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336469-55698e72-bfe7-11e7-9d02-fdabd2a2d95d.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Siobhan',
    lastName: 'Potter',
    email: 'siobhan@siobhan.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336420-37401b96-bfe7-11e7-82ce-f7a9a94798c4.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Sandra',
    lastName: 'Okoli',
    email: 'sandra@sandra.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336479-57410a40-bfe7-11e7-87b9-18688869fa4a.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Sarah',
    lastName: 'Alpay',
    email: 'sarah@sarah.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336488-598e339a-bfe7-11e7-938c-77b2abcf6af0.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Plum',
    lastName: 'Moore',
    email: 'plum@plum.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336493-5b4f93e0-bfe7-11e7-8717-a4173c93b9d6.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Nate',
    lastName: 'Lansdall-Welfare',
    email: 'nate@nate.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336499-5e015934-bfe7-11e7-989a-e9460c7f5c45.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Matthew',
    lastName: 'Yates',
    email: 'matt@matt.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336501-5fe05f16-bfe7-11e7-8dc4-9150295af9fc.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Massee',
    lastName: 'Hussain',
    email: 'masee@masee.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336502-618a543e-bfe7-11e7-96ad-b196d9e67860.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Martha',
    lastName: 'Chambers',
    email: 'martha@martha.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336514-68a856ee-bfe7-11e7-9347-1e604e1bbc6f.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Jonny',
    lastName: 'Hall',
    email: 'jonny@jonny.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336516-6a363aa8-bfe7-11e7-8a7c-d25da9814222.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Janis',
    lastName: 'Chan',
    email: 'janis@janis.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336524-6d065f42-bfe7-11e7-846b-e85e025a4b9f.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'James',
    lastName: 'Tang',
    email: 'james@james.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336531-725b4304-bfe7-11e7-9db0-9d4d4bc81a96.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Ismail',
    lastName: 'Alami',
    email: 'ismail@ismail.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336533-73e74cb8-bfe7-11e7-9f5b-c8839313a8d0.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Hannah',
    lastName: 'Cross',
    email: 'hannah@hannah.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336546-7a3bb05e-bfe7-11e7-950d-0a916ee272d1.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'George',
    lastName: 'Wilman',
    email: 'george@george.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336553-7fcb53c6-bfe7-11e7-9439-516d73e35849.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Josh',
    lastName: 'Sadler',
    email: 'josh@josh.com',
    image: 'https://user-images.githubusercontent.com/28314323/32404919-97d16c8c-c152-11e7-8be2-101c2e431a46.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Julie',
    lastName: 'Bernal',
    email: 'julie@julie.com',
    image: 'https://user-images.githubusercontent.com/28314323/32404860-488bef72-c151-11e7-83a9-9924152bb158.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Wilson',
    lastName: 'Espina',
    email: 'wislon@wilson.com',
    image: 'https://user-images.githubusercontent.com/28314323/32404860-488bef72-c151-11e7-83a9-9924152bb158.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Gavin',
    lastName: 'Hughes',
    email: 'gavin@gavin.com',
    image: 'https://user-images.githubusercontent.com/28314323/32404877-98317998-c151-11e7-8689-5d92aa4dec10.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Ed',
    lastName: 'Brodie',
    email: 'ed@ed.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336580-90045f80-bfe7-11e7-8657-cc5de8040b7a.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'David',
    lastName: 'Cooper',
    email: 'david@david.com',
    image: 'https://user-images.githubusercontent.com/28314323/32336585-926390b6-bfe7-11e7-8242-fbd8fdea91ba.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Clara',
    lastName: 'Cheung',
    email: 'clara@clara.com',
    image: 'https://user-images.githubusercontent.com/28314323/32404878-9b14a644-c151-11e7-88cc-6110e16d3628.jpg',
    role: 'student',
    passwordHash: 'password'
  },{
    firstName: 'Rane',
    lastName: 'Gowan',
    email: 'rane@ga.co',
    image: 'string',
    role: 'instructor',
    passwordHash: 'password'
  },{
    firstName: 'Alex',
    lastName: 'Chin',
    email: 'alex@ga.co',
    image: 'string',
    role: 'instructor',
    passwordHash: 'password'
  },{
    firstName: 'Marta',
    lastName: 'Mattioli',
    email: 'marta@ga.co',
    image: 'string',
    role: 'instructor',
    passwordHash: 'password'
  },{
    firstName: 'Mike',
    lastName: 'Belither',
    email: 'mike@ga.co',
    image: 'string',
    role: 'instructor',
    passwordHash: 'password'
  }])
  .then((users) => console.log(`${users.length} students created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
