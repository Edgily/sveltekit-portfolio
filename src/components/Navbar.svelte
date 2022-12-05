<nav id="navwrapper">
	<nav id="nav">
		<a href="/">home.</a>
		<a href="experience">experience.</a>
	</nav>
</nav>

<style lang="scss">
	@import '../app.scss';

	#navwrapper {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100vw;

		#nav {
			display: flex;
			padding-left: 10vw;
			gap: 1rem;
			border-top: 1px solid $purple;
			box-shadow: -5px 0px 10px 2px $purple;

			backdrop-filter: blur(10px);

			a {
				color: $white;
				font-size: 2rem;
				font-weight: bold;
				text-decoration: none;
				text-shadow: 2px 2px 2px $purple, -2px -2px 2px $purple, 2px -2px 2px $purple,
					-2px 2px 2px $purple;

				transition: color 300ms ease-out;

				&:hover, &:focus {
					color: $blue;
				}
			}
		}
	}
</style>
