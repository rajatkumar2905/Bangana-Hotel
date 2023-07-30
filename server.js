
import app from './app.js';
import connectDB from './config/database.js'

connectDB();

app.get('/', (req, res, next) => res.send('Hello World16161'))

 app.listen(process.env.PORT,()=>
 console.log(`Server is Working on PORT ${process.env.PORT} , in ${process.env.NODE_ENV} MODE`)
 );
