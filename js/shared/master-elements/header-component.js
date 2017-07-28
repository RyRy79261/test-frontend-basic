let template =`
<header>
    <div id="back" class="icon">
    </div>
    <div id="title" class="heading">
        Profile
    </div>
    <div id="menu">
        <div class="inner"></div>
    </div>
<header>
`


class HeaderComponent extends HTMLElement{
    constructor(){
        super();
    }
    
    createdCallback() {
        this.createShadowRoot().innerHTML = template;

    }

    get title(){
        let title = this.attributes('title');
        return title ? title : "Title not set";
    }

    set title(val){
        this.setAttribute('title',  val);
    }
}

document.registerElement('app-header',  HeaderComponent);