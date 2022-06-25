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

//Return all powers of 2 from 0 to given number

function powersOfTwo(n){
  let ans = []
  for(i=0;i<=n;i++) {
    ans.push(Math.pow(2,i))
  }
  return ans
}

//Return maximum subarray from given array

var maxSequence = function(arr){
  let maxSum = 0;
  let currentSum = 0;
	if((arr.filter(num => num >= 0)).length == 0) {
    return 0
  }else if((arr.filter(num => num >= 0)).length == arr.length) {
    return arr.reduce((a,b) => a + b)
  }
  for(i=0;i<arr.length;i++) {
  	currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum
}

//Calculate when population will exceed a given target based on parameters given

function nbYear(p0, percent, aug, p) {
  let count = 0
  let pop = p0
  while(pop < p) {
    pop += Math.floor(pop * (percent/100)) + aug
    count++
  }
    return count
}

//Find two numbers in given array that add up to given target

function twoSum(numbers, target) {
  let sum = 0
  for(i=0;i<numbers.length;i++) {
    for(j=(i+1);j<numbers.length;j++) {
      if(numbers[i] + numbers[j] === target) {
        return [i,j]
      }
    }
  }
}

//Convert given string to Title Case, skipping words in secondary string

function titleCase(title, minorWords) {
  let arr = title.split(" ")
  arr[0] = arr[0][0].toUpperCase() + arr[0].substring(1).toLowerCase()
  if(minorWords != undefined) {
  	let wordsArr = minorWords.toLowerCase().split(" ")
  	for(i=0;i<arr.length;i++) {
    	if(wordsArr.includes(arr[i].toLowerCase()) && i != 0) {
        arr.splice(i,1,arr[i].toLowerCase())
      	continue;
    	}else
      	arr.splice(i,1,arr[i][0].toUpperCase() + arr[i].substring(1).toLowerCase())
  	}
    return arr.join(" ")
  }else 
    return arr.map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(" ")
}

//Count smileys in given array

function countSmileys(arr) {
	let count = 0;
  for(i=0;i<arr.length;i++) {
    if(arr[i][0] == ":" || arr[i][0] == ";") {
      if(arr[i][1] == "D" || arr[i][1] == ")") {
      	count++
      }else if(arr[i][1] == "-" || arr[i][1] == "~") {
        if(arr[i][2] == "D" || arr[i][2] == ")") {
          count++
        }
      }
    }
  }
  return count
}

//Count sheep

var countSheep = function (num){
  let str = ''
  for(i=1; i<=num; i++) {
    str += `${i} sheep...`
  }
  return str
}

//Return sum of digits in given number

function sumDigits(number) {
  return Math.abs(number).toString()
                         .split("")
                         .reduce((a,b) => Number(a) + Number(b), 0)
}

//Count number of each character in given string

function count (string) {  
  let arr = string.split("")
  let obj = {}
  for(i=0;i<arr.length;i++) {
    if(!obj.hasOwnProperty(`${arr[i]}`)) {
      obj[arr[i]] = 1
    }else {
      obj[arr[i]] += 1
    }
  }
  return obj
}

//Return given number from 0-9 written out as a string

function switchItUp(number){
  const nums = {
    0 : "Zero",
    1 : "One",
    2 : "Two",
    3 : "Three",
    4 : "Four",
    5 : "Five",
    6 : "Six",
    7 : "Seven",
    8 : "Eight",
    9 : "Nine"
  }
  return nums[number]
}

//Only show elements in array up to given 'n' times

function deleteNth(arr,n){
  const obj = {}
  const ans = []
  for(i=0;i<arr.length;i++) {
  	if(!obj.hasOwnProperty(`${arr[i]}`)) {
      obj[arr[i]] = 1
      ans.push(arr[i])
      console.log(ans, i)
    } else {
      obj[arr[i]] += 1
    	if(obj[arr[i]] <= n) {
        ans.push(arr[i])
      }
    }
  }
  return ans
}

//Return all numbers in given range that when split and multiplied by the power of their string position add up to the initial value

function sumDigPow(a, b) {
  ans = []
  for(i=a;i<=b;i++) {
    if(i.toString().split("").map((num, ind) => num ** (ind + 1)).reduce((a,b) => a + b) == i) {
      ans.push(i)
    }
  }
  return ans
}

//Find the radius of the largest circle that can fit in the space created by a larger circle in a corner(Hard to explain without diagram)

function cornerCircle(r) {
  let ans = r * (3 - (2 * Math.SQRT2))
  return Math.round( ans * 100 + Number.EPSILON ) / 100
}

//Build a tower

function towerBuilder(n) {
  let space = ' '
  let asterisk = '*'
  let count = 1
  let floor = n - 1
  let ans = []
  for(i=1;i<=n;i++) {
    if(i == n) {
      ans.push(`${asterisk.repeat(count)}`)
    }else {
      ans.push(`${space.repeat(floor)}${asterisk.repeat(count)}${space.repeat(floor)}`)
      count += 2
      floor -= 1
    }
  }
  return ans
}

//Reverse given data in 8-bit segments

function dataReverse(data) {
  let ans = []
  while(data.length > 0) {
    ans.push(data[data.length - 8],data[data.length - 7],data[data.length - 6],data[data.length - 5],data[data.length - 4],data[data.length - 3],data[data.length - 2],data[data.length - 1])
    data.splice(data.length-8,8)
  }
  return ans
}

//Test password for length, Uppercase, Lowercase, and numberical characters

function validate(password) {
  const array = password.split("")
  const longEnough = (password.length >= 6)
  const lowerCase = array.filter(el => el == el.toLowerCase() && el.match(/[a-z]/i))
  const upperCase = array.filter(el => el == el.toUpperCase() && el.match(/[a-z]/i))
  const num = array.filter(el => el == el.match(/[0-9]/i))
  const containsLower = (lowerCase.length >= 1)
  const containsUpper = (upperCase.length >= 1)
  const containsNum = (num.length >= 1)
  if(longEnough && containsLower && containsUpper && containsNum) {
    return true
  } else
    return false
}

//Return a diamond of the given size

function diamond(n){
  if(n%2==0 || n < 0) {
    return null
  }
  const asterisk = '*'
  const space = ' '
  let diam = [`${asterisk.repeat(n)}\n`]
  let row = 1
  let spaces = Math.floor(n/2)
  for(i=1;i<=Math.floor(n/2);i++) {    		
    diam.splice(i,0,`${space.repeat(spaces)}${asterisk.repeat(row)}\n`)
    diam.splice(i-1,0,`${space.repeat(spaces)}${asterisk.repeat(row)}\n`)
		row+=2
    spaces--
  }
  diam.unshift('\n')
  return diam.join("")
}

//Find the longest concatenation of given "k" amount of strings

function longestConsec(strarr, k) {
	if(k > strarr.length || k <= 0) {
    return ""
  }
  let arr = strarr.map(el => el.length)
  let current = "";
  let max = "";
  let ans = 0;
  for(i=0;i<strarr.length;i++) {
    let newStrArr = [...arr]
    current = newStrArr.splice(i,k).reduce((a,b) => a + b)
    if(current > max) {
      max = current
      ans = i
    }
  }
  return strarr.splice(ans,k).reduce((a,b) => a + b)
}

//Return year that investment will exceed desired total

function calculateYears(principal, interest, tax, desired) {  
  let earnings;
  let count = 0
  while(principal < desired) {
    earnings = principal * interest
    principal += earnings
    principal -= tax * earnings
    count++
  }
  return count
}

//Help bookseller tally his stock

function stockList(listOfArt, listOfCat){
  const objList = {}
  let temp;
  let ans = [];
  for(i=0;i<listOfArt.length;i++) {
    temp = listOfArt[i].split(" ")
    if(!objList.hasOwnProperty(temp[0][0])) {
      objList[temp[0][0]] = Number(`${temp[1]}`)
    }else
      objList[temp[0][0]] += Number(`${temp[1]}`)
  }
  if(Object.values(objList).filter(num => num > 0).length === 0) {
    return ""
  }else {
  	for(i=0;i<listOfCat.length;i++) {
    	if(objList[listOfCat[i]] == undefined) {
      	ans.push(`(${listOfCat[i]} : 0)`)
    	}else
    		ans.push(`(${listOfCat[i]} : ${objList[listOfCat[i]]})`)
  	}
  }
  return ans.join(" - ")
}

//Capitalize and return meetings sorted by last name

function meeting(s) {
  let ans = []
  const arr = s.toUpperCase()
               .split(";")
               .map(name => name.split(":"))
               .map(name => name.reverse())
               .sort()
               .map(name => name.reverse())
  for(i=0;i<arr.length;i++) {
    ans.push(`(${arr[i][1]}, ${arr[i][0]})`)
  }
  return ans.join("")
}

//Return max product of two adjacent numbers in given array

function adjacentElementsProduct(array) {
  let current = array[0] * array[1]
  let max = current;
  for(i=1;i<array.length - 1;i++) {
    current = array[i] * array[i + 1]
    if(current > max) {
      max = current
    }
  }
  return max
}

//Return all given fractions reduced to lowest common denominator

function convertFrac(lst){
  if(lst.length == 0) {
    return ""
  }
  let temp = []
  let ans = []
  for(i=0;i<lst.length;i++) {
    temp.push(lst[i][1])
  }
  let denom = temp.reduce((a,b) => a * b)
  for(i=Math.max(...temp);i<=denom;i++) {
    let arr = []
    for(j=0;j<temp.length;j++) {
    	if(i%temp[j] == 0) {
        arr.push(i)
      }
    }
    if(arr.length == temp.length) {
      denom = arr[0]
      break
    }
  }
  for(i=0;i<lst.length;i++) {
    ans.push(`(${lst[i][0]*denom/lst[i][1]},${denom})`)
  }
  return ans.join("")
}

//Find opposite house number

function overTheRoad(address, n){
  const lastEvenHouse = n * 2
  const lastOddHouse = (n * 2) - 1
  if(address%2 == 0) {
    return Math.ceil((1-(address/lastEvenHouse)) * lastOddHouse) + 1
  }else
  	return Math.ceil((1-(address/lastOddHouse)) * lastEvenHouse) + 1
}

//Create a formula to solve when enough money will be saved for a new car

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percent) {
  if(startPriceOld >= startPriceNew) {
    return [0,startPriceOld - startPriceNew]
  }
  let savings = 0
  let months = 0
  while(savings + startPriceOld <= startPriceNew) {
    months++
    savings += savingperMonth
    if(months%2 === 0) {
      percent += 0.5
    }
    startPriceOld = startPriceOld * ((100 - percent)/100)
    startPriceNew = startPriceNew * ((100 - percent)/100)
  }
  return [months, Math.round((savings + startPriceOld) - startPriceNew)]
}

//Return the nth digit of a given number read right to left

var findDigit = function(num, nth){
  if(nth < 1) {
    return -1
  }else if (nth > Math.abs(num).toString().length || nth === undefined) {
    return 0
  }else {
    const newNum = Math.abs(num).toString()
    return Number(newNum[newNum.length - nth])
  }
}

//Return most common number in given array

function highestRank(arr){
	const obj = {}
  let mode =0;
  let number = 0;
  for(i=0;i<arr.length;i++) {
    if(!obj[arr[i]]) {
      obj[arr[i]] = 1
    }else 
      obj[arr[i]] += 1
  }
  for(let num in obj) {
    if(obj[num] >= mode && Number(num) > number) {
      mode = obj[num]
      number = num
    }
  }
  return Number(number)
}

//Remove requested amount of ! from string from left to right

function remove(s,n){
  let count = 0
  let arr = s.split("")
  for(i=0;i<arr.length;i++) {
    if(arr[i] == '!' && count < n) {
      arr.splice(i,1)
      count++
      i--
    }
  }
  return arr.join("")
}

//Return given array sorted with even numbers ascending followed by odd numbers descending with no duplicates

function menFromBoys(arr){
  let ans = []
  let even = []
  let odd = []
  for(i=0;i<arr.length;i++) {
    if(arr[i]%2 == 0) {
      even.push(arr[i])
    }else
      odd.push(arr[i])
  }
  const evenSet = new Set(even.sort((a,b) => a - b))
  const oddSet = new Set(odd.sort((a,b) => b - a))
  ans.push(...evenSet,...oddSet)
  return ans
}

//Find maximum difference between lengths of strings in two arrays

function mxdiflg(a1, a2) {
  if(a1.length < 1 || a2.length < 1) {
    return -1
  }
  const maxA = (a1.map(el => el.length).sort((a,b) => b - a))[0]
  const minA = (a1.map(el => el.length).sort((a,b) => a - b))[0]
  const maxB = (a2.map(el => el.length).sort((a,b) => b - a))[0]
  const minB = (a2.map(el => el.length).sort((a,b) => a - b))[0]
  return maxA - minB > maxB - minA ? maxA - minB : maxB - minA
}

//Remove duplicates of array, leaving last instances of number

function solve(arr) {
  for(i=arr.length-1;i>=0;i--) {
    if(i != arr.lastIndexOf(arr[i])) {
      arr.splice(i,1)
      i++
    }
  }
  return arr
}

//Count instances of elements in given array

function count(array){
  let ans = {}
  for(i=0;i<array.length;i++) {
    if(!ans[array[i]]) {
      ans[array[i]] = 1
    }else
      ans[array[i]] += 1
  }
  return ans
}

//Return largest average speed rounded down

function gps(s, x) {
  let max = 0
  for(i=0;i<x.length - 1;i++) {
    if((x[i+1] - x[i]) > max) {
      max = (x[i+1] - x[i])
    }
  }
  return Math.floor(max * (3600/s))
}

//Return array of numbers that are greater than the sum of every given number to the right of them

function arrayLeaders(numbers){
  const ans = []
  let temp;
  let arr = []
  for(i=0;i<numbers.length;i++) {
    arr = [...numbers]
    if(i < numbers.length - 1) {
    temp = arr.slice(i+1, numbers.length).reduce((a,b) => a + b)
    }
    if(arr[i] > temp || (i == numbers.length - 1 && arr[i] > 0)) {
      ans.push(arr[i])
    }
  }
  return ans
}

//Subtract sum of 'string' numbers from sum of numbers in given array

function divCon(x){
  const sumString = x.filter(num => typeof num == "string").map(num => Number(num)).reduce((a,b) => a + b, 0)
  const sumNum = x.filter(num => typeof num == "number").reduce((a,b) => a + b, 0)
  return sumNum - sumString
}

//Discover whether given number is 'Tidy'

function tidyNumber(n){
  const arr = n.toString().split("")
  for(i=1;i<arr.length;i++) {
    if(arr[i] < arr[i-1]) {
      return false
    }
  }
  return true
}

//Return pair in array that adds up to given sum

function sumPairs(ints, s) {
  let pairs = [];
  let temp = ints.length;
  let remainder = 0;
  let position = 0;
  for(i=0;i<ints.length-1;i++) {
    remainder = s - ints[i]
    position = ints.indexOf(remainder, (i + 1))
    if(position >= 0 && position < temp) {
      temp = position
      pairs = []
      pairs.push(ints[i], ints[position])
    }
  }
  return pairs.length == 0 ? undefined : pairs
}

//Count size of fish in pond after eating smaller or equal sized fish

function fish(shoal){
  let count = 0;
  let size = 1
  let growth = 4
  let school = shoal.split("").sort()
  for(i=0;i<school.length;i++) {
    if(size >= school[i]) {
      count += Number(school[i])
      if(count >= growth) {
        size++
        growth += size * 4
      }
    }else{
      break
    }
  }
  return size
}

//Return mature pairs of rabbits given birth rate and month count

function fib_rabbits(n, b) {
  let month = 0;
  let imPairs = 1;
  let matPairs = 0;
  let temp = 0;
  while(month < n) {
    temp = imPairs
    imPairs = (matPairs * b);
    matPairs += temp;
    month++
  }
  return matPairs
}

//Return next smallest number with given digits

function nextSmaller(n) {
  let arr = n.toString().split("")
  let temp = 0
  for(i=n - 1;i>=(10 ** (arr.length - 1));i--) {
    temp = i.toString().split("")
    if(temp.sort((a,b) => a - b).join("") == arr.sort((a,b) => a - b).join("")) {
      return i
    }
  }
  return -1
}

//Return whether a given number is a disarium or not

function disariumNumber(n){
  return Number(n.toString()
                 .split("")
                 .map((num,i) => num ** (i+1))
                 .reduce((a,b) => a + b)) == n ? "Disarium !!" : "Not !!"
}

//Entry level sudoku solver with 1 missing number per row

function sudokuer(puzzle) {
  let ordered = [];
  let missing = []
  for(i=0;i<puzzle.length;i++) {
    missing = []
    ordered = [...puzzle[i]].sort()
   	for(j=1;j<=ordered.length;j++) {
      if(!ordered.includes(j)) {
        missing.push(j)
      }
    }
    puzzle[i].splice(puzzle[i].indexOf(0),1,missing[0])
  }
  return puzzle
}

//Script a supermarket queue with given till number and wait time array

function queueTime(customers, n) {
  if(customers.length == 0) {
    return 0
  }
  if(n == 1) {
    return customers.reduce((a,b) => a + b)
  }
  if(n > customers.length) {
    return Math.max(...customers)
  }
  let arr = [...Array(n).keys()].fill(0)
  const time = [...Array(n).keys()].fill(0)
  while(customers.length > 0) {
    for(i=0;i<arr.length;i++) {
      if(arr[i] == Math.min(...arr) && customers.length > 0) {
      	arr = arr.map(customer => customer - arr[i])
        arr[i] = customers.shift()
        time[i] += arr[i]
      }
    }
  }
  return Math.max(...time)
}

//Return sum of numbers that are odd once cubed

function cubeOdd(arr) {
  if(arr.length == 0 || arr.filter(el => isNaN(el)).length != 0) {
    return undefined
  }else {
    const ans = arr.map(num => num ** 3).filter(num => num%2 != 0)
    return ans.length > 0 ? ans.reduce((a,b) => a + b) : 0
	}
}

//Create a multiplication grid of given size

multiplicationTable = function(size) {
  let arr = [...Array(size).keys()].map(num => ++num)
  let temp = []
  const ans = []
  for(i=1;i<=size;i++) {
  	temp = [...arr].map(num => num * i)
    ans.push(temp)
  }
  return ans
}

//Capitalize string based on given array of indices

function capitalize(s,arr){
  let split = s.split("")
  for(i=0;i<arr.length;i++) {
    if(arr[i] < s.length) {
    	split[arr[i]] = s[arr[i]].toUpperCase()
    }
  }
  return split.join("")
};

//Provide median, average, and range of times in array

function stat(strg) {
	const arr = strg.split(",").map(item => item.trim())
  let ans = arr.map(item => item.split("|"))
  for(i=0;i<ans.length;i++) {
    ans[i][0] = Number(ans[i][0]) * 3600
    ans[i][1] = Number(ans[i][1]) * 60
    ans[i][2] = Number(ans[i][2])
    ans[i] = ans[i].reduce((a,b) => a + b)
  }
  const ordered = [...ans].sort((a,b) => a - b)
  const range = ordered[ordered.length - 1] - ordered[0]
  const average = ([...ans].reduce((a,b) => a + b))/ans.length
  const median = ordered[Math.floor(ordered.length/2)]
  return `Range: ${Math.floor(range/3600)}|${Math.floor((range%3600)/60)}|${Math.floor((range%3600)%60)} Average: ${Math.floor(average/3600)}|${Math.floor((average%3600)/60)}|${Math.floor((average%3600)%60)} Median: ${Math.floor(median/3600)}|${Math.floor((median%3600)/60)}|${Math.floor((median%3600)%60)}`
}

//Return sum of triangular numbers

function sumTriangularNumbers(n) {
  temp = 0
  sum = 0
  for(i=0;i<n;i++) {
    temp += (1 + i)
    sum += temp
    console.log(temp, sum)
  }
  return sum
}

//Break up array into parts

function partlist(arr) {
  let ans = [...Array(arr.length-1).keys()]
  let tempOne;
  let tempTwo;
	for(i=0;i<arr.length-1;i++) {
    tempOne = arr.slice(0, i + 1).join(" ")
    tempTwo = arr.slice(i + 1).join(" ")
    ans[i] = [tempOne, tempTwo]
  }
  return ans
}

//Queue of beggars

function beggars(values, n){
  let ans = [...Array(n).keys()].fill(0);
 	if(ans.length == 0) {
    return ans
  }
  let count = 0;
  while(values.length > 0) {
    ans[count] += Number(values.splice(0,1))
    count++
    if(count >= ans.length) {
      count = 0
    }
  }
  return ans
}

//Check whether given number is STRONG!

function strong(n) {
  let arr = n.toString().split("") 
  let sum = 0;
  for(i=0;i<arr.length;i++) {
    let formula = [...Array(Number(arr[i])).keys()].map(item => ++item).reduce((a,b) => a * b, 1)
    sum += formula
  }
  return sum == n ? "STRONG!!!!" : "Not Strong!!"
}

//Find longest string of vowels

function solve(s){
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const arr = s.split("")
  let max = 0;
  let current = 0;
  for(i=0;i<arr.length;i++) {
    if(vowels.includes(arr[i])) {
      current++
    }else {
      if(current > max) {
        max = current
      }
      current = 0
    }
  }
  return max
 }

 //Sum of substrings of consonants in a row based on position in alphabet

 function solve(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let max = 0
  let current = 0
  const arr = s.split("")
  for(i=0;i<arr.length;i++) {
    if(!vowels.includes(arr[i])) {
      current += (arr[i].charCodeAt(0) - 96)
      if(current > max) {
        max = current
      }
    }else
      current = 0
  }
  return max
};

//How many pairs of gloves are there?

function numberOfPairs(gloves){
  const sorted = [...gloves].sort()
  let pairs = 0
  for(i=0;i<sorted.length;i++) {
    if(sorted[i] == sorted[i+1]) {
      pairs++
      sorted.splice(i,2)
      i--
    }
  }
  return pairs
}

//Navigate a journey of filth fever based on given dex and con

function filthFever(con,dex) {
  const conSave = Math.floor((con - 10)/2)
  let count = 0
  let saves = 0
  let dieRoll;
  let conDam;
  let dexDam;
  while(saves < 2) {
    dieRoll = Math.ceil(Math.random() * 20) + conSave
    conDam = Math.ceil(Math.random() * 3)
    dexDam = Math.ceil(Math.random() * 3)
    if(dieRoll >= 12) {
      saves++
      count++
    }else {
      saves = 0
      count++
      con -= conDam
      dex -= dexDam
    }
    if(con <= 0 || dex <= 0) {
      return `Succumbed to Filth Fever after ${count} days`
    }else if(saves == 2) {
      return `Survived a ${count} day ordeal with Filth Fever`
    }
  }
}

//Return number as string of written digits and simplify until length equals string value

function numbersOfLetters(integer) {
  const conversion = ['zero','one','two','three','four','five','six','seven','eight','nine']
  let arr = integer.toString().split("").map(num => conversion[Number(num)]).join("")
  const ans = [arr]
  while(arr.length.toString().split("").map(num => conversion[Number(num)]).join("") != arr) {
    arr = arr.length.toString().split("").map(num => conversion[Number(num)]).join("")
    ans.push(arr)
  }
  return ans
}

//Curry functions

function multiplyAll(arr) {
  return function(x) {
    return [...arr].map(num => num * x)} 
}

//Convert seconds to hours and minutes

function toTime(seconds) {
  const hours = Math.floor(seconds/3600)
  const minutes = Math.floor((seconds - (hours * 3600))/60)
  return `${hours} hour(s) and ${minutes} minute(s)`
}

//Reverse string and exclude any non-alphabetical characters

function reverseLetter(str) {
  return arr = str.split("").filter(char => char.match(/^[a-z]/gi)).reverse().join("")
}

//Drink enough water to avoid a hangover

function hydrate(s) {
  const drinks = s.split("").filter(char => char.match(/^[0-9]/)).reduce((a,b) => Number(a) + Number(b))
  return drinks == 1 ? `${drinks} glass of water` : `${drinks} glasses of water`
}

//Encode given string with given number

function encode(str,  n) {
  let arr = str.split("").map(char => char.charCodeAt(0)-96)
  const code = n.toString().split("")
  let count = 0
  for(i=0;i<arr.length;i++) {
    arr[i] += Number(code[count])
    count++
    if(count == code.length) {
      count = 0
    }
  }
  return arr
}

//Weigh given strings based on assigned values of exclamation points and question marks

function balance(left,right){
  let leftSum = left.split("")
  let rightSum = right.split("")
  for(i=0;i<leftSum.length;i++) {
    if(leftSum[i] == '!') {
      leftSum[i] = 2
    }else if(leftSum[i] == '?') {
      leftSum[i] = 3
    }
  }
  for(i=0;i<rightSum.length;i++) {
    if(rightSum[i] == '!') {
      rightSum[i] = 2
    }else if(rightSum[i] == '?') {
      rightSum[i] = 3
    }
  }
  leftSum = leftSum.reduce((a,b) => a + b)
  rightSum = rightSum.reduce((a,b) => a + b)
  return rightSum > leftSum ? 'Right' : leftSum == rightSum ? 'Balance' : 'Left'
}

//Return an array of 'n' length starting with 'x' value where each entry is the square of the previous

function squares(x, n) {
  if(n < 1) {
    return []
  }
  const ans = [x]
  for(i=1;i<n;i++) {
    ans.push(ans[i-1]**2)
  }
  return ans
}

//Return two highest distinct numbers in array

function twoHighest(arr) {
  const ans = new Set([...arr].sort((a,b) => b - a))
  return Array.from(ans).splice(0,2)
}

//Return number of times each digit occurs in string of numbers

var paintLetterboxes = function(start, end) {
  const arr = [...Array(end-start+1).keys()].map(num => start + num)
  let ans = [...Array(10).keys()].fill(0)
  let temp;
  for(i=0;i<arr.length;i++) {
    temp = arr[i].toString().split("")
    for(j=0;j<temp.length;j++) {
      ans[temp[j]]++
    }
  }
  return ans
}

//Switch case of every letter in string

function swap(str){
  let arr = str.split("")
  for(i=0;i<arr.length;i++) {
    if(arr[i] == arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase()
    }else if(arr[i] == arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase()
    }
  }
  return arr.join("")
}

//Split given string into requested size parts

var splitInParts = function(s, partLength){
  const ans = []
  let arr = s.split("")
  let temp;
  while(arr.length > partLength) {
    temp = arr.splice(0,partLength)
    ans.push(temp)
  }
  ans.push(arr)
  return ans.map(item => item.join('')).join(" ")
}

//Return count of uppercase, lowercase, numbers, and special characters

function solve(s){
  const ans = [0,0,0,0]
  const arr = s.split("")
  for(i=0;i<arr.length;i++) {
    if(arr[i].match(/^[A-Z]/)) {
      ans[0]++
    }else if(arr[i].match(/^[a-z]/)) {
      ans[1]++
    }else if(arr[i].match(/^[0-9]/)) {
      ans[2]++
    }else
      ans[3]++
  }
   return ans
 }

 //Count minimum times the lowest numbers of array need to be added to meet or beat the given value

 function minimumSteps(numbers, value){
  let count = 0
  const sorted = [...numbers].sort((a,b) => a - b)
  let sum = sorted[0]
  while(sum < value) {
    sum += sorted[count+1]
    count++
  }
  return count
}

//Remove any 9's that are alone between two 7's

function sevenAte9(str){
  const arr = str.split("")
  for(i=0;i<arr.length;i++) {
    if(arr[i] == '9' && (arr[i-1] == '7' && arr[i+1] == '7')) {
      arr.splice(i,1)
      i--
    }
  }
  return arr.join("")
}

//Return an array of given size, with alternating given values

function alternate(n, firstValue, secondValue){
  return [...Array(n).keys()].map((val,i) => i%2 == 0 ? val = firstValue : val = secondValue)
}

//Return prefilled array of 'n' length with 'v' values

function prefill(n, v) {
  if(typeof n === 'boolean') {
    throw new TypeError(`${n} is invalid`)
  }else if(n == 0) {
    return []
  }else if(!Number.isInteger(n) || n < 0) {
    throw new TypeError(`${n} is invalid`)
  }else
    return [...Array(n).keys()].fill(v)
}

//Return function where next number in series is sum of previous numbers

function sumOfN(n) {
  const arr = [0]
  let temp = 0
  for(i=1;i<=Math.abs(n);i++) {
    if(n < 0) {
      temp -= i
    }else {
      temp += i
    }
    arr.push(temp)
  }
  return arr
};

//Solve how much the next donation needs to be to raise the average donation to the given value

function newAvg(arr, newavg) {
  if(arr.length == 0) {
    return newavg
  }else if(newavg < arr.reduce((a,b) => a + b, 0)/arr.length) {
    throw new RangeError('Donations cannot be negative')
  }
  const totalDonors = arr.length + 1
  return Math.ceil((newavg * totalDonors) - arr.reduce((a,b) => a + b), 0)
}

//Return string with alternating upper and lower case letters

function toWeirdCase(string){
  const arr = string.split(" ")
  return arr.map(el => el.split("")
                         .map((el,i) => i%2==0 
                         ? el.toUpperCase() 
                         : el.toLowerCase())
                         .join(""))
                         .join(" ")
}

//Is number divisible by three?

function divisibleByThree(str){
  return (str.split("").reduce((a,b) => Number(a) + Number(b)))%3 == 0
}

//Return array with vowel positions in given string

function vowelIndices(word){
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y']
  return word.split("").map((el, i) => vowels.includes(el) 
                       ? el = i + 1: el)
                       .filter(el => Number.isInteger(el))
}

//Return either a vertical or horizontal mirror of given string based on called for function

function vertMirror(strng) {
  return strng.split("\n").map(el => el.split("").reverse().join("")).join("\n")
}
function horMirror(strng) {
  return strng.split("\n").reverse().join("\n")
}
function oper(fct, s) {
  return fct(s)
}

//Who wins the alphabet war?

function alphabetWar(fight){
  const values = {'w':4, 'p':3, 'b':2, 's':1,'m':-4, 'q':-3, 'd':-2, 'z':-1}
  const ans = fight.split("").map(el => values[el] ? values[el]: 0).reduce((a,b) => a + b)
  return ans == 0 ? "Let's fight again!" : ans < 0 ? "Left side wins!" : "Right side wins!"
}