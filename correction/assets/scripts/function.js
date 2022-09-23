"use strict";

function Ele(elementAttribute){
    try{
        return document.querySelector(elementAttribute);

    }catch {
        console.error(elementAttribute + " is not a valid selector")
    }
}

function All(elementAttribute){
    try{
        return document.querySelectorAll(elementAttribute);

    }catch {
        console.error(elementAttribute + " is not a valid selector")
    }
}