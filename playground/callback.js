var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Remya'
    }
    setTimeout(() => {
    callback(user);
}, 3000);
   };

getUser(21,(userObj) => {
    console.log(userObj);
});