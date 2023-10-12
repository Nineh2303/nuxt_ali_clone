<template>
  <MainLayout>
    <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div v-if="false" class="h-[500px] flex items-center justify-center">
        <div class="pt-20">
          <img src="/cart-empty.png" width="250" alt="" class="mx-auto">
          <div class="text-xl text-center mt-4">No items yet ?</div>

          <div v-if="true" class="flex text-center">
            <NuxtLink to="/"
                      class="bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4">Sign in
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-2xl font-bold mb-2">
              Shopping cart (0)
            </div>
          </div>
          <div class="bg-[#FEEEEF] rounded-lg p4 mt-4">
            <div class="text-red-500 font-bold">Welcome Deal applicable on 1 item only</div>
          </div>
          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products">
              <CartItem
                  :product=product
                  :selectedArray="selectedArray"
                  @selectedRadio="selectedRadioFunc"
              ></CartItem>
            </div>
          </div>
        </div>
        <div class="md:hidden block my-4"/>
        <div class="md:w-[35%]">
          <div id="Summary" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>
            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
              </div>
            </div>
            <button @click="gotoCheckout"
                    class="flex items-center justify-center bg-[#FD374F] w-full text-white text-[12px] font-semibold p-1.5 rounded-full mt-4">
              Checkout
            </button>
          </div>
          <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2">Payment Methods</div>
            <div class="flex items-center justify-start gap-8 my-4">
              <div v-for="card in cards">
                <img :src="card" alt="" class="h-6 cursor-pointer">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>

import MainLayout from "~/layouts/MainLayout.vue";
import {computed} from "vue";
import {useUserStore} from "~/stores/user.js";

const userStore = useUserStore();
const selectedArray = ref([])

onMounted(() => {
  setTimeout(() => userStore.isLoading = false, 200)
})

const products = [
  {
    id: "641d682987310057ae4deef4",
    productName: "Lakewood SunghaJung signature",
    productBrand: "Lakewood",
    productPrice: 999, productDescription: "The description",
    productImg: "https://res.cloudinary.com/nineh2000/image/upload/v1679648808/guitar-shop/iy8dmo3e48gjyrl4u4id.jpg",
    inStock: false, countInStock: 10, productSlug: "lakewood-sunghajung-signature",
  },
  {
    id: "642136d63cd8a2073c9deb44",
    productName: "Morris SC-145U ",
    productBrand: "Morris",
    productPrice: 999, productDescription: "The description",
    productImg: "https://res.cloudinary.com/nineh2000/image/upload/v1679898327/guitar-shop/u30jwicvfbefw8qlps8k.jpg",
    inStock: true, countInStock: 10, productSlug: "morris-sc-145u",
  },
  {
    id: "642137b53cd8a2073c9deb49",
    productName: "Taylor 214CE",
    productBrand: "Taylor",
    productPrice: 999, productDescription: "The description",
    productImg: "https://res.cloudinary.com/nineh2000/image/upload/v1679898550/guitar-shop/nxu8yrrlenjkrm84djy3.png",
    inStock: true, countInStock: 10, productSlug: "taylor-214ce",
  },
  {
    id: "64fadd6a517188916156abb9",
    productName: "Alvarez AD30",
    productBrand: "Alvarez",
    productPrice: 899, productDescription: "The description",
    productImg: "https://res.cloudinary.com/nineh2000/image/upload/v1694162281/guitar-shop/p3lbg9rdd2t1zqbwwnmc.png",
    inStock: true, countInStock: 10, productSlug: "alvarez-ad30",
  },
  {
    id: "64fade13517188916156abbf",
    productName: "Alvarez AGFM80CEAR",
    productBrand: "Alvarez",
    productPrice: 1049, productDescription: "The description",
    productImg: "https://res.cloudinary.com/nineh2000/image/upload/v1694162449/guitar-shop/gan3vhjlzap295eilgon.png",
    inStock: true, countInStock: 10, productSlug: "alvarez-agfm80cear",
  }
]

const cards = ref([
  "visa.png",
  "mastercard.png",
  "paypal.png",
  "applepay.png"
])

const totalPriceComputed = computed(() => {
  let res = 0
  products.forEach(prod => res += prod.productPrice)

  return res / 100;
})
const selectedRadioFunc = (e) => {
  if (!selectedArray.value.length) {
    selectedArray.value.push(e)
    return
  }
  selectedArray.value.forEach((item, index) => {
    if (e.id != item.id) {
      selectedArray.value.push(e)
    } else {
      selectedArray.value.splice(index, 1)
    }
  })
}

const gotoCheckout = () => {
  let ids = []
  userStore.checkout = []

  selectedArray.value.forEach(item => ids.push(item.id))
  let res = userStore.cart.filter(item => {
    return ids.indexOf(item.id) != -1
  })
  res.forEach(item => userStore.checkout.push(toRaw(item)))
  return navigateTo("/checkout")
}

</script>

<style lang="css" scoped>

</style>