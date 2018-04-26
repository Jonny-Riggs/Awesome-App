//Final output DOM component reference
const output = document.querySelector(".output")


//Fragment to hold all the stuff so we inject into the DOM once
const fragment = document.createDocumentFragment()

// Create factory function to generate components
// Create input component
const inputFieldFactory = (classList, defaultPlaceholderText, type) => {
    const inputField = document.createElement("input")
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.placeholder = defaultPlaceholderText
    return inputField
}
// Create button component
const buttonFactory = (classList, textContent) => {
    const theButton = document.createElement("button")
    theButton.classList = classList
    theButton.textContent = textContent
    return theButton
}

const cardFactory = (classList, textContent) => {
    const theSection = document.createElement("section")
    theSection.classList = classList
    theSection.textContent = textContent
    return theSection
}


const createCardButton = buttonFactory("button--submit", "Create Card")
const cardTextInput = inputFieldFactory("input--text", "Enter card text here", "text")

createCardButton.addEventListener("click", function() {
    const userEntry = cardTextInput.value
    output.appendChild(cardFactory("card", userEntry))
    cardTextInput.value = ""
})




fragment.appendChild(createCardButton)
fragment.appendChild(cardTextInput)



output.appendChild(fragment)


/* Attach event listener to the button
    get value of input field
    create card component with text inside
*/

// Create card component










