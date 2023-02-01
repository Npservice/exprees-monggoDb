import mongoose from "mongoose";

const Surat = mongoose.Schema({
name:{
    type: String,
    required: true
},
alamat:{
    type: String,
    required: true,
},
phone:{
    type: String,
    required: true
},
status:{
    type: String,
    required: true
},
document:{
    type: String,
    required: true
},
file:{
    type: String,
    required: false
}
});

export default mongoose.model('Surat', Surat);