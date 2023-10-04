<template>
  <div class="flex justify-start my-2">
    <img
        class="rounded-md  w-[90px] max-h-[210px]"
        :src="product.productImg" alt="">
    <div class="overflow-hidden pl-2">
      <div class="flex items-center">
        <span class="bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]">Welcome Deal</span>
        <div class="truncate pl-2">{{ product.productName }}</div>
      </div>

      <div class="text-lg font-semibold mt-2">
        $<span class="font-bold">{{ product.productPrice / 100 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  product: {}
})
const {product} = toRefs(props)
</script>

<style lang="scss" scoped>

</style>