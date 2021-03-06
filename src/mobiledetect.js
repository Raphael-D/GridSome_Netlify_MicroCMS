const mobileDetect = {
    install(Vue, options) {
        Vue.prototype.$mobileDetect = function(_ref) {
            // return console.log(this.$myObjectProperty);
            const self = this;
            const breakpoint = _ref.breakpoint === undefined ? 768 : _ref.breakpoint;
            const mobile = _ref.mobile;
            const pc = _ref.pc;
            const browseInit = () => {
                // return location.reload();
                return self.$forceUpdate();
            }
            const getWindowWidth = () => {
                return document.documentElement.clientWidth;
            }
            if(getWindowWidth() <= breakpoint) {
                mobile();
                window.addEventListener('resize', function() {
                    if(getWindowWidth() > breakpoint) {
                        browseInit();
                    }
                });
            } else {
                pc();
                window.addEventListener('resize', function() {
                    if(getWindowWidth() <= breakpoint) {
                        browseInit();
                    }
                })
            }
        }
    }
}
export default mobileDetect;