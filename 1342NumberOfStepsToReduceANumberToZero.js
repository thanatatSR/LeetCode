const numberOfSteps = (num) => {
    if (typeof(num) !== 'number') {
        return 'Please insert a number';
    }
    
    let count = 0;
    
    while (num !== 0) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num--;
        }
        count++;
    }
    
    return count;
}
