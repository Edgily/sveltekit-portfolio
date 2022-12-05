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
	<img id="bg" {src} in:fade={{ duration: 1000 }} alt="cool night time street" />
{/await}

<style lang="scss">
	#bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
