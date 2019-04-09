const apiUrl = `https://voorhoede-colibri-api-rxmnpmphxz.now.sh/graphql`;

export function graphqlRequest(query) {
    return fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    })
    .then(res => res.ok ? res.json() : Promise.reject(new Error(`Error making query with code: ${ res.status }`)))
    .then(json => json.data);
}
