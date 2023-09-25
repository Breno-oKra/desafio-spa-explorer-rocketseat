import { Router } from "./router.js";

const router = new Router();

router.addRouter("/", "/pages/home.html");
router.addRouter("/universe", "/pages/universe.html");
router.addRouter("/exploration", "/pages/exploration.html");
router.addRouter(404, "/pages/404.html");

let pageIndex =  nameRoute(window.location.pathname)

changeImage()

router.handle();

//onpopstate é chamado quando apertamos na seta voltar
window.onpopstate = () => router.handle();
window.route = () => {
  router.route();
  changeImage()
};

function changeImage(){
    const page = nameRoute(window.location.pathname)
    document.querySelector(`.${pageIndex}`).classList.remove('active')
    document.querySelector("#backgroundImg").src = `/src/assets/${page}.jpg`;
    document.querySelector(`.${page}`).classList.add('active')
    pageIndex = page
}
function nameRoute(route){
    const page = route;
    const image = page === "/" ? "/home" : page;
    return image.substring(1)
}