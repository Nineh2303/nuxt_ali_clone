import { defineEventHandler } from 'h3'

export default defineNitroConfig({
    preset: 'node-server',
    devHandlers: [
        {
            route: '/',
            handler: defineEventHandler((event) => {
                console.log(event)
            }),

        }
    ],
})