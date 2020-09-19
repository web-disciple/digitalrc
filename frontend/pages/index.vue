<template>
  <div class="mt-24 p-4 max-w-screen-xl mx-auto">
    <h1>{{ home.data.title[0].text }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic }) {
    const home = await $prismic.api.getSingle("homepage");
    return { home }
  },
  head: {
    title: "Digital RC - Imprimantes professionnelles",
    meta: [
      { hid: 'description', name: 'description', content: 'Vente ou location de photocopieurs récents de la marque RICOH avec ou sans contrat de maintenance.' }
    ],
  },
};
</script>