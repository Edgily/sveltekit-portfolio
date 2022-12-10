<script lang="ts">
	import { onMount } from 'svelte';

	const characters = ['Loading...'];
	let textPosition = 0;
	let speed = 1000;

	onMount(() => {
		const typewriter = () => {
			const selector = document.querySelector('#loading');
			if (selector) {
				selector.innerHTML = characters[0].substring(0, textPosition);

				if (textPosition++ != characters[0].length) {
					setTimeout(typewriter, speed);
				}
			}
		};

		typewriter();
	});
</script>

<div style="width: 100%; height: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center; padding-bottom: 10rem;">
	<p id="loading" />
	<span class="blinker">|</span>
</div>

<style lang="scss">
	.blinker {
		animation: blinker 1s linear infinite;
	}

	@keyframes blinker {
		50% {
			opacity: 0;
		}
	}
</style>
