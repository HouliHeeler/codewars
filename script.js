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