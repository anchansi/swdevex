module.exports = function(app, loggedIn) {
	 app.get('/test', function(req, res) {
        res.render('user/test', { title: '9ostrd' });
    });
}