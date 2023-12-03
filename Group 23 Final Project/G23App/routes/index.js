var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Tournament Management System" });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  if (!req.user)
  {
  res.render('login', {
    title: 'Login',
    message: req.flash('loginMessage'),
    displayName: req.user ? req.user.displayName:'' 
  });
  }
  else
  {
    res.redirect('/');
  }
});

//Process Login page
router.post('/login', function(req,res,next){
  passport.authenticate('local',(err,user,info)=>{
    //server error
    if(err)
    {
      return next(err);
    }
    // login error
    if(!user)
    {
      req.flash('loginMessage', 'Authentication Error');
      res.redirect('/login');
    }
    req.login(user,(err) => {
      if(err)
      {
        return next(err);
      }
      return res.redirect('/tourney');
    })
  })(req,res,next)
})

/* GET Registration page. */
router.get('/register', function(req, res, next) {
  if (!req.user)
  {
  res.render('register', {
    title: 'Register',
    message: req.flash('registerMessage'),
    displayName: req.user ? req.user.displayName:'' 
  });
  }
  else
  {
    res.redirect('/');
  }
});

//Registration Post Method
router.post('/register',function(req,res,next){
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password,
    email: req.body.username,
    displayName: req.body.displayName
  })
  User.register(newUser, req.body.password, (err)=>{
    if(err)
    {
      console.log("Error in inserting the new User");
      if(err,name =='UserExistError')
      {
        req.flash('registerMessage',
        'Registration Error: User already Exists');
      }
      return res.render('register',
      {
        title:'Register',
        message: req.flash('registerMessage'),
        displayname: req.user ? req.user.displayName:''
      }
      )
    }
    else
    {
      return passport.authenticate('local')(req,res),()=>{
        res.redirect('/tourney');
      }
    }
  })
})

//logout
router.logout('/logout', function(req,res,next){
  req.logout(function(err){
    if(err)
    {
      return next(err)
    }
  })
  res.redirect('/');
})

module.exports = router;


