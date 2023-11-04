const generateURL = (group, input, page) => {
    const baseUrl = 'https://api.github.com/users';

    switch (group) {
        case 'user':
            return `${baseUrl}/${input}`;
        case 'repos':
            return `${baseUrl}/${input}/repos?page=${page}`;
        case 'orgs':
            return `${baseUrl}/${input}/orgs?page=${page}`;
        default:
            throw new Error(`Invalid type: ${group}`);
    }
};

const fetchData = async (group, input, page) => {
    const fetch = require('node-fetch');

    const url = generateURL(group, input, page);

    return await fetch(url)
    .then(res => res.json())
    .then(data => {
        return data;
    }).catch(err => console.error(`error: ${err}`))
}


export {fetchData};