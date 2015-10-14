## JavaScript Symatics

- Q: What is `NaN`?
    - "Not a Number"
    - Returned when a math operation is done on a value that cannot be coriced into a number (float or integer)
    - Returned when `parseInt()` is called on a non-number or string (or string that does not look like a number)
    - Ex: `expect(3 + undefined).toBeNaN();`

## Build Knowledge

- Q: What is minification and what is it for?
   - Process of removing all whitespace, comments, and renaming variables to single letters
   - Purpose is to reduce size of JS files (reduces load times)
   - Obfuscates code.

- Q: This AngularJS code will be minified. What is the bug? How do you fix it?

```
angular.module('Ui').controller('MainCtrl',
    function($scope, $filter, $log) {
        $scope.onClick = function(event) {
            $log.log('Clicked');
        };

        $scope.filteredVal = $filter('orderby')($scope.someStuff);
    }
);
```

 - The dependency injector will fail to find the needed services.
 - To fix, either use "array notation" or add this.$injector to function.

```
angular.module('Ui').controller('MainCtrl', [
    '$scope',
    '$filter',
    '$log',
    function($scope, $filter, $log) {
        $scope.onClick = function(event) {
            $log.log('Clicked');
        };

        $scope.filteredVal = $filter('orderby')($scope.someStuff);
    }
]);

// OR ...
function mainCtrl($scope, $filter, $log) {
    $scope.onClick = function(event) {
        $log.log('Clicked');
    };

    $scope.filteredVal = $filter('orderby')($scope.someStuff);
}

mainCtrl.$injector = [ '$scope', '$filter', '$log' ];

angular.module('Ui').controller('MainCtrl', mainCtrl);
```

## AngularJS Questions

- Q: What are directives?
- Q: Explain the digest cycle.
- Q: What are the differences between service, factory, and provider?
- Q: What are the differences between Constants and Values?
- Q: What can you inject at the config stage?
- Q: Give example of built in directives
- Q: What is the "Angular" way to add event listeners to elements?
- Q: How do you set up page routing?
- Q: What is ngModel and what is for?
- Q: What is the difference between the compile, link and controller propeties of a directive?
- Q: What is $scope
- Q: What are some common pitfalls when building controllers?
- Q: Describe the code layout of large app. Describe where components go and how to organize it for long term maintance.

## Technical Knowledge

- Q: What is immutable data (or state)? Why is it important and why should it be used?
    - Immutable data typically refers to data structure that cannot be changed.
    - By preserving state, prevents data from being changed expectantly.
    - Guarantees that an object or value is in a known condition when later referenced.
    - Most common in functional languages.
    - To change the object, you must make a copy, and change the copy.

- Q: Name 3 or 4 Design Patterns


- Q: What is functional programming?
   - Functional programming is a paradigm.
   - treats computation as evaluation of math functions
   - Avoids changing state and mutable data

## HTML5
[HTML 5 Interview Questions](http://www.toptal.com/html5/interview-questions)

- Q: Describe correct usage of `<header>`, `<article>`, `<section>`, and `<footer>`.
    - The `<header>` element is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author’s name, time and date of publication, table of contents, or other navigational information.

    - The `<article>` element is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing it’s meaining. Individual blog posts or news stories are good examples.

    - The `<section>` element is a flexible container for holding content that shares a common informational theme or purpose.

    - The `<footer>` element is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author’s name, copyright information, and related links are typical examples of such content.

- Q: Describe the relationship between the `<header>` and `<h1>` tags.
    - In previous specs, only one `<h1>` element was typically present on a page, used for the heading of the entire page.
    - HTML5 specifies that `<h1>` represents the top-level heading of a “section”, whether `<body>`, `<article>`, or `<section>` element.
    - Every `<header>` element should at least contain an `<h1>` element.
    - If there is no natural heading for the section, it is a good indication it should not use an `<article>` or `<section>` tag

## Coding Questions

- Q: Create 300px by 300px `<canvas>`. Within paint a blue 100px by 100px square with top-left corner located 50px from both top and left edges of canvas. Can use jQuery.

```JavaScript
<canvas id="the_canvas" width="300" height="300"></canvas>

<script>
  var canvas = $("the_canvas");
  var drawing_context = canvas.getContext( "2d" );
  drawing_context.fillStyle = "blue";
  drawing_context.fillRect( 50, 50, 100, 100 );
</script>
```

- Q: What is console output? Why?

```JavaScript
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
```
- Result:
```
outer func:  this.foo = bar
outer func:  self.foo = bar
inner func:  this.foo = undefined
inner func:  self.foo = bar
```
