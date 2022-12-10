<script lang="ts">
	export let iconType = '';
</script>

{#if iconType === 'user'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="48"
		height="48"
		viewBox="0 0 24 24"
		fill="none"
		stroke="#FFFFFF"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="icon"
	>
		<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
		<circle cx="12" cy="7" r="4" />
	</svg>
{:else if iconType === 'briefcase'}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="48"
		height="48"
		viewBox="0 0 24 24"
		fill="none"
		stroke="#FFFFFF"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="icon"
		><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path
			d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
		/></svg
	>
{/if}
