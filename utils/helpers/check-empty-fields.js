// Function to check empty fields

// Returns an array of empty fields in the object if any exist, otherwise returns an empty array.

// Example usage:
// const user = { name: '', email: 'example@example.com', password: '123' };
// const emptyFields = CheckEmptyFields(user); // ['name', 'password']
function CheckEmptyFields(obj) {
  const emptyFields = []

  for (const [key, value] of Object.entries(obj)) {
    if (!value) {
      emptyFields.push(key)
    }
  }

  return emptyFields
}
