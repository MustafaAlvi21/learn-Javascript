/* --------------------------- */
/*           Object            */
/* --------------------------- */
console.log('\n--------------- Object --------------')

obj1 = {
    name : "ali",
    id : 826,
    sec : 'B',
    // array1: [1,2,3,4,5],
    // obj2: {
    //     name: 'asad',
    //     id : 21313,
    //     sec: 'B',
    //     Class: "fazool"
    // }
}

const markSheetData = {
    name : 'Mustafa',
    sec : 'B',
    roll_no : 216,
    eng_marks : 90,
    urduMarks : 80,
    mathmarks : 60,
    total_Marks : 100 + 100 + 100,
}
total_obtained = markSheetData.eng_marks + markSheetData.urduMarks + markSheetData.mathmarks,
percentage = (total_obtained * 100) / markSheetData.total_Marks 

// console.log(markSheetData);
// console.log(total_obtained);
// console.log(percentage);


// Write a JavaScript program to display the reading status (i.e. display book name,
//  author name and reading status) of the following books. Go to the editor

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];


   library.forEach(element => {
       status = element.readingStatus
    //    console.log(status)
       if (status == true) {
        console.log('Already read ' + element.author + element.title);
    } else {
        console.log("You still need to read " + element.author + element.title);
    }
   });


//  'Bill Gates' by The Road Ahead.
// Already read 'Steve Jobs' by Walter Isaacson.
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.