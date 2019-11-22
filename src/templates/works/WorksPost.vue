<template>
    <Layout>
        <p>koko</p>
        <h1>{{ $page.allWorks.title }}</h1>
        <dl>
            <time>
                {{ $page.allWorks.date }}
            </time>
        </dl>
        <div v-html="$page.allWorks.content"></div>


<hr />
<table>
    <tr v-for="item in $page.allWorks.edges" :key="item.node.permalink" class="works-post__list">
        <td>{{ item.node.id }}</td>
        <td>{{ item.node.title }}</td>
        <td>{{ item.node.slug }}</td>
        <td>{{ item.node.date }}</td>
        <td v-html="item.node.content"></td>
        <td><g-link :to="item.node.path">{{ item.node.title }}</g-link></td>
    </tr>
</table>
    </Layout>
</template>

<page-query>
    query {
        allWorks {
            edges {
                node {
                    id
                    title
                    slug
                    date (format: "YYYY年MM月DD日 HH:mm:ss")
                    content
                    path
                }
            }
        }
    }
</page-query>
<script>
export default {
    metaInfo() {
        return {
            title: this.$page.allWorks.title
        }
    }
    
}
</script>