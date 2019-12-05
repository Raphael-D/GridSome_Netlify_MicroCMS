<template>
    <div>
        <footer class="l-footer footer">
            <div class="footer__wrapper">
                <g-link to="/" class="footer__home-link">
                    <g-image class="logo footer__logo" alt="Example image" src="~/assets/images/site-logo-w.png" />
                    <span class="footer__site-title">
                        {{ $static.metadata.siteName }}
                    </span>
                </g-link>
                <nav class="nav footer__nav">
                    <g-link class="footer__nav-link" to="/">Home</g-link>
                    <g-link class="footer__nav-link" to="/about/">About</g-link>
                    <g-link class="footer__nav-link" to="/works/">Works</g-link>
                </nav>
            </div>
            <div class="footer__contact">
                <a href="mailto:support@codehack.dev"><font-awesome-icon :icon="['fab', 'github']"/>support@codehack.dev</a>
            </div>
        </footer>
    </div>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
export default {
    name: 'Footer'
}
</script>