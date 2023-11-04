
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

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    };

    return await fetch(url, options)
    .then(res => {
        console.log(res.status)
        if (res.status === 404) {
            return { error: true, message: `Input "${input}" not found` };
        } else {
            return res.json();
        }
    })
    .then(data => {
        if (data.error) {
            console.log('entrou aqui')
            return(data);
        }
        return data;
    }).catch(err => console.error(`error: ${err}`))
}


export {fetchData};