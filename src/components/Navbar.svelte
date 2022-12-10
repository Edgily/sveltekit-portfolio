<script lang="ts">
	import Icon from './Icon.svelte';
	import { pathName } from '../stores';
</script>

<nav id="navwrapper">
	<nav id="nav">
		<a href="/" class={$pathName === '/' ? 'nav-link active' : 'nav-link'}
			><Icon iconType={'user'} /></a
		>
		<a href="/experience" class={$pathName === '/experience' ? 'nav-link active' : 'nav-link'}
			><Icon iconType={'briefcase'} /></a
		>
	</nav>
</nav>

<style lang="scss">
	@import '../app.scss';

	#navwrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100vw;
		overflow: hidden;
		display: flex;
		justify-content: center;

		#nav {
			margin: 0 8vw;
			width: min-content;
			height: min-content;
			height: 3.5rem;
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex-wrap: nowrap;

			background-color: $transp;
			backdrop-filter: blur(0.2rem);

			.nav-link {
				padding: 0.7rem;
				padding-bottom: 0.2rem;

				:global(.icon) {
					stroke: $white;
					height: 2rem;
					width: auto;
				}

				&:hover,
				&:focus,
				&.active {
					border-bottom: 4px solid $purple;

					:global(.icon) {
						animation: 1s forwards colors;
						@keyframes colors {
							0% {
								stroke: $blue;
							}
							30% {
								stroke: $orange;
								transform: translateY(-0.1rem);
							}
							100% {
								stroke: $blue;
							}
						}
					}
				}
			}
		}
	}
</style>
