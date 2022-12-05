<script lang="ts">
	import { fade } from 'svelte/transition';

	// Scrollbar Width code
	import { onMount } from 'svelte';
	let content: any;
	onMount(() => {
		const scrollbarWidth = content.offsetWidth - content.clientWidth;
		const navWrapper = document.getElementById('navwrapper');

		if (navWrapper) {
			navWrapper.style.paddingRight = `${scrollbarWidth}px`;
		}
	});
	// End Scrollbar Width code

	// animation props
	//  {
	// 	delay?: number,
	// 	duration?: number,
	// 	easing?: (t: number) => number,
	// 	css?: (t: number, u: number) => string,
	// 	tick?: (t: number, u: number) => void
	//  }
</script>

<main
	bind:this={content}
	class="content"
	in:fade={{ delay: 500, duration: 300 }}
	out:fade={{ duration: 300 }}
>
	<slot />
</main>

<style lang="scss">
	.content {
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 10vw;
		overflow-x: hidden;
		overflow-y: auto;
		backdrop-filter: blur(4px);
	}
</style>
