<template>
  <MainLayout>
    <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-xl font-semibold mb-2">Shipping Address</div>
            <div v-if="true">
              <NuxtLink
                  to="/address"
                  class="flex items-center pb-2 text-blue-500 hover:text-red-400">
                <Icon name="mdi:plus" size="18" class="mr-2"/>
                Update Address
              </NuxtLink>
              <div class="pt-2 border-t">
                <div class="underline pb-1">Delivery Address</div>
                <ul class="text-xs">
                  <li class="flex items-center gap-2">
                    <div>Contact name:</div>
                    <div class="font-bold">Test</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Address:</div>
                    <div class="font-bold">Test</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Zip code:</div>
                    <div class="font-bold">Test</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>City:</div>
                    <div class="font-bold">Test</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Country:</div>
                    <div class="font-bold">Test</div>
                  </li>
                </ul>
              </div>
            </div>
            <NuxtLlnk
            v-else
            to="/address"
            class="flex items-center text-blue-500 hover:text-red-400">
              <Icon name="mdi:plus" size="18" class="mr-2"/>
              Add new Address
            </NuxtLlnk>
          </div>
          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products">
              <CheckoutItem :product="product"></CheckoutItem>
            </div>
          </div>
        </div>
        <div class="md:hidden block my-4"/>

        <div class="md:w-[35%]">
          <div id="PlaceOrder" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>

            <div class="flex items-center justify-between my-4">
              <div>Total shipping</div>
              <div>Free</div>
            </div>
            <div class="border-t"/>

            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                    $ <span class="font-extrabold">{{total/100}}</span>
              </div>
            </div>
            <form @submit.prevent="pay()">
              <div class="border border-gray-500 p-2 rounded-sm" id="card-element"/>
              <p id="cart-error" role="alert" class="text-red-700 text-center font-semibold"/>
              <button
                  :disabled="isProcessing"
                  type="submit"
                  class="mt-4 bg-gradient-to-r from-[#FE630C] to-[#FF3200] w-full text-white text-[21px] font-semibold p-1.5 rounded-full"
                  :class="isProcessing ? 'opacity-70' :'opacity-100' ">

                  <Icon v-if="isProcessing" name="eos-icons:loading"/>
                  <div v-else>Place Order</div>
              </button>
            </form>
          </div>
          <div class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2 mt-2">AliExpress</div>
            <p class="my-2">AliExpress keeps your information and payment safe</p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import {useUserStore} from "~/stores/user.js";
import {useRouter} from "vue-router";

const userStore = useUserStore()
const router = useRouter()

let stripe = null
let element = null
let card = null
let form = null
let total = ref(0)
let clientSecret = null
let currentAddress = ref(null)
let isProcessing = ref(false)

onMounted(() => {
  isProcessing.value = true
  userStore.checkout.forEach(item => {
    total.value += item.productPrice
  })
})
watch(() => total.value, () => {
  if (total.value > 0) {
    stripeInit()
  }
})

const stripeInit = async () => {

}
const pay = async () => {

}
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

</script>