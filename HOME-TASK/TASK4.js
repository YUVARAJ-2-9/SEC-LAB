
function reverseWordsInSentence(sentence) {
    return sentence
        .split(" ")       
        .reverse()        
        .join(" ");       
}


function removeDuplicates(array) {
    return [...new Set(array)];
}


function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}




let sentence = "I am learning JavaScript";
console.log("Original Sentence:", sentence);
console.log("Reversed Words:", reverseWordsInSentence(sentence));

let numbers = [1, 2, 3, 2, 4, 1, 5];
console.log("Original Array:", numbers);
console.log("Without Duplicates:", removeDuplicates(numbers));

let text = "Hello Yuvaraj, Keep Hustling!";
console.log("Input String:", text);
console.log("Vowel Count:", countVowels(text));
