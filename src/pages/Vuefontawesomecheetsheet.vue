<template>
    <!-- <Layout> -->
        <div class="l-wrapper">
            <h1 class="fwtest">{{ fas }}</h1>
        <table class="fw-table">
            <tr>
                <th colspan="3">Vue Font Awesome Icon Cheet Sheet</th>
            </tr>
            <tr>
                <th colspan="3">
                    Type of Brand
                </th>
            </tr>
            <tr>
                <th>Name</th>
                <th>Prefix</th>
                <th>Icon Name</th>
            </tr>
            <tr v-for="item in fas" :key="item.name">
                <th>{{ item }}</th>
                
            </tr>
        </table>
        </div>
    <!-- </layout> -->
</template>
<script>
const fas = require('@fortawesome/free-solid-svg-icons')
const fab = require('@fortawesome/free-brands-svg-icons')
const far = require('@fortawesome/free-regular-svg-icons')
export default {
    metaInfo: {
        title: 'Vue Font Awesone Icon Cheet Sheet | Vue FontAwesome チートシート',
        link: [
            { rel: 'stylesheet', href: '/css/style.css' },
        ]
    },
    data() {
        return {
            raw: {
                fas: fas,
                fab: fab,
                far: far
            },
            fas: [{
                name: null,
                prefix: null,
                iconName: null
            }],
            fab: [],
            far: []
        }
    },
    methods: {
        VueFontAwesome() {
            for(let item in this.raw.fas) {
                let i = 0;
                this.fas.push(item)
                i++
            }
            return this.fas, this.fab, this.far;
        }
    },
    mounted() {
        this.VueFontAwesome();
    }
    
}
</script>