<template>
<div>
    <nav class="fixed top-0 left-0 right-0 shadow-sm w-full z-30 bg-white">
        <div class="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
            <div class="flex items-center justify-center">
                <nuxt-link to="/">
                    <img class="h-10 lg:h-16" src="~/static/images/logos/digital-rc-logo-transparent-web.png" alt />
                </nuxt-link>
            </div>
            <div class="lg:flex items-center hidden">
                <n-link class="text-lg mx-4" to="/">Accueil</n-link>
                <n-link class="text-lg mx-4" to="/products">Produits</n-link>
                <n-link class="text-lg ml-4" to="/contact">Contact</n-link>
                <a href="#" class="ml-4">
                    <img src="~/static/images/icons/alternate_email-24px.svg" alt />
                </a>
                <a href="#" class="ml-4">
                    <img class="h-5" src="~/static/images/icons/f_logo_RGB-Blue_250.png" alt />
                </a>
            </div>
            <div class="lg:hidden">
                <img :src="open ? require(`~/static/images/icons/menu_open-24px.svg`) : require(`~/static/images/icons/menu-24px.svg`) " alt @click="open = !open" />
            </div>
        </div>
    </nav>
    <div :class="open ? 'lg:hidden fixed top-0 left-0 right-0 bottom-0 h-screen w-full z-20 bg-gray-900 bg-opacity-25 pointer-events-auto transition duration-200 ease-in-out' : 'lg:hidden fixed top-0 left-0 right-0 bottom-0 h-screen w-full z-20 bg-gray-900 bg-opacity-0 pointer-events-none transition duration-200 ease-in-out'">
        <OverlayMobile :open="open" />
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            open: false,
        };
    },
};
</script>
