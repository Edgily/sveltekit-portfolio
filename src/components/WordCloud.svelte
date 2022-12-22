<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let src = '/images/wordcloud2.png';

	function preload(src: any) {
		return new Promise(function (resolve) {
			let img = new Image();
			img.onload = resolve;
			img.src = src;
		});
	}
</script>

{#await preload(src) then _}
	<div class="stacked-container word-cloud">
		<h1 class="stacked-top title">Experience</h1>
		<h1 class="stacked-bot title-stroke">Experience</h1>
		<img class="cloud" {src} alt="word cloud" />
	</div>
{/await}

<style lang="scss">
	@import '../app.scss';

	.word-cloud {
		display: grid;
		cursor: zoom-in;
		max-width: 1000px;

		&:hover {
			.cloud {
				filter: blur(0) saturate(100%);
				transform: scale(1);
			}

			.title,
			.title-stroke {
				opacity: 0;
			}
		}

		* {
			grid-column: 1 / -1;
			grid-row: 1 / -1;
			text-align: center;
		}

		.title {
			z-index: 2;
			padding-top: 35%;

			transition: opacity 500ms ease;
		}

		.title-stroke {
			z-index: 1;
			padding-top: 35%;

			position: relative;
			top: 0.06em;
			left: -0.1em;

			color: transparent;
			-webkit-text-fill-color: transparent;

			background: linear-gradient(-45deg, $orange, $blue);
			background-size: 200% 200%;
			background-clip: text;
			-webkit-background-clip: text;

			transition: opacity 500ms ease;

			animation: gradient 5s ease infinite;

			@keyframes gradient {
				0%,
				100% {
					background-position: 0% 50%;
				}
				50% {
					background-position: 100% 50%;
				}
			}
		}

		.cloud {
			z-index: 0;
			width: 100%;
			height: auto;
			filter: blur(0.5vmin) saturate(30%);
			transform: scale(0.7);
			transition: all 500ms ease;
		}
	}
</style>
