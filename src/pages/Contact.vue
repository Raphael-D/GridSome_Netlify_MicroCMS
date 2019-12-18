<template>
    <Layout>
        <div class="hero">
            <h1 class="hero__heading">CONTACT US</h1>
        </div>
        <section class="l-section">
            <div class="l-wrapper">
                <form class="contact-form" name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <p class="contact-form__row">
                        <label>Your Name: <input type="text" name="name" /></label>   
                    </p>
                    <p class="contact-form__row">
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p class="contact-form__row">
                        <label>Your Role: 
                        <select name="role[]">
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                        </select></label>
                    </p>
                    <p class="contact-form__row">
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p class="contact-form__row">
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        </section>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Contact',
        description: 'Contact page is here. Please tell me what you notice.',
        link: [
            { rel: 'stylesheet', href: '/css/style.css' },
        ]
    },
}
</script>