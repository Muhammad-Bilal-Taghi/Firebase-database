
// function Student (name,roll) {
//     this.name = name;
//     this.roll = roll
//     this.getName = function () {
//            return this.name
//     }
// }

// Student.prototype.getName = function ()
// {
//     return this.name
// }

// var Student1 = new Student("bilal", 925949);
// var Student2 = new Student("Junaid", 925946);

// console.log (Student1);
// console.log (Student2);

// var student2 = {
//     name : "habiba",
//     roll : 12
// }
// var student3 = {
//     name : "Maryam",
//     roll: 15
// }

// console.log ("roll" in student2, "roll" in student3)

// var myQuestions = [
//     {
//         question1 : "What is the full form of HTML",
//         answer : {
//             a : "Hyper text markup language",
//             b :  "Hyper title mashup language",
//             c :  "Hyper todo markup language",
//             d :   "Hypothesis testing modal language",
//         }, 
//         correctAnswer : "a"
//     },
//     {
//         question2 : "What is the full form of CSS",
//         answer : {
//             a : "Casino Style Sheet",
//             b :  "Cascadine Style Sheet",
//             c :  "Cash Styling Shape",
//             d :   "Car Styling shadow",
//         }, 
//         correctAnswer : "b"
//     },
//     {
//         question3 : "What is the full form of JS",
//         answer : {
//             a : "jallyStyle",
//             b :  "javastyle",
//             c :  "Javastyling",
//             d :   "Javascript",
//         }, 
//         correctAnswer : "d"
//     },
//      {
        
//             question4 : "Javascript is called the object oriented programming",
//             answer : {
//                 a : "False",
//                 b :  "either True nor False",
//                 c :  "True",
//                 d :   "None of them",
//             }, 
//             correctAnswer : "c"
//         },
//         {
//             question4 : "What is the tag of link to one page to another page?",
//             answer : {
//                 a : "a href",
//                 b :  "a link",
//                 c :  "Both a and B",
//                 d :   "None of them",
//             }, 
//             correctAnswer : "c"
//         },
//     ]
//         function Questions (Q1,Q2,Q3,Q4,Q5) {
//             this.Q1 = Q1;
//             this.Q2 = Q2;
//             this.Q3 = Q3;
//             this.Q4 = Q4;
//             this.Q5 = Q5;
//         }

        
        // var question1 = new Questions("What is your Name?", );
        // var question2 = new Questions("What is your Age?",  20,25,30);
        // console.log("Questions")
        
    function login() {
        var name = document.getElementById("name");
        var pass = document.getElementById("pass");

        var student = {
            name : name.value,
            pass : pass.value,
            
        }
                      //In dono me se koi bhe use kr sakte hen//        
                      //1st method with child//
       //  firebase.database().ref('schooldata').child("class1").set(student)
                      //2nd and easy method without child//
           
    //     firebase.database().ref('schooldata/class1').set(student)
        //      .set data ko override kr deta he tw us k liye .push use karen gen
    
    //           firebase.database().ref('schooldata/class1/todaypresent').push(student)
    
                      // khud xe random key Generate karne ka tariqa//  
                             var key = Math.random() * 178;
    
    
         firebase.database().ref('schooldata/students/class1' + key.toFixed() ).set(student)
    }                  
                               //Firebase xe data get karne ka tareqa//
                     // Es k do tareqe hen  1) Once   2) On 
             // 1) Once (Once ek bar data la kar deta he. Wr ye do parameter leta he phela value wr dosra
              //  function
              //
        //         function getData(){       
        // firebase.database().ref('schooldata/students/class144').once('value', function(data){
        //     console.log(data.val())
                
         //       2) On (On jb bhe database me change ay ga wo without refresh kare bagharir 
                        //  data la kr de ga)
    //         function getData(){       
    //             firebase.database().ref('schooldata/students').on('child_added', function(data){
    //                 console.log(data.val())
        
        
    //     })
                
    // }                                       
    
    // getData()

                          //            Remove Data             //
    // function removeData() {
    //       firebase.database().ref('schooldata/students/class145').remove()
    // }

    // removeData()


                          //                Edit                //
    function editData() {
    firebase.database().ref('schooldata/students/class1123').set({
                  name : "Asif",
                  pass : '56897',
    })
                      }
                  
    editData()
                  