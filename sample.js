// 再宣言-------------------

// // varによる再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// letによる再宣言
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// // constによる再宣言
// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

// -------------------------

// 再代入 ------------------
// // varによる再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// // letによる再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// // constによる再代入
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// --------------------------

// scope -------------------
// var scope
// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)

//let scope
// function foo() {
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// for (let i = 0; i < 10; i++) {     
//   console.log(i) 
// }

// console.log(i)

// ---------------------------

// 変数巻き上げ --------------
var str = "webcamp"

function foo() { 
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()

// ----------------------------