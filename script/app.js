Waves.init();
Waves.attach('nav#top_menu > div:not(.type-name),aside#left_menu > .top #close-menu-btn', 'waves-circle');

Waves.attach('aside#left_menu #menu .side-menu-item')

const left_menu = new PerfectScrollbar('aside#left_menu #menu', {
    wheelSpeed: 1,
    wheelPropagation: false,
    minScrollbarLength: 10
});

class toggle {
    constructor(element) {
        this.element = document.querySelector(element.el);
        this.element_props = element.props;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        if (this.element_props.btns) {
            this.open_btn = document.querySelector(element.props.btns.open).addEventListener('click',this.open,true);;
            this.close_btn = document.querySelector(element.props.btns.close).addEventListener('click',this.close,true);;
        } else {
            this.toggle_btn = document.querySelector(element.toggle).addEventListener('click',this.toggle,true);
            this.toggle_btn_clicked = false;
        }
    }

    open() {
        this.element.classList.remove('close');
        this.element.classList.add('open');
        if (this.element_props.overContainer) {
            this.overContainer();
        }
    }

    close() {
        const cover = document.querySelector('.content-cover')
        this.element.classList.remove('open');
        this.element.classList.add('close');
        if (cover) {
            document.body.removeChild(cover);
        }
    }

    toggle(){
        if(this.toggle_btn_clicked){
            this.open();
        }else{
            this.close();
        }
    }

    overContainer() {
        const cover = document.createElement('div');
        cover.className = 'content-cover';
        document.body.insertBefore(cover, this.element);
        cover.addEventListener('click',this.close,false);
    }
}

new toggle({
    el: '#left_menu',
    props:{
        overContainer: true,
        btns:{
            open: '#open-menu-btn',
            close: '#close-menu-btn'
        }
    }
})