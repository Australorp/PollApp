<script>
    import Button from '../shared/Button.svelte';

    async function postData(url = '', data = {}) {
    // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response; // parses JSON response into native JavaScript objects
    }

    let loginName;
    let loginOutput;

    const submitLogin = () => {
        loginOutput = postData('./login', { name : loginName })
    }

</script>

<form on:submit|preventDefault={submitLogin}>
    <p>Enter Name:</p>
    <p><input type = "text" name = "nm" bind:value={loginName}/></p>
    <Button>Login</Button>
</form>

{#await loginOutput}
        <p>...waiting</p>
    {:then data}
        {#if data}
            <p>{data.result}</p>
        {/if}
    {:catch error}
    <p>List failed to load because of {error}</p>
{/await}


 <style>
     form {
        margin: 0 auto;
        text-align: center;
     }
 </style>