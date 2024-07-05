import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import intersect from '@alpinejs/intersect'
    
window.Alpine = Alpine

Alpine.plugin(collapse)
Alpine.plugin(intersect)

Alpine.data("navigation", () => ({
    mobileNav: true, 
    showNav: false,
    width: window.innerWidth,

    toggleNav() {
        this.showNav = !this.showNav
    },

    resize() {
        this.width = window.innerWidth
    }
}))

Alpine.data("newsCarousel", () => ({
    visible: false,
    category: "",
    categories: [
        "political",
        "international",
        "local",
        "business",
        "financial",
        "tech",
        "car",
        "entertainment",
        "gaming",
        "boulevard",
        "sports",
        "science",
        "health"
    ],
    ci: 0,

    next() {
        setTimeout(() => {
            if (this.ci == 12) this.ci = 0
            
            this.category = this.categories[this.ci]
            
            this.visible = true
            setTimeout(() => { this.visible = false }, 3500)

            this.ci++
            this.next()
        }, 4000)
    },
}))

Alpine.start()