const storeSliderValues = (r, g, b) => {
    let slider = {};
    slider.r = r;
    slider.g = g;
    slider.b = b;
    let sliderJson = JSON.stringify(slider);
    localStorage.setItem("vives.be.currSlider", sliderJson);
};

const restoreSliderValues = () => {
    let reSlider = document.getElementById("sldRed");
    let grSlider = document.getElementById("sldGreen");
    let blSlider = document.getElementById("sldBlue");

    let slider = {};
    let sliderJson = localStorage.getItem("vives.be.currSlider");
    if (sliderJson == undefined) {
        slider = {
            r: 0,
            g: 0,
            b: 0,
        };
    } else {
        slider = JSON.parse(sliderJson);
    }

    reSlider.value = slider.r;
    grSlider.value = slider.g;
    blSlider.value = slider.b;
};

const storeSwatches = (swatchComponents) => {
    let arrSwatches = [];
    const childNodes = Array.from(swatchComponents.childNodes);

    childNodes.forEach((child) => {
        let swatch = {};
        swatch.r = child.getAttribute("data-red");
        swatch.g = child.getAttribute("data-green");
        swatch.b = child.getAttribute("data-blue");
        arrSwatches.push(swatch);
    });
    let jsonArr = JSON.stringify(arrSwatches);
    localStorage.setItem("vives.be.swatches", jsonArr);
};

const restoreSwatches = () => {
    let swatchJson = localStorage.getItem("vives.be.swatches");
    if (swatchJson !== undefined) {
        let arrSwatches = JSON.parse(swatchJson);
        arrSwatches.forEach((swatch) => {
            let r = swatch.r;
            let g = swatch.g;
            let b = swatch.b;
            addSwatchComponent(r, g, b);
        });
    }
};
