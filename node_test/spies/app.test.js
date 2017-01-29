const expect=require('expect');
const rewire=require('rewire');

var app=rewire("./app");

describe("App",()=>{

var db={
  saveuser:expect.createSpy()
};

app.__set__('db',db);

  it("spy should be called",()=>{
    var spy=expect.createSpy();
    spy("viba",23);
    expect(spy).toHaveBeenCalledWith("viba",23);
  });

    it("should call saveuser with user object",()=>{
      var email="viba@gmail.com";
      var password="12345";
      app.handlesignup(email,password);
      expect(db.saveuser).toHaveBeenCalledWith({email,password});
    });

});
