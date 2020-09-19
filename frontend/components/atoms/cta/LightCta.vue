<template>
  <div>
    <nuxt-link
      class="px-4 py-2 border border-gray-900 rounded text-gray-900 font-light text-lg hover:bg-gray-900 hover:text-white transition duration-200 ease-in-out"
      :to="link"
    >
      <slot></slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
  },
};
</script>