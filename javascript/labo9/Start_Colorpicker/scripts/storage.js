const storeSliderValues = (red, green, blue) => {
    let slider = {
        r: red,
        g: green,
        b: blue,
    };

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
        let swatch = {
            r: child.getAttribute("data-red"),
            g: child.getAttribute("data-green"),
            b: child.getAttribute("data-blue"),
        };
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
            addSwatchComponent(swatch.r, swatch.g, swatch.b);
        });
    }
};
