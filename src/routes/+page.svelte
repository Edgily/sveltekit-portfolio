<script lang="ts">
	import { fade, blur, fly, slide, scale, draw, crossfade } from 'svelte/transition';
	import Content from '../components/Content.svelte';

	import { pathName } from '../stores';
	import { onMount } from 'svelte';

	onMount(() => {
		pathName.set('/');
	});

	let midDiv = 'skills';
</script>

<Content>
	<div id="center">
		<div id="name">
			<div id="name-anim">
				<h1 id="first-name">Samuel</h1>
				<div class="lineX" />
				<h1 id="last-name">Edge</h1>
			</div>
		</div>

		<!-- <div style="height: 2rem;" />

		<div id="skills" in:slide={{ delay: 2000 }}>
			<div id="btns">
				<button
					class={midDiv === 'skills' ? 'btn-blank hover active' : 'btn-blank hover'}
					on:click={() => (midDiv = 'skills')}>Skills</button
				>
				<button
					class={midDiv === 'practices' ? 'btn-blank hover active' : 'btn-blank hover'}
					on:click={() => (midDiv = 'practices')}>Practices</button
				>
			</div>
			<div class="lineX" />
			<div style="height: 2rem;" />

			<div id="content">
				{#if midDiv === 'skills'}
					<p
						style="list-style-type: none;"
						in:scale={{ duration: 300, delay: 400 }}
						out:scale={{ duration: 300 }}
					>
						JavaScript (ES6) - TypeScript - Node.js - Git - React - CSS3 - HTML5 - PostgreSQL - Jest
						- Next.js - Netlify - Heroku - AWS Lambda - Express - Firebase - Stripe - Supertest -
						Svelte
					</p>
				{:else if midDiv === 'practices'}
					<p
						style="list-style-type: none;"
						in:scale={{ duration: 300, delay: 400 }}
						out:scale={{ duration: 300 }}
					>
						Kanban - Test Driven Development - Agile Methodologies - Pair Programming - Code Review
						- Source Control
					</p>
				{/if}
			</div>
		</div> -->
	</div>
</Content>

<style lang="scss">
	@import '../app.scss';

	#center {
		width: 100%;
		height: 100%;
		border-radius: 1rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		#name {
			width: min-content;
			margin-top: -2rem;
			border-radius: 1rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			cursor: default;

			/* @keyframes duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name */
			animation: 4s ease-in-out 2s 1 spin;
			@keyframes spin {
				0% {
					transform: rotateX(0deg);
				}
				50% {
					transform: rotateX(180deg);
				}
				100% {
					transform: rotateX(360deg);
				}
			}

			&:hover {
				#name-anim {
					transform: rotateX(180deg);
				}
			}
			#name-anim {
				display: flex;
				flex-direction: column;
				align-items: center;
				transition: transform 0.2s ease;
			}

			#first-name {
				color: $blue;
			}

			#last-name {
				color: $orange;
				transform: scale(1, -1);
			}
		}

		#skills {
			// outline: 1px solid red;
			width: 100%;
			height: 100%;
			border-radius: 1rem;

			text-align: justify;

			
			background-color: $transp;
			backdrop-filter: blur(0.2rem);

			#btns {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				gap: 1rem;

				.btn-blank {
					background: none;
					border: none;
					height: 100%;
					cursor: pointer;
				}
			}
		}

		.lineX {
			border: 1px solid $purple;
			width: 100%;
		}

		.active {
			text-decoration: none;
			color: $blue;
			border-bottom: 4px solid $purple;

		}
	}
</style>
