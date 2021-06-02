此项目是在学习了promise后，手写实现简单的promise功能，以助理解。
根据https://promisesaplus.com/ 文档，Promise的状态有等待态（pending），执行态（fulfilled），及拒绝态（reject）；并且一个promise必须提供一个then方法以访问其当前值、终值和据因......，根据文档要求，实现一个简单的promise，并在日后增加新的功能。

可以用下列形式调用promise方法：
```
new promise((resolve, reject) => {
    if(Math.random() > 5) {    //给定一个任意成功的条件
        resolve(1)
    }else {
        reject('failed')
    }
}).then(number => {
    console.log(number)
}, reason => {
    console.log(reason)
})
```