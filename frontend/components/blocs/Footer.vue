<template>
  <section class="bg-image-footer px-4 py-8 mt-32">
    <div class="relative max-w-screen-xl mx-auto">
      <n-link class="text-lg pt-2 absolute right-0 bottom-0" to="/">
        <img
          class="mx-4 my-8 h-12"
          src="~/static/images/logos/digital-rc-logo-transparent-web.png"
          alt
        />
      </n-link>
      <div class="flex flex-col items-start px-8">
        <n-link class="text-lg pt-2" to="/">Accueil</n-link>
        <n-link class="text-lg pt-2" to="/printers">Imprimantes</n-link>
        <n-link class="text-lg pt-2" to="/smartcopie">Smartcopie</n-link>
        <n-link class="text-lg pt-2" to="/contact">Contact</n-link>
        <div class="flex items-center">
          <a href="mailto:richardclaude721@gmail.com" class="pt-2">
            <img src="~/static/images/icons/alternate_email-24px.svg" alt />
          </a>
          <a href="https://www.facebook.com/DIG.RICHARDC/" class="ml-2 pt-2" rel="nofollow" target="_blank">
            <img class="h-5" src="~/static/images/icons/f_logo_RGB-Blue_250.png" alt />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.bg-image-footer {
  background: #f6f6f6 url(~static/images/illustrations/bubbles.png) no-repeat
    50%;
}
</style>