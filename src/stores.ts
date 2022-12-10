import { writable } from 'svelte/store';

export const visited = writable(false);

export const pathName = writable('/');
