"use strict"

$(document).ready (() =>{

    $.get(`https://www.reddit.com/r/aww/.json`).then((response) => {

        const arr = response.data.children;
        for (let i =0; i< arr.length; i++){
            console.log(arr[i]);

            $(".container").append(`
            <h2 class= "title"> ${arr[i].data.title}</h2>
            <img src = "${arr[i].data.preview.images["0"].source.url}">
            <a href = "${arr[i].data.thumbnail}">link!</h3>
            
            `)

        }
        console.log(response);
        // const arr = response.data.children;
        // console.log(arr);
    });
});



