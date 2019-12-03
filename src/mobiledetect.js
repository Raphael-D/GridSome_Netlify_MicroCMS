const mobileDetect = {
    install(Vue, _ref) {
        const breakpoint = _ref.breakpoint,
            mobile = _ref.mobile,
            pc = _ref.pc;
        const browseInit = function () {
            return location.reload();
        }
        const getWindowWidth = function () {
            return window.innerWidth;
        }
        if (getWindowWidth() <= breakpoint) {
            mobile();
            window.addEventListener('resize', function () {
                if (getWindowWidth() > breakpoint) {
                    browseInit();
                }
            });
        } else {
            pc();
            window.addEventListener('resize', function () {
                if (getWindowWidth() <= breakpoint) {
                    browseInit();
                }
            });
        }
    }
}
export default mobileDetect