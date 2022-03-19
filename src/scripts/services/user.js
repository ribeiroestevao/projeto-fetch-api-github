import { baseUrl } from '/src/scripts/variables.js'

//search name and bio in git
async function getUser(userName) {
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export { getUser }