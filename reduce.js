function extractValue(arr, key){
    return arr.reduce((acum, next)=>{
        acum.push(next[key]);
        return acum
    },[])
}

function vowelCount(str){
    let vowels = 'aeiou';
    return str.split('').reduce((acum,next)=>{
        let lowerCase = next.toLowerCase()
        if(vowels.indexOf(lowerCase) !== -1){
            if(acum[lowerCase]){
                acc[lowerCase]++;
            }else{
                ac[lowerCase] = 1
            }
        }
        return acum;
    }, {})
}

function addKEyAndValue(arr,key,value){
    return arr.reduce((acc,next,idx)=>{
        acc[idx][key]=value;
        return acc;
    },arr)
}

function partition(arr,callback){
    return arr.reduce((acc,next)=>{
        if(callback(next)){
            acc[0].push(next);
        }else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}