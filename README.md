![Developing JAMstack by MicroCMS, GridSome, Netlify](github.jpg "Developing JAMstack by MicroCMS, GridSome, Netlify")
# Developing JAMstack by MicroCMS, GridSome, Netlify
I did not find JAMstack generated by GridSome and MicroCMS.
Then, I wanted for make it myself and created this repository.
Please tell me what you notice.

## Necessary functions

### 1. Get microCMS post data, then it data is send to graphQL.
> OK

### 2. Create single page of MicroCMS post data displays.
> OK

### 3. Create pager link lists on post page.
> Just did it

### 4. Last sequence is create complete static demo site.
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

## Looking for a way?

### How to import from the MicroCMS post data to GraphQL?
> Here: gridsome.server.js : "Import to GraphQL from MicroCMS."

### How to use GraphQL?
> Here: "/src/templates/WorksPost.vue" : "<page-query> ~ </page-query>"

### Other question or IMO?
> Here: <a href="mailto:support@codehack.dev">support@codehack.dev</a>
Please tell me what you notice. GOODEV XD