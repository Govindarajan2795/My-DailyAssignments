function checknumber(num){
    let number=num;

    if(number>0){
        return "The given number is positive";
    }
    else if(number<0){
        return "The given number is negative";
        }
        else{
            return "The given number is nuetral";
            
        }
}
        
console.log(checknumber(2));
console.log(checknumber(-2));
console.log(checknumber(0));

    
