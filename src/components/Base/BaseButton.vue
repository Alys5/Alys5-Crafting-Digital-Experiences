<template>
  <a v-if="link" :href="link" target="_blank" class="inline-block">
    <button :class="buttonClass" :disabled="disabled">
      <i v-if="icon" :class="iconClass"></i>
      <span :class="labelClass">{{ label }}</span>
    </button>
  </a>
  <button v-else :class="buttonClass" :disabled="disabled" @click="$emit('click', $event)">
    <i v-if="icon" :class="iconClass"></i>
    <span :class="labelClass">{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: 'filled', // Options: 'filled', 'outlined', 'text', 'elevated'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'primary', // Options: 'primary', 'secondary', 'accent'
    },
    icon: {
      type: String,
      default: null,
    },
    hoverColor: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: 'md', // Options: 'sm', 'md', 'lg'
    },
  },
  computed: {
    buttonClass() {
      const baseClasses = [
        this.size === 'sm' ? 'h-8' : 'h-10',
        'inline-flex',
        'items-center',
        'justify-center',
        'text-center',
        'transition-all',
        'duration-200',
        'ease-in-out',
        this.disabled ? 'opacity-50 cursor-not-allowed' : '',
      ]

      const variantClasses = {
        filled: [
          `bg-${this.color}-500`,
          'text-white',
          this.hoverColor ? `hover:${this.hoverColor}` : `hover:bg-${this.color}-600`,
          'rounded-md',
        ],
        outlined: [
          `border`,
          `border-${this.color}-500`,
          `text-${this.color}-500`,
          `hover:bg-${this.color}-100`,
          'rounded-md',
        ],
        text: [`text-${this.color}-500`, `hover:bg-${this.color}-50`, 'rounded-md'],
        elevated: [
          `bg-${this.color}-500`,
          'text-white',
          'shadow-md',
          'hover:shadow-lg',
          'rounded-full',
        ],
      }

      const paddingClasses = this.icon ? ['pl-2', 'pr-4'] : ['px-4']

      return [...baseClasses, ...variantClasses[this.variant], ...paddingClasses]
    },

    iconClass() {
      return ['h-5', 'w-5', 'mr-2', this.icon]
    },

    labelClass() {
      return ['text-sm', 'font-medium']
    },
  },
}
</script>
