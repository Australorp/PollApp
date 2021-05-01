<script>
    import { flip } from 'svelte/animate';
    import { fade, slide, scale} from 'svelte/transition';
    import PollDetails from './PollDetails.svelte';
    import { PollStore, PollReadStore, getData } from '../stores/PollStore.js';

    let promise = getData();
</script>

<div class="poll-list">
    <!-- {#each $PollReadStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration: 1000}}>
            <PollDetails {poll}/>
        </div>
    {:else}
        <p>List failed to load...</p>
    {/each} -->


    {#await promise}
        <p>...waiting</p>
    {:then data}
        {#each data.polls as poll (poll.id)}
            <div in:fade out:scale|local animate:flip={{duration: 1000}}>
                <PollDetails {poll}/>
            </div>
        {:else}
            <p>List was empty</p>
        {/each}
    {:catch error}
        <p>List failed to load because of {error}</p>
    {/await}
</div>

<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
</style>