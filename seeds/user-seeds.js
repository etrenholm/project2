const { User } = require('../models');

const userdata = [
    {
        username: 'etrenholm',
        password: 'password123',
        group_id: 1
    },
    {
        username: 'ryanz',
        password: 'password123',
        group_id: 1
    },
    {
        username: 'joshpdlv',
        password: 'password123',
        group_id: 1
    },
    {
        username: 'alesmonde0',
        password: 'password123',
        group_id: 2
    },
    {
        username: 'jwilloughway1',
        password: 'password123',
        group_id: 2
    },
    {
        username: 'djiri4',
        password: 'password123',
        group_id: 3
    },
    {
        username: 'hannah123',
        password: 'password123',
        group_id: 3
    },
    {
        username: 'johnsmith',
        password: 'password123',
        group_id: 3
    }
]

const userSeeds = () => User.bulkCreate(userdata);

module.exports = userSeeds;