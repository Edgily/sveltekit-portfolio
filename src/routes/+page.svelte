<script lang="ts">
	import Content from '../components/Content.svelte';
</script>

<Content>
	<div id="center">
		<h1>OH BOY</h1>
		hahah hi
		<h2>h2 here</h2>
	</div>
</Content>

<style lang="scss">
@import '../app.scss';

	#center {
		outline: 1px solid green;
		background-color: $transp;
		border-radius: 1rem;
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
	}
</style>
