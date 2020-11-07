<template>
<nav :class="open ? 'opacity-1 absolute h-screen top-0 right-0 bottom-0 pointer-event-auto w-5/6 bg-white transition duration-200 ease-in-out transform translate-x-0' : 'opacity-0 absolute h-screen top-0 right-0 bottom-0 w-5/6 bg-white pointer-events-none transform transition duration-200 ease-in-out transform translate-x-100'">
    <div class="flex flex-col">
        <div class="flex flex-col items-end mt-24 px-8">
            <n-link class="text-lg pt-2" to="/">Accueil</n-link>
            <n-link class="text-lg pt-2" to="/products">Produits</n-link>
            <n-link class="text-lg pt-2" to="/contact">Contact</n-link>
            <div class="flex items-center">
                <a href="#" class="pt-2">
                    <img src="~/static/images/icons/alternate_email-24px.svg" alt />
                </a>
                <a href="#" class="ml-2 pt-2">
                    <img class="h-5" src="~/static/images/icons/f_logo_RGB-Blue_250.png" alt />
                </a>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    props: {
        open: Boolean,
    },
};
</script>
