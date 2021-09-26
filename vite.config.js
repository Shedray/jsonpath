import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
    assetsPublicPath: '/',
    plugins: [
        // ...
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
}