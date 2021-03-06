export default [
    {
        name: 'blogEntity',
        entity: require('./blog.entity').default,
    },
    {
        name: 'tagEntity',
        entity: require('./tag.entity').default,
    },
    {
        name: 'categoryEntity',
        entity: require('./category.entity').default,
    },
    {
        name: 'userEntity',
        entity: require('./user.entity').default,
    },
    {
        name: 'imageEntity',
        entity: require('./image.entity').default,
    },
    {
        name: 'likeEntity',
        entity: require('./like.entity').default,
    },
];
