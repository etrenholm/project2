const groupSeeds = require('./group-seeds');
const userSeeds = require('./user-seeds');
const postSeeds = require('./post-seeds');
const commentSeeds = require('./comment-seeds');
const listItemSeeds = require('./listItem-seeds')

const sequelize = require('../config/connection');

const createSeeds = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await groupSeeds();
    console.log('--------------');

    await userSeeds();
    console.log('--------------');
  
    await postSeeds();
    console.log('--------------');
  
    await commentSeeds();
    console.log('--------------');

    await listItemSeeds();
    console.log('--------------');
  
    process.exit(0);
  };
  
  createSeeds();