import './node_modules/jsvectormap/dist/js/jsvectormap.js'
import "./node_modules/jsvectormap/dist/maps/world.js";
import './maps/us-aea-en.js'
import './maps/canada.js'

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
        // onRegionSelected: function (index, isSelected, selectedRegions) {
        //     console.log(index, isSelected, selectedRegions);
        // },
        onRegionTooltipShow(event, tooltip, code) {
            // Or you can disable tooltip for certain regions
            if (code === 'RU') {
                tooltip.hide()
            } else {
                // tooltip customize
                tooltip.text(
                    `<h5>${tooltip.text()} - Country</h5>` +
                    `<p class="text-xs">This message is gonna appear when hovering over every single reion.</p>`,
                    true // Enables HTML
                )
            }
        }
    }

    return Object.assign({}, options, {
        selector,
        map
    })
}

const maps = {
    us: new jsVectorMap(getOptions("#us", "us_aea_en")),
    canada: new jsVectorMap(getOptions("#canada", "canada")),
    world: new jsVectorMap(getOptions("#world", "world"))
}