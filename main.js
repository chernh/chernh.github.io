//1
function preobr(str){
    return str - 1 + 1;
}

k = preobr("123");
console.log(k);
console.log(typeof(k));

//2
function pow (x, n){
    let res = x;
    if (n == 0){
        return 1;
    }
    for( let i = 1; i < n; i++){
        res = res * x;
         }
        return res;
    }
m = pow(2,0);
console.log(m);

//3

function del(num){
    for( let i = 1; i <= num; i++){
        if (num % i == 0){
            console.log(i);
        }
         }
}
res1 = del(10);
console.log(res1);

console.log("==================");

const toNum = v => +v;

const pow2 = (x, n) => 
    new Array(n)
    .fill(x)
    .reduce((a, v) => a * v, 1);

const del2 = max => 
    new Array(max)
    .fill(0)
    .map((_, i) => i + 1)
    .filter(v => max % v == 0)
    .map(v => (console.log(v), v));

console.log("toNum('245'):", toNum('245'));
console.log("pow2(2, 10):", pow2(2, 10));
console.log("del2(10):", del2(10));

