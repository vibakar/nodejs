const expect=require('expect');
const utils=require('./utils.js');

describe("utils",()=>{
  it('should add two numbers',()=>{
    var res=utils.add(2,5);
    expect(res).toBe(7).toBeA('number');
    // if(res!==7){
    //     throw new Error(`Expected 7,but was ${res}`);
    // }
  });

  it('Should add async two numbers',(done)=>{
    utils.asyncAdd(5,2,(sum)=>{
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('Should square async a numbers',(done)=>{
    utils.asyncSquare(5,(square)=>{
      expect(square).toBe(25).toBeA('number');
      done();
    });
  });

  it('should square the number',()=>{
    var res=utils.square(5);
        expect(res).toBe(25).toBeA('number');
  });

});


  it('should match the object',()=>{
    var user={age:28,location:"bangalore"};
    var res=utils.setname(user,"virat kohli");
    expect(res).toInclude({firstname:"virat",lastname:"kohli"}).toBeA("object");
  });

  // it('should expect some values',()=>{
  //     //expect(15).toNotBe(13);
  //     //expect({name:"viba"}).toEqual({name:"viba"});
  //     //expect([2,3,4,5]).toInclude(5);
  //     //expect([1,3,5,7]).toExclude(6);
  //     expect({
  //       name:"viba",
  //       age:23,
  //       location:"Coimbatore"
  //     }).toInclude({
  //       age:23
  //     });
  // });
