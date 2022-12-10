<script lang="ts">
	import '../app.scss';
	import '../font.scss';
	import Loader from '../components/Loader.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Background from '../components/Background.svelte';

	import { onMount } from 'svelte';
	import { visited } from '../stores';

	console.log($visited);
	let mounted = false;
	onMount(() => {
		mounted = true;
		console.log($visited);
		setTimeout(() => {
			visited.set(true);
			console.log($visited);
		}, 10000);
	});

	// import { page } from '$app/stores';

	// let pathName = $page.url.pathname;
</script>

{#if mounted}
	<Background />

	<slot />

	<Navbar />
{:else}
	<Loader />
{/if}
