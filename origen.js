
    

function solution(json1, json2) {
    // Tu código aquí 👈
    return { ...json1, ...json2};
}

const data1 = {
    name: "michi",
    food: "pescado"
}

const data2 = {
    age: 12,
    color: "Blanco"
}

const response = solution(data1, data2);
console.log("Response->", response);


   