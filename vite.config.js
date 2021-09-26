import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
    build:{
        assetsPublicPath: './'
    },
    plugins: [
        // ...
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
}