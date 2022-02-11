/*
1) Write two functions:

- One to retrieve all unique substrings that start and end with a vowel.
- One to retrieve all unique substrings that start and end with a consonant.
The resulting array should be sorted in lexicographic ascending order (same order as a dictionary).

Examples:
getVowelSubstrings("apple")
--> ["a", "apple", "e"]

getVowelSubstrings("hmm") --> []

getConsonantSubstrings("aviation")
--> ["n", "t", "tion", "v", "viat", "viation"]

getConsonantSubstrings("motor")
-->["m", "mot", "motor", "r", "t", "tor"]

Notes:
- Remember the output array should have unique values.
- The word itself counts as a potential substring.
- Exclude the empty string when outputting the array.
*/

function getVowelSubstrings(s){
    result=[];
    vowel=['a','e','i','o','u'];
    for(let i=0; i<s.length;i++){
        let sub=s.slice(i,s.length);
        for(let j=0; j<=sub.length;j++){
            let subsub=sub.slice(0,j);
            if(vowel.includes(subsub.charAt(0)) && vowel.includes(subsub.charAt(subsub.length-1))){
                if(!result.includes(subsub))
                    result.push(subsub);
            }
        }
    }
    return result.sort();
}
function getConsonantSubstrings(s){
    result=[];
    vowel=['a','e','i','o','u'];
    for(let i=0; i<s.length;i++){
        let sub=s.slice(i,s.length);
        for(let j=1; j<=sub.length;j++){
            let subsub=sub.slice(0,j);
            if(!(vowel.includes(subsub.charAt(0)) || vowel.includes(subsub.charAt(subsub.length-1)))){
                if(!result.includes(subsub))
                    result.push(subsub);
            }
        }
    }
    return result.sort();
}
console.log("_________________Question One________________");
console.log("getVowelsubstrings(apple):  ");
console.log(getVowelSubstrings("apple"));
console.log("getVowelsubstrings(hmm):  ");
console.log(getVowelSubstrings("hmm"));
console.log("getConsonantSubstrings(aviation):  ");
console.log(getConsonantSubstrings("aviation"));
console.log("getConsonantSubstrings(motor):  ");
console.log(getConsonantSubstrings("motor"));


/*
2) Write a function redundant that takes in a string 'str' and returns a function that returns 'str'.

Examples
const f1 = redundant("apple")
f1() --> "apple"

const f2 = redundant("pear")
f2() --> "pear"

const f3 = redundant("")
f3() -->""

Notes:
Your function should return a 'function', not a string.
*/

function redundant(s){
    let f=function(){
        return s;
    }
    return f;
}
console.log("_________________Question Two________________");
const f1=redundant("apple");
console.log("const f1=redundant(apple) type=>");
console.log(typeof f1)
console.log("f1() returns: "+f1());
const f2 = redundant("pear")
console.log("const f2=redundant(pear) type=>")
console.log(typeof f2)
console.log("f2() returns: "+f2());
const f3 = redundant("")
console.log("const f3=redundant('') type=>")
console.log(typeof f3)
console.log("f3() returns: "+f3());