import { baseUrl } from '/src/scripts/variables.js'

async function getActivity(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=10`)
    return await response.json()    
}

export { getActivity }