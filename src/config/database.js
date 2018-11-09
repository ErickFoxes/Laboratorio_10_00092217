const moongose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI,{
    useNewURLParser:true,
    useCreateIndex: true
})
.then(db=>console.log('connection success!'))
.catch(err=>console.log(err));
;