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









