function doConvert (){
  let numberInput = document.querySelector('#numberInput').value ;
  let myDiv = document.querySelector('#result');

  let oneToTwenty = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ',
  'eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  let tenth = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

  if(numberInput.toString().length > 12) return myDiv.innerHTML = 'overlimit' ;
  console.log(numberInput);
  //let num = ('0000000000'+ numberInput).slice(-10).match(/^(\d{1})(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
let num = ('000000000000'+ numberInput).slice(-12).match(/^(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})$/);
  console.log(num);
  if(!num) return;

  let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}` )+' hundred ' : ''; 



  outputText += num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}` )+' billion ' : ''; 

  outputText +=num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}` )+'hundred ' : ''; 
  outputText +=num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`)+' million ' : ''; 
  outputText +=num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]}`) +'hundred ': ''; 

  outputText +=num[6] != 0 ? (oneToTwenty[Number(num[6])] || `${tenth[num[6][0]]} ${oneToTwenty[num[6][1]]} `) +'thousand ': ''; 
  outputText +=num[7] != 0 ? (oneToTwenty[Number(num[7])] || `${tenth[num[7][0]]} ${oneToTwenty[num[7][1]]} `) +'hundred ': ''; 
  outputText +=num[8] != 0 ? (oneToTwenty[Number(num[8])] || `${tenth[num[8][0]]} ${oneToTwenty[num[8][1]]} `) : ''; 





  myDiv.innerHTML = outputText;
}