const passwordInput = document.getElementById("password-input")
const clipboard = document.getElementById("clipboard")
const passwordLength = document.getElementById("input-number")
const uppercaseOption = document.getElementById("uppercase")
const lowercaseOption = document.getElementById("lowercase")
const numberOption = document.getElementById("number")
const symbolsOption = document.getElementById("symbols")
const generatePassword = document.getElementById("generate")

const uppercase = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'
]
const lowercase = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'
]
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const symbols = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-',
  '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', ',', '<', '.', '>', '/', '?', '|'
]

generatePassword.addEventListener('click', () => {
  const length = passwordLength.value
  const options = [uppercaseOption, lowercaseOption, numberOption, symbolsOption]
  let optionsChecked = []
  let arrayWithAllLetters = []
  let passwordGenerated = ' '

  if (length < 11 || length > 50) {
    alert("ERROR!!!! Password length must be between 10 and 50 characters.")
    return
  }

  options.map(option => {
    if (option.checked) {
      return optionsChecked = [...optionsChecked, option]
    }
  })

  optionsChecked.map(option => {
    if (option.id === 'uppercase') {
      arrayWithAllLetters = [...arrayWithAllLetters, ...uppercase]
    } if (option.id === 'lowercase') {
      arrayWithAllLetters = [...arrayWithAllLetters, ...lowercase]
    } if (option.id === 'number') {
      arrayWithAllLetters = [...arrayWithAllLetters, ...numbers]
    } if (option.id === 'symbols') {
      arrayWithAllLetters = [...arrayWithAllLetters, ...symbols]
    }
    return arrayWithAllLetters
  })

  if (arrayWithAllLetters.length === 0) {
    return alert("ERROR!!! You must check at least one option in order to generate your password.")
  } else {
    const passwordCant = length

    for (let i = 0; i < length; i++) {
      const characterIndex = Math.floor((Math.random() * arrayWithAllLetters.length));
      const character = arrayWithAllLetters[characterIndex]
      passwordGenerated += character
    }

    passwordInput.value = passwordGenerated
  }
})

clipboard.addEventListener('click', () => {
  const password = passwordInput.value

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(password)
      alert('SUCCESS!!! The password was copied to clipboard.')
    } catch (err) {
      alert('ERROR!!! Failed to copy')
    }
  }

  copyContent()
})