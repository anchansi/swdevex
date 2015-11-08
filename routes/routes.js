module.exports = function(app, io) {

    var fakedatabase = [
            {id: 'E148FA521', name: '9ostrd'},
            {id: 'F676C9049', name: 'robotic'}
        ];

    app.get('/', function(req, res) {
        res.render('index', { title: '9ostrd' });
    });
    
    app.get('/socketio', function(req, res) {
        res.render('socketio/socketio', { title: '9ostrd' });
    });
    
    app.post('/api/rfid', function(req, res) {
        var rfid = JSON.parse(req.body.rfid);
        for(var i = 0; i <= (fakedatabase.length)-1;i++){
            if(fakedatabase[i].id == rfid.id){
                io.emit('notification', { "messages" : fakedatabase[i].name });
                res.json({ "status": "successfull"});
                return;
            }
        }
        res.status(404).send('404 Not found\n');
    });

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not Found\n");
        res.end();
    });

};
