//DOM styling class by : Ali Borsan
class DomObject {
	#links;
	#inputElement;
	#linkElement;

    constructor () {
        this.#inputElement = document.querySelector(".result");
        this.#links = { darkClass: "style1.css", liteClass: "style2.css", defaultClass: "style.css", currentClass: this.#inputElement.value };

		const data = localStorage.getItem('links');
		if (data) this.#links = JSON.parse(data);
		console.log(this.#links);

        this.#linkElement = document.head.querySelector("#headStyle");
		this.#linkElement.setAttribute("href", this.#links.currentClass);
		console.log(this.#linkElement);

        const darkClassInput = document.querySelector("input.dark-btn");
        darkClassInput.addEventListener("click", event => this.setDarkStyle());
        const liteClassInput = document.querySelector("input.lite-btn");
        liteClassInput.addEventListener("click", event =>  this.setLiteStyle());
        const defaultClassInput = document.querySelector("input.default-btn");
        defaultClassInput.addEventListener("click", event => this.setDefaultStyle());

        console.log("In Constructor current = " + this.#links);
    }
    
    
    setDarkStyle () {
        try {
			this.#inputElement.value = this.#links.currentClass = this.#links.darkClass;
            this.#linkElement.setAttribute("href", this.#inputElement.value);
			localStorage.setItem('links', JSON.stringify(this.#links));
        } catch (error) {
            console.log(error)   
        }
    }

    setLiteStyle () {
        try {
			this.#inputElement.value = this.#links.currentClass = this.#links.liteClass;
            this.#linkElement.setAttribute("href", this.#inputElement.value);
			localStorage.setItem('links', JSON.stringify(this.#links));
        } catch (error) {
            console.log(error)   
        }
    }


   setDefaultStyle () {
        try {
			this.#inputElement.value = this.#links.currentClass = this.#links.defaultClass;
            this.#linkElement.setAttribute("href", this.#inputElement.value);
			localStorage.setItem('links', JSON.stringify(this.#links));
        } catch (error) {
            console.log(error)   
        }
    }
}


window.addEventListener("load", event => {
    const controller = new DomObject();
    console.log(controller)
});