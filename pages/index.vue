<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div v-if="products" v-for="product in products" :key="product">
          <ProductComponent :product="product"/>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>

import MainLayout from "~/layouts/MainLayout.vue";

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