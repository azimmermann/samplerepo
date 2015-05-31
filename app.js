var 
  cons = require('consolidate'),
  express = require('express'),
  app = express();


//app.use(express.static(__dirname + '/public'));
//app.listen(8080);

// route static files
app.use(express.static(__dirname + '/public'));

app.engine('html', cons.ejs);
// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//create route for root path
app.get('/', function(req, res) {
  res.render('index', {
    title: 'MEAN v2'
  });
});

app.listen(process.env.PORT || 8080);

console.log('App running on port ' + (process.env.PORT || 8080) + '...');
