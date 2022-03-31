var config = {
    style: 'mapbox://styles/mapbox/light-v10',
    accessToken: 'pk.eyJ1IjoianVhbmVzdGVsbGVyIiwiYSI6ImNsMWFrZnd3czAwMW8zY21odng3MDJlMDYifQ.koEEruUoh1R4IWdmbW16oQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'AFRICA GIS DISTRICT PLANNING TOOL',
    subtitle: 'Geographic Intelligence for sustainable development decisions',
    byline: 'By I4DS | UGR | JER',
    footer: 'Source: (citar créditos) <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Education | Health | Water Utilities',
            image: 'F:/MAPBOX/sample_original/storytelling-main/src/images/arcgis-dashboard-tcs-interactive.jpg',
            description: 'Data driven <b>Geographic Information System </b>based on three different kind of data sources: Public Open Data from Spatial Data Infrastructures; Inner Data collected from Goverment and Public Administrations; and specific surveys on field.',
            location: {
                center: [2.34399, 3.22874],
                zoom: 3.0,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Education Module',
            image: 'F:/MAPBOX/sample_original/storytelling-main/src/images/pexels-photo-8948347.jpeg',
            description: 'Idea/imagen fuerza sobre gestión Educativa.',
            location: {
                center: [31.79057, 3.37179],
                zoom: 20,
                pitch: 60,
                bearing: -0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Health Module',
            image: 'F:/MAPBOX/sample_original/storytelling-main/src/images/Mozambique-clinic-470x313-2.jpg',
            description: 'Idea/Imagen fuerza sobre gestión Educativa..',
            location: {
                center: [31.79275, 3.37253],
                zoom: 17.5,
                pitch: 45,
                bearing: -32.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Water Management',
            image: 'F:/MAPBOX/sample_original/storytelling-main/src/images/macro-reflection-splash-45229.jpg',
            description: 'Idea fuerza sobre gestión del ciclo del agua.',
            location: {
                center: [31.77557, 3.51761],
                zoom: 12,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
