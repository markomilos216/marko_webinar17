for(let i = 1990; i<=2030; i++){
    let yearOfBirth = 1997;
    if(i == yearOfBirth){
        if(i % 100 == 0 && i % 400 == 0 && i % 10 == 0 || i % 4 == 0 && i % 10 == 0){
            console.log("N P O " + i);
        }else if (i % 100 == 0 && i % 400 == 0 || i % 4 == 0){
            console.log("N P " + i);
        }else if (i % 10 == 0){
            console.log("N O " + i);
        }else{
            console.log("N " + i);
        }
    }else if(i % 100 == 0 && i % 400 == 0 && i % 10 == 0 || i % 4 == 0 && i % 10 == 0){
        console.log("P O " + i);
    }else if(i % 100 == 0 && i % 400 == 0 || i % 4 == 0){
        console.log("P " + i);
    }else if(i % 10 == 0){
        console.log("O " + i);
    }else{
        console.log(i);
    }
}