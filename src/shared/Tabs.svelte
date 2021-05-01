<script>
    import { createEventDispatcher } from 'svelte';
    export let items;
    export let activeItem;

    const dispatch = createEventDispatcher();
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => dispatch('tabChange', item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {:else}
            <p>Items failed to load</p>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }

    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }

    li {
        margin: 0 16px;
        font-size: 16px;
        color: #555;
        cursor: pointer;
    }

    .active {
        color: #d91b42;
        border-bottom: 2px solid #d91b42;
    }
</style>