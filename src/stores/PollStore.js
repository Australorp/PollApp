import { debug } from 'svelte/internal';
import { readable, writable } from 'svelte/store';

export const PollStore = writable([], e => {
    
});

export const PollReadStore = readable([], set => {
	getData().then(data => set(data));
	return () => null;
});

export async function getData() {
    let environmentUrl = "http://localhost:4200/";
    return await fetch("./data").then(response => response.json());
};

/*
function updateStore(){
    let data = getData();
    PollStore.update(oldData => {return [data]});
}

updateStore();
*/

// let dat = getData();
// console.log(dat);



//let data = getData();
//console.log(data);
//console.log(JSON.parse(data));