/**
 * A template of various js created by Tech Careers instructor Warren Urich - TNX TC! 
 * 
 * Let's try JavaScript, again!
 * Multi-line comment uses slashes and asterisks!
 * @author  TECHCareers
 * @date    2020.03.06
 * @git     https://github.com/TECHCareers-by-Manpower/wb-lets-try-javascript-again.git
 * @link    https://github.com/TECHCareers-by-Manpower/wb-lets-try-javascript-again
 * @summary Testing out some wicked JavaScript!
 */

// Single line, comment!

// Basic assignment:
var myVariable = '38.9587'; // Variable set as a string.

myVariable =  myVariable + 5;
console.log( myVariable ); // Oop, one of these is a string so plus is concatenating!

// Type-handling:
myVariable = parseFloat( myVariable ); // Floating point number, decimal maintained.
console.log( myVariable ); // Is now a numeric value.

myVariable = parseInt( myVariable ); // Converted to integer, decimal removed.
console.log( myVariable ); // 38

myVariable = Number( myVariable ); // Converted to any number type it can.
console.log( myVariable ); // No change here.

myVariable = myVariable + 5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings!
console.log( myVariable );

myVariable = myVariable.toString(); // Convert back to a string.
console.log( myVariable );

/**
 * Other types?
 */

// Array:
var myArrayOfDataTypes = [
    // Booleans:
    true,
    false,
    // Null:
    null,
    // Number (float/integer):
    34,
    168.793,
    // String:
    'Hello, World!',
    // Value not defined:
    undefined,
    // Not a number:
    NaN,
    // An array in an array!?
    [1, 2, 3, 4, 5]
];

/**
 * Creating elements for a webpage. (Adding to the DOM!)
 */

 // Create datalist.
var myDataList = document.createElement( 'DL' ); // Won't show yet! We didn't tell it where to go.

// Let's loop through the array so we don't have to type out each item!
for ( var i = 0; i < myArrayOfDataTypes.length; i++ )
{ // ( ASSIGNMENT; TERMINATION CONDITION; ITERATION )
    // Create datalist title.
    var dataListTitle = document.createElement( 'DT' );
    dataListTitle.textContent = typeof myArrayOfDataTypes[i]; // Output the datatype.

    // Create datalist data.
    var dataListData = document.createElement( 'DD' );
    dataListData.textContent = myArrayOfDataTypes[i];

    // Add our new elements to our datalist.
    myDataList.appendChild( dataListTitle );
    myDataList.appendChild( dataListData );
}

var myHeadingText = 'Our Data-Type Test:';
// This is adding HTML to the end of our body.
document.body.innerHTML += `<!-- Back ticks are used in JS for multi-line strings. -->
    <h2>
        `+myHeadingText/*Concatenating strings!*/+`
    </h2>
`;
// Add ALL of our DATALIST to the body! Yay! We should be able to see it now!
document.body.appendChild( myDataList );

/**
 * Collecting elements.
 */

// Get by ID:
var myHeading = document.getElementById( 'my-heading' );
myHeading.title = 'This is a heading.'; // Tooltip attribute.
// myHeading.style.color = 'darkgray'; // PLEASE avoid using inline styles... this is the CSS file's job!!!
myHeading.className = 'gray-text'; // Use classes instead!

/**
 * Events!
 */

// We can add event-listeners to a targeted element.
myHeading.addEventListener( 'mouseover'/* Here we say which event we are targeting. */, function ( event/* We can capture info about the event */ ) {
    this.className = 'salmon-text'; /* In an event, the "this" keyword represents our element (myHeading). */
} );

// When you stop hovering...
myHeading.addEventListener( 'mouseleave', function ( event ) {
    this.className = 'indigo-text'; 
} );

// When you stop hovering...
myHeading.addEventListener( 'click', function ( event ) {
    // The class we want to add.
    var bigClass = 'big-text'; // Check if it already has it!
    if ( !this.className.includes( bigClass ) ) // Good to do checks like this so we don't have 500 of the same class on here if the user keeps clicking!
    { // Exclamation means NOT. So it fires on the OPPOSITE.
        this.className += ' big-text'; // Concatenating a new class!
        // Remember, you must have a space between classes when assigning multiple.
    }
} );

/**
 * Let's make a function.
 */

 // Function keyword, followed by the function name (and parameters if any are needed.)
 function addTwoNumbers ( x, y )
 {
    x = Number( x ); // Enforce data-type (number.)
    y = Number( y ); // Enforce data-type (number.)
    return ( x + y ); // Add the two together.
 }

// Return current date as a string (2020.03.06)
function currentDayString ()
{
    // New date object.
    var date = new Date(); // @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    // Declare a string we can store date info in.
    var dateString = '';
    dateString += date.getFullYear(); // Full four digit year.
    dateString += '.'; // (Period for formatting.)
    dateString += ( date.getMonth() + 1 ); // Month of the year.
    dateString += '.'; // (Period for formatting.)
    dateString += ( date.getDay() + 1 ); // Day of the week.
    return dateString;
}

// Output to console.
console.log( 'The current date is: \r\n' + currentDayString() ); // \r\n is return/newline - this will now output on TWO lines in your console.

/**
 * Let's review some conditions-related operators...
 */

// Check for equivalency (type-agnostic.)
console.log( 1 == true ); // True
console.log( 'Hello, World!' == true ); // False
console.log( -137 == true ); // False
console.log( 'test' == 'test' ); // True
console.log( 36 == '36' ); // True
console.log( 0 == false ); // True
console.log( `test string` == "test string" ); // True

// Check if identical (value comparison including type.)
console.log( 1 === true ); // False
console.log( '' === true ); // False
console.log( -137 === true ); // False
console.log( 'test' === 'test' ); // True
console.log( 36 === '36' ); // False
console.log( 0 === false ); // False
console.log( `test string` === "test string" ); // True

/**
 * Hamburger Menu.
 */

// Let's grab our menu...
var myNav = document.querySelector( 'nav' );

// And our menu button...
var myNavButton = document.querySelector( '.menu-button' );

// Let's listen for a click on this.
myNavButton.addEventListener( 'click', function ( event ) {
    // When clicked, add/remove the "nav-open" class (in HTML.)
    myNav.classList.toggle( 'nav-open' );
} );

/**
 * Let's dig in to objects!
 */

 /* JavaScript Object Notation (JSON) */
var myObject = { /* Valid JSON format. */
    name:    'Jerry',
    age:     61,
    hobbies: [
        'snowboarding',
        'action movies'
    ]
};

// Read whole object.
console.log( myObject );

// Extracting property values...
console.log( 'Object "name": ' + myObject.name );
console.log( 'Object "age": ' + myObject.age );
console.log( 'Object "hobbies": ' + myObject.hobbies[0] + ', ' + myObject.hobbies[1] );

// Lets add to the hobbies array... just like normal! It is an array, afterall.
// (Just stored in an object property instead of a variable this time.)
myObject.hobbies.push( 'programming' );
console.log( 'Updated hobbies:' );
console.log( myObject.hobbies );

console.log( 'Updated object:' );
console.log( myObject );

/**
 * Let's ramp things up a bit with a method.
 */

var newObject = {
    myNum:     5, // Property.
    updateNum: function () { // Here is a method! Note the new syntax, versus a function.
        // Difference from a function?
        this.myNum = this.myNum + 5;
        return this.myNum;
    }
};

/**
 * Object constructors.
 */

// Here is our blueprint for "Person" objects.
function Person ( name, age, hobbies ) {
    this.name    = name;
    this.age     = age;
    this.hobbies = hobbies;
    this.sayGoodbye = function () { // Setting up a method in a constructor function.
        document.body.innerHTML += `
            <p>
                This is
                <strong>` + this.name + `</strong>,
                saying <em>goodbye</em>!
            </p>
        `;
    };
}

// Let's make a new instance of "Person!" This is called an object.
var jerry = new Person( 'Jerry', 61, ['snowboarding', 'action movies', 'programming'] );

// And another! Isn't this easier than typing out a whole object /every/ time!?
var sally = new Person(
    'Sally', // name:
    36, // age:
    [ // hobbies:
        'daredevil biking',
        'skydiving',
        'teaching'
    ]
);

// We can add to the blueprint using "prototype", even after its initial declaration.
Person.prototype.introduction = function () { // This is a method in our "Person" blueprint/prototype/class!
    var hobbiesString = '<ul>'; // Set up for list HTML.
    this.hobbies.forEach( function ( value, index ) { // Looping through an array.
        hobbiesString += '<li>' + value + '</li>'; // Loop through our hobbies and make a list item for each.
    } );
    hobbiesString += '</ul>'; // We opened a UL in this string, so lets close it! (Concatenation!)

    // Add HTML to the body.
    document.body.innerHTML += `
        <h2>` + this.name + `</h2>
        <dl><!-- My name is: ` + this.name + ` -->
            <dt>Age</dt>
            <dd>` + this.age + `</dd>
            <dt>Hobbies</dt>
            <dd>` + hobbiesString /* We built the string above, using this.hobbies! "hobbiesString" is a local variable (born in the method, and it will die in the method.) */ + `</dd>
        </dl>
    `;
}

// Extra prototype practice: a property.
Person.prototype.nickname = '';
jerry.nickname = 'The Big Jare';
sally.nickname = 'Sallers';