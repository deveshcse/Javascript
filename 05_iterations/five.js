// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item){
    // console.log(item);
    
});

// coding.forEach( function (item, index, array){
//     console.log(item, index, array);
    
// });

coding.forEach( (value)=> {
    // console.log(value);
    
})

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
    
})
