<script lang="ts">
	import { fade } from 'svelte/transition';
	let src = '/images/agnis-leznins-DXa7-nmPKSk-unsplash.jpg';

	function preload(src: any) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}
</script>

{#await preload(src) then _}
	<img id="bg" {src} in:fade={{ duration: 1000 }} alt="asian street at night" />
{/await}

<style lang="scss">
	#bg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		z-index: -1;
	}
</style>
