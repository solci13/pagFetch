import { create_bidirectional_transition } from 'svelte/internal';
import { readable } from 'svelte/store';
    

export const user = readable(undefined, function start(set) {
    async function getData() {
        const response = await fetch("https://randomuser.me/api/");
        const body = await response.json();
        
        set({
            ...body.results[0],
            info: body.info,
        });
    }
    getData();
});



