(() => {
  type UserID = string | number;
  let userId: UserID;

  //Literal Types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize:  Sizes;
  /* let shirtSize: 'S' | 'M' | 'L' | 'XL'; */
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';

  function greeting(userId: UserID, size: Sizes) {
    if(typeof userId === 'string') {
      console.log(`string ${userId.toLocaleLowerCase()}`)
    }
  }
  greeting(12121, 'XL');

})();
