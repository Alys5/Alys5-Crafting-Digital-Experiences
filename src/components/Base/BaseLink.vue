<template>
  <a :href="href" :class="linkClass" @click.prevent="handleClick">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    linkClass() {
      return 'text-blue-500 hover:text-blue-700 underline'
    },
  },
  methods: {
    handleClick() {
      // Puoi aggiungere logica aggiuntiva qui, come il tracking degli eventi.
    },
  },
}
</script>
