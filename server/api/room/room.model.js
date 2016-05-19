'use strict';

import mongoose from 'mongoose';

var RoomSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  available: Boolean,
  active: Boolean,
  price: String,
  ppm: String,
  location: String,
  city: String,
  bills: Boolean,
  imgurl: String,
  landlord: String,
  amenities: {
    furnished: Boolean,
    aircon: Boolean,
    fridge: Boolean,
    parking: Boolean,
    internet: Boolean
  },
//имаме phone в кантакт, но правя отделен contact, за да мога да го разгранича във предната част
  contact: String


});

export default mongoose.model('Room', RoomSchema);
