<template>
  <div class="mt-24 lg:mt-32 max-w-screen-xl mx-auto">
    <h1 class="text-2xl p-8 lg:max-w-3xl lg:text-3xl">
      Un besoin urgent d'imprimantes ?
      <br />
      <br />Digital RC est une entreprise
      <b>locale indépendante</b> qui restreint son secteur pour plus de
      <b>réactivité</b> et un
      <b>service de qualité</b>.
    </h1>
    <div class="relative lg:flex lg:mt-8">
      <div class="lg:w-1/2">
        <img src="~/static/images/illustrations/printer-illu.webp" alt />
      </div>
      <div class="lg:w-1/2 lg:absolute lg:bottom-0 lg:right-0">
        <black-card>
          Spécialisé dans les imprimantes professionnelles de la marque RICOH.
          <br />
          <br />Nous revendons des modèles récents remis à neufs. Grâce à cela nous sommes moins chères que la concurrence.
          <br />
          <br />Nous mettons à disposition aussi des contrats de locations d'imprimantes, ce qui vous permet de bénéficier de l'outil sans l'acheter.
        </black-card>
      </div>
    </div>
    <div class="mt-8 lg:mt-32">
      <title-and-cta>
        <div class="lg:w-3/4">
          <h2 class="text-xl px-4 font-semibold">
            Avec une trentaine d'années d'expériences dans le milieu du service d'impression.
            <br />Nous savons reconnaître les belles opportunitées en trouvant des imprimantes moins chères RICOH neuves. Profitez-en à votre tour.
          </h2>
        </div>
        <div class="lg:w-1/4 flex justify-center lg:justify-end mt-8">
          <light-cta link="/printers">Nos imprimantes</light-cta>
        </div>
      </title-and-cta>
    </div>
    <div class="mt-8">
      <div class="lg:flex lg:justify-evenly">
        <product-card class="lg:w-1/3 mt-8">
          <nuxt-link to="/printers" class="flex justify-center">
            <img
              class="h-64 border border-gray-900 border-opacity-25 responsive-img-height hover:border-opacity-75"
              src="~/static/images/illustrations/ricoh-printer.webp"
              alt
            />
          </nuxt-link>
          <div>
            <nuxt-link
              class="font-title text-xl px-4 font-semibold text-center py-4 block hover:underline"
              to="/printers"
            >⇥ Acheter une imprimante</nuxt-link>
          </div>
        </product-card>
        <product-card class="lg:w-1/3 mt-8">
          <nuxt-link to="/printers" class="flex justify-center">
            <img
              class="h-64 border border-gray-900 border-opacity-25 responsive-img-height hover:border-opacity-75"
              src="~/static/images/illustrations/smartcopie-fond-blanc-carre.webp"
              alt
            />
          </nuxt-link>
          <div>
            <nuxt-link
              class="font-title text-xl px-4 font-semibold text-center py-4 block hover:underline"
              to="/smartcopie"
            >⇥ Le contrat de maintenance</nuxt-link>
          </div>
        </product-card>
        <product-card class="lg:w-1/3 mt-8">
          <nuxt-link to="/printers" class="flex justify-center">
            <img
              class="h-64 border border-gray-900 border-opacity-25 responsive-img-height hover:border-opacity-75"
              src="~/static/images/illustrations/ricoh-imprimante-multifonction-laser-couleur-spc26.webp"
              alt
            />
          </nuxt-link>
          <div>
            <nuxt-link
              class="font-title text-xl px-4 font-semibold text-center py-4 block hover:underline"
              to="/imprimantes"
            >⇥ Louer une imprimante</nuxt-link>
          </div>
        </product-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    const home = await $prismic.api.getSingle("homepage");
    return { home };
  },
  head: {
    title: "Digital RC - Imprimantes professionnelles",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Vente ou location de photocopieurs récents de la marque RICOH avec ou sans contrat de maintenance.",
      },
    ],
  },
};
</script>