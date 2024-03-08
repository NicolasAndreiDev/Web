import ListUsers from "./listUsers.js"

async function getUsersList(lista, param) {
    return new Promise((resolve, reject) => {
        const userSearch = lista.find(list => (list.nome === param.nome || list.idade === param.idade || list.email === param.email));
    
        if(userSearch) resolve(userSearch);
        else reject(new Error("Nenhum usuário possui possui essas informações"));
    })
}

// Procurando o primeiro usuário com 19 anos
getUsersList(ListUsers, {idade: 19})
    .then(data => {
        console.log("User: ", data);    
    })
    .catch(error => {
        console.log("Erro: ", error);
    })