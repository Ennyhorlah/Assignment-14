
 // async function
     async function helloWorld() {
        throw new error ('hi')
     }

     async function main() {
        try {
            await helloWorld()  
        }  catch (error) {
            console.log(error);
        }
     }


 // Promise.all()
     function Promise1(x, y) {
        return new Promise((resolve, reject) => {
            let sum = a + b;
            if (sum > 8){
                resolve(sum);
            } else {
                reject("sum not greater than 8");
            }
        })
     }
    
     function Promise2(x, y) {
        return new Promise((resolve, reject) => {
            let sub = x - y;
            if (sub > 0){
                resolve("Positive Number");
            } else {
                reject("Negative Number");
            }
        })
     } 

     Promise.all([Promise1(3,7), Promise2(8,5)])
       .then((value) => {
        console.log("Success: ", value);
       })
        .catch((error) => {
            console.log("Failure: ", error);
        })


// setTimeout
    function printHello() {
        setTimeout(() => {
            console.log("Hello");
        }, 2000);
    }


// setInterval
function readNovel() {
    console.log("Tales of two sisters")
}

const novelInterval = setInterval(readNovel, 5000);

// After 5 seconds, stop reading novels
setTimeout(() => {
    clearInterval(novelInterval);
    console.log("No more novels");
}, 5000);


// Promise-based function
function myError(name) {
    return new Promise((resolve, reject) => {
        if (name.includes("F")) {
            resolve("I contain 'F")
        } else {
            reject("I donot contain 'F")
        }
    })
}

myError("Farming")
 .then((message) => {
    console.log("Success:", message);
    throw new Error("I contain F but I am not Fatima")
 })
 .catch((error) => {
    console.log("Failure:", error);
 })


 // CallBack function
 function multiply(num1, num2, cb) {
    let result = num1 * num2;
    console.log("Multiply Function Result:" , result);
    cb(result);
 }
 multiply(6, 5);



// await
function age_num(age) {
    return new Promise((resolve, reject) => {
        if (age > 0) {
            resolve(age);
        } else {
            reject("age cannot be 0 or negative");
        }
    })
 }

 async function check_age() {
    try {
        const result = await
        age_num(50);
    
            console.log(result);  
    }  catch (error) {
        console.log(error);
    }

 }


 // chain two Promises
 function addPromise() {
    return new Promise((resolve, reject) => {
        let sum = a + b;
        if (sum > 5){
            resolve(sum);
        } else {
            reject("sum not greater than 5");
        }
    })
 }

 function mulPromise(a, b) {
    return new Promise((resolve, reject) => {
        let mul = a * b;
        if (mul > 5){
            resolve(mul);
        } else {
            reject("Mul not greater than 5");
        }
    })
 }

 addPromise(2, 8);
 mulPromise(2, 8);


 addPromise(2, 7)
    .then((value) => {
        console.log("Success:", value);
        return mulPromise(1, 9);
    })
    .then((num) => {
        console.log("Success: ", num);
    })
    .catch((error) => {
        console.log("Failure: ", error);
    })


//error handling
function myPromise(name) {
    return new Promise((resolve, reject) => {
        if (name.includes("R")) {
            resolve("I contain 'R'")
     } else {
          reject("I donot contain 'R'")
      }
   })
}

myPromise("Rust")
 .then((message) => {
 console.log("Success:", message);
 })
 .catch((error) => {
  console.log("Failure:", error);
 })


//callBack Hell
function asyncFunction1(callback) {
    setTimeout(() => {
      console.log("Async Function 1 Done");
      callback();
    }, 2000);
  }
  
function asyncFunction2(callback) {
    setTimeout(() => {
      console.log("Async Function 2 Done");
      callback();
    }, 2000);
  }
  
function asyncFunction3(callback) {
    setTimeout(() => {
      console.log("Async Function 3 Done");
      callback();
    }, 2000);
  }

asyncFunction1(() => {
  asyncFunction2(() => {
    asyncFunction3(() => {
     console.log("All Async Functions Completed");
      });
    });
  });
 