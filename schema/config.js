const mongoose= require('mongoose');
const config = `mongodb+srv://user_01:admin123.@vanguardia.olopb.mongodb.net/examen01?retryWrites=true&w=majority`

mongoose.connect(config)
    .then(res=>console.log('connectado'))
    .catch(err=>console.log(err))
