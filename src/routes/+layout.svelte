<script lang="ts">
	import Navbar from '../components/Navbar.svelte';
	import Background from '../components/Background.svelte';
	import '../app.scss';
	import '../font.scss'
</script>

<Background />

<slot />

<Navbar />
