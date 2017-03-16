//Routes for Application//
const router = require('express').Router();
module.exports = router;

const files = [
  {filename: 'file1.jpg', title:'awesome file 1'},
  {filename: 'file2.jpg', title:'awesome file 2'},
  {filename: 'file3.jpg', title:'awesome file 3'},
];


router.get('/tester', function(req, res, next) {
  console.log('a');
  next();
})
router.get('/tester', function(req, res, next) {
  console.log('b');
  next();
})
router.get('/tester', function(req, res, next) {
  console.log('c');
  res.end('done');
})


router.get('/files', function(req, res, next) {
  res.json(files);
});

router.post('/files', function(req, res, next) {
  const newFile = {
    filename: req.body.filename,
    title: req.body.title
  };

  files.push(newFile);
  res.json(files);
});

router.use(function(req, res, next) {
  res.format({
    html: () => res.send(`
      <h1>Our Project</h1>
      <ul>
        <li>GET a list of files (including meta data)</li>
        <li>EDIT a file (the meta data)</li>
        <li>UPLOAD a file</li>
        <li>DELETE a file</li>
      </ul>
      `)
  })
});
