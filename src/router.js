export class Router{
    routes = {}
    addRouter(name,url){
        this.routes[name] = url
    }
    route(event){
        event = event || window.event

        event.preventDefault()
        

        window.history.pushState({},'',event.target.href)
        this.handle()
    }
    handle(){
        const {pathname} = window.location

        const route = this.routes[pathname] || this.routes[404]

        fetch(route).then(page => page.text()).then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}