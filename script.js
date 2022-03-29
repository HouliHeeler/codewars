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