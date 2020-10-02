<template>
<section class="p-4 lg:flex lg:items-center">
    <div class="lg:w-1/2">
        <h3 class="text-center text-lg lg:text-xl font-title font-medium mb-8">
            {{ acf.titre_formulaire_de_contact }}
        </h3>
        <MainContactForm />
    </div>
    <div class="lg:w-1/2 mt-8 lg:mt-0">
        <h3 class="text-center text-lg lg:text-xl font-title font-medium mb-8">
            {{ acf.bloc_confiance_titre }}
        </h3>
        <div class="flex flex-col items-center justify-center lg:flex-row lg:flex-wrap">
            <img class="h-32 p-4" src="~/static/images/logos/nb-dury.webp" alt="" />
            <img class="h-32 p-4" src="~/static/images/logos/nb-nicolas.webp" alt="" />
            <img class="h-32 p-4" src="~/static/images/logos/nb-smartcopie.webp" alt="" />
            <img class="h-32 p-4" src="~/static/images/logos/nb-vdl.webp" alt="" />
        </div>
    </div>
</section>
</template>

<script>
export default {
    props: {
        acf: Object
    }
};
</script>
