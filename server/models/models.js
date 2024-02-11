const mongoose = require ('mongoose');
const {Schema} = mongoose;

const URI = ''
mongoose.connect(URI);
mongoose.connection.once('open',()=> console.log('Connected to Database'));

const initiativesSchema = new Schema ({
    name:{type: String, required:true},
    description: {type: String, required: true},
    brief: {type: String, required: true},
    tags: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
})

const ListItem = mongoose.model('ListItem',listItemSchema);

module.exports = {ListItem,URI};