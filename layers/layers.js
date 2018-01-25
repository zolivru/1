var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource__0.addFeatures(features__0);var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
                title: '<img src="styles/legend/_0.png" /> ПС'
            });

lyr__0.setVisible(true);
var layersList = [baseLayer,lyr__0];
lyr__0.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Owner': 'Owner', });
lyr__0.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Owner': 'TextEdit', });
lyr__0.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Owner': 'no label', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});