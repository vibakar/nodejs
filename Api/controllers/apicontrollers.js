const Todo=require('../models/todomodels.js');
const bodyParser=require('body-parser');

module.exports=function(app){
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.get('/api/todos/:uname',function(req,res){
      Todo.find({username:req.params.uname},function(err,result){
        if(err){
          throw err;
        }else{
          res.send(result);
        }
      });
  });
  
  app.get('/api/todo/:id',function(req,res){
        Todo.findById({_id:req.params.id},function(err,result){
          if(err){
            throw err;
          }else{
            res.send(result);
          }
        });
  });

  app.post('/api/todo',function(req,res){
      if(req.body.id){
        Todo.findByIdAndUpdate(req.body.id,{
          todo:req.body.todo,
          isDone:req.body.isDone,
          hasAttachment:req.body.hasAttachment
        },function(err,result){
          if(err){
            throw err;
          }else{
            res.send(result);
          }
        });
      }else{
        var newTodo=Todo({
          username:"test",
          todo:req.body.todo,
          isDone:req.body.isDone,
          hasAttachment:req.body.hasAttachment
        });
        newTodo.save(function(err){
          res.send('success');
        });
      }
  });

  app.delete('/api/todo',function(req,res){
    Todo.findByIdAndRemove(req.body.id,function(err){
      res.send('success');
    });
  });
}
