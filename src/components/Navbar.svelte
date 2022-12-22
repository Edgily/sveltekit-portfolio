<script lang="ts">
	import Icon from './Icon.svelte';
</script>

<nav id="navwrapper">
	<nav id="nav">
		<button
			class="btn-blank"
			on:click={() => {
				const element = document.getElementById('me');

				element?.scrollIntoView({
					behavior: 'smooth'
				});
			}}
		>
			<Icon iconType="user" />
		</button>
		<button
			class="btn-blank"
			on:click={() => {
				const element = document.getElementById('experience');

				element?.scrollIntoView({
					behavior: 'smooth'
				});
			}}
		>
			<Icon iconType="briefcase" />
		</button>
		<form action="https://www.linkedin.com/in/edgily/" target="_blank">
			<button class="btn-blank" type="submit">
				<Icon iconType="linkedin" />
			</button>
		</form>
		<form action="https://github.com/edgily/" target="_blank">
			<button class="btn-blank" type="submit">
				<Icon iconType="github" />
			</button>
		</form>
	</nav>
</nav>

<style lang="scss">
	@import '../app.scss';

	#navwrapper {
		position: fixed;
		bottom: 5vh;
		left: 0;
		width: 100vw;
		overflow: hidden;
		display: flex;
		justify-content: center;

		#nav {
			margin: 0 8vw;
			width: min-content;
			height: min-content;
			border-radius: 1rem;

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex-wrap: nowrap;
			gap: clamp(2rem, 1.4rem + 2.5vw, 3rem);
			padding: 0.3rem 0.5rem;

			background-color: $transp;
			backdrop-filter: blur(0.2rem);
		}
	}
</style>
