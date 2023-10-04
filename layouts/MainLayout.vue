<template>
  <div id="MainLayout" class="w-full fixed z-50 max-h-full overflow-y-auto" >
    <Header/>
    <Loading v-if="userStore.isLoading"></Loading>
    <div class="lg:pt-[150px] md:pt-[100px] pt-[80px]"/>
    <slot/>
    <Footer v-if="!userStore.isLoading"></Footer>
  </div>
</template>

<script setup>
import {useUserStore} from "~/stores/user";

const userStore = useUserStore();

</script>
