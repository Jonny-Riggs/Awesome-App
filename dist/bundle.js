(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const buttonFactory = (classList, textContent, eventListener) => {
    const theButton = document.createElement("button")
    theButton.classList = classList
    theButton.textContent = textContent
    theButton.addEventListener("click", eventListener)
    return theButton
}

module.exports = buttonFactory
},{}],2:[function(require,module,exports){
const cardFactory = (classList, textContent) => {
    const theSection = document.createElement("section")
    theSection.classList = classList
    theSection.textContent = textContent
    return theSection
}
module.exports = cardFactory
},{}],3:[function(require,module,exports){
const DomBuilder = (what, where) => {
    document.querySelector(where).appendChild(what)
}

module.exports = DomBuilder
},{}],4:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],5:[function(require,module,exports){
const inputFieldFactory = (classList, defaultPlaceholderText, type) => {
    const inputField = document.createElement("input")
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.placeholder = defaultPlaceholderText
    return inputField
}
module.exports = inputFieldFactory
},{}],6:[function(require,module,exports){
// * Modules
//     1. Creating fragments
//     2. Creating components with factories
//     3. Adding event listeners to components
//     4. Adding components to DOM
//     5. Clearing fields
// */
const DomBuilder = require("./DomBuilder")
const CardFactory = require("./CardFactory")
const InputFactory = require("./InputFieldFactory")
const ButtonFactory = require("./ButtonFactory")


// Final output DOM component reference
const output = document.querySelector(".output")

// Fragment to hold all the stuff so we inject into the DOM once
const fragment = document.createDocumentFragment()

// Create factory function to generate components
// Create input component
const createCardButton = ButtonFactory("button--submit", "Create Card", function () {
    // 1. Get value of input field
    const userEntry = cardTextInput.value

    // 2. Create card component with text inside
    output.appendChild(CardFactory("card", userEntry))

    cardTextInput.value = ""
})
const cardTextInput = InputFactory("input--text", "Enter card text here", "text")

/*
    Attach event listener to button
*/

fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)


DomBuilder(fragment, ".output")
// output.appendChild(fragment)










},{"./ButtonFactory":1,"./CardFactory":2,"./DomBuilder":3,"./InputFieldFactory":5}],7:[function(require,module,exports){

},{}]},{},[6,7,1,2,4,5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL0J1dHRvbkZhY3RvcnkuanMiLCJzY3JpcHRzL0NhcmRGYWN0b3J5LmpzIiwic2NyaXB0cy9Eb21CdWlsZGVyLmpzIiwic2NyaXB0cy9JbnB1dEZpZWxkRmFjdG9yeS5qcyIsInNjcmlwdHMvYXdlc29tZS5qcyIsInNjcmlwdHMvYnVuZGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGJ1dHRvbkZhY3RvcnkgPSAoY2xhc3NMaXN0LCB0ZXh0Q29udGVudCwgZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IHRoZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICB0aGVCdXR0b24uY2xhc3NMaXN0ID0gY2xhc3NMaXN0XG4gICAgdGhlQnV0dG9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnRcbiAgICB0aGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXIpXG4gICAgcmV0dXJuIHRoZUJ1dHRvblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1dHRvbkZhY3RvcnkiLCJjb25zdCBjYXJkRmFjdG9yeSA9IChjbGFzc0xpc3QsIHRleHRDb250ZW50KSA9PiB7XG4gICAgY29uc3QgdGhlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgdGhlU2VjdGlvbi5jbGFzc0xpc3QgPSBjbGFzc0xpc3RcbiAgICB0aGVTZWN0aW9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnRcbiAgICByZXR1cm4gdGhlU2VjdGlvblxufVxubW9kdWxlLmV4cG9ydHMgPSBjYXJkRmFjdG9yeSIsImNvbnN0IERvbUJ1aWxkZXIgPSAod2hhdCwgd2hlcmUpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdoZXJlKS5hcHBlbmRDaGlsZCh3aGF0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERvbUJ1aWxkZXIiLCJjb25zdCBpbnB1dEZpZWxkRmFjdG9yeSA9IChjbGFzc0xpc3QsIGRlZmF1bHRQbGFjZWhvbGRlclRleHQsIHR5cGUpID0+IHtcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpXG4gICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QgPSBjbGFzc0xpc3RcbiAgICBpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gZGVmYXVsdFBsYWNlaG9sZGVyVGV4dFxuICAgIHJldHVybiBpbnB1dEZpZWxkXG59XG5tb2R1bGUuZXhwb3J0cyA9IGlucHV0RmllbGRGYWN0b3J5IiwiLy8gKiBNb2R1bGVzXG4vLyAgICAgMS4gQ3JlYXRpbmcgZnJhZ21lbnRzXG4vLyAgICAgMi4gQ3JlYXRpbmcgY29tcG9uZW50cyB3aXRoIGZhY3Rvcmllc1xuLy8gICAgIDMuIEFkZGluZyBldmVudCBsaXN0ZW5lcnMgdG8gY29tcG9uZW50c1xuLy8gICAgIDQuIEFkZGluZyBjb21wb25lbnRzIHRvIERPTVxuLy8gICAgIDUuIENsZWFyaW5nIGZpZWxkc1xuLy8gKi9cbmNvbnN0IERvbUJ1aWxkZXIgPSByZXF1aXJlKFwiLi9Eb21CdWlsZGVyXCIpXG5jb25zdCBDYXJkRmFjdG9yeSA9IHJlcXVpcmUoXCIuL0NhcmRGYWN0b3J5XCIpXG5jb25zdCBJbnB1dEZhY3RvcnkgPSByZXF1aXJlKFwiLi9JbnB1dEZpZWxkRmFjdG9yeVwiKVxuY29uc3QgQnV0dG9uRmFjdG9yeSA9IHJlcXVpcmUoXCIuL0J1dHRvbkZhY3RvcnlcIilcblxuXG4vLyBGaW5hbCBvdXRwdXQgRE9NIGNvbXBvbmVudCByZWZlcmVuY2VcbmNvbnN0IG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpXG5cbi8vIEZyYWdtZW50IHRvIGhvbGQgYWxsIHRoZSBzdHVmZiBzbyB3ZSBpbmplY3QgaW50byB0aGUgRE9NIG9uY2VcbmNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG5cbi8vIENyZWF0ZSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGdlbmVyYXRlIGNvbXBvbmVudHNcbi8vIENyZWF0ZSBpbnB1dCBjb21wb25lbnRcbmNvbnN0IGNyZWF0ZUNhcmRCdXR0b24gPSBCdXR0b25GYWN0b3J5KFwiYnV0dG9uLS1zdWJtaXRcIiwgXCJDcmVhdGUgQ2FyZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gMS4gR2V0IHZhbHVlIG9mIGlucHV0IGZpZWxkXG4gICAgY29uc3QgdXNlckVudHJ5ID0gY2FyZFRleHRJbnB1dC52YWx1ZVxuXG4gICAgLy8gMi4gQ3JlYXRlIGNhcmQgY29tcG9uZW50IHdpdGggdGV4dCBpbnNpZGVcbiAgICBvdXRwdXQuYXBwZW5kQ2hpbGQoQ2FyZEZhY3RvcnkoXCJjYXJkXCIsIHVzZXJFbnRyeSkpXG5cbiAgICBjYXJkVGV4dElucHV0LnZhbHVlID0gXCJcIlxufSlcbmNvbnN0IGNhcmRUZXh0SW5wdXQgPSBJbnB1dEZhY3RvcnkoXCJpbnB1dC0tdGV4dFwiLCBcIkVudGVyIGNhcmQgdGV4dCBoZXJlXCIsIFwidGV4dFwiKVxuXG4vKlxuICAgIEF0dGFjaCBldmVudCBsaXN0ZW5lciB0byBidXR0b25cbiovXG5cbmZyYWdtZW50LmFwcGVuZENoaWxkKGNhcmRUZXh0SW5wdXQpXG5mcmFnbWVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXJkQnV0dG9uKVxuXG5cbkRvbUJ1aWxkZXIoZnJhZ21lbnQsIFwiLm91dHB1dFwiKVxuLy8gb3V0cHV0LmFwcGVuZENoaWxkKGZyYWdtZW50KVxuXG5cblxuXG5cblxuXG5cblxuIiwiIl19
