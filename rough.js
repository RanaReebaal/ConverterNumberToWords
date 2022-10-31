
// SPECICIAL THANKS TO DEAR RANA MUHAMMAD REEBAAL HUSSAIN;
// THE COUNTING IS FINISHED NOW AND THIS CONVERTER ACCEPTS DIGITS TILL CENTILLIAN(69 DIGITS)


function doConvert() {
    let numberInput = document.querySelector('#numberInput').value;
    let myDiv = document.querySelector('#result');

    let oneToTwenty = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
        'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (numberInput.toString().length > 69) return myDiv.innerHTML = 'overlimited';
    console.log(numberInput);
    let num = ('000000000000000000000000000000000000000000000000000000000000000000000' + numberInput).slice(-69).match(/^(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    console.log(num);
    if (!num) return;

    let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}` )+' hundred ' : ''; 
    outputText +=num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}` )+' Centillion ' : ''; 
    outputText +=num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}` )+'hundred ' : ''; 
    outputText +=num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`)+'Vigintillion  ' : ''; 
    outputText +=num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]}`) +'hundred ': ''; 
    outputText +=num[6] != 0 ? (oneToTwenty[Number(num[6])] || `${tenth[num[6][0]]} ${oneToTwenty[num[6][1]]} `) +'Novemdecillion ': ''; 
    outputText +=num[7] != 0 ? (oneToTwenty[Number(num[7])] || `${tenth[num[7][0]]} ${oneToTwenty[num[7][1]]} `) +'hundred ': ''; 
    outputText +=num[8] != 0 ? (oneToTwenty[Number(num[8])] || `${tenth[num[8][0]]} ${oneToTwenty[num[8][1]]} `) + 'Octodecillion ': ''; 
    outputText +=num[9] != 0 ? (oneToTwenty[Number(num[9])] || `${tenth[num[9][0]]} ${oneToTwenty[num[9][1]]} `) + 'hundred ': ''; 
    outputText +=num[10] != 0 ? (oneToTwenty[Number(num[10])] || `${tenth[num[10][0]]} ${oneToTwenty[num[10][1]]} `) + 'Septen-decillion ': ''; 
    outputText +=num[11] != 0 ? (oneToTwenty[Number(num[11])] || `${tenth[num[11][0]]} ${oneToTwenty[num[11][1]]} `) + 'hundred ': ''; 
    outputText +=num[12] != 0 ? (oneToTwenty[Number(num[12])] || `${tenth[num[12][0]]} ${oneToTwenty[num[12][1]]} `) + 'Sexdecillion ': ''; 
    outputText +=num[13] != 0 ? (oneToTwenty[Number(num[13])] || `${tenth[num[13][0]]} ${oneToTwenty[num[13][1]]} `) + 'hundred ': ''; 
    outputText +=num[14] != 0 ? (oneToTwenty[Number(num[14])] || `${tenth[num[14][0]]} ${oneToTwenty[num[14][1]]}` )+'Quindecillion  ' : ''; 
    outputText +=num[15] != 0 ? (oneToTwenty[Number(num[15])] || `${tenth[num[15][0]]} ${oneToTwenty[num[15][1]]}` )+'hundred ' : ''; 
    outputText +=num[16] != 0 ? (oneToTwenty[Number(num[16])] || `${tenth[num[16][0]]} ${oneToTwenty[num[16][1]]}`)+'Quatttuour-decillion  ' : ''; 
    outputText +=num[17] != 0 ? (oneToTwenty[Number(num[17])] || `${tenth[num[17][0]]} ${oneToTwenty[num[17][1]]}`) +'hundred ': ''; 
    outputText +=num[18] != 0 ? (oneToTwenty[Number(num[18])] || `${tenth[num[18][0]]} ${oneToTwenty[num[18][1]]} `) +'Tredecillion ': ''; 
    outputText +=num[19] != 0 ? (oneToTwenty[Number(num[19])] || `${tenth[num[19][0]]} ${oneToTwenty[num[19][1]]} `) +'hundred ': ''; 
    outputText +=num[20] != 0 ? (oneToTwenty[Number(num[20])] || `${tenth[num[20][0]]} ${oneToTwenty[num[20][1]]} `) + 'Duodecillion ': ''; 
    outputText +=num[21] != 0 ? (oneToTwenty[Number(num[21])] || `${tenth[num[21][0]]} ${oneToTwenty[num[21][1]]} `) + 'hundred ': ''; 
    outputText +=num[22] != 0 ? (oneToTwenty[Number(num[22])] || `${tenth[num[22][0]]} ${oneToTwenty[num[22][1]]} `) + 'Undecillion ': ''; 
    outputText +=num[23] != 0 ? (oneToTwenty[Number(num[23])] || `${tenth[num[23][0]]} ${oneToTwenty[num[23][1]]} `) + 'hundred ': ''; 
    outputText +=num[24] != 0 ? (oneToTwenty[Number(num[24])] || `${tenth[num[24][0]]} ${oneToTwenty[num[24][1]]} `) + 'Decillion ': ''; 
    outputText +=num[25] != 0 ? (oneToTwenty[Number(num[25])] || `${tenth[num[25][0]]} ${oneToTwenty[num[25][1]]} `) + 'hundred ': ''; 
    outputText +=num[26] != 0 ? (oneToTwenty[Number(num[26])] || `${tenth[num[26][0]]} ${oneToTwenty[num[26][1]]}` )+'Nonillion  ' : ''; 
    outputText +=num[27] != 0 ? (oneToTwenty[Number(num[27])] || `${tenth[num[27][0]]} ${oneToTwenty[num[27][1]]}` )+'hundred ' : ''; 
    outputText +=num[28] != 0 ? (oneToTwenty[Number(num[28])] || `${tenth[num[28][0]]} ${oneToTwenty[num[28][1]]}`)+'Octillion ' : ''; 
    outputText +=num[29] != 0 ? (oneToTwenty[Number(num[29])] || `${tenth[num[29][0]]} ${oneToTwenty[num[29][1]]}`) +'hundred ': ''; 
    outputText +=num[30] != 0 ? (oneToTwenty[Number(num[30])] || `${tenth[num[30][0]]} ${oneToTwenty[num[30][1]]} `) +'Septillion ': ''; 
    outputText +=num[31] != 0 ? (oneToTwenty[Number(num[31])] || `${tenth[num[31][0]]} ${oneToTwenty[num[31][1]]} `) +'hundred ': ''; 
    outputText +=num[32] != 0 ? (oneToTwenty[Number(num[32])] || `${tenth[num[32][0]]} ${oneToTwenty[num[32][1]]} `) + 'Sextillion ': ''; 
    outputText +=num[33] != 0 ? (oneToTwenty[Number(num[33])] || `${tenth[num[33][0]]} ${oneToTwenty[num[33][1]]} `) + 'hundred ': ''; 
    outputText +=num[34] != 0 ? (oneToTwenty[Number(num[34])] || `${tenth[num[34][0]]} ${oneToTwenty[num[34][1]]} `) + 'Quintillion ': ''; 
    outputText +=num[35] != 0 ? (oneToTwenty[Number(num[35])] || `${tenth[num[35][0]]} ${oneToTwenty[num[35][1]]} `) + 'hundred ': ''; 
    outputText +=num[36] != 0 ? (oneToTwenty[Number(num[36])] || `${tenth[num[36][0]]} ${oneToTwenty[num[36][1]]} `) + 'Quadrillion ': ''; 
    outputText +=num[37] != 0 ? (oneToTwenty[Number(num[37])] || `${tenth[num[37][0]]} ${oneToTwenty[num[37][1]]} `) + 'hundred ': ''; 
    outputText +=num[38] != 0 ? (oneToTwenty[Number(num[38])] || `${tenth[num[38][0]]} ${oneToTwenty[num[38][1]]}` )+'Trillion ' : ''; 
    outputText +=num[39] != 0 ? (oneToTwenty[Number(num[39])] || `${tenth[num[39][0]]} ${oneToTwenty[num[39][1]]}` )+'hundred ' : ''; 
    outputText +=num[40] != 0 ? (oneToTwenty[Number(num[40])] || `${tenth[num[40][0]]} ${oneToTwenty[num[40][1]]}`)+'Billion ' : ''; 
    outputText +=num[41] != 0 ? (oneToTwenty[Number(num[41])] || `${tenth[num[41][0]]} ${oneToTwenty[num[41][1]]}`) +'hundred ': ''; 
    outputText +=num[42] != 0 ? (oneToTwenty[Number(num[42])] || `${tenth[num[42][0]]} ${oneToTwenty[num[42][1]]} `) +'Million ': ''; 
    outputText +=num[43] != 0 ? (oneToTwenty[Number(num[43])] || `${tenth[num[43][0]]} ${oneToTwenty[num[43][1]]} `) +'hundred ': ''; 
    outputText +=num[44] != 0 ? (oneToTwenty[Number(num[44])] || `${tenth[num[44][0]]} ${oneToTwenty[num[44][1]]} `) + 'Thousand ': ''; 
    outputText +=num[45] != 0 ? (oneToTwenty[Number(num[45])] || `${tenth[num[45][0]]} ${oneToTwenty[num[45][1]]} `) +'hundred and ': ''; 
    outputText +=num[46] != 0 ? (oneToTwenty[Number(num[46])] || `${tenth[num[46][0]]} ${oneToTwenty[num[46][1]]} `) +'only!!': '' ; 
  
    myDiv.innerHTML = outputText;
}
