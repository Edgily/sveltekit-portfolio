<script lang="ts">
	import "../app.scss";
	import "../font.scss";
	import Loader from "../components/Loader.svelte";
	import Navbar from "../components/Navbar.svelte";
	import Background from "../components/Background.svelte";

	import { onMount } from "svelte";

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<Background />

	<slot />

	<Navbar />
{:else}
	<Loader />
{/if}
