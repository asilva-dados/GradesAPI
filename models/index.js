import mongoose from 'mongoose';
import studentModel from './studentModel.js';

//require('dotenv').config();

const db = {};
db.mongoose = mongoose;
db.url =
  'mongodb+srv://igtiuser:igtiuser123@cluster0.dsinm.mongodb.net/grades?retryWrites=true&w=majority';
//db.url = process.env.MONGODB;
db.studentModel = studentModel(mongoose);

export { db };
