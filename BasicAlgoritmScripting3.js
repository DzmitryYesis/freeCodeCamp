function factorialize(num) {
    if(num===0){
        return 1
    } else {
        let fact=1
        for (let i=1; i<=num; i++){
            fact*=i
        }
        return fact
    }
}

factorialize(5);