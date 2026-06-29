ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([44.038775, 23.924009, 63.348525, 40.409274]);
var wms_layers = [];

var format_iran_ostan_0 = new ol.format.GeoJSON();
var features_iran_ostan_0 = format_iran_ostan_0.readFeatures(json_iran_ostan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_iran_ostan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iran_ostan_0.addFeatures(features_iran_ostan_0);
var lyr_iran_ostan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_iran_ostan_0, 
                style: style_iran_ostan_0,
                popuplayertitle: 'iran_ostan',
                interactive: true,
                title: '<img src="styles/legend/iran_ostan_0.png" /> iran_ostan'
            });
var format_city_1 = new ol.format.GeoJSON();
var features_city_1 = format_city_1.readFeatures(json_city_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_city_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_city_1.addFeatures(features_city_1);
var lyr_city_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_city_1, 
                style: style_city_1,
                popuplayertitle: 'city',
                interactive: true,
                title: '<img src="styles/legend/city_1.png" /> city'
            });
var format_sea_2 = new ol.format.GeoJSON();
var features_sea_2 = format_sea_2.readFeatures(json_sea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sea_2.addFeatures(features_sea_2);
var lyr_sea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sea_2, 
                style: style_sea_2,
                popuplayertitle: 'sea',
                interactive: true,
                title: '<img src="styles/legend/sea_2.png" /> sea'
            });

lyr_iran_ostan_0.setVisible(true);lyr_city_1.setVisible(true);lyr_sea_2.setVisible(true);
var layersList = [lyr_iran_ostan_0,lyr_city_1,lyr_sea_2];
lyr_iran_ostan_0.set('fieldAliases', {'OSTAN': 'OSTAN', 'Area': 'Area', 'Perimeter': 'Perimeter', });
lyr_city_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltitudeMo': 'AltitudeMo', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', });
lyr_sea_2.set('fieldAliases', {'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', });
lyr_iran_ostan_0.set('fieldImages', {'OSTAN': '', 'Area': '', 'Perimeter': '', });
lyr_city_1.set('fieldImages', {'OID_': 'Range', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'Range', 'AltitudeMo': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', });
lyr_sea_2.set('fieldImages', {'ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_iran_ostan_0.set('fieldLabels', {'OSTAN': 'inline label - always visible', 'Area': 'header label - always visible', 'Perimeter': 'no label', });
lyr_city_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltitudeMo': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', });
lyr_sea_2.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ACRES': 'no label', 'HECTARES': 'no label', });
lyr_sea_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});