// //ES6
// const fruit = ["banana", "apple", "orange", "watermelon"];
// const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// vegetables.pop();

// fruit.shift();

// const orangeIndex = fruit.indexOf("orange");

// fruit.push("orange");

// const vegetablesLength = vegetables.length;

// vegetables.push(vegetablesLength);

// let food = [...fruit, ...vegetables];

// let x= food.splice(4, 2);


// food.reverse();

// const result = food.join(",");

// console.log(result);


//task1

splitw = x => x.split(" ")
console.log(splitw("Orange Jordan"))

//task2

phone = p=>( "*******"+ p.slice(-3))
console.log(phone("0776807777"))

//task3

const hideEmail = email=> {
    const [username, domain] = email.split("@");
    const hiddenUsername = username.slice(0, 6) + "...";
    return hiddenUsername + "@" + domain;
  }
  console.log(hideEmail("orange_academy@orange.jo"))


  //task4
  const capitalize=sentence=> {
    return sentence
      .split(" ") 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(" ");
  }
  console.log(capitalize("coding academy by orange"));

  //task6
 
  const Number = num=> {
    return num.toString().split("").reverse().join("");
  }
  console.log(Number(92485)); 

  //task7

const  swap1=(a,b)=>{
  let  x=a
  a=b
  b=x
  return{a,b}
}
console.log(swap1(3,4))


const  swap2=(a,b)=>{
     a = a+b
    b = a-b
    a = a-b
    return{a,b}
  }
  console.log(swap2(3,4))

  const  swap3=(a,b)=>[b,a]
  
  console.log(swap3(3,4))


//task8

const  remove=(str, index)=> {
    let arr = str.split(''); 
    arr.splice(index,1); 
    return arr.join(''); 
  }
  console.log(remove("Orange", 3)); 
  
 
  


//task9
let concat =(str1, str2)=> {
    return str1.slice(1) + str2.slice(1);
  }

  console.log(concat("lora","inge" ));
 
  //task10
const Chare=(char, str)=> {
    return str.startsWith(char) || str.endsWith(char);
  }
  
  console.log(Chare("o", "orange"));
  console.log(Chare("z", "orange")); 


  //task11

 
 const toWords= s =>{
    return s.split(" ");
  }
  console.log( toWords("Coding Academy by Orange")); 

  //task12

const m = str => {
    return str.toLowerCase().split("").sort().join("");
  }
console.log(m("Orange")); 

//task13

const measure = y => {
    const start = performance.now();
   y();
    const end = performance.now();
    return `${end - start} ms`;
};

const Example = () => {
    for (let i = 0; i < 1000000; i++) {}
};

console.log(measure(Example)); 



