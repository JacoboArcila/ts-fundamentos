(() => {
  let myDinamicVar: any;
  myDinamicVar = 100;
  myDinamicVar = null;
  myDinamicVar = {};
  myDinamicVar= '';

  const rta = (myDinamicVar as string).toLocaleLowerCase();
  console.log(rta);

  myDinamicVar = 12321;
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log(rta2);

})();
