<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import PollList from './components/PollList.svelte';
	import Tabs from './shared/Tabs.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import LoginForm from './components/LoginForm.svelte';

	// Tabs variables
	let items = ['Current Polls', 'Add New Poll', 'Login'];
	let activeItem = 'Current Polls';

	const tabChange = (e) => {
		activeItem = e.detail;
	}

	const handleAdd = (e) => {
		activeItem = 'Current Polls'
	}
</script>

<Header />

<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
		<PollList />
	
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm on:add={handleAdd}/>
	{:else if activeItem === 'Login'}
		<LoginForm />
	{/if}
</main>

<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
		min-height: 450px;
	}
</style>