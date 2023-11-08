import { createResolver, defineNuxtModule, addServerHandler } from '@nuxt/kit'

export default defineNuxtModule({
    setup(options) {
        const resolver = createResolver(import.meta.url)

        addServerHandler({
            route: '',
            handler: resolver.resolve('./runtime/robots.get.ts')
        })
    }
})