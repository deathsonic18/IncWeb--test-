/*
---------------------
*   H priority : ***
*   M priority : **
*   L priority : *
*--------------------
*/
  function startPonsify() {

//**********************
    function ponsify(x, y, z)
    {
        // Add your code here
        if(x == y) {console.log("this is x == y : "+x );return x;};           //if lower = limit{return x}

        console.log("Hello world!");
        console.log(x,y,z);                                                     //displays lower, limit & step figures

        lastNumber =0;
        nextNumber =0;
        // if(x < 0) {console.log("this is i is negative "+x);return 0};        //if lower is negative{break}
        if(y < x) {{console.log("this is invaild y < x "+x );return 0;};}       //if higher < lower {return 0;}
        for (i = x+1; i < y; i++)                                               //incrementation;
        {
          i = i+z-1;
          if(i > y) {console.log("this is x > y "+i);return x; break;};         //if lower > limt {return i}
          console.log(i);                                                       //displys sum
          if(y < i) {console.log("this is y < x : "+i );return 0;};             //if upper < lower{return 0}
          var sum = (i * (i+1)) / 2-1;                                          //calc's sum
          sumReturn(sum);                                                       //sends sum to sumReturn function
          getReturn(i,y,z);                                                     //sends values to getReturn function
          // console.log(sum);

        }

    }
    ponsify(5,6000,2);                                                       //send parameters to function (lower,limit,step);



//**********************
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
}

    function getReturn(getX,getY,getZ)                                          //gets returns for every epoch
    {
      return getX,getY,getZ;
    }

    function sumReturn(sum)                                                     //gets sum
    {
      return sum;
    }

startPonsify();
