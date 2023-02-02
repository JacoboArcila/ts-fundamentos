(() => {
 /*  let myNumber: number = undefined;
  let myString: string = null;  */

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: number | undefined = undefined;
  myString = 121;

  /* function hi(name: string | null) {
    let hello = "hola ";
    if(name) {
      hello += 'name';
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  } */

  /* hi('Jacobo');
  hi(null) */

  function hi2(name: string | null) {
    let hello = "hola ";
    hello += name?.toLowerCase() || 'nobody' ;
    console.log(hello);
  }

  hi2('Jacobo');
  hi2(null)
})();
