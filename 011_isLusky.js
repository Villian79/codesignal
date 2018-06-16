function isLucky(n) {
    let arr = n.toString();
    let end = arr.length;
    
    let firstHalf = 0, secondHalf = 0;
    
    for(let i = 0; i < end; i++){
        i < (end / 2) ? firstHalf += +arr[i] : secondHalf += +arr[i];
    }

    return firstHalf === secondHalf;
}

isLucky(303600);