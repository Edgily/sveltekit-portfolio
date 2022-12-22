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
{:else if iconType === 'arrow-down'}
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
		class="icon arrow-down"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg
	>
{:else if iconType === 'linkedin'}
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
		><path
			d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
		/><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg
	>
{:else if iconType === 'github'}
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
		><path
			d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
		/></svg
	>
{/if}
