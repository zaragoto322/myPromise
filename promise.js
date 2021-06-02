class promise {
    constructor(fn) {
        this.state = 'pending'
        this.succeed = null
        this.fail = null

        fn(this.resolve.bind(this), this.reject.bind(this))
    }

    resolve(result) {
        if(state === 'pending') {
            setTimeout(()=>{
                this.state = 'fullfilled'
                this.succeed(result)
            })
        }else {
            console.log('state error')
        }
    }

    reject(reason) {
        if(state === 'pending') {
            setTimeout(()=> {
                this.state = 'reject'
                this.fail(reason)
            })
        }else {
            console.log('state error')
        }
    }

    then(succeed, fail) {
        this.succeed = succeed
        this.fail = fail
    }
}