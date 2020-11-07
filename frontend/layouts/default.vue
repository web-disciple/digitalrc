<template>
<div>
    <header class="relative z-10">
        <Menu />
    </header>
    <main class="relative z-0 min-h-screen">
        <Nuxt />
    </main>
    <footer class="relative z-0">
        <Footer />
    </footer>
</div>
</template>

<style>
html {
    font-family: "Roboto", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Lora", serif;
}

.font-title {
    font-family: "Lora", serif;
}
</style>

<script>
export default {
    head() {
        return {
            link: [{
                rel: 'canonical',
                href: 'http://localhost:3000/' + this.$route.path
            }]
        }
    }
}
</script>
