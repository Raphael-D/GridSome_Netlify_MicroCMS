<template>
    <!-- <Layout> -->
        <div class="l-wrapper">
            <h1 v-pre class="fwtest">{{ VueFontAwesome }}</h1>
        <table class="fw-table">
            <tr>
                <th colspan="5">Vue Font Awesome Icon Cheet Sheet</th>
            </tr>
            <tr>
                <th colspan="5">
                    Type of Brand
                </th>
            </tr>
            <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Prefix</th>
                <th>Icon Name</th>
                <th>Code</th>
            </tr>
            <tr v-for="(item, key) in VueFontAwesome" :key="key">
                <td><font-awesome-icon :icon="[item.prefix, item.iconName]" /></td>
                <td>{{ item.name }}</td>
                <td>{{ item.prefix }}</td>
                <td>{{ item.iconName }}</td>
                <td>&lt;font-awesome-icon :icon=&quot;[{{ item.prefix }}, {{ item.iconName}}]&quot; /&gt;</td>
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
    computed: {
        VueFontAwesome() {
            let keys = Object.keys(this.raw.fas)
            let name = [];
            let prefix = [];
            let iconName = [];
            for(let i = 0; i < keys.length; i++) {
                if(Boolean(this.raw.fas[keys[i]].prefix) && Boolean(this.raw.fas[keys[i]].iconName)) {
                    // if(keys[i]) {

                    
                    // this.fas[i] = new Object();
                    // this.fas[i].name = keys[i];
                    // this.fas[i].prefix = this.raw.fas[keys[i]].prefix;
                    // this.fas[i].iconName = this.raw.fas[keys[i]].iconName;


                    name.push(keys[i]);
                    prefix.push(this.raw.fas[keys[i]].prefix);
                    iconName.push(this.raw.fas[keys[i]].iconName);

                    // console.log(this.fas[i].name)
                    // console.log(keys[i])
                    // console.log(i, Boolean(this.raw.fas[keys[i]].iconName), this.raw.fas[keys[i]].iconName)
                    // console.log(this.fas[i].prefix)
                    // }
                }
            }
            for(let i = 0; i < name.length; i++) {
                this.fas[i] = new Object();
                this.fas[i].name = name[i];
                this.fas[i].prefix = prefix[i];
                this.fas[i].iconName = iconName[i];
                console.log(fas[i])
            }
            // console.log(Object.keys(this.raw.fas).length);
            // console.log(keys.length)
            // console.log(this.fas.length)
            return this.fas;
        },
        RestartVueFontAwesome() {
            if(this.fas.name === null) this.VueFontAwesome();
        }
    },
    mounted() {
        // this.VueFontAwesome();
        // console.log(this.raw.fas.faAd)
    }
    
}
</script>