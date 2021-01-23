/*
    노드에서 this를 사용할 때 주의해야 할 점
    최상위 스코프에 존재하는 this는 module.exports 또는 exports를 의미합니다
    함수 내부에 존재하는 this는 global 객체를 의미합니다.
*/

console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
    console.log("function",this === exports, this ===global);
}
whatIsThis();