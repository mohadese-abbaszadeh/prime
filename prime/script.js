
let m=[];
for(let a = 1; a <= 100; a++){
    m.push(a);
}

let isPrime=true;
let n=3;
let i=2;
while(i < n){
    if (n % i == 0) {
        isPrime = false;
    }
    i++;
}
console.log(n,isPrime);
