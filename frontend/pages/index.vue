<template>
<div class="fixed" style="top: 50%; left: 50%; transform: translate3d(-50%,-50%,0)">
    <img src="~/static/images/icons/loading.svg" alt />
</div>
<div v-else class="mt-24 lg:mt-32 max-w-screen-xl mx-auto">
    <div class="lg:flex lg:items-center lg:justify-between">
        <div class="lg:w-1/2">
            <h1 class="text-2xl p-8 lg:max-w-3xl lg:text-3xl">
                {{ data.page_title }}
                <br />
                <br />
                <span v-html="data.page_subtitle"></span>
            </h1>
        </div>
        <div class="hidden lg:w-1/2 lg:flex lg:justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20393.130445166706!2d2.7503525434741256!3d50.28929010427125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd47d866f95a7b%3A0x6869aedb05652a21!2sArras!5e0!3m2!1sfr!2sfr!4v1604780058187!5m2!1sfr!2sfr" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>
    <div class="relative lg:flex lg:mt-8">
        <div class="lg:w-1/2">
            <img :src="data.image_1" alt />
        </div>
        <div class="lg:w-1/2 lg:absolute lg:bottom-0 lg:right-0">
            <black-card class="transform-card-right">
                {{ data.bloc_gris_texte_1 }}
                <br />
                <br />
                {{ data.bloc_gris_texte_2 }}
                <br />
                <br />
                {{ data.bloc_gris_texte_3 }}
            </black-card>
        </div>
    </div>
    <div class="mt-8 lg:mt-32">
        <title-and-cta>
            <div class="lg:w-3/4">
                <h2 class="text-xl px-4 font-semibold">
                    {{ data.accroche_1 }}
                </h2>
            </div>
            <div class="lg:w-1/4 flex justify-center lg:justify-end mt-8">
                <light-cta :link="data.accroche_1_button_lien">{{
            data.accroche_1_button
          }}</light-cta>
            </div>
        </title-and-cta>
    </div>
    <div class="mt-8">
        <div class="lg:flex lg:justify-evenly">
            <product-card class="lg:w-1/3 mt-8">
                <nuxt-link :to="data.bloc_produit_lien_1" class="flex justify-center">
                    <img class="h-64 border border-gray-900 border-opacity-25 responsive-img-height hover:border-opacity-75" :src="data.bloc_produit_image_1.url" alt />
                </nuxt-link>
                <div>
                    <nuxt-link class="font-title text-xl px-4 font-semibold text-center py-4 block hover:underline" :to="data.bloc_produit_lien_1">⇥ {{ data.bloc_produit_texte_1 }}</nuxt-link>
                </div>
            </product-card>
            <product-card class="lg:w-1/3 mt-8">
                <nuxt-link :to="data.bloc_produit_lien_2" class="flex justify-center">
                    <img class="h-64 border border-gray-900 border-opacity-25 responsive-img-height hover:border-opacity-75" :src="data.bloc_produit_image_2.url" alt />
                </nuxt-link>
                <div>
                    <nuxt-link class="font-title text-xl px-4 font-semibold text-center py-4 block hover:underline" :to="data.bloc_produit_lien_1">⇥ {{ data.bloc_produit_texte_2 }}</nuxt-link>
                </div>
            </product-card>
            <product-card class="lg:w-1/3 mt-8">
                <nuxt-link :to="data.bloc_produit_lien_3" class="flex justify-center">
                    <img class="h-64 border border-gray-900 border-opacity-25 responsive-img-height hover:border-opacity-75" :src="data.bloc_produit_image_3.url" alt />
                </nuxt-link>
                <div>
                    <nuxt-link class="font-title text-xl px-4 font-semibold text-center py-4 block hover:underline" :to="data.bloc_produit_lien_1">⇥ {{ data.bloc_produit_texte_3 }}</nuxt-link>
                </div>
            </product-card>
        </div>
    </div>
    <div class="relative lg:flex lg:flex-row-reverse lg:items-center lg:mt-8">
        <div class="lg:w-1/2">
            <img class="transform-img-right" :src="data.bloc_notes_image_1.url" alt />
        </div>
        <div class="lg:w-1/2 custom-position-card">
            <black-card class="transform-card-left" v-html="data.bloc_notes_1">
            </black-card>
        </div>
    </div>
    <div class="mt-8">
        <LayoutContactForm :acf="data" />
    </div>
</div>
</template>

<script>
export default {
    head: {
        title: "Digital RC - Imprimantes professionnelles",
        meta: [{
            hid: "description",
            name: "description",
            content: "Vente ou location de photocopieurs récents de la marque RICOH avec ou sans contrat de maintenance.",
        }, ],
    },
    data() {
        return {
            data: null,
        };
    },
    async fetch() {
        this.data = await this.$http.$get(
            "https://admin.digitalrc.fr/wp-json/wp/v2/pages/6"
        );
        this.data = this.data.acf;
    },
};
</script>

<style>
@media (min-width: 1024px) {
    .transform-card-right {
        transform: translate3d(-60px, 60px, 0);
    }

    .transform-card-left {
        transform: translate3d(60px, 0px, 0);
    }

    .transform-img-right {
        transform: translate3d(-60px, 0px, 0);
    }
}
</style>
