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