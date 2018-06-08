function currying(fn,n){
    return function(m){
        return fn.call(this,m,n);
    }
}
