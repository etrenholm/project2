const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Nunc rhoncus dui vel sem.',
        group_id: 1,
        member_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
        group_id: 1,
        member_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Aliquam erat volutpat. In congue.',
        group_id: 1,
        member_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        group_id: 1,
        member_id: 2,
        post_id: 3
    },
    {
        comment_text: 'In hac habitasse platea dictumst.',
        group_id: 1,
        member_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Vivamus vestibulum sagittis sapien.',
        group_id: 1,
        member_id: 3,
        post_id: 3
    },
    {
        comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
        group_id: 1,
        member_id: 3,
        post_id: 1
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
