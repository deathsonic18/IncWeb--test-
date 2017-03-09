/*
---------------------
*   H priority : ***
*   M priority : **
*   L priority : *
*--------------------
*/
  function startPonsify() {

    function ponsify(x, y, z,getTestNumber)                                     //lower,limit,steps,testnumber
    {
      console.log("This is test number : " +getTestNumber);

      if(x==y) {console.log("this is x == y : "+x );return null;}
      else if(y < x) {{console.log("this is invaild y < x "+x );return null;};}

      for (i = x+1; i < y; i++)                                               //incrementation;
      {
        i = i+z-1;
        if(i > y) {console.log("this is x > y "+i);return x; break;};         //if lower > limt {return i}
        console.log(i);                                                       //displys sum
        if(y < i) {console.log("this is y < x : "+i );return 0;};             //if upper < lower{return 0}
        var sum = (i * (i+1)) / 2-1;                                          //calc's sum
        getReturn(i,y,z);                                                     //sends values to getReturn function
      }
      sumReturn(sum);
      console.log("-----");

    }

    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
}

    function getReturn(getX,getY,getZ)                                          //gets returns for every epoch
    {
      // console.log("returnX : " +getX );
      // console.log("returnX : " +getY );
      // console.log("returnX : " +getZ );

      return getX,getY,getZ;
    }

    function sumReturn(sum)                                                     //gets sum
    {
      console.log("sum : " +sum );
      return sum;
    }

startPonsify();
