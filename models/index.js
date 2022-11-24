const User = require('./User');
const Comments = require('./Comments');
const Post = require('./Post');

User.hasMany(Post,{
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Post.belongsTo(User,{
    foreignKey: 'user_id'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Comments.belongsTo(Post,{
    foreignKey: 'post_id',
    onDelete: "CASCADE"
});

module.exports = { User, Post, Comments };