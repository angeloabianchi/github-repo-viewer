
const generateURL = (group, input, page) => {
    const baseUrl = 'https://api.github.com/users';

    switch (group) {
        case 'user':
            return `${baseUrl}/${input}`;
        case 'repos':
            return `${baseUrl}/${input}/repos?page=${page}`;
        case 'orgs':
            return `${baseUrl}/${input}/orgs`;
        default:
            throw new Error(`Invalid type: ${group}`);
    }
};


const extractLastPageURL = (linkHeader) => {
    if (!linkHeader) {
        return null;
    }
    const links = linkHeader.split(',');
    for (const link of links) {
        const [url, rel] = link.split(';');
        if (rel.includes('rel="last"')) {
            return url.trim().slice(1, -1); // Remove angle brackets
        }
    }
    return null;
}

const extractLastPageNumber = (lastPageURL) => {
    if (!lastPageURL) {
        return null;
    }
    const match = lastPageURL.match(/page=(\d+)/);
    if (match && match[1]) {
        return parseInt(match[1]);
    }
    return null;
}



const fetchData = async (group, input, page) => {
    const fetch = require('node-fetch');

    const url = generateURL(group, input, page);

    console.log(url)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    };

    return await fetch(url, options)
    .then(async res => {
        if (res.status === 404) {
            return { error: true, message: `Input "${input}" not found` };
        } else {
            const linkHeader = res.headers.get('link');
            const lastPageURL = extractLastPageURL(linkHeader);
            if (linkHeader) {
                const lastPageNumber = extractLastPageNumber(lastPageURL);
                /* console.log('linkHeader:', linkHeader); */
                const result = await res.json();
                return {result, lastPageNumber};
            } else {
                const lastPageNumber = 1;
                const result = await res.json();
                return {result, lastPageNumber};
            }
            
        }
    })
    .then(data => {
        if (data.error) {
            return(data);
        }
        return data;
    }).catch(err => console.error(`error: ${err}`))
}


export {fetchData};
