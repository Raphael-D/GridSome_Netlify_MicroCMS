![Developing JAMstack by MicroCMS, GridSome, Netlify](github02.jpg "Developing JAMstack by MicroCMS, GridSome, Netlify")
# Developing JAMstack by MicroCMS, GridSome, Netlify
I did not find JAMstack generated by GridSome and MicroCMS.
Then, I wanted for make it myself and created this repository.
Please tell me what you notice.
<br />Latest view site: <a href="https://feature.codehack.dev/" target="_blank">https://feature.codehack.dev</a>

## Necessary functions

### 1. Get microCMS post data, then it data is send to graphQL.
> OK

### 2. Create single page of MicroCMS post data displays.
> OK

### 3. Create pager link lists on post page.
> Just did it

### 4. Create basic website structure
> Now developing

### 5. Create minimal SCSS
> Now developing

### 6. Last sequence is create complete static demo site.
> Now developing


## Unique settings

### 1. Compile each SCSS file into each external CSS file and generate it in a static directory.
> This behavior by webpack.config.js. This is because the CSS file is statically read and used like a general site like WordPress, other static site.
> In other words to edit CSS, edit the scss file placed in the assets directory. Include files are excluded from the multi-compilation export target, but are reflected in the include source CSS.

### 2. Using Template "WorksPost.vue" on Post page of "Works" category.
> General websites should be dynamic generate to page at post type single page.
> If you didn't they config you'll be create all each post page. It is no good.
> How do you if your post is over 100+ counts at someday because?
> All right. It config is exsit here. "gridsome.config.js"
> Reference: <a href="https://gridsome.org/docs/templates/" target="_blank">https://gridsome.org/docs/templates/</a>

### 3. Asyncronized npm run sequence for compile to SCSS files.
> "Compile each SCSS file", This function did must completed to before run gridsome server.
> Then, they must be watch always at after completed function.
> Separeted sequence each behavior for it but commands is one, "npm run dev".

## About GraphQL with MicroCMS posts.

### How to display the MicroCMS post data by GraphQL?
**Prerequisite: Pass MicroCMS submission data to GraphQL with gridsome.server.js.**
The actual example is shown below.

#### Case: List post type
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
    <page-query>
If the endpoint name is “works”, it will be “allWorks”.

#### Case: Object post type
    <page-query>
        query {
            allHome {
                edges {
                    node {
                        id
                        title
                        date
                        introduce {
                            intro_title
                            intro_content
                            intro_image {
                                url
                            }
                        }
                        hero {
                            url
                        }
                        carousel {
                            id
                            carousel {
                                url
                            }
                        }
                        feature {
                            feature_title
                            feature_image {
                                url
                            }
                            feature_content
                        }
                    }
                }
            }
        }
    </page-query>
If the endpoint name is “home”, it will be “allHomes”.
Note that if the input field created on the MicroCMS side is a multiple content reference type, it will be an array when called.

### How to display the acquired data in Vue.

#### Case: List post type
    <table>
        <tr v-for="item in $page.allWorks.edges" :key="item.node.permalink" class="works-post__list">
            <td>{{ item.node.id }}</td>
            <td>{{ item.node.title }}</td>
            <td>{{ item.node.slug }}</td>
            <td>{{ item.node.date }}</td>
            <td v-html="item.node.content"></td>
            <td><g-link :to="item.node.path">{{ item.node.path }}</g-link></td>
        </tr>
    </table>

#### Case: Object post type
`{{ $page.allHome.edges[0].node.title }}`


## Looking for a way?

### How to import from the MicroCMS post data to GraphQL?
> Here: gridsome.server.js : "Import to GraphQL from MicroCMS."

> Refblog: <a target="_blank" href="https://codehack.dev/works/how-to-import-graphql-from-microcms-in-post/">Import and display the post acquired by MicroCMS into GraphQL of GridSome</a>

### How to use GraphQL?
> Here: "/src/templates/WorksPost.vue" : "&lt;page-query&gt; ~ &lt;/page-query&gt;"

### Other question or IMO?
> Here: <a href="mailto:support@codehack.dev">support@codehack.dev</a>
Please tell me what you notice. GOODEV XD

