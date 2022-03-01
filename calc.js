function calculator(str){

	//All Roman Numbers in [1,10]
	const RomeNumber = [
		'I',
		'II',
		'III',
		'IV',
		'V',
		'VI',
		'VII',
		'VIII',
		'IX',
		'X'
	]
	//All Arabian Numbers in [1,10]
	const ArabNumber = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10'
	]

	//All acceptable operations
	const arithmeticSymbols = [
		'*',
		'+',
		'-',
		'/'
	]

	//Change string
	str = str.split(' ').join('')   //removing empty space in input string
	let countOfOperators = 0

	//Check string
	for(let i = 0; i < str.length;i++)
	{
		if(arithmeticSymbols.indexOf(str[i]) != -1) countOfOperators++
		if(countOfOperators > 1 || str.length < 3) throw new Error("Ошибка - некорректные данные")
	}


	//Arithmetic operator and checking
	let symbol = str.split('').sort()[0]
	let firstValue = str.split(symbol)[0]
	let secondValue = str.split(symbol)[1]
	if((ArabNumber.indexOf(firstValue) == -1 || ArabNumber.indexOf(secondValue) == -1)
	&& (RomeNumber.indexOf(firstValue) == -1 || RomeNumber.indexOf(secondValue) == -1)) throw new Error("Ошибка - некорректные данные")
	if(arithmeticSymbols.indexOf(symbol) == -1) throw new Error("Такая математическая операция не поддерживается");

	//Required Data
	let ArabindexOfFirstValue = ArabNumber.indexOf(str.split(symbol)[0]);
	let RomeindexOfFirstValue = RomeNumber.indexOf(str.split(symbol)[0]);
	let ArabindexOfSecondValue = ArabNumber.indexOf(str.split(symbol)[1]);
	let RomeindexOfSecondValue = RomeNumber.indexOf(str.split(symbol)[1]);
	//check var for minusing RomeNums
	let mRome = false

	//Defining of operands
	if(ArabindexOfFirstValue > -1 && ArabindexOfSecondValue > -1){
		firstValue  = parseInt(str.split(symbol)[0])
		secondValue = parseInt(str.split(symbol)[1])
	}
	else if(RomeindexOfFirstValue > -1 && RomeindexOfSecondValue > -1)
	{
		mRome = true
		firstValue  = RomeindexOfFirstValue + 1
		secondValue = RomeindexOfSecondValue + 1
	}
	//else throw new Error("Используются одновременно разные системы счисления")
	let result
	switch(symbol)
	{
		case '+' :
			result=(firstValue + secondValue)
			break
		case '-' :
			if(mRome && (firstValue < secondValue))
			{
				return "";
			}
			result = (firstValue - secondValue)
			break
		case '*' :
			result = (firstValue * secondValue)
			break
		case '/' :
			result = (Math.floor(firstValue / secondValue))
			break
		default:
			break
	}
	if(mRome) return String(convertToRoman(result))
	else return String(result)
}
calculator('1+1')
function convertToRoman(num) {
	var roman = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };
  var str = '';

  for (var i of Object.keys(roman)) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }
  return str;
}


