var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


var comments = [];						// creates comments container: array of comments hashes


// When a paragraph is clicked to view comments
<<<<<<< HEAD
router.post('/getcomments', function(req, res) {
	var pnum = req.body;						// gets pnum
    res.send(comments[pnum]);					// returns comments for relevant pnum
}
=======
// router.post('/', function(req, res) {
// 	var pnum = req.body;						// gets pnum
//     res.send(comments[pnum]);					// returns comments for relevant pnum
// }
>>>>>>> 9d96691d64c0638063219620747f37d36e5f95d7



// When a comment is posted
router.post('/postcomment', function(req, res) {
  var commentIn = req.body;						// imports comment in json format

  if (!comments[commentIn.pnum]) {				// if no comments exist for that pnum
  	comments[commentIn.pnum] = [commentIn];		// create array for that pnum containing the comment
  } else {										// if a comment already exists for that pnum
	comments[commentIn.pnum].push(commentIn);	// add incoming comment to array for that pnum
  }
  res.send(comments[pnum])						// returns comments for relevant pnum
});

module.exports = router;
