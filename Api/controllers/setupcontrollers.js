var Todos=require('../models/todomodels');


module.exports=function(app){
  app.get('/api/setupTodos',function(req,res){
    var starterTodos= [{
        username: "viba",
        todo:"learn nodejs",
        isDone:false,
        hasAttachment:false
    }, {
      username: "virat",
      todo:"score 100",
      isDone:false,
      hasAttachment:false
    }];

    Todos.create(starterTodos,function(err,results){
        res.send(results);
    });
  });
}
