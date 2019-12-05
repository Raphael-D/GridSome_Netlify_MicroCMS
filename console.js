// Debug require to way, should be command "node console.js" in terminal.
const fas =  require('@fortawesome/free-solid-svg-icons')
const fab =  require('@fortawesome/free-brands-svg-icons')
const far =  require('@fortawesome/free-regular-svg-icons')
// console.log("fas::", fas);
// console.log("fab::", fab);
// console.log("far::", far);
// for(let item in fas) {
//     console.log(fas[item])
//     // console.log(item, fas[item].prefix, fas[item].iconName);
// }
// console.log(Object.keys(fas))
const FontAwesomeInfo = (title, fa) => {
    console.log(title, "\n\n\n")
    for(let item in fa) {
        console.log("Name : ", item, ", Prefix : ", fa[item].prefix, ", iconName : ", fa[item].iconName, "\n");
    }
}
FontAwesomeInfo("Solid", fas);
FontAwesomeInfo("Brand", fab);
FontAwesomeInfo("Regular", far);