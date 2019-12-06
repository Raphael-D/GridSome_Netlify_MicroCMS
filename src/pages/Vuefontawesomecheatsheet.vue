<template>
    <!-- <Layout> -->
        <div>
            <div class="hero">
                <h1 class="hero__heading">Vue font Awesome cheat sheet<br />INDEX</h1>
            </div>
            <nav class="l-wrapper info-links">
                <button class="info-links__item" @click='selectFa("fas")'>Solid</button>
                <button class="info-links__item" @click='selectFa("fab")'>Brand</button>
                <button class="info-links__item" @click='selectFa("far")'>Regular</button>
                <button class="info-links__item" @click='selectFa("reset")'>Reset</button>
            </nav>
            <!-- Font Awesome Solid -->
            <section v-if="conditions.fas" id="fas" class="l-section">
                <div class="l-wrapper">
                    <h2>Type of Solid</h2>
                    <table class="fa-table">
                        <tr class="fa-table__row fa-table__row--heading">
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Prefix</th>
                            <th>Icon Name</th>
                            <th>Code</th>
                        </tr>
                        <tr class="fa-table__row fa-table__row--detail" v-for="(item, key) in getSolidFontAwesome" :key="key">
                            <td class="fa-table__cell fa-table__cell--icon"><font-awesome-icon :icon="[item.prefix, item.iconName]" /></td>
                            <td class="fa-table__cell fa-table__cell--name">{{ item.name }}</td>
                            <td class="fa-table__cell fa-table__cell--prefix">{{ item.prefix }}</td>
                            <td class="fa-table__cell fa-table__cell--iconName">{{ item.iconName }}</td>
                            <td class="fa-table__cell fa-table__cell--code">&lt;font-awesome-icon :icon=&quot;['{{ item.prefix }}', '{{ item.iconName}}']&quot; /&gt;</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section v-if="conditions.fab" id="fab" class="l-section">
                <div class="l-wrapper">
                    <h2>Type of Brand</h2>
                    <table class="fa-table">
                        <tr class="fa-table__row fa-table__row--heading">
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Prefix</th>
                            <th>Icon Name</th>
                            <th>Code</th>
                        </tr>
                        <tr class="fa-table__row fa-table__row--detail" v-for="(item, key) in getBrandFontAwesome" :key="key">
                            <td class="fa-table__cell fa-table__cell--icon"><font-awesome-icon :icon="[item.prefix, item.iconName]" /></td>
                            <td class="fa-table__cell fa-table__cell--name">{{ item.name }}</td>
                            <td class="fa-table__cell fa-table__cell--prefix">{{ item.prefix }}</td>
                            <td class="fa-table__cell fa-table__cell--iconName">{{ item.iconName }}</td>
                            <td class="fa-table__cell fa-table__cell--code">&lt;font-awesome-icon :icon=&quot;['{{ item.prefix }}', '{{ item.iconName}}']&quot; /&gt;</td>
                        </tr>
                    </table>
                </div>
            </section>
            <section v-if="conditions.far" id="far" class="l-section">
                <div class="l-wrapper">
                    <h2>Type of Regular</h2>
                    <table class="fa-table">
                        <tr class="fa-table__row fa-table__row--heading">
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Prefix</th>
                            <th>Icon Name</th>
                            <th>Code</th>
                        </tr>
                        <tr class="fa-table__row fa-table__row--detail" v-for="(item, key) in getRegularFontAwesome" :key="key">
                            <td class="fa-table__cell fa-table__cell--icon"><font-awesome-icon :icon="[item.prefix, item.iconName]" /></td>
                            <td class="fa-table__cell fa-table__cell--name">{{ item.name }}</td>
                            <td class="fa-table__cell fa-table__cell--prefix">{{ item.prefix }}</td>
                            <td class="fa-table__cell fa-table__cell--iconName">{{ item.iconName }}</td>
                            <td class="fa-table__cell fa-table__cell--code">&lt;font-awesome-icon :icon=&quot;['{{ item.prefix }}', '{{ item.iconName}}']&quot; /&gt;</td>
                        </tr>
                    </table>
                </div>
            </section>
            
            
        </div>
    <!-- </layout> -->
</template>
<script>
const fas = require('@fortawesome/free-solid-svg-icons')
const fab = require('@fortawesome/free-brands-svg-icons')
const far = require('@fortawesome/free-regular-svg-icons')
export default {
    metaInfo: {
        title: 'Vue Font Awesone Icon Cheat Sheet | Vue FontAwesome チートシート',
        description: 'This page is Vue.js Font Awesome Cheat Sheet. If will that mistake, Sorry. Now Developing. Please tell me mistake part.',
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
            fab: [{
                name: null,
                prefix: null,
                iconName: null
            }],
            far: [{
                name: null,
                prefix: null,
                iconName: null
            }],
            conditions: {
                fas: true,
                fab: true,
                far: true
            }
        }
    },
    methods: {
        extractFa(args) {
            let keys = Object.keys(args)
            let name = [];
            let prefix = [];
            let iconName = [];
            let values = {
                name: [],
                prefix: [],
                iconName: []
            }
            for(let i = 0; i < keys.length; i++) {
                if(Boolean(args[keys[i]].prefix) && Boolean(args[keys[i]].iconName)) {
                    name.push(keys[i]);
                    prefix.push(args[keys[i]].prefix);
                    iconName.push(args[keys[i]].iconName);
                }
            }
            values.name = name;
            values.prefix = prefix;
            values.iconName = iconName;
            return values;
        },
        callEachFa(args, target) {
            let self = this.extractFa(args);
            for(let i = 0; i < self.name.length; i++) {
                target[i] = new Object();
                target[i].name = self.name[i];
                target[i].prefix = self.prefix[i];
                target[i].iconName = self.iconName[i];
            }
            return target;
        },
    },
    computed: {
        getSolidFontAwesome() {
            return this.callEachFa(this.raw.fas, this.fas);
        },
        getBrandFontAwesome() {
            return this.callEachFa(this.raw.fab, this.fab);
        },
        getRegularFontAwesome() {
            return this.callEachFa(this.raw.far, this.far);
        },
        selectFa() {
            let self = this;
            return function(args) {       
                console.log("THIS one : " ,args)         
                if(!args) {
                    return
                }
                if(args === "fas") {
                    self.conditions.fas = true;
                    self.conditions.fab = false;
                    self.conditions.far =  false;
                }
                if(args === "fab") {
                    self.conditions.fas = false;
                    self.conditions.fab = true;
                    self.conditions.far = false;
                }
                if(args === "far") {
                    self.conditions.fas = false;
                    self.conditions.fab = false;
                    self.conditions.far = true;
                }
                if(args === "reset") {
                    self.conditions.fas = true;
                    self.conditions.fab = true;
                    self.conditions.far =  true;
                }
                return self.conditions.fas, self.conditions.fab, self.conditions.far;
            }
        }
    }
    
}
</script>