var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_huanuco_limite_provincia_1 = new ol.format.GeoJSON();
var features_huanuco_limite_provincia_1 = format_huanuco_limite_provincia_1.readFeatures(json_huanuco_limite_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_huanuco_limite_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_huanuco_limite_provincia_1.addFeatures(features_huanuco_limite_provincia_1);
var lyr_huanuco_limite_provincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_huanuco_limite_provincia_1, 
                style: style_huanuco_limite_provincia_1,
                interactive: true,
    title: 'huanuco_limite_provincia<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_0.png" /> <br />\
    <img src="styles/legend/huanuco_limite_provincia_1_1.png" /> AMBO<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_2.png" /> DOS DE MAYO<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_3.png" /> HUACAYBAMBA<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_4.png" /> HUAMALIES<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_5.png" /> HUANUCO<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_6.png" /> LAURICOCHA<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_7.png" /> LEONCIO PRADO<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_8.png" /> MARAÑON<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_9.png" /> PACHITEA<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_10.png" /> PUERTO INCA<br />\
    <img src="styles/legend/huanuco_limite_provincia_1_11.png" /> YAROWILCA<br />'
        });
var format_huanuco_rios_2 = new ol.format.GeoJSON();
var features_huanuco_rios_2 = format_huanuco_rios_2.readFeatures(json_huanuco_rios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_huanuco_rios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_huanuco_rios_2.addFeatures(features_huanuco_rios_2);
var lyr_huanuco_rios_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_huanuco_rios_2, 
                style: style_huanuco_rios_2,
                interactive: true,
                title: '<img src="styles/legend/huanuco_rios_2.png" /> huanuco_rios'
            });
var format_huanuco_centros_poblados_3 = new ol.format.GeoJSON();
var features_huanuco_centros_poblados_3 = format_huanuco_centros_poblados_3.readFeatures(json_huanuco_centros_poblados_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_huanuco_centros_poblados_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_huanuco_centros_poblados_3.addFeatures(features_huanuco_centros_poblados_3);
var lyr_huanuco_centros_poblados_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_huanuco_centros_poblados_3, 
                style: style_huanuco_centros_poblados_3,
                interactive: true,
    title: 'huanuco_centros_poblados<br />\
    <img src="styles/legend/huanuco_centros_poblados_3_0.png" /> Capital y distrito<br />\
    <img src="styles/legend/huanuco_centros_poblados_3_1.png" /> Pueblo<br />\
    <img src="styles/legend/huanuco_centros_poblados_3_2.png" /> <br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_huanuco_limite_provincia_1.setVisible(true);lyr_huanuco_rios_2.setVisible(true);lyr_huanuco_centros_poblados_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_huanuco_limite_provincia_1,lyr_huanuco_rios_2,lyr_huanuco_centros_poblados_3];
lyr_huanuco_limite_provincia_1.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'ccdd': 'ccdd', 'nombdep': 'nombdep', 'ccpp': 'ccpp', 'nombprov': 'nombprov', 'capital': 'capital', 'idprov': 'idprov', 'shape_star': 'shape_star', 'shape_stle': 'shape_stle', 'orig_fid': 'orig_fid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_huanuco_rios_2.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'clasificac': 'clasificac', 'nombre': 'nombre', 'ubigeo': 'ubigeo', 'nomdep': 'nomdep', 'ccdd': 'ccdd', 'nomprov': 'nomprov', 'ccpp': 'ccpp', 'nomdist': 'nomdist', 'ccdi': 'ccdi', 'idprov': 'idprov', 'shape_stle': 'shape_stle', 'orig_fid': 'orig_fid', 'shape_leng': 'shape_leng', 'tipo': 'tipo', });
lyr_huanuco_centros_poblados_3.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'provincia': 'provincia', 'distrito': 'distrito', 'region_nat': 'region_nat', 'longitud': 'longitud', 'latitud': 'latitud', 'categoria': 'categoria', 'codigo': 'codigo', 'ubigeo': 'ubigeo', 'departamen': 'departamen', 'altitud': 'altitud', 'descripcio': 'descripcio', 'cpv2017_gi': 'cpv2017_gi', 'poblacion': 'poblacion', 'origen': 'origen', 'ccdd': 'ccdd', 'ccpp': 'ccpp', 'ccdi': 'ccdi', 'cod_grupo': 'cod_grupo', 'flag_tipo_': 'flag_tipo_', });
lyr_huanuco_limite_provincia_1.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'ccdd': 'TextEdit', 'nombdep': 'TextEdit', 'ccpp': 'TextEdit', 'nombprov': 'TextEdit', 'capital': 'TextEdit', 'idprov': 'TextEdit', 'shape_star': 'TextEdit', 'shape_stle': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_huanuco_rios_2.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'clasificac': 'TextEdit', 'nombre': 'TextEdit', 'ubigeo': 'TextEdit', 'nomdep': 'TextEdit', 'ccdd': 'TextEdit', 'nomprov': 'TextEdit', 'ccpp': 'TextEdit', 'nomdist': 'TextEdit', 'ccdi': 'TextEdit', 'idprov': 'TextEdit', 'shape_stle': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_leng': 'TextEdit', 'tipo': 'TextEdit', });
lyr_huanuco_centros_poblados_3.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'region_nat': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'categoria': 'TextEdit', 'codigo': 'TextEdit', 'ubigeo': 'TextEdit', 'departamen': 'TextEdit', 'altitud': 'TextEdit', 'descripcio': 'TextEdit', 'cpv2017_gi': 'TextEdit', 'poblacion': 'TextEdit', 'origen': 'TextEdit', 'ccdd': 'TextEdit', 'ccpp': 'TextEdit', 'ccdi': 'TextEdit', 'cod_grupo': 'TextEdit', 'flag_tipo_': 'TextEdit', });
lyr_huanuco_limite_provincia_1.set('fieldLabels', {'gid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'ccdd': 'no label', 'nombdep': 'no label', 'ccpp': 'no label', 'nombprov': 'no label', 'capital': 'no label', 'idprov': 'no label', 'shape_star': 'no label', 'shape_stle': 'no label', 'orig_fid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_huanuco_rios_2.set('fieldLabels', {'gid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'clasificac': 'no label', 'nombre': 'no label', 'ubigeo': 'no label', 'nomdep': 'no label', 'ccdd': 'no label', 'nomprov': 'no label', 'ccpp': 'no label', 'nomdist': 'no label', 'ccdi': 'no label', 'idprov': 'no label', 'shape_stle': 'no label', 'orig_fid': 'no label', 'shape_leng': 'no label', 'tipo': 'no label', });
lyr_huanuco_centros_poblados_3.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'provincia': 'no label', 'distrito': 'no label', 'region_nat': 'no label', 'longitud': 'no label', 'latitud': 'no label', 'categoria': 'no label', 'codigo': 'no label', 'ubigeo': 'no label', 'departamen': 'no label', 'altitud': 'no label', 'descripcio': 'no label', 'cpv2017_gi': 'no label', 'poblacion': 'no label', 'origen': 'no label', 'ccdd': 'no label', 'ccpp': 'no label', 'ccdi': 'no label', 'cod_grupo': 'no label', 'flag_tipo_': 'no label', });
lyr_huanuco_centros_poblados_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});