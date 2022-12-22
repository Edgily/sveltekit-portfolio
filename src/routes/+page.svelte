<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, blur, fly, slide, scale, draw, crossfade } from 'svelte/transition';
	import Icon from '../components/Icon.svelte';
	import WordCloud from '../components/WordCloud.svelte';

	let sentences = ['Who am I?', 'Just a humble software engineer.', 'Samuel Edge'];
	let sentence = '';

	async function typingEffect(sentences: string[]) {
		function waitForMs(ms: number) {
			return new Promise((resolve) => setTimeout(resolve, ms));
		}

		async function typeText(textToType: string) {
			const letters = textToType.split('');

			for (let letter of letters) {
				await waitForMs(50);
				sentence = sentence + letter;
			}

			return;
		}

		async function deleteText() {
			const letters = sentence.split('');

			while (letters.length > 0) {
				await waitForMs(20);
				letters.pop();
				sentence = letters.join('');
			}
		}

		let i = 0;

		while (i < sentences.length) {
			await typeText(sentences[i]);
			if (i === sentences.length - 1) return;
			await waitForMs(1500);
			await deleteText();
			await waitForMs(500);
			i++;
			// if (i >= sentences.length) i = 0;
		}
	}
	onMount(() => {
		setTimeout(() => {
			typingEffect(sentences);
		}, 3000);
	});

	// OBSERVER STUFF
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log('observed');
					
					entry.target.classList.add('show');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.3 }
	);

	onMount(() => {
		const observed = document.querySelectorAll('.observed');

		observed.forEach((element: any) => {
			observer.observe(element);
		});
	});
</script>

<main id="main" in:fade={{ delay: 1000, duration: 500 }}>
	<div id="padder">
		<div id="me">
			<div class="stacked-container">
				<h1 class="stacked-top sentence">{sentence}</h1>
				<h1 class="stacked-bot sentence">{sentence}</h1>
			</div>

			<div style="height: 8vh;" />

			<button
				in:fade={{ delay: 11500 }}
				class="btn-blank"
				on:click={() => {
					const element = document.getElementById('experience');
					element?.scrollIntoView({
						behavior: 'smooth'
					});
				}}
			>
				<Icon iconType="arrow-down" />
			</button>
		</div>

		<div style="height: 4vh;" />

		<div id="experience" class="observed">
			<WordCloud />
		</div>

		<div style="height: 4vh;" />

		<div id="work">
			<div class="date observed">
				<div class="date1">APR. 2022</div>
				<div class="date2">DEC. 2022</div>
			</div>
			<div class="timeline">
				<div class="circle" />
				<div class="line" />
			</div>
			<div class="roles observed">
				<div class="stacked-container">
					<h2 class="stacked-top sentence role">Junior Full Stack Software Engineer</h2>
					<h2 class="stacked-bot sentence role">Junior Full Stack Software Engineer</h2>
				</div>
				<h3>@ With Juno Ltd</h3>

				<div style="height: 2vmin;" />

				<h3>Key experience</h3>

				<p class="role-desc">
					Front end pages and components -- Back end API routes -- Stripe integration -- Daily
					standup -- Kanban board coordination -- Agile way of working -- Code review -- Source
					control -- Jest testing -- Working in sprints -- Retrospectives -- Project planning
					sessions.
				</p>

				<div style="height: 2vmin;" />

				<h3>Key achievements</h3>
				<p class="role-desc">
					Created front end interface for Admins to customize a teammate's settings, and created the
					back end API route to update the database.
				</p>

				<div style="height: 2vmin;" />

				<p class="role-desc">
					Conditionally rendered front end birthdays component, showing upcoming birthdays within
					your team and ways to give them a gift.
				</p>

				<div style="height: 2vmin;" />

				<p class="role-desc">
					Batch jobs in AWS Lambda on a schedule to check a user's details in the database and
					update based on the team's settings.
				</p>

				<div style="height: 2vmin;" />
			</div>

			<div class="date observed">
				<div class="date1">NOV. 2021</div>
				<div class="date2">MAR. 2022</div>
			</div>
			<div class="timeline">
				<div class="circle" />
				<div class="line" />
			</div>
			<div class="roles observed">
				<div class="stacked-container">
					<h2 class="stacked-top sentence role">Software Engineer Student</h2>
					<h2 class="stacked-bot sentence role">Software Engineer Student</h2>
				</div>
				<h3>@ Northcoders</h3>

				<div style="height: 2vmin;" />

				<h3>Key experience</h3>
				<p class="role-desc">
					Full stack project as part of a team -- Front end projects such as CRUD websites -- Back
					end projects such as PostgreSQL and Express API servers -- Solo, paired, and team projects
					-- Working to a schedule and meeting deadlines -- Focus on JavaScript, React, PostgreSQL
					and Express.
				</p>

				<div style="height: 2vmin;" />

				<h3>Key achievement</h3>

				<p class="role-desc">
					A 3 week long full stack project as a team of 5. I was instrumental in guiding my
					teammates through some aspects of the project with which I was more comfortable, such as
					the page functionality with React + Next.js and UI creation with Chakra UI.
				</p>

				<div style="height: 2vmin;" />
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	@import '../app.scss';

	main {
		backdrop-filter: brightness(0.7) blur(0.1rem);
		width: 100vw;
		height: 100vh;

		overflow-x: hidden;
		overflow-y: auto;
		display: flex;
		justify-content: center;

		#padder {
			width: clamp(16rem, 90vw, 70rem);
			height: min-content;
			padding-bottom: 20vh;
		}
	}

	#me {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 35vh;

		:global(.arrow-down) {
			height: clamp(3rem, 1.7999999999999998rem + 5vw, 5rem);
			width: auto;
		}
	}

	.sentence::after {
		content: '|';

		animation: blink 0.6s linear infinite alternate;

		@keyframes blink {
			0% {
				opacity: 1;
			}
			40% {
				opacity: 1;
			}
			60% {
				opacity: 0;
			}
			100% {
				opacity: 0;
			}
		}
	}

	#experience {
		width: 100%;
		display: flex;
		justify-content: center;
		opacity: 0;
	}

	#work {
		width: 100%;
		display: grid;
		grid-template-columns: [left] min-content [middle] min-content [right] 1fr;
		grid-template-rows: [top] min-content [bottom] min-content;
		column-gap: 2vmin;

		.date {
			position: relative;
			top: 1rem;
			display: flex;
			flex-direction: row;
			height: min-content;
			width: min-content;
			opacity: 0;

			.date1 {
				writing-mode: vertical-lr;
				rotate: 180deg;
				display: flex;
				justify-content: flex-end;
				font-size: 1rem;
				font-size: clamp(1rem, 0.85rem + 0.625vw, 1.25rem);
			}

			.date2 {
				writing-mode: vertical-lr;
				rotate: 0deg;
				font-size: 1rem;
				font-size: clamp(1rem, 0.85rem + 0.625vw, 1.25rem);
			}
		}

		.timeline {
			position: relative;
			top: 0.5rem;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			// opacity: 0;

			.circle {
				width: 2vmin;
				height: 2vmin;
				background-color: $purple;
				border: 0.4vmin solid $white;
				border-radius: 50%;
			}

			.line {
				width: 0.4vmin;
				height: 100%;
				background-color: $white;
			}
		}

		.roles {
			opacity: 0;
			padding-bottom: 4vh;
			background-color: $transp;
			padding: 0 2vmin;
			border-radius: 1rem;

			.role {
				text-align: left;
			}
		}
	}
</style>
