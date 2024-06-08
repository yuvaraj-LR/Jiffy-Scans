<script>
    import "../global.css"
    import Navbar from "$lib/components/Navbar.svelte";
    
</script>

<body class="my-auto">
    <header>
        <Navbar />
    </header>

    <main>
        <slot />
    </main>
</body>

<style>
    body {
        max-width: 1600px;
        width: 100%;
    }
</style>