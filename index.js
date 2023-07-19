import './node_modules/jsvectormap/dist/js/jsvectormap.js'
import "./node_modules/jsvectormap/dist/maps/world.js";
import './maps/us-aea-en.js'
import './maps/canada.js'
import './maps/world_merc.js'

console.log('init');

const customTooltips = {
    CA: `
        <h5>Canada</h5>
        <p>Culligan of Canada ULC</p>
        <p>Calgary, Alberta T2P 4K9</p>
        <p><strong>Phone:</strong> 1-800-268-5458</p>
        <p><strong>Fax:</strong> 1-847-430-2735</p>
        <p><strong>Website:</strong> <a href="www.culligan.com">www.culligan.com</a></p>
        <p><strong>Email:</strong> <a mailto="internationalinfo@culligan.com">internationalinfo@culligan.com</a></p>
    `
}

const disabledRegions = ['GL']

const getOptions = (selector, map) => {
    const options = {
        selector: '',
        map: '',
        zoomButtons: false,
        zoomOnScroll: false,
        showTooltip: true,
        regionsSelectable: false,
        regionsSelectableOne: false,
        selectedRegions: disabledRegions,
        regionStyle: {
            initial: {
                stroke: "#ffffff",
                strokeWidth: 0.5,
                fill: '#d6d5da',
                fillOpacity: 1,
            },
            hover: { fill: '#34dc34' },
            selected: { fill: '#ebeced' },
            selectedHover: {
                fill: '#ebeced',
                fillOpacity: 1,
                cursor: "default"
            }
        },
        // onRegionSelected: function (index, isSelected, selectedRegions) {
        //     console.log(index, isSelected, selectedRegions);
        // },
        onRegionTooltipShow(event, tooltip, code) {
            // Or you can disable tooltip for certain regions
            if (disabledRegions.includes(code)) {
                tooltip.hide()
            } else if (code === 'CA') {
                // Tooltip customize
                tooltip.text(
                    customTooltips.CA,
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
    world: new jsVectorMap(getOptions("#world", "world_merc"))
}