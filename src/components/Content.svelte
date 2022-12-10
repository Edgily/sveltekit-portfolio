<script lang="ts">
	import { fade } from 'svelte/transition';

	// animation props
	//  {
	// 	delay?: number,
	// 	duration?: number,
	// 	easing?: (t: number) => number,
	// 	css?: (t: number, u: number) => string,
	// 	tick?: (t: number, u: number) => void
	//  }
</script>

<main class="content" in:fade={{ delay: 1000, duration: 400 }} out:fade={{ duration: 400 }}>
	<slot />
</main>

<style lang="scss">
	.content {
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 10vw;
		padding-bottom: 6rem;
		overflow-x: hidden;
		overflow-y: auto;
		// backdrop-filter: blur(4px);
	}
</style>
