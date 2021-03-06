/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
//import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Room from '../api/room/room.model';

Room.find({}).remove()
  .then(() => {
    Room.create({
      name: 'Тестова квартира в центъра, с изглед',
      info: 'Апартамент Кичево-Пловдив се намира в условния териториален центар на район Южен(известен още с името на северната си част, наречена Кичук Париж или просто Кичука)е един от административните райони в Община Пловдив и се отъждествява с компактната градска част на района. Апартамента е в близост до ”Белите брези”, ”Събота пазар”, ”Въстанически”',
      active: true,
      available: true,
      price: '10',
      city: 'Пловдив',
      imgurl: 'http://q-ec.bstatic.com/images/hotel/840x460/118/11854783.jpg',
      contact: '089705204'
    }, {
      name: 'Тестова квартира с две легла',
      info: 'За удобния ви и приятен престой: заведения за хранене, банкомат, аптека, магазини за хр. стоки, денонощен хр. магазин, безплатен паркинг, кафе автомати, удобни авт. спирки. Удобно за гости на града, командировани, задочници от УХТ(ВИХВП), АМТИИ, ПУ(биологичен факултет, нова сграда), всички Университети и колежи в централна градска част. Настаняване-след 14 часа. ',
      active: true,
      available: true,
      price: '12',
      city: 'Пловдив',
      imgurl: 'http://q-ec.bstatic.com/images/hotel/840x460/118/11854764.jpg',
      contact: '089705204'
    }, {
      name: 'Квартира с легло',
      info: 'Еко Къща за гости Милчеви предлага апартаменти с уникална архитектура, чистота, домашен уют, и комфорт. Всичките жилища са в една обособена сграда, построена и обзаведена с естествени(природосъобразни) материали. В центъра на град Пловдив. В Еко Апартаменти Милчеви ще усетите спокойствие, сигурност и тишина. Перфектни хигиенно-санитарни условия!',
      active: true,
      available: true,
      price: '11',
      city: 'Пловдив',
      imgurl: 'http://q-ec.bstatic.com/images/hotel/840x460/118/11854788.jpg',
      contact: '089705204'
    }, {
      name: 'Тестова квартира за нощ или за месец',
      info: 'Мястото е атрактивно и удобно за гости на града,учащи,и хора дошли за бизнес.Не ви е необходим градски транспорт до възловите места на града, с което пестите Време.и Пари. ',
      active: true,
      available: true,
      price: '8',
      ppm: '350',
      city: 'Пловдив',
      imgurl: 'http://q-ec.bstatic.com/images/hotel/840x460/118/11854766.jpg',
      contact: '089705204'
    }, {
      name: 'Тестова квартира 4',
      info: ' Стаите и апартаментите са обзаведени с нови и съвременни мебели, Отоплението през зимата и охлаждането през лятото е с климатици. Всяка стая разполага с: - Едно, две, 3 легла,или Спални, в зависимост от необходимостта и броя на гостите /санитарен възел общ/ - Тв+70 сателитни програми',
      active: true,
      available: true,
      price: '25',
      city: 'Пловдив',
      imgurl: 'http://q-ec.bstatic.com/images/hotel/840x460/118/11854786.jpg',
      contact: '089705204'
    })
    .then(() => {
      console.log('finished populating rooms');
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
