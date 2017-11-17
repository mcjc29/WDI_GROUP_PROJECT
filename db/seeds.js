const mongoose = require('mongoose');
const User = require('../models/user');
const Cohort = require('../models/cohort');
const Lesson = require('../models/lesson');
const Comment = require('../models/comment');
const Rating = require('../models/rating');
const { env, db } = require('../config/environment');
mongoose.Promise = require('bluebird');

mongoose.connect(db[env], { useMongoClient: true });

User.collection.remove();
Cohort.collection.remove();
Comment.collection.remove();
Lesson.collection.remove();
Rating.collection.remove();

User.create([
  {
    firstName: 'Cameron',
    lastName: 'Jones',
    email: 'cameron@cameron.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336420-37401b96-bfe7-11e7-82ce-f7a9a94798c4.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Rupesh',
    lastName: 'Bhatti',
    email: 'rupesh@rupesh.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336469-55698e72-bfe7-11e7-9d02-fdabd2a2d95d.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Siobhan',
    lastName: 'Potter',
    email: 'siobhan@siobhan.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336467-5211c230-bfe7-11e7-9af5-286502b8fca1.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Sandra',
    lastName: 'Okoli',
    email: 'sandra@sandra.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336479-57410a40-bfe7-11e7-87b9-18688869fa4a.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Sarah',
    lastName: 'Alpay',
    email: 'sarah@sarah.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336488-598e339a-bfe7-11e7-938c-77b2abcf6af0.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Plum',
    lastName: 'Moore',
    email: 'plum@plum.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336493-5b4f93e0-bfe7-11e7-8717-a4173c93b9d6.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Nate',
    lastName: 'Lansdall-Welfare',
    email: 'nate@nate.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336499-5e015934-bfe7-11e7-989a-e9460c7f5c45.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Matthew',
    lastName: 'Yates',
    email: 'matt@matt.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336501-5fe05f16-bfe7-11e7-8dc4-9150295af9fc.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Massee',
    lastName: 'Hussain',
    email: 'masee@masee.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336502-618a543e-bfe7-11e7-96ad-b196d9e67860.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Martha',
    lastName: 'Chambers',
    email: 'martha@martha.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336514-68a856ee-bfe7-11e7-9347-1e604e1bbc6f.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Jonny',
    lastName: 'Hall',
    email: 'jonny@jonny.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336516-6a363aa8-bfe7-11e7-8a7c-d25da9814222.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Janis',
    lastName: 'Chan',
    email: 'janis@janis.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336524-6d065f42-bfe7-11e7-846b-e85e025a4b9f.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'James',
    lastName: 'Tang',
    email: 'james@james.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336531-725b4304-bfe7-11e7-9db0-9d4d4bc81a96.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Ismail',
    lastName: 'Alami',
    email: 'ismail@ismail.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336533-73e74cb8-bfe7-11e7-9f5b-c8839313a8d0.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Hannah',
    lastName: 'Cross',
    email: 'hannah@hannah.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336546-7a3bb05e-bfe7-11e7-950d-0a916ee272d1.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'George',
    lastName: 'Wilman',
    email: 'george@george.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336553-7fcb53c6-bfe7-11e7-9439-516d73e35849.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Josh',
    lastName: 'Sadler',
    email: 'josh@josh.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32404919-97d16c8c-c152-11e7-8be2-101c2e431a46.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Julie',
    lastName: 'Bernal',
    email: 'julie@julie.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32404860-488bef72-c151-11e7-83a9-9924152bb158.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Wilson',
    lastName: 'Espina',
    email: 'wislon@wilson.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32404855-373aa592-c151-11e7-9661-5e870aca48b6.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Gavin',
    lastName: 'Hughes',
    email: 'gavin@gavin.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32404877-98317998-c151-11e7-8689-5d92aa4dec10.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Ed',
    lastName: 'Brodie',
    email: 'ed@ed.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336580-90045f80-bfe7-11e7-8657-cc5de8040b7a.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'David',
    lastName: 'Cooper',
    email: 'david@david.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32336585-926390b6-bfe7-11e7-8242-fbd8fdea91ba.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Clara',
    lastName: 'Cheung',
    email: 'clara@clara.com',
    cohort: 'WDI-30',
    image:
      'https://user-images.githubusercontent.com/28314323/32404878-9b14a644-c151-11e7-88cc-6110e16d3628.jpg',
    role: 'student',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Rane',
    lastName: 'Gowan',
    email: 'rane@ga.co',
    image: 'https://avatars0.githubusercontent.com/u/11501555?s=460&v=4',
    cohort: 'WDI-30',
    role: 'instructor',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Alex',
    lastName: 'Chin',
    email: 'alex@ga.co',
    image:
      'https://ga-core-production-herokuapp-com.global.ssl.fastly.net/assets/controllers/education/immersives/web-development-immersive/alex-chin-ea15c8688ba4c346299701815547463a.jpg',
    cohort: 'WDI-30',
    role: 'instructor',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Marta',
    lastName: 'Mattioli',
    email: 'marta@ga.co',
    image: 'https://avatars1.githubusercontent.com/u/12926207?s=400&v=4',
    cohort: 'WDI-30',
    role: 'instructor',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Mike',
    lastName: 'Belither',
    email: 'mike@ga.co',
    image:
      'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAIA_wDGAAAAAQAAAAAAAArKAAAAJGEyN2M0YmE4LWU0M2ItNGExZC04MTAxLTNkYTFmMDI2ZmM0Mg.jpg',
    cohort: 'WDI-30',
    role: 'instructor',
    password: 'password',
    passwordConfirmation: 'password'
  }
])
  .then(users => console.log(`${users.length} users created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
