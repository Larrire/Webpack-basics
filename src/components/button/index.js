import './style.css';

class Button {

    constructor(){
        this.title = '';
        this.callback = function(){};
    }

    setTitle(t){
        this.title = t;
    }

    setClick(f){
        this.callback = f;
    }

    render(){
        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = this.title;
        button.addEventListener('click', this.callback);
        return button;
    }
}

export default Button;