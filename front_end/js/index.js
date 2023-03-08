const url = 'https://api.npoint.io/d6f34835d78c362d3636';

let dataUsers = {};

const getUrl = () =>{
    return fetch(url).then(response => response.json());
}

async function getUsers(){
    try {
        dataUsers = await getUrl();
    } catch (error) {
        console.log("Error", error);
    }
    return dataUsers;
}

getUsers().then(response =>{
    console.log("Los usuarios son:", response);
})