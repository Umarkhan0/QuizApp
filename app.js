let sec = 59;
let min = 1;
let user = 0;
function loginPag() {
    let firstNmae = document.getElementById("firstNmae");
    let lastNmae = document.getElementById("lastName");
    let email = document.getElementById("email");
    let passwod = document.getElementById("password");
    let emailPattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    if (emailPattern.test(email.value) 
    &&
     firstNmae.value.trim() !== "" 
     &&
      lastNmae.value.trim() !== "" 
      &&
       passwod.value.trim() !== "") {
        user++
        localStorage.setItem(
            `user${user}`, JSON.stringify(obj = {
                firstName: `${firstNmae.value}`,
                lastName: `${lastNmae.value}`,
                email: `${email.value}`,
                passwod: `${passwod.value}`
            }
            ))
        let wewWin = window.open("quiz.html");
        wewWin.onload = function () {
            let getObject = JSON.parse(localStorage.getItem(`user${user}`))
            wewWin.document.getElementById("proName").innerHTML = `
            ${getObject.firstName} ${getObject.lastName}`;
            wewWin.document.getElementById("wellcome").innerHTML = `
            Welcome, ${getObject.firstName}`
        }
        firstNmae.value = "";
        lastNmae.value = "";
        email.value = "";
        passwod.value = "";
    } 
    else {
        swal({
            title: "Plese fill out this feild",
            text: "Please enter a valid email address",
            icon: "error",
            button: "OK",
        });
    }
}
function log() {
    let logEmail = document.getElementById("ligEmail");
    let logPassword = document.getElementById("logPassword");
    for (var i = 1; i < localStorage.length + 1; i++) {
        let localget = JSON.parse((localStorage.getItem(`user${i}`)));
        if (logEmail.value == localget.email 
            &&
             logPassword.value == localget.passwod 
             &&
              logEmail.value.trim() !== "" 
              &&
               logPassword.value.trim() !== "") {
            swal("Log in!", "You clicked the button!", "success");
            logEmail.value = "";
            logPassword.value = "";
            break;
        }
        else {
            swal({
                title: "Rong password user name",
                text: "Please enter a valid email & User name",
                icon: "error",
                button: "OK",
            });
        }
    }
}
function back() {
    document.getElementById("card-print").innerHTML = `
    <div class="login">
    <div class="input-item">
        <input type="email" placeholder="Email" id="ligEmail">
        <input  type="password" placeholder="password" id="logPassword">
    </div>
    <button class="log-btn" onclick="log()">Log in</button>
    <a href="#" class="forget">Forgotten password?</a>
    <hr />
    <button class="sing-uo-btn" onclick="loginPage() ">Create a new account</button>
</div>
    `
}
function chooseQuiz() {
    document.getElementById("wellcome").innerHTML = `
    Web and mobile hybrid app develpment<sub> (3 Subjects)</sub>`
    document.getElementById("cardContainer").remove()
    document.getElementById("selsct").innerHTML = `
   <div id="buttons">
   <button class="buttonClass" onclick="HTML()">HTML Quiz</button>
   <button class="buttonClass" onclick="JavascriptQuiz()">Javascript Quiz</button>
   <button class="buttonClass" onclick="CSS()">CSS3 Quiz</button>
</div>
   `
}
function HTML() {
    document.getElementById('buttons').remove()
    document.getElementById("cardContain").innerHTML = `
<div class="cardContainer" id="cardContainer">
<table>
<tr>
 <td class="bold">Quiz name</td>
 <td>HTML Quiz</td>
</tr>
<tr>
 <td class="bold">Total questions</td>
 <td>12</td>
</tr>
<tr>
 <td class="bold">Question time</td>
 <td>02 mins</td>
</tr>
<tr>
 <td class="bold">Passing score</td>
 <td>51</td>
</tr>
</table>
<center>
<input type="password" id="testKey"onkeyup="checkInput()" class="testKey" placeholder="html">
<br>
<button class="btn" id="contieBut" disabled onclick="continuhtml()"> Continue
</button></center>
</div>
`
}
function CSS() {
    document.getElementById('buttons').remove()
    document.getElementById("cardContain").innerHTML = `
<div class="cardContainer" id="cardContainer">
<table>
<tr>
 <td class="bold">Quiz name</td>
 <td>CSS Quiz</td>
</tr>
<tr>
 <td class="bold">Total questions</td>
 <td>12</td>
</tr>
<tr>
 <td class="bold">Question time</td>
 <td>02 mins</td>
</tr>
<tr>
 <td class="bold">Passing score</td>
 <td>51</td>
</tr>
</table>
<center>
<input type="password" id="testKey"onkeyup="checkInput()" class="testKey" placeholder="css">
<br>
<button class="btn" id="contieBut" disabled onclick="continuCSS()"> Continue
</button></center>
</div>
`
}

function JavascriptQuiz() {
    document.getElementById('buttons').remove()
    document.getElementById("cardContain").innerHTML = `
<div class="cardContainer" id="cardContainer">
<table>
<tr>
 <td class="bold">Quiz name</td>
 <td>Javascript Quiz</td>
</tr>
<tr>
 <td class="bold">Total questions</td>
 <td>12</td>
</tr>
<tr>
 <td class="bold">Question time</td>
 <td>02 mins</td>
</tr>
<tr>
 <td class="bold">Passing score</td>
 <td>51</td>
</tr>
</table>
<center>
<input type="password" id="testKey"onkeyup="checkInput()" class="testKey" placeholder="java">
<br>
<button class="btn" id="contieBut" disabled onclick="continu()"> Continue
</button></center>
</div>
`
}
function checkInput() {
    var input = document.getElementById('testKey');
    var button = document.getElementById('contieBut');
    if (input.value !== "") {
        button.disabled = false;

    } else {
        button.disabled = true;

    };
};
let JavaScriptQuiz = [
    "",
    {
        Question: "Inside which HTML element do we put the JavaScript?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "<javascript>",
                    "<script>",
                    "</js>",
                    "<scripting>"
                ],
            }
        ]
    },
    Question2 = {
        Question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        correctOption: 1,
        answer: [
            {
                options: [
                    "document.getElementByName('p') .innerHTML = 'Hello World!';",
                    "document.getElementById('demo').innerHTML = 'Hello World!'",
                    "document.getElement('p') .innerHTML = 'Hello World!';",
                    "#demo.innerHTML = 'Hello World!'",
                ],
            }

        ]
    },
    Question3 = {
        Question: "Where is the correct place to insert a JavaScript?",
        correctOption: 3,
        answer: [
            {
                options: [

                    "The <body> section",
                    "Both the <head> section and the <body> section are correct ",
                    "The <head> section",
                    "</js>",
                ],
            }

        ]
    },
    Question4 = {
        Question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "<script name='xxx.js'>",
                    "<script src='xxx.js'>",
                    "<script href='xxx.js'>",
                    "None of thses"
                ],
            }
        ]
    },
    Question5 = {
        Question: "The external JavaScript file must contain the <script> tag.",
        correctOption: 1,
        answer: [
            {
                options: [
                    "False",
                    "True",
                    "None of thses",
                    "All of thses"
                ],
            }
        ]
    },
    Question6 = {
        Question: "How do you write 'Hello World' in an alert box?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "alertBox('Hello World');",
                    "alert('Hello World');",
                    "msg('Hello World');",
                    "msgBox('Hello World');",


                ],
            }

        ]
    },
    Question7 = {
        Question: "How do you create a function in JavaScript?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "function:myFunction()",
                    "function myFunction()",
                    "function = myFunction()",
                    "msgBox('Hello World');"
                ],
            }
        ]
    },
    Question8 = {
        Question: "How do you call a function named 'myFunction'?",
        correctOption: 1,
        answer: [
            {
                options: [
                    "myFunction()",
                    "call function myFunction()",
                    "call myFunction()",
                    "None of thses"
                ],
            }
        ]
    },
    Question9 = {
        Question: "How to write an IF statement in JavaScript?",
        correctOption: 1,
        answer: [
            {
                options: [
                    "if (i == 5)",
                    "if i = 5 then",
                    "if i = 5",
                    "if i == 5 then",
                ],
            }
        ]
    },
    Question10 = {
        Question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        correctOption: 2,
        answer: [
            {
                options: [

                    "if i =! 5 then",
                    "if (i != 5) ",
                    "if (i <> 5)",
                    "if i <> 5"
                ],
            }
        ]
    },
    Question11 = {
        Question: "How does a WHILE loop start?",
        correctOption: 1,
        answer: [
            {
                options: [
                    "while (i <= 10)",
                    "while (i <= 10; i++)",
                    "if (i <> 5)",
                    "while i = 1 to 10"
                ],
            }
        ]
    },
    Question12 = {
        Question: "How does a FOR loop start?",
        correctOption: 3,
        answer: [
            {
                options: [
                    "for (i <= 5; i++)",
                    "for (i = 0; i <= 5)",
                    "for i = 1 to 5",
                    "for (i = 0; i <= 5; i++)"

                ],
            }

        ]
    }, ""
]

let html = [
    "",
    {
        Question: "What does HTML stand for?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "Home Tool Markup Language",
                    "Hyper Text Markup Language",
                    "Hyperlinks and Text Markup Language",
                    "None of thses"

                ],
            }
        ]
    },



    Question2 = {
        Question: "Who is making the Web standards?",
        correctOption: 1,
        answer: [
            {
                options: [
                    "The World Wide Web Consortium",
                    "Mozilla",
                    "Google",
                    "Microsoft"

                ],
            }
        ]
    },

    Question3 = {
        Question: "Choose the correct HTML element for the largest heading:",
        correctOption: 3,
        answer: [
            {
                options: [
                    "<head>",
                    "<heading>",
                    "<h1>",
                    "<h6>"

                ],
            }

        ]
    },
    Question4 = {
        Question: "What is the correct HTML element for inserting a line break?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "<break>",
                    "<br>",
                    "<lb>",
                    "None of thses"

                ],
            }
        ]
    },
    Question5 = {
        Question: "What is the correct HTML for adding a background color?",
        correctOption: 1,
        answer: [
            {
                options: [
                    '<body style="background-color:yellow;">',
                    "<background>yellow</background>",
                    '<body bg="yellow">',
                    "none of thses"

                ],
            }
        ]
    },
    Question6 = {
        Question: "Choose the correct HTML element to define important text",
        correctOption: 3,
        answer: [
            {
                options: [
                    "<important>",
                    "<i>",
                    "<strong>",
                    "<b>"

                ],
            }

        ]
    },
    Question7 = {
        Question: "Choose the correct HTML element to define emphasized text",
        correctOption: 1,
        answer: [
            {
                options: [
                    "<em>",
                    "<i>",
                    "<italic>",
                    "All of thses",

                ],
            }
        ]
    },
    Question8 = {
        Question: "What is the correct HTML for creating a hyperlink?",
        correctOption: 4,
        answer: [
            {
                options: [
                    "<a>http://www.w3schools.com</a>",
                    '<a url="http://www.w3schools.com">W3Schools.com</a>',
                    '<a name="http://www.w3schools.com">W3Schools.com</a>',
                    '<a href="http://www.w3schools.com">W3Schools</a>'

                ],
            }
        ]
    },
    Question9 = {
        Question: "Which character is used to indicate an end tag?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "<",
                    "/",
                    "^",
                    "*"

                ],
            }
        ]
    },
    Question10 = {
        Question: "How can you open a link in a new tab/browser window?",
        correctOption: 1,
        answer: [
            {
                options: [
                    '<a href="url" target="_blank">',
                    '<a href="url" target="new">',
                    '<a href="url" new>',
                    "All of thses"

                ],
            }
        ]
    },
    Question11 = {
        Question: "Which of these elements are all <table> elements?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "<table><tr><tt>",
                    "<table><tr><td>",
                    "<table><head><tfoot>",
                    "if (i <> 5)"

                ],
            }
        ]
    },
    Question12 = {
        Question: "Inline elements are normally displayed without starting a new line.",
        correctOption: 1,
        answer: [
            {
                options: [
                    "True",
                    "False",
                    "All of thses",
                    "None of thses"

                ],
            }

        ]
    }, ""
]
let css = [
    "",
    {
        Question: "What does CSS stand for?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "Creative Style Sheets",
                    "Cascading Style Sheets ",
                    "Computer Style Sheets",
                    "Colorful Style Sheets"

                ],
            }
        ]
    },



    Question2 = {
        Question: "What is the correct HTML for referring to an external style sheet?",
        correctOption: 1,
        answer: [
            {
                options: [
                    '<link rel="stylesheet" type="text/css" href="mystyle.css">',
                    "<stylesheet>mystyle.css</stylesheet>",
                    '<style src="mystyle.css">',
                    "None of these"

                ],
            }
        ]
    },

    Question3 = {
        Question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        correctOption: 3,
        answer: [
            {
                options: [
                    "In the <body> section",
                    "At the end of the document",
                    "In the <head> section",
                    "None of these"

                ],
            }

        ]
    },
    Question4 = {
        Question: "Which HTML tag is used to define an internal style sheet?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "<css>",
                    "<style>",
                    "<script>",
                    "None of thses"

                ],
            }
        ]
    },
    Question5 = {
        Question: "Which HTML attribute is used to define inline styles?",
        correctOption: 1,
        answer: [
            {
                options: [
                    'style',
                    'styles',
                    "class",
                    "font"

                ],
            }
        ]
    },
    Question6 = {
        Question: "Which is the correct CSS syntax?",
        correctOption: 4,
        answer: [
            {
                options: [
                    "body:color=black;",
                    "{body:color=black;}",
                    "{body;color:black;}",
                    "body {color: black;}"

                ],
            }

        ]
    },
    Question7 = {
        Question: "How do you insert a comment in a CSS file?",
        correctOption: 1,
        answer: [
            {
                options: [
                    "/* this is a comment */",
                    "' this is a comment",
                    "// this is a comment",
                    "// this is a comment //"

                ],
            }
        ]
    },
    Question8 = {
        Question: "Which property is used to change the background color?",
        correctOption: 1,
        answer: [
            {
                options: [
                    'background-color',
                    "bgcolor",
                    'color',
                    'None of these'


                ],
            }
        ]
    },
    Question9 = {
        Question: "How do you add a background color for all h1 Elements?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "h1.all {background-color:#FFFFFF;}",
                    "h1 {background-color:#FFFFFF;}",
                    "all.h1 {background-color:#FFFFFF;}",
                    "None of these"

                ],
            }
        ]
    },
    Question10 = {
        Question: "Which CSS property is used to change the text color of an element?",
        correctOption: 1,
        answer: [
            {
                options: [
                    'color',
                    'fgcolor',
                    'text-color',
                    "None of these"

                ],
            }
        ]
    },
    Question11 = {
        Question: "Which CSS property controls the text size?",
        correctOption: 2,
        answer: [
            {
                options: [
                    "font-style",
                    "font-size",
                    "text-size",
                    "text-style"

                ],
            }
        ]
    },
    Question12 = {
        Question: "What is the correct CSS syntax for making all the p elements bold?",
        correctOption: 4,
        answer: [
            {
                options: [
                    'p {font-weight:bold;}',
                    '<p style="text-size:bold;">',
                    '<p style="font-size:bold;">',
                    'p {text-size:bold;}'

                ],
            }

        ]
    }, ""
]


var index = 0;
let score = 0;

function htmlnextsBtn() {
    index++
    document.getElementById("quest").innerHTML =
        `<p class="queston">${index}) ${html[index].Question}</p>`
    for (answe in html[index].answer) {
        for (printe in html[index].answer[answe]) {
            document.getElementById("answer").innerHTML = `
            <div id="buttons" >
            <div>
            <label for="option" class="buttonClass">
                <input onchange="enable()"  value="1" type="radio" name="option" id="option">
                <span class="textoption" id="optionPrint0"></span>
                    </label>
                        </div>
                    <div  class="optionRadio">
                <label  for="radio" class="buttonClass" >
                <input value="2"  onchange="enable()" type="radio" name="option" id="radio">
                <span id="optionPrint1" ></span></label>
                    </div>
                    <div>
                <label  for="radios" class="buttonClass"> 
                <input value="3" onchange="enable()" type="radio" name="option" id="radios">
                <span id="optionPrint2"></span>
                </label>
                    </div>
            <label  for="radioes" class="buttonClass"> 
                        <input value="3" onchange="enable()" type="radio" name="option" id="radioes">
                        <span id="optionPrint3"></span>
                            </label>
            <div onclick="htmlnextsBtn()"  class="dtndiv">
                <button class="nexsbtn" disabled  onclick="htmlprintValue()" id="nextbtn">
                <span class="disabled" class="btn-text">Continue</span>
                <svg class="disabled" width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                    <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                </svg>
            </button>
</div>
            <span class="time" id="time"></span>
                `
            document.getElementById("optionPrint0").innerText = html[index].answer[answe][printe][0];
            document.getElementById("optionPrint1").innerText = html[index].answer[answe][printe][1]
            document.getElementById("optionPrint2").innerText = html[index].answer[answe][printe][2]
            document.getElementById("optionPrint3").innerText = html[index].answer[answe][printe][3]
        }

    }
}
function htmlnextsBtn() {
    index++
    let Question = document.getElementById("quest").innerHTML =
        `<p class="queston">${index}) ${html[index].Question}</p>`
    for (answe in html[index].answer) {
        for (printe in html[index].answer[answe]) {
            document.getElementById("answer").innerHTML = `
            <div id="buttons">
            <div>
            <label for="option" class="buttonClass">
                <input onchange="enable()"  value="1" type="radio" name="option" id="option">
                <span class="textoption" id="optionPrint0"></span>
                    </label></div>
                    <div  class="optionRadio">
                <label  for="radio" class="buttonClass" >
                <input value="2"  onchange="enable()" type="radio" name="option" id="radio">
                <span id="optionPrint1" ></span>
                </label>
                </div>
                <div>
                <label  for="radios" class="buttonClass"> 
                <input value="3" onchange="enable()" type="radio" name="option" id="radios">
                <span id="optionPrint2"></span>
                </label>
                </div>
            <label  for="radioes" class="buttonClass"> 
                        <input value="3" onchange="enable()" type="radio" name="option" id="radioes">
                        <span id="optionPrint3"></span
                        ></label>
            <div onclick="htmlnextsBtn()"  class="dtndiv">
                <button class="nexsbtn" disabled  onclick="htmlprintValue()" id="nextbtn">
                <span class="disabled" class="btn-text">Continue</span>
                <svg class="disabled" width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                    <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                </svg>
            </button>
    </div>
            <span class="time" id="time"></span>
                `

            document.getElementById("optionPrint0").innerText = html[index].answer[answe][printe][0];
            document.getElementById("optionPrint1").innerText = html[index].answer[answe][printe][1]
            document.getElementById("optionPrint2").innerText = html[index].answer[answe][printe][2]
            document.getElementById("optionPrint3").innerText = html[index].answer[answe][printe][3]
        }

    }
    // let time = document.getElementById("time");
    // let nextBtnClicked = false;
    // function startTimer() {
    //     timer = setInterval(function () {
    //         time.innerHTML = `
    //         ${min}:${sec}`;
    //         sec--;
    //         if (sec === -1 
    //             &&
    //              min === 0) {
    //             clearInterval(timer);
    //             if (!nextBtnClicked) {
    //                 htmlnextsBtn()
    //                 score--
    //                 nextBtnClicked = true;
    //             }
    //             clearInterval(timer);
    //             sec = 59;
    //             min = 1;
    //             startTimer();
    //         } else if (sec === -1) {
    //             min--;
    //             sec = 4;
    //         }

    //     }, 1000);
    // }
    // document.getElementById("nextbtn").addEventListener("click", function () {
    //     timer = false
    //     nextBtnClicked = true;
    // });
    // startTimer();

}
function cssnextsBtn() {
    index++

     document.getElementById("quest").innerHTML =
        `<p class="queston">
        ${index}) ${css[index].Question}
        </p>`
    for (answe in css[index].answer) {
        for (printe in css[index].answer[answe]) {
            document.getElementById("answer").innerHTML = `
            <div id="buttons" >
            <div>
            <label for="option" class="buttonClass">
                <input onchange="enable()"  value="1" type="radio" name="option" id="option">
                <span class="textoption" id="optionPrint0"></span>
                    </label>
                    </div>
                    <div  class="optionRadio">
                <label  for="radio" class="buttonClass" >
                <input value="2"  onchange="enable()" type="radio" name="option" id="radio">
                <span id="optionPrint1" ></span></label></div>
                <div>
                <label  for="radios" class="buttonClass"> 
                <input value="3" onchange="enable()" type="radio" name="option" id="radios">
                <span id="optionPrint2"></span></label></div>
            <label  for="radioes" class="buttonClass"> 
                        <input value="3" onchange="enable()" type="radio" name="option" id="radioes">
                        <span id="optionPrint3"></span></label>
            <div onclick="cssnextsBtn()"  class="dtndiv">
                <button class="nexsbtn" disabled  onclick="cssprintValue()" id="nextbtn">
                <span class="disabled" class="btn-text">Continue</span>
                <svg class="disabled" width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                    <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                </svg>
            </button>
</div>
            <span class="time" id="time"></span>
                `
            document.getElementById("optionPrint0").innerText = css[index].answer[answe][printe][0];
            document.getElementById("optionPrint1").innerText = css[index].answer[answe][printe][1]
            document.getElementById("optionPrint2").innerText = css[index].answer[answe][printe][2]
            document.getElementById("optionPrint3").innerText = css[index].answer[answe][printe][3]
        }
console.log(score)
    }
    // let time = document.getElementById("time");
    // let timer;
    // let nextBtnClicked = false;
    // function startTimer() {
    //     timer = setInterval(function () {
    //         time.innerHTML = `
    //         ${min}:${sec}`;
    //         sec--;
    //         if (sec === -1 
    //             &&
    //              min === 0) {
    //             clearInterval(timer);
    //             if (!nextBtnClicked) {
    //                 cssnextsBtn()
    //                 score--
    //                 nextBtnClicked = true;
    //             }
    //             clearInterval(timer);
    //             sec = 59;
    //             min = 1;
    //             startTimer();
    //         } else if (sec === -1) {
    //             min--;
    //             sec = 4;
    //         }

    //     }, 1000);
    // }
    // document.getElementById("nextbtn").addEventListener("click", function () {
    //     timer = false
    //     nextBtnClicked = true;
    // });
    // startTimer();

}

function continu() {
    var input = document.getElementById('testKey');
    if (input.value == 'java') {
        var elem = document.documentElement;
        elem.webkitRequestFullscreen()
        document.getElementById("cardContainer").remove()
        document.getElementById("image").innerHTML = `
  <img class="sec" src="image/5615f45aefdef0fb2ff1b8b242b9f508ccfe3990r1-480-270_00.gif" alt="">`
        setTimeout(function () {
            document.getElementById("image").innerHTML = "";
        }, 2000);
        nextBtn()
    }
    else {
        swal({
            icon: "error",
            text: "Rong key",
        });
        input.value = "";
    }
}

function continuhtml() {
    var input = document.getElementById('testKey');
    if (input.value == 'html') {
        var elem = document.documentElement;
        elem.webkitRequestFullscreen()
        document.getElementById("cardContainer").remove()
        document.getElementById("image").innerHTML = `
  <img class="sec" src="image/5615f45aefdef0fb2ff1b8b242b9f508ccfe3990r1-480-270_00.gif" alt="">`

        setTimeout(function () {

            document.getElementById("image").innerHTML = "";
        }, 2000);
        htmlnextsBtn()
    }
    else {
        swal({
            icon: "error",
            text: "Rong key",
        });
        input.value = "";
    }
}

function continuCSS() {
    

    var input = document.getElementById('testKey');
    if (input.value == 'css') {
        var elem = document.documentElement;
        elem.webkitRequestFullscreen()
        document.getElementById("cardContainer").remove()
        cssnextsBtn()
    }
    else {
        swal({
            icon: "error",
            text: "Rong key",
        });
        input.value = "";
    }
}


function nextBtn() {
    index++
    let Question = document.getElementById("quest").innerHTML =
        `<p class="queston">
        ${index}) ${JavaScriptQuiz[index].Question}
        </p>`
    for (answe in JavaScriptQuiz[index].answer) {
        for (printe in JavaScriptQuiz[index].answer[answe]) {
            document.getElementById("answer").innerHTML = `
            <div id="buttons" >
            <div>
            <label for="option" class="buttonClass">
                <input onchange="enable()"  value="1" type="radio" name="option" id="option">
                <span class="textoption" id="optionPrint0"></span>
                    </label>
                    </div>
                    <div  class="optionRadio">
                <label  for="radio" class="buttonClass" >
                <input value="2"  onchange="enable()" type="radio" name="option" id="radio">
                <span id="optionPrint1" ></span></label></div>
                <div>
                <label  for="radios" class="buttonClass"> 
                <input value="3" onchange="enable()" type="radio" name="option" id="radios">
                <span id="optionPrint2"></span></label></div>
            <label  for="radioes" class="buttonClass"> 
                        <input value="3" onchange="enable()" type="radio" name="option" id="radioes">
                        <span id="optionPrint3"></span>
                        </label>
            <div onclick="nextBtn()" class="dtndiv">
                <button class="nexsbtn" disabled onclick="printValue()"  id="nextbtn">
                <span class="disabled" class="btn-text">Continue</span>
                <svg class="disabled" width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                    <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                </svg>
            </button>
</div>
            <span class="time" id="time"></span>
                `
            document.getElementById("optionPrint0").innerText = JavaScriptQuiz[index].answer[answe][printe][0];
            document.getElementById("optionPrint1").innerText = JavaScriptQuiz[index].answer[answe][printe][1]
            document.getElementById("optionPrint2").innerText = JavaScriptQuiz[index].answer[answe][printe][2]
            document.getElementById("optionPrint3").innerText = JavaScriptQuiz[index].answer[answe][printe][3]
        }

    }
    // let nextBtnClicked = false;
    // function startTimer() {
    //     timer = setInterval(function () {
    //         time.innerHTML = `${min}:${sec}`;
    //         sec--;
    //         if (sec === -1 
    //             &&
    //              min === 0) {
    //             clearInterval(timer);
    //             if (!nextBtnClicked) {
    //                 nextBtn();
    //                 score--
    //                 nextBtnClicked = true;
    //             }
    //             clearInterval(timer);
    //             sec = 59;
    //             min = 1;
    //             startTimer();
    //         } else if (sec === -1) {
    //             min--;
    //             sec = 4;
    //         }
    //     }, 1000);
    // }
    // document.getElementById("nextbtn").addEventListener("click", function () {
    //     timer = false
    //     nextBtnClicked = true;
    // });
    // startTimer();
    if (index === 13) {
        const percentage = Math.round((score / index) * 100)
        if (index === 13) {
            if (Math.round((score / index) * 100) <= 50) {
                document.getElementById("quest").remove()
                document.getElementById("answer").remove()
                document.getElementById("percentage").innerHTML = `
    <p class="congra">Hard work is required</p>
    <div class="per-conttainer-failed">
    <p >
    ${percentage}%</p></div>
    <button class="btn home-back" id="contieBut" onclick="home()"> Back to home
</button>
    `
            } else {
                document.getElementById("quest").remove()
                document.getElementById("answer").remove()
                document.getElementById("percentage").innerHTML = `
        <p class="congra">Congratulations, you passed</p>
        <div class="per-conttainer">
        <p>
        ${percentage}%</p></div>
        <button class="btn home-back" id="contieBut" onclick="home()"> Back to home
</button>
        `
            }
        }

    }
}
function enable() {
    let nextBtn = document.getElementById('nextbtn')
    nextBtn.disabled = false;
    nextBtn.disabled = false
}
function printValue() {
    var checkedInput = document.querySelector('input[type="radio"]:checked');
    if (checkedInput.value == JavaScriptQuiz[index].correctOption) {
        score++
    }
    const percentage = Math.round((score / index) * 100)
    if (index === 12) {
        if (Math.round((score / index) * 100) <= 50) {
            document.getElementById("quest").remove()
            document.getElementById("answer").remove()
            document.getElementById("percentage").innerHTML = `
    <p class="congra">Hard work is required</p>
    <div class="per-conttainer-failed">
    <p >
    
    ${percentage}%</p></div>
    <button class="btn home-back" id="contieBut" onclick="home()"> Back to home
</button>
    `
        } else {
            document.getElementById("quest").remove()
            document.getElementById("answer").remove()
            document.getElementById("percentage").innerHTML = `
        <p class="congra">Congratulations, you passed</p>
        <div class="per-conttainer">
        <p>
        ${percentage}%</p></div>
        <button class="btn home-back" id="contieBut" onclick="home()"> Back to home
</button>
        `
        }

    }
}
function htmlprintValue() {
    var checkedInput = document.querySelector('input[type="radio"]:checked');
    if (checkedInput.value == html[index].correctOption) {
        score++
    }
    console.log(score)
    const percentage = Math.round((score / index) * 100)
    if (index === 12) {
        if (Math.round((score / index) * 100) <= 50) {
            document.getElementById("quest").remove()
            document.getElementById("answer").remove()
            document.getElementById("percentage").innerHTML = `
    <p class="congra">Hard work is required</p>
    <div class="per-conttainer-failed">
    <p >
    
    ${percentage}%</p></div>
    <button class="btn home-back" id="contieBut" onclick="home()"> Back to home
</button>
    `
        } else {
            document.getElementById("quest").remove()
            document.getElementById("answer").remove()
            document.getElementById("percentage").innerHTML = `
        <p class="congra">Congratulations, you passed</p>
        <div class="per-conttainer">
        <p>
        ${percentage}%</p></div>
        <button class="btn home-back" id="contieBut" onclick="home()"> Back to home
</button>
        `
        }
    }
}

function cssprintValue() {
    var checkedInput = document.querySelector('input[type="radio"]:checked');
    if (checkedInput.value == html[index].correctOption) {
        score++
    }
    const percentage = Math.round((score / index) * 100)
    if (index === 12) {
        if (Math.round((score / index) * 100) <= 50) {
            document.getElementById("quest").remove()
            document.getElementById("answer").remove()
            document.getElementById("percentage").innerHTML = `
    <p class="congra">Hard work is required</p>
    <div class="per-conttainer-failed">
    <p >
    
    ${percentage}%</p></div>
    <button class="btn home-back" id="contieBut" onclick="home()"> Back to home
</button>
    `
        } else {
            document.getElementById("quest").remove()
            document.getElementById("answer").remove()
            document.getElementById("percentage").innerHTML = `
        <p class="congra">Congratulations, you passed</p>
        <div class="per-conttainer">
        <p>
        ${percentage}%</p></div>
        <button class="btn home-back" id="contieBut" onclick="home()"> Back to home
</button>
        `
        }
    }
}
function home() {
    window.close()
}