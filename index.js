import "./node_modules/jsvectormap/dist/js/jsvectormap.js";
import "./node_modules/jsvectormap/dist/maps/us-aea-en.js";
import "./node_modules/jsvectormap/dist/maps/canada.js";

console.log('init');

const getOptions = (selector, map) => {
    const options = {
        selector: '',
        map: '',
        zoomButtons: false,
        zoomOnScroll: false,
        showTooltip: true,
        regionsSelectable: true,
        regionsSelectableOne: true,
        regionStyle: {
            initial: {
                stroke: "#ffffff",
                strokeWidth: 0.5,
                fill: '#d6d5da',
                fillOpacity: 1,
            },
            hover: { fill: '#34dc34' },
            selected: { fill: '#34dc34' }
        },
        onRegionSelected: function (index, isSelected, selectedRegions) {
            console.log(index, isSelected, selectedRegions);
        }
    }

    return Object.assign({}, options, {
        selector,
        map
    })
}

const maps = {
    us: new jsVectorMap(getOptions("#us", "us_aea_en")),
    canada: new jsVectorMap(getOptions("#canada", "canada"))
}