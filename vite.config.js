import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";

export default defineConfig(
    {
        plugins:[
            VitePWA(
                {
                    registerType: 'autoUpdate',
                    devOptions: {
                        enabled: true
                    },
                    manifest: {
                        name: 'Greengold',
                        short_name: 'Greengold',
                        description: 'Greengold pwa',
                        theme_color: '#ff0000',
                        icons:[
                            {
                                src: "pwa-64x64.png",
                                sizes: "64x64",
                                type: "image/png"
                            },
                            {
                                src: "pwa-192x192.png",
                                sizes: "192x192",
                                type: "image/png"
                            },
                            {
                                src: "pwa-512x512.png",
                                sizes: "512x512",
                                type: "image/png"
                            },
                            {
                                src: "maskable-icon-512x512.png",
                                sizes: "512x512",
                                type: "image/png",
                                purpose: "maskable"
                            }
                        ]
                    }
                }
            )
        ]
    }
)