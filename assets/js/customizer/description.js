(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function ($) {
    wp.customize('blogdescription', function (value) {
        value.bind(function (to) {
            $('#site-description').text(to);
        });
    });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvZXM2L2N1c3RvbWl6ZXIvZGVzY3JpcHRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsVUFBQyxDQUFELEVBQU87QUFDSixPQUFHLFNBQUgsQ0FBYyxpQkFBZCxFQUFpQyxVQUFVLEtBQVYsRUFBa0I7QUFDL0MsY0FBTSxJQUFOLENBQVksVUFBVSxFQUFWLEVBQWU7QUFDdkIsY0FBRyxtQkFBSCxFQUF5QixJQUF6QixDQUErQixFQUEvQjtBQUNILFNBRkQ7QUFHSCxLQUpEO0FBS0gsQ0FORCxFQU1HLE1BTkgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKCgkKSA9PiB7XG4gICAgd3AuY3VzdG9taXplKCAnYmxvZ2Rlc2NyaXB0aW9uJywgZnVuY3Rpb24oIHZhbHVlICkge1xuICAgICAgICB2YWx1ZS5iaW5kKCBmdW5jdGlvbiggdG8gKSB7XG4gICAgICAgICAgICAkKCAnI3NpdGUtZGVzY3JpcHRpb24nICkudGV4dCggdG8gKTtcbiAgICAgICAgfSApO1xuICAgIH0gKTtcbn0pKGpRdWVyeSk7Il19

//# sourceMappingURL=description.js.map
