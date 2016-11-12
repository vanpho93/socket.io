var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3000);

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('home');
});

io.on("connection", function(socket){
  console.log('Co nguoi ket noi');
  socket.emit('XAC_NHAN_KET_NOI', 'Thanh cong');
  socket.on('CLIENT_GUI_TIN', function(data){
    console.log(data);
  });
  socket.on('TINH_TONG', function(data){
    var tong = parseInt(data.soa) + parseInt(data.sob);
    socket.emit('SERVER_GUI_KET_QUA', tong);
  });
  socket.on('CLIENT_GUI_TIN_NHAN', function(data){
    io.emit('SERVER_GUI_TIN_NHAN', data);
  });
});
