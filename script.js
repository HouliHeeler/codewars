// Return sum of all positive numbers in array

function positiveSum(arr) {
    let sum = 0;
    for(i=0;i<arr.length;i++) {
      if(arr[i]>0){
        sum += arr[i];
      }
    }
    return sum; 
  }

// Return given number with each digit squared. 3214 would equal 94116

function squareDigits(num){
  let digits = Number(num.toString().split("").map(x => x**2).join(""));
  return digits;
}

// Return "Facebook-style" message acknowledging who likes something

function likes(names) {
  if (names.length <= 0) {
    return "no one likes this";
  }else if (names.length == 1) {
    return `${names[0]} likes this`;
  }else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  }else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }else {
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
  }
}

// Return element with odd number of entries

function findOdd(A) {
  let count = {};
  for(num of A) {
    if(count[num]) {
      count[num] +=1;
    }else
     count[num] = 1;
  }
  for(const property in count ) {
    if(count[property]%2!=0) {
      return Number(property);
    }
  }
}

// Return user inputted sentence with all five or longer lettered words backwards

function spinWords(string){
  const words = string.split(" ");
  for(i=0;i<words.length;i++) {
    if(words[i].length > 4) {
      words[i] = words[i].split("").reverse().join("");
    }
  }
  return words.join(" ");
}

// return number made as small as possible by moving one digit to anywhere in the number

function smallest(n) {
	let digits = (""+n).split("").map(Number);
  let small;
  let med;
  let big;
  let posX;
  let posY;
  let posZ;
  for(i=0;i<digits.length;i++) {
    if(digits[i] < small  || small == undefined || digits[i] == 0) {
      small = digits[i];
      posX = i;
    }
  }
  for(k=0;k<digits.length;k++) {
    if((digits[k] > small && digits[k] < med) || med == undefined && digits[k] > small) {
      med = digits[k];
    	posZ = k;
    }
  }
  for(j=0;j<digits.length;j++) {  
    if(digits[j] > big || big == undefined) {
      big = digits[j];
      posY = j;
    }
  }
  if(posX == 0) {
    for(l=1;l<digits.length;l++) {
      if(digits[l] > med) {
    		digits.splice(posZ,1);
    		digits.splice(l,0,med);
    		num = Number(digits.join(""));
        if(l >= posZ ) {
    		return arr = [num,l,posZ];
        break;
        } else {
          return arr = [num,posZ,l];
          break;
        }
      }
    }
  } else {
 		digits.splice(posX,1);
    digits.splice(0,0,small);
    num = Number(digits.join(""));
    return arr = [num,0,posX];
  }
}

// Convert seconds provided into human readable time

function humanReadable(seconds) {
  let hours = 00;
  let mins = 00;
  let secs = 00;
  if(seconds >= 3600) {
    hours = Math.floor(seconds/3600);
    mins = Math.floor((seconds%3600)/60);
    secs = Math.floor((seconds%3600)%60);
  }else if(seconds >=60) {
    mins = Math.floor(seconds/60);
    secs = Math.floor(seconds%60);
  }else {
    secs = seconds;
  }
  if(hours < 10) {
    hours = ("0" + hours);
  }
  if(mins < 10) {
    mins = ("0" + mins);
  }
  if(secs < 10) {
    secs = ("0" + secs);
  }
  return `${hours}:${mins}:${secs}`;
}

// Return true if all sets of parentheses are closed properly, else return false

function validParentheses(parens) {
  const parArr = parens.split("");
  let open = 0;
  let closed = 0;
  for(i=0;i<parArr.length;i++) {
    if(parArr[i]===`)`) {
      closed++;
      if(closed > open) {
        return false;
      }
    }else if (parArr[i]=== `(`) {
      open++;
    }
  }
  if(closed == open) {
  return true;
  } else
    return false;
}

// Return string as a Twitter friendly hashtag

function generateHashtag(str) {
  const arr = str.split(" ");
  for(i=0;i<arr.length;i++) {
    if(arr[i] == " " || arr[i] == "") {
      arr.splice(i,1);
      i--;
    }
  }
  for(j=0;j<arr.length;j++) {
    arr[j] = arr[j][0].toUpperCase() + arr[j].substring(1);
  }
  let newStr = arr.join("");
  console.log(newStr.length);
  if(newStr.length > 139 || newStr.length == 0) {
    return false;
  }else
  	return ("#" + newStr);
}

//create phone number from given array

function createPhoneNumber(n) {
  let format = "(xxx) xxx-xxxx";
  for(i=0;i<n.length;i++) {
    format = format.replace("x",n[i]);
  }
  return format;
}

//Solve whether you have enough fuel to get to your destination

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
};

//Return highest and lowest from given string of numbers

function highAndLow(numbers){
  const arr = numbers.split(" ").sort((a,b) => a - b);
  return `${arr[arr.length-1]} ${arr[0]}`
}

//Is given integer a squared number

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

//Return individual digits of given integer in descending order

function descendingOrder(n){
  const arr = n.toString().split("").sort((a,b) => b-a);
  return Number(arr.join(""));
}

//Return given array with strings filtered out

function filter_list(l) {
  let arr = [];
  for(i=0;i<l.length;i++) {
    if(Number.isInteger(l[i])) {
      arr.push(l[i]);
    }
  }
  return arr;
}

//Remove from first given array any elements found in second given array

function arrayDiff(a, b) {
  for(i=a.length-1;i>=0;i--) {
    for(j=0;j<b.length;j++) {
      if(a[i] === b[j]) {
        console.log(a[i])
        a.splice(i,1)
      }
    }
  }
  return a;
 }

//Resolve double or nothing gambling

function doubleOrNothing(cash, wager, losses){
  let a;
  for(i=1;i<losses;i++) {
    a = wager
    wager += a;
  }
  if(cash - wager >= 0) {
    return cash - wager
  } else
    return "I'll pay you back later"
}

// Return given number as sum of binary translation

function countBits(n) {
  let arr = [];
  let a;
  while(n>0) {
   	a = n;
   	n = Math.floor(n/2);
   	arr.push(a%2);
  }
  if (arr == "") {
    return 0;
  } else
  return arr.reduce((x,y) => x + y);
};

//Return number of duplicated characters in given string

function duplicateCount(text){
  const letters =text.toUpperCase().split("").sort();
  console.log(letters);
  const duplicates = [];
  for(i=0;i<letters.length;i++) {
    if(letters[i] == letters[i-1]) {
      duplicates.push(letters[i]);
    }
  }
  console.log(duplicates);
  const dupes = new Set(duplicates)
  return dupes.size;
}

//Return solitary odd or even number from given string

function findOutlier(integers){
  let odd = [];
  let even = [];
  for(i=0;i<integers.length;i++) {
    if(integers[i]%2 == 0) {
      even.push(integers[i]);
    }else
     odd.push(integers[i]);
  }
  if(odd.length > even.length) {
    return even[0];
  }else
    return odd[0];
}

//Add digits of given number together until sum is a single digit number

function digital_root(n) {
  if(n == 0) {
    return 0;
  }
  let arr;
  let num = n.toString().split("");
  let number = num.map(x => Number(x));
  for(i=0;i<n;i++) {
    if(number.length > 1) {
     arr = number.reduce((a,b) => a + b);
     num = arr.toString().split("");
     number = num.map(x => Number(x));
    }else
     return number[0];
  }
}

//Return length of shortest word in given string

function findShort(s){
  const arr = s.split(" ").sort((a,b) => a.length - b.length);
  return arr[0].length;
}

//Check if given number equals the sum of each digit to the power of the number of digits in given number

function narcissistic(value) {
  let total = 0;
  const arr = value.toString().split("");
  for(i=0;i<arr.length;i++) {
    arr[i] = Number(arr[i]);
    total += (arr[i]**arr.length);
  }
  return (total == value);
}

//Check if given string is a pangram

function isPangram(string){
  const arr = string.toLowerCase().split("").filter(c => c >= "a" && c <= "z");
  const unique = new Set(arr);
  return (unique.size >= 26);
}

//Increment the number at the end of a string

function incrementString (strng) {
  const arr = strng.split("");
  const nums = [];
  const word = [];
  if(isNaN(arr[arr.length - 1])) {
    arr.push("1");
    return arr.join("");
  } else {
    for(i=0;i<arr.length;i++) {
      if(isNaN(arr[i])) {
        word.push(arr[i]);
      }else {
        nums.push(arr[i]);
      }
    }
  }
  for(i=nums.length-1;i>=0;i--) {
    if(nums[i] == 9 && i == 0) {
      nums[0] = "0";
      nums.unshift("1");
      break;
    } else if(nums[i] == 9) {
      nums[i] = "0";
      continue;
    } else 
    	nums[i]++;
    	break;
  }
  let num = nums.join("");
  return word.concat(num).join("");
}

//return string with alphabetical characters replaced with numerical place in alphabet

function alphabetPosition(x) {
  let text = x.toLowerCase();
  let final = [];
  for(i=0;i<text.length;i++) {
    if(text[i] >= "a" && text[i] <= "z")
    final.push(text.charCodeAt(i)-96);
  }
  return final.join(" ");
}

//Return only numbers that are the first in their string of repeat numbers

var uniqueInOrder=function(iterable){
  let arr = iterable.toString().split("");
  for(i=0;i<arr.length;) {
    if(arr[i] === arr[i-1] || arr[i] == ","){
      arr.splice(i,1);
    } else
      i++;
  }
  for(i=0;i<arr.length;i++) {
    if(isNaN(arr[i])) {
    }else {
      arr[i] = Number(arr[i]);
    }
  }
  return arr;
}

//Show when the sum of given array forwards equals the sum of the same array backwards

function findEvenIndex(arr){
  let sumforward = 0;
  let sumbackward = 0;
  let arrForward = [];
  let arrBackward = [];
  for(i=0;i<arr.length;i++) {
    sumforward += arr[i];
    arrForward.push(sumforward);
  }
  for(j=arr.length-1;j>=0;j--) {
    sumbackward += arr[j];
    arrBackward.push(sumbackward);
  }
  for(k=0;k<arr.length;k++) {
    if(arrForward[k] == arrBackward[(arrBackward.length - 1) - k]) {
      return k;
    }
  }
  return -1;
}

//Convert given string to camelCase

function toCamelCase(str){
	let arr = str.split(/[^A-Za-z]/);
  for(i=1;i<arr.length;i++) {
    arr.splice(i,1,arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return arr.join("");
}

//Conclude whether the amounts of X's and O's are equal

function XO(str) {
  let arr = str.toLowerCase().split("");
  let xcount = 0;
  let ocount = 0;
  for(i=0;i<arr.length;i++) {
    if(arr[i] == "x") {
      xcount++;
    }else if (arr[i] == "o") {
      ocount++;
    }
  }  
  return (xcount == ocount);
}

//Find unique number in given array

function findUniq(arr) {
  for(i=0;i<arr.length;i++) {
    if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}

//Return first instance of unique character, in case it was given in

function firstNonRepeatingLetter(s) {
  let arr = s.toLowerCase().split("");
  console.log(arr);
 	for(i=0;i<arr.length;i++) {
  	if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
    	return s[i];
    }
  }
  return "";
}

//Return victor of battle for Good versus Evil based on given strings

function goodVsEvil(good, evil){
  let goodArr = good.split(" ");
  let evilArr = evil.split(" ");
  let goodValue = Number(goodArr[0]) + (Number(goodArr[1])*2) + ((Number(goodArr[2])+Number(goodArr[3]))*3) + (Number(goodArr[4])*4) + (Number(goodArr[5])*10);
  let evilValue = Number(evilArr[0]) + ((Number(evilArr[1])+Number(evilArr[2])+Number(evilArr[3]))*2) + (Number(evilArr[4])*3) + (Number(evilArr[5])*5) + (Number(evilArr[6])*10);
  if(goodValue > evilValue) {
    return 'Battle Result: Good triumphs over Evil'
  } else if(evilValue > goodValue) {
    return 'Battle Result: Evil eradicates all trace of Good'
  } else
    return 'Battle Result: No victor on this battle field'
}

//compare two arrays and see if the second equals the squared values of the first

function comp(array1, array2){
  let arr1 = array1.sort((a,b) => a - b);
  let arr2 = array2.sort((a,b) => a - b);
  for(i=0;i<arr1.length;i++) {
    if(arr2[i] != Math.pow(arr1[i],2)) {
      return false
    }
  }
  return true;
}

//return given string as repeated characters based on position in string, first letter capitalized

function accum(s) {
  let arr = s.toLowerCase().split("");
  let repArr = [];
  for(i=0;i<arr.length;i++) {
    repArr.push(arr[i].repeat(i+1));
  }
  upperArr = repArr.map(x => x[0].toUpperCase() + x.substring(1));
  return upperArr.join("-");
}

//Return length of longest word in given array

function longest(words) {
  let lword = 0;
  for(i=0;i<words.length;i++) {
    if(words[i].length > lword) {
      lword = words[i].length
    }
  }
  return lword;
}

//Create a prototype that will capitalize the first letter of every word in a given string

String.prototype.toJadenCase = function () {
  const words = this.split(" ");
  	console.log(words)
  	for ( i=0; i<words.length; i++ ) {
      words[i] = words[i][0].toUpperCase() + 		words[i].substr(1);
		}
    return words.join(" ");
}

//Convert given string to pig latin

function pigIt(str){
  let arr = str.split(" ");
  let pigArr = [];
  for(i=0;i<arr.length;i++) {
    if(arr[i].match(/[a-z]/i)) {
    	pigArr.push(arr[i].substring(1) + arr[i].substring(0,1) + "ay");
    }else
      pigArr.push(arr[i]);
  }
  return pigArr.join(" ");
}

//Convert RGB to Hex

function rgb(r, g, b){
  let arr = [];
  let newArr = [];
  if(r > 255) {
  	arr.push(Math.floor(255/16).toString());
    arr.push((255%16).toString());
  } else if( r < 0) {
    arr.push(0);
    arr.push(0);
  } else {
    arr.push(Math.floor(r/16).toString());
  	arr.push((r%16).toString());
  }
  if(g > 255) {
  	arr.push(Math.floor(255/16).toString());
    arr.push((255%16).toString());
  } else if( g < 0) {
    arr.push(0);
    arr.push(0);
  } else {
    arr.push(Math.floor(g/16).toString());
  	arr.push((g%16).toString());
  }
  if(b > 255) {
  	arr.push(Math.floor(255/16).toString());
    arr.push((255%16).toString());
  } else if( b < 0) {
    arr.push(0);
    arr.push(0);
  } else {
    arr.push(Math.floor(b/16).toString());
  	arr.push((b%16).toString());
  }
  for(i=0;i<arr.length;i++) {
    if(arr[i] > 9) {
      let str = arr[i].replace("10","A").replace("11","B").replace("12","C").replace("13","D").replace("14","E").replace("15","F");
      newArr.push(str);
    }else
      newArr.push(arr[i]);
  }
  return newArr.join("");
}

//Calculate sum of all numbers between two given numbers

function getSum( a,b )
{
	let arr = [a,b];
	let arrNew = arr.sort((a,b) => a - b);
  let sum = 0;
  for(i=arrNew[0];i<=arrNew[1];i++) {
    sum += i;
  }
  return sum;
}

//Blind 75 Two Sum

var twoSum = function(nums, target) {
  let arr = [];
  for(i=0;i<nums.length;i++) {
    for(j=1;j<nums.length;j++) {
    	if(nums[i] + nums[j] == target && i != j) {
        arr.push(i);
        arr.push(j);
        return arr;
      } 
    }
  }	
};

//Blind 74 Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
	let sum = 0;
  for(i=prices.length-1;i>=0;i--) {
    for(j=prices.length-2;j>=0;j--) {
      if(sum < (prices[i] - prices[j]) && j < i) {
        sum = (prices[i] - prices[j]);
      }
    }
  }
  return sum;
};

//Blind 73 Contains Duplicate

var containsDuplicate = function(nums) {
  const dupe = new Set(nums);
  if(dupe.size == nums.length) {
      return false
  } else
      return true
};

//Blind 72 Product of Array Except Self

var productExceptSelf = function(nums) {
  let answer = [];
  let splice;
  for(i=0;i<nums.length;i++) {
    splice = nums.splice(i,1);
    answer.push(nums.reduce((a,b) => a * b));
    nums.splice(i,0,splice[0]);
  }
  return answer;
};

//Pick Peaks from Array

function pickPeaks(arr){
  let obj = {
    pos: [],
    peaks: [],
  };
  for(i=0;i<arr.length;i++) {
    if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      obj.pos.push(i);
      obj.peaks.push(arr[i]);
    }else if(arr[i] > arr[i-1] && arr[i] == arr[i + 1]) {
     	for(j=(i+2);j<arr.length;j++) {
        if(arr[j] < arr[i]) {
          obj.pos.push(i);
          obj.peaks.push(arr[i]);
          break;
        }else if(arr[j] > arr[i]) {
          break;
        }
      }
    }
  }
  return obj;
}

//Encode given array based on repeat characters

function duplicateEncode(word){
  let code = [];
  text = word.toLowerCase().split("");
  for(i=0;i<text.length;i++) {
    console.log(text.indexOf(text[i]));
    if(i == text.lastIndexOf(text[i]) && i == text.indexOf(text[i],0)) {
      code.push("(");
    }else
      code.push(")");
  }
  return code.join("");
}

//Multiply digits of given number until product is only one digit

function persistence(num) {
	let count = 0;
  while(num.toString().length > 1) {
    num = num.toString().split("").reduce((a,b) => a * b);
    console.log(num);
  	count++
  }
  return count;
}

//Sort given string by numbers in words

function order(words){
  let arr = words.split(" ");
  return arr.sort((a,b) => a.replace(/\D/g, "") - b.replace(/\D/g, ""))
            .join(" ");
}

//Split given string into array of two character pairs

function solution(str) {
  let arr = str.split("");
 	let sol = [];
  if(str == "") {
    return sol;
  }
	while(str.length > 0) {
    if(arr.length == 1) {
      sol.push(`${arr[0]}_`);
      break;
    } else if(arr.length == 0) {
      break;
    }
      else {
    	sol.push(`${arr[0]}${arr[1]}`);
    	arr.splice(0,2);
    }
  }
  return sol;
}

//Compare two given arrays and return elements of Array 1 that exist in elements of Array 2

function inArray(array1,array2){
  let arr = [];
  for(i=0;i<array1.length;i++) {
    for(j=0;j<array2.length;j++) {
      if(array2[j].includes(array1[i])) {
        arr.push(array1[i]);
        break;
      }
    }
  }
  return arr.sort();
}

//Find the next bigger number using the same digits

function nextBigger(n){
  let high = Number(n.toString()
                     .split("")
                     .sort((a,b) => b - a)
                     .join(""));
  if(n === high) {
    return -1;
  } else {
    for(i=(n+1);i<=high;i++) {
      if(Number(i.toString().split("").sort((a,b) => b - a).join("")) == high) {
        return i;
      }
    }
  }
}

//Reduce given directions to eliminate wasted steps

function dirReduc(arr){
  for(i=0;i<arr.length;i++) {
    if(arr[i] == "NORTH" && arr[i + 1] == "SOUTH" || arr[i] == "SOUTH" && arr[i + 1] == "NORTH") {
      arr.splice(i,2)
      i = -1;
      continue;
    } else if(arr[i] == "WEST" && arr[i + 1] == "EAST" || arr[i] == "EAST" && arr[i + 1] == "WEST") {
      arr.splice(i,2)
      i = -1;
      continue;
    }
  }
  return arr;
}

//Sort odd numbers in given array while leaving even numbers in place

function sortArray(array) {
  let odds = [];
  let count = 0;
  for(i=0;i<array.length;i++) {
    if(array[i] % 2 != 0) {
      odds.push(array[i]);
      odds.sort((a,b) => a - b);
    }
  }
  for(i=0;i<array.length;i++) {
    if(array[i] % 2 != 0) {
      array.splice(i,1,odds[count]);
      count++;
    }
  }
  return array;
}

//Calculate white and black squares on chessboard with given dimensions

function whiteBlackAreas(cols, rows) {
  let arr = [];
  let white = 0;
  let black = 0;
  for(i=0;i<cols.length;i++) {
  	for(j=0;j<rows.length;j++) {
      if((i+j)%2 == 0) {
        white += cols[i] * rows[j];
      }else if ((i+j)%2 != 0) {
        black += cols[i] * rows[j];
      }
    }
  }
  arr.push(white,black);
  return arr;
}

//Tribonacci Sequence

function tribonacci(sig,n) {
  while(sig.length < n) {
  	sig.push(sig[sig.length-1] + sig[sig.length-2] + 	sig[sig.length-3]);
  }
  sig.splice(n,(3-n));
  return sig;
}

//Find anagrams from given array

function anagrams(word, words) {
  let arr = [];
  let sorted = word.split("").sort().join("");
  console.log(sorted);
  for(i=0;i<words.length;i++) {
    if(sorted == words[i].split("").sort().join("")) {
      arr.push(words[i]);
    }
  }
  return arr;
}

//Test if given number is the product of two given Fibonacci numbers

function productFib(prod){
  let arr = [0,1];
  let x;
  let ans = [];
  for(i=2;i<prod;i++) {
    x = (arr[i-1] + arr[i-2]);
    arr.push(x);
    if(x > prod) {
      break;
    }
  }
  for(j=0;j<arr.length;j++) {
    if(arr[j] * arr[j+1] == prod) {
      ans.push(arr[j],arr[j+1],true);
      return ans;
    } else if (arr[j] * arr[j+1] > prod) {
      ans.push(arr[j],arr[j+1],false);
      return ans;
    }
  }
}

//Confirm whether a given string contains all the letters of another given string

function scramble(str1, str2) {
  let arrOne = str1.split("");
	let arrTwo = str2.split("");
  let arr = [];
	for(i=0;i<str2.length;i++) {
    if(arrOne.includes(arrTwo[i])) {
      arr.push(arrOne.splice(arrOne.indexOf(arrTwo[i]),1));
    }
  }
  if(arr.join("") == str2) {
    return true
  } else 
    return false
}

//Return the number of times a given number can return into the sum of the algorithm

function digPow(n, p){
  let arr = n.toString().split("");
  let num = 0
  for(i=0;i<arr.length;i++) {
    num += arr[i] ** (p+i);
  }
  return num%n === 0 ? (num/n) : -1;
}

//Return missing letter from given array

function findMissingLetter(array) {
  let newArray = array.map(el => el.charCodeAt());
  for(i=1;i<newArray.length;i++) {
    if(newArray[i] != (newArray[i-1]+1)) {
      return String.fromCharCode(newArray[i] - 1);
    }
  }
}

//Calculate how many recipes can be fulfilled with available ingredients

function cakes(recipe, available) {
  let ans;
  for(const ingredients in recipe) {
    if(available[ingredients]/recipe[ingredients] < ans || ans == undefined) {
      ans = (available[ingredients]/recipe[ingredients]);
    }else if(available[ingredients] == undefined)
      return 0;
  }
  return Math.floor(ans);
}

//Break camelCase

// complete the function
function solution(string) {
  let arr = string.split("");
  for(i=1;i<arr.length;i++) {
    if(arr[i].toUpperCase() === arr[i] && arr[i-1].toLowerCase() === arr[i-1]) {
      arr.splice(i,0," ");
      i++;
    }
  }
  return arr.join("");
}

//Encode given string with Rot13 cipher

function rot13(message){
  let arr = message.split("").map(char => char.charCodeAt());
  for(i=0;i<arr.length;i++) {
    if(arr[i] >= 65 && arr[i] <= 77 || arr[i] >= 97 && arr[i] <= 109) {
    	arr.splice(i,1,String.fromCharCode(arr[i]+13))
    }else if(arr[i] >= 78 && arr[i] <= 90 || arr[i] >= 110 && arr[i] <= 122) {
      arr.splice(i,1,String.fromCharCode(arr[i]-13))
    }else 
      arr.splice(i,1,String.fromCharCode(arr[i]));
  }
  return arr.join("");
}

//Convert PascalCase to snake_case

function toUnderscore(string) {
	let arr = string.toString().split("");
  for(i=1;i<arr.length;i++) {
    if(arr[i] === arr[i].toUpperCase() && arr[i].match(/[a-z]/i)) {
      arr.splice((i),0,"_");
      i++;
    }
  }
  return arr.join("").toLowerCase();
}

//Return sum of two lowest numbers in given array

function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers.sort((a,b) => a - b)
  return sorted[0] + sorted[1]
}

//Confirm given PIN is useable

function validatePIN (pin) {
  if(pin.indexOf('\n') > -1) {
    return false;
  }
  let arr = pin.split("");
  for(i=0;i<arr.length;i++) {
    if(isNaN(arr[i]) || arr[i] < 0) {
      return false
    }
  }
  return (arr.length === 4 || arr.length === 6) ? true : false;
}

//Alphabetize while capitalizing the first of any specific character

function findChildren(dancingBrigade) {
	let arr = dancingBrigade.toLowerCase().split("").sort()
  arr[0] = arr[0].toUpperCase();
  for(i=1;i<arr.length;i++) {
    if(arr[i].toUpperCase() != arr[i-1].toUpperCase()) {
    	arr[i] = (arr[i].toUpperCase())
    }
  }
  return arr.join("");
}

//Return highest and lowest values in array 

function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)]
}

//Merge two sorted lists

function mergeSorted(list1,list2) {
  let ans = [];
  let mergedLength = list1.length + list2.length;
  while(ans.length < mergedLength) {
    if(list1[0] <= list2[0]) {
      ans.push(list1.splice(0,1));
    }else 
      ans.push(list2.splice(0,1))
  }
  return ans;
}

//Return true if one flower has even and one flower has odd number of petals

function lovefunc(flower1, flower2){
  return (flower1%2 !== flower2%2)
}