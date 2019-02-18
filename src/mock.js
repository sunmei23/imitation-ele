const Mock = require('mockjs');
const shop = require('../mock/data');
const foods = require('../mock/batch_comments.comments')
Mock.mock('/api/shop','get',shop);
Mock.mock('/api/foods','get',foods);
