// --------------------------------------------------------
// Google Earth Engine
// Licensed under The MIT License [see LICENSE for details]
// Written by Punnawat Siripatthiti
// --------------------------------------------------------


var unburned = 
    /* color: #e4d801 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([99.02398435647929, 18.835636837029227]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([98.96613447244609, 18.831412598344848]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([98.98380974385914, 18.82793437348883]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([99.0263094899709, 18.826869731269834]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([98.9411921310275, 18.86680080597994]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([98.93818805693083, 18.880729329248403]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([98.95973155973844, 18.89863572905848]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([98.95366978770934, 18.839783557519983]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[98.99339785891269, 18.815590396216674],
                  [98.96679034548495, 18.808440769758178],
                  [98.9559756787369, 18.765861705454952],
                  [98.95966677363181, 18.74375772658601],
                  [99.01588549929355, 18.76163571525855],
                  [99.02481212642915, 18.788288236931123],
                  [99.01279559450839, 18.81299056721543]]]),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[98.93569184758289, 18.72969547398937],
                  [98.89689637639148, 18.676689064949112],
                  [98.92865373112781, 18.660914016616832],
                  [98.96950913884265, 18.720428680135125]]]),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[99.01143535417786, 18.74609204452766],
                  [99.03872951311341, 18.685448116773426],
                  [99.06619533342591, 18.68561073008885],
                  [99.04920085710755, 18.751131177201092]]]),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[98.96734834417715, 18.91223370861382],
                  [98.97219772178485, 18.907239970521406],
                  [98.98714810902149, 18.900198022888315],
                  [99.01169549700458, 18.90080704075194],
                  [99.01824789941638, 18.927361788339564],
                  [98.99335716905192, 18.941163402165532],
                  [98.96932473991546, 18.940513940032524],
                  [98.96451825395638, 18.921678439186124],
                  [98.95868180678923, 18.91648206530498]]]),
            {
              "landcover": 0,
              "system:index": "11"
            })]),
    burned = 
    /* color: #32ff06 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[98.58951984121079, 18.306114484550722],
                  [98.58793197347397, 18.30489217574932],
                  [98.5893052644896, 18.303588370186397],
                  [98.59235225393051, 18.304240274194683]]]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[98.59426645950292, 18.312106790538024],
                  [98.59521059707616, 18.305669423344632],
                  [98.60246329025243, 18.305873141163016],
                  [98.60696940139745, 18.30990670461935],
                  [98.60486654952977, 18.314225365368454],
                  [98.60357908920263, 18.31605872650537],
                  [98.59684138015722, 18.314877229330754],
                  [98.59443812087987, 18.31475500502482]]]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[98.57664570459838, 18.324021862063],
                  [98.5919235671472, 18.327443926731434],
                  [98.61235127100463, 18.336080265057287],
                  [98.63415226587767, 18.343738543794373],
                  [98.6494301284265, 18.346997282880835],
                  [98.64033207544799, 18.350093028082174],
                  [98.6326073134851, 18.3515594143404],
                  [98.61132130274291, 18.346671411737926],
                  [98.59346851953978, 18.33950209110879],
                  [98.57613072046752, 18.33233247309871]]]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[98.60170826563353, 18.393101848459903],
                  [98.57887730249877, 18.380558716886014],
                  [98.5921299438877, 18.370588356324486],
                  [98.60208630375098, 18.3730320363567],
                  [98.60757946781348, 18.372869125431432],
                  [98.61084103397559, 18.36733006244189],
                  [98.62663388065528, 18.366841313052944],
                  [98.63813519291114, 18.36048744504402],
                  [98.6470615845127, 18.36407170703683],
                  [98.65392803959082, 18.38231770475105],
                  [98.64568829349707, 18.386227310272645],
                  [98.63762020878028, 18.39029972173457],
                  [98.6305820923252, 18.39062551049454],
                  [98.62749218754004, 18.392906014568762],
                  [98.61650585941504, 18.391765766304214],
                  [98.60912442020606, 18.38964814236698]]]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[98.62843632511328, 18.40447096335587],
                  [98.6213982086582, 18.402597820126825],
                  [98.60766529850196, 18.401783403672184],
                  [98.60303044132422, 18.39934013120074],
                  [98.5990822296543, 18.396896824071135],
                  [98.60122799686621, 18.394209146203103],
                  [98.60843777469825, 18.391358532952598],
                  [98.61830830387305, 18.395186488460936],
                  [98.62802756844553, 18.396583950098616],
                  [98.63051665841135, 18.39837571530329]]]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[98.14323871240092, 18.870763697053096],
                  [98.1422087441392, 18.86844898706235],
                  [98.14379661187601, 18.867677409963164],
                  [98.1447836647935, 18.86958604157803]]]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[98.91490908070035, 18.776951993674768],
                  [98.89448137684293, 18.770288322363285],
                  [98.90014620228239, 18.763136772338658],
                  [98.91113253040739, 18.763786925782576]]]),
            {
              "landcover": 1,
              "system:index": "6"
            })]),
    class0 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.9612856990275, 18.803678777134976],
              [98.9609423762736, 18.746713049261814],
              [99.00128279985758, 18.74736326599019],
              [99.00325690569254, 18.802703776931192]]]),
        {
          "class": 0,
          "system:index": "0"
        }),
    class1 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.MultiPolygon(
            [[[[98.9478009168172, 18.849666496948693],
               [98.94728593268634, 18.848102859326016],
               [98.9492600385213, 18.847717024425123],
               [98.94928149619342, 18.849686803834985]]],
             [[[98.9170231529308, 18.783061216325446],
               [98.91307494126087, 18.761932361735028],
               [98.92294547043568, 18.76697102135081],
               [98.92509123764759, 18.783792552322513]]]]),
        {
          "class": 1,
          "system:index": "0"
        }),
    table = ee.FeatureCollection("users/psiripatthiti/Chiang_Mai");

    //Fire in Chiange Mai 27-3-2020 Hang Dong district
    //Fire in Chiange Mai 25 to 29-3-2020 Doi Suthep

    // Location
    var area = ee.FeatureCollection(table);
    // Set study area as map center.
    
    var prefire_start = '2020-01-15';
    var prefire_end = '2022-01-30';

    var postfire_start = '2020-04-15';
    var postfire_end = '2020-04-30';

    // SELECT one of the following: 'L8' or 'S2'
    var platform = 'S2';

    // Print Satellite platform and dates to console
    if (platform == 'S2' | platform == 's2') {
    var ImCol = 'COPERNICUS/S2';
    var pl = 'Sentinel-2';
    } else {
    var ImCol = 'LANDSAT/LC08/C01/T1_SR';
    var pl = 'Landsat 8';
    }
    print(ee.String('Data selected for analysis: ').cat(pl));
    print(ee.String('Fire incident occurred between ').cat(prefire_end).cat(' and ').cat(postfire_start));

    var imagery = ee.ImageCollection(ImCol);

    var prefireImCol = ee.ImageCollection(imagery
      // Filter by dates.
      .filterDate(prefire_start, prefire_end)
      // Filter by location.
      .filterBounds(area)  
      .sort('CLOUD_COVER')  
      .mosaic());
      
    var postfireImCol = ee.ImageCollection(imagery
      // Filter by dates.
      .filterDate(postfire_start, postfire_end)
      // Filter by location.
      .filterBounds(area)
      .filter(ee.Filter.lte("CLOUDY_PIXEL_PERCENTAGE", 10))
      // .mosaic()
      )
      ;

    print("Pre-fire Image Collection: ", prefireImCol);
    print("Post-fire Image Collection: ", postfireImCol);

    //mask cloud function
    function maskS2sr(image) {
      // Bits 10 and 11 are clouds and cirrus, respectively.
      var cloudBitMask = ee.Number(2).pow(10).int();
      var cirrusBitMask = ee.Number(2).pow(11).int();
      // Get the pixel QA band.
      var qa = image.select('QA60');
      // All flags should be set to zero, indicating clear conditions.
      var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));
      // Return the masked image, scaled to TOA reflectance, without the QA bands.
      return image.updateMask(mask)
      .copyProperties(image, ["system:time_start"]);
    }

    function maskL8sr(image) {
      // Bits 3 and 5 are cloud shadow and cloud, respectively.
      var cloudShadowBitMask = 1 << 3;
      var cloudsBitMask = 1 << 5;
      var snowBitMask = 1 << 4;
      // Get the pixel QA band.
      var qa = image.select('pixel_qa');
      // All flags should be set to zero, indicating clear conditions.
      var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudsBitMask).eq(0))
      .and(qa.bitwiseAnd(snowBitMask).eq(0));
      // Return the masked image, scaled to TOA reflectance, without the QA bands.
      return image.updateMask(mask)
      .select("B[0-9]*")
      .copyProperties(image, ["system:time_start"]);
    }

    // Apply platform-specific cloud mask
    if (platform == 'S2' | platform == 's2') {
      var prefire_CM_ImCol = prefireImCol.map(maskS2sr);
      var postfire_CM_ImCol = postfireImCol.map(maskS2sr);
    } else {
      var prefire_CM_ImCol = prefireImCol.map(maskL8sr);
      var postfire_CM_ImCol = postfireImCol.map(maskL8sr);
    }

    var pre_mos = prefireImCol.mosaic().clip(area);
    var post_mos = postfireImCol.mosaic().clip(area);

    var pre_cm_mos = prefire_CM_ImCol.mosaic().clip(area);
    var post_cm_mos = postfire_CM_ImCol.mosaic().clip(area);

    print("Pre-fire True Color Image: ", pre_mos);
    print("Post-fire True Color Image: ", post_mos);
//----------------------------------------------------------------------------
var roi=   ee.Geometry.Polygon([[[98.86547060413682, 18.85690529385755],
          [98.86547060413682, 18.69893161560462],
          [99.04331179066025, 18.69893161560462],
          [99.04331179066025, 18.85690529385755]]], null, false);
          
Map.centerObject(roi,13);

var pre_cm_mos = pre_cm_mos.clip(roi);  
var post_cm_mos = post_cm_mos.clip(roi);  
//----------------------------------------------------------------------------
    if (platform == 'S2' | platform == 's2') {
      var preNBR = pre_cm_mos.normalizedDifference(['B8', 'B12']);
      var postNBR = post_cm_mos.normalizedDifference(['B8', 'B12']);
    } else {
      var preNBR = pre_cm_mos.normalizedDifference(['B5', 'B7']);
      var postNBR = post_cm_mos.normalizedDifference(['B5', 'B7']);
    }

    var dNBR_unscaled = preNBR.subtract(postNBR);
    // Scale product to USGS standards
    var dNBR = dNBR_unscaled.multiply(1000);
    // Add the difference image to the console on the right
    print("Difference Normalized Burn Ratio: ", dNBR);

    // Add boundary.
    Map.addLayer(area.draw({color: 'ffffff', strokeWidth: 5}), {},'Study Area',false);


    // Apply platform-specific visualization parameters for true color images
    if (platform == 'S2' | platform == 's2') {
      var vis = {bands: ['B4', 'B3', 'B2'], max: 2000, gamma: 1.5};
    } else {
      var vis = {bands: ['B4', 'B3', 'B2'], min: 0, max: 4000, gamma: 1.5};
    }

    // Add the true color images to the map.
    Map.addLayer(pre_mos, vis,'Pre-fire image',false);
    Map.addLayer(post_mos, vis,'Post-fire image',false);

    // Add the true color images to the map.
    Map.addLayer(pre_cm_mos, vis,'Pre-fire True Color Image - Clouds masked',false);
    Map.addLayer(post_cm_mos, vis,'Post-fire True Color Image - Clouds masked');

var SWIR = {
bands: ['B12','B8', 'B4'],
min: 1000,
max: 2500 //Guess still not sure where this number come from.
};
Map.addLayer(pre_cm_mos, SWIR,'SWIR Pre-fire True Color Image - Clouds masked',false);
Map.addLayer(post_cm_mos, SWIR,'SWIR Post-fire True Color Image - Clouds masked',false);

// var agri = {
// bands: ['B11','B8', 'B2'],
// min: 1000,
// max: 2500, 
// gamma:0.8 
// };
// Map.addLayer(pre_cm_mos, agri,'Agricuture Pre-fire True Color Image - Clouds masked');
// Map.addLayer(post_cm_mos, agri,'Agricuture Post-fire True Color Image - Clouds masked');

// var geo = {
// bands: ['B12','B11', 'B2'],
// min: 1000,
// max: 2500
// };

// Map.addLayer(post_cm_mos, geo,'Geology Post-fire True Color Image - Clouds masked',false);

    var grey = ['white', 'black'];
    Map.addLayer(dNBR, {min: -1000, max: 1000, palette: grey}, 'dNBR greyscale',false);

    // Define an SLD style to apply to the image.
    var sld_intervals =
      '<RasterSymbolizer>' +
        '<ColorMap type="intervals" extended="false" >' +
        '<ColorMapEntry color="#ffffff" quantity="-500" label="-500"/>' +
        '<ColorMapEntry color="#7a8737" quantity="-250" label="-250" />' +
        '<ColorMapEntry color="#acbe4d" quantity="-100" label="-100" />' +
        '<ColorMapEntry color="#0ae042" quantity="100" label="100" />' +
        '<ColorMapEntry color="#fff70b" quantity="270" label="270" />' +
        '<ColorMapEntry color="#ffaf38" quantity="440" label="440" />' +
        '<ColorMapEntry color="#ff641b" quantity="660" label="660" />' +
        '<ColorMapEntry color="#a41fd6" quantity="2000" label="2000" />' +
      '</ColorMap>' +
    '</RasterSymbolizer>';

    // Add the image to the map using both the color ramp and interval schemes.
    Map.addLayer(dNBR.sldStyle(sld_intervals), {}, 'dNBR classified',false);

    // Seperate result into 8 burn severity classes
    var thresholds = ee.Image([-1000, -251, -101, 99, 269, 439, 659, 2000]);
    var classified = dNBR.lt(thresholds).reduce('sum').toInt();


    // count number of pixels in entire layer
    var allpix = classified.updateMask(classified); // mask the entire layer
    var pixstats = allpix.reduceRegion({
      reducer: ee.Reducer.count(), // count pixels in a single class
      geometry: area,
      scale: 30,
      maxPixels: 1e9
    });
    var allpixels = ee.Number(pixstats.get('sum')); // extract pixel count as a number

    // print(allpixels)

    // create an empty list to store area values in
    var arealist = [];

    //function to derive the extent of one burn severity class.
    var areacount = function(cnr, name) {
    var singleMask = classified.updateMask(classified.eq(cnr)); // mask a single class
    var stats = singleMask.reduceRegion({
      reducer: ee.Reducer.count(), // count pixels in a single class
      geometry: area,
      scale: 30,
      maxPixels: 1e9//13
      });
    var pix = ee.Number(stats.get('sum'));

    var hect = pix.multiply(400).divide(10000); // Landsat pixel = 30m x 30m --> 900 sqm and Sentinel-2 pixel = 20m x 20m --> 400
    var perc = pix.divide(allpixels).multiply(10000).round().divide(100); // get area percent by class and round to 2 decimals
    arealist.push({Class: name, Pixels: pix, Hectares: hect, Percentage: perc});
    };

    // severity classes in different order
    var names2 = ['NA', 'High Severity', 'Moderate-high Severity',
    'Moderate-low Severity', 'Low Severity','Unburned', 'Enhanced Regrowth, Low', 'Enhanced Regrowth,High'];

    // execute function for each class
    for (var i = 0; i < 8; i++) {
      areacount(i, names2[i]);
    }

    print('Burned Area by Severity Class of dNBR', arealist, '--> click list objects for individual classes');

    // Set legend to map
    // set position of panel
    var legend = ui.Panel({
      style: {
      position: 'bottom-left',
      padding: '8px 15px'
    }});

    // Create legend title
    var legendTitle = ui.Label({
      value: 'dNBR Classes',
      style: {fontWeight: 'bold',
        fontSize: '18px',
        margin: '0 0 4px 0',
        padding: '0'
    }});

    // Add the title to the panel
    legend.add(legendTitle);

    // Creates and styles 1 row of the legend.
    var makeRow = function(color, name) {
      
    // Create the label that is actually the colored box.
      var colorBox = ui.Label({
      style: {
      backgroundColor: '#' + color,
      // Use padding to give the box height and width.
      padding: '8px',
      margin: '0 0 4px 0'
    }});

    // Create the label filled with the description text.
    var description = ui.Label({
      value: name,
      style: {margin: '0 0 4px 6px'}
    });

    // return the panel
    return ui.Panel({
      widgets: [colorBox, description],
      layout: ui.Panel.Layout.Flow('horizontal')
    })};

    // Palette with the colors
    var palette =['7a8737', 'acbe4d', '0ae042', 'fff70b', 'ffaf38', 'ff641b', 'a41fd6', 'ffffff'];

    // name of the legend
    var names = ['Enhanced Regrowth, High','Enhanced Regrowth, Low','Unburned', 'Low Severity',
    'Moderate-low Severity', 'Moderate-high Severity', 'High Severity', 'NA'];

    // Add color and and names
    for (var i = 0; i < 8; i++) {
      legend.add(makeRow(palette[i], names[i]));
    }

    // add legend to map (alternatively you can also print the legend to the console)
    Map.add(legend);
    //--------------------------------------------------------------------
    var rbr = dNBR.expression(
    'dnbr/(preNBR+1.001)',{
    'dnbr': dNBR,'preNBR': preNBR
    })
    .rename('rbr').toFloat();

    Map.addLayer(rbr.sldStyle(sld_intervals), {}, 'RBR classified',false);
    print('RBR',rbr);

    var classified = rbr.lt(thresholds).reduce('sum').toInt();


    // count number of pixels in entire layer
    var allpix = classified.updateMask(classified); // mask the entire layer
    var pixstats = allpix.reduceRegion({
      reducer: ee.Reducer.count(), // count pixels in a single class
      geometry: area,
      scale: 30,
      maxPixels: 1e9
    });
    var allpixels = ee.Number(pixstats.get('sum')); // extract pixel count as a number

    // print(allpixels)

    // create an empty list to store area values in
    var arealist = [];

    //function to derive the extent of one burn severity class.
    var areacount = function(cnr, name) {
    var singleMask = classified.updateMask(classified.eq(cnr)); // mask a single class
    var stats = singleMask.reduceRegion({
      reducer: ee.Reducer.count(), // count pixels in a single class
      geometry: area,
      scale: 30,
      maxPixels: 1e9//13
      });
    var pix = ee.Number(stats.get('sum'));

    var hect = pix.multiply(400).divide(10000); // Landsat pixel = 30m x 30m --> 900 sqm and Sentinel-2 pixel = 20m x 20m --> 400
    var perc = pix.divide(allpixels).multiply(10000).round().divide(100); // get area percent by class and round to 2 decimals
    arealist.push({Class: name, Pixels: pix, Hectares: hect, Percentage: perc});
    };

    // severity classes in different order
    var names2 = ['NA', 'High Severity', 'Moderate-high Severity',
    'Moderate-low Severity', 'Low Severity','Unburned', 'Enhanced Regrowth, Low', 'Enhanced Regrowth,High'];

    // execute function for each class
    for (var i = 0; i < 8; i++) {
      areacount(i, names2[i]);
    }

    print('Burned Area by Severity Class of RBR', arealist, '--> click list objects for individual classes');

    //--------------------------------------
    var wildfire= post_cm_mos
    var bai = wildfire.expression(
    '1.0 / ((0.1 - RED)**2 + (0.06 - NIR)**2)', {
    'NIR': wildfire.select('B8').divide(1e4),
    'RED': wildfire.select('B4').divide(1e4)
    });
    print('BAI',bai);
    var burnPalette = ['#152106', '#225129', 'green', 'brown', 'yellow', 'orange', 'red'];
    Map.addLayer(bai, {min: 0, max: 100, palette: burnPalette}, 'BAI',false);
    
        // Seperate result into 3 burn severity classes
    var thresholds = ee.Image([ 10,20, 50,100,200]);
    var classified = bai.lt(thresholds).reduce('sum').toInt();


    // count number of pixels in entire layer
    var allpix = classified.updateMask(classified); // mask the entire layer
    var pixstats = allpix.reduceRegion({
      reducer: ee.Reducer.count(), // count pixels in a single class
      geometry: area,
      scale: 30,
      maxPixels: 1e9
    });
    var allpixels = ee.Number(pixstats.get('sum')); // extract pixel count as a number

    // print(allpixels)

    // create an empty list to store area values in
    var arealist = [];

    //function to derive the extent of one burn severity class.
    var areacount = function(cnr, name) {
    var singleMask = classified.updateMask(classified.eq(cnr)); // mask a single class
    var stats = singleMask.reduceRegion({
      reducer: ee.Reducer.count(), // count pixels in a single class
      geometry: area,
      scale: 30,
      maxPixels: 1e9//13
      });
    var pix = ee.Number(stats.get('sum'));

    var hect = pix.multiply(400).divide(10000); // Landsat pixel = 30m x 30m --> 900 sqm and Sentinel-2 pixel = 20m x 20m --> 400
    var perc = pix.divide(allpixels).multiply(10000).round().divide(100); // get area percent by class and round to 2 decimals
    arealist.push({Class: name, Pixels: pix, Hectares: hect, Percentage: perc});
    };

    // severity classes in different order
    var names2 = ['NA','High Severity Burned','Low Severity Burned','Unburned','Enhanced Regrowth'];


    // execute function for each class
    for (var i = 0; i < 5; i++) {
      areacount(i, names2[i]);
    }

    print('Burned Area by Severity Class of BAI', arealist, '--> click list objects for individual classes');

    //--------------------------------------
    var dataset = ee.ImageCollection('FIRMS').filter(
      ee.Filter.date(prefire_end,postfire_end));
    // var dataset = dataset.mosaic().clip(area);
    var dataset = dataset.mosaic(); //.clip(roi)
    var fires = dataset.select('T21');
    var firesVis = {
      min: 325.0,
      max: 500.0,
      palette: ['red', 'orange', 'yellow'],
    };
    print('Hotspot',dataset);
    Map.addLayer(fires, firesVis, 'MODIS Fires');
    print('MODIS Fire',fires);

    // Seperate result into 8 burn severity classes
    var thresholds = ee.Image([ 0, 325, 500]);
    var classified = fires.lt(thresholds).reduce('sum').toInt();


    // count number of pixels in entire layer
    var allpix = classified.updateMask(classified); // mask the entire layer
    var pixstats = allpix.reduceRegion({
      reducer: ee.Reducer.count(), // count pixels in a single class
      geometry: area,
      scale: 30,
      maxPixels: 1e9
    });
    var allpixels = ee.Number(pixstats.get('sum')); // extract pixel count as a number

    // print(allpixels)

    // create an empty list to store area values in
    var arealist = [];

    //function to derive the extent of one burn severity class.
    var areacount = function(cnr, name) {
    var singleMask = classified.updateMask(classified.eq(cnr)); // mask a single class
    var stats = singleMask.reduceRegion({
      reducer: ee.Reducer.count(), // count pixels in a single class
      geometry: area,
      scale: 30,
      maxPixels: 1e9//13
      });
    var pix = ee.Number(stats.get('sum'));

    var hect = pix.multiply(400).divide(10000); // Landsat pixel = 30m x 30m --> 900 sqm and Sentinel-2 pixel = 20m x 20m --> 400 FIRM 1000x1000
    var perc = pix.divide(allpixels).multiply(10000).round().divide(100); // get area percent by class and round to 2 decimals
    arealist.push({Class: name, Pixels: pix, Hectares: hect, Percentage: perc});
    };

    // severity classes in different order
     var names2 = ['NA','Burned','Unburned'];

    // execute function for each class
    for (var i = 0; i < 3; i++) {
      areacount(i, names2[i]);
    }

    print('FIRM MODIS hotspot', arealist, '--> click list objects for individual classes');
//-------------------------------------------
//Object Base Classification Analysis
// Merge the three geometry layers into a single FeatureCollection.

var newfc = burned.merge(unburned);

// Use these bands for classification.
var bands = ['B3', 'B4', 'B5', 'B6', 'B7', 'B8','B8A','B12'];
// The name of the property on the points storing the class label.
var classProperty = 'landcover';

var post_composite = post_cm_mos;
// class label is stored in the 'landcover' property.
var post_training = post_composite.select(bands).sampleRegions({
  collection: newfc,
  properties: [classProperty],
  scale: 30
});
print('training post-fire',post_training);

// Train a CART classifier.
var classifier = ee.Classifier.smileCart().train({
  features: post_training,
  classProperty: classProperty,
});
// Print some info about the classifier (specific to CART).
print('CART, explained', classifier.explain());

// Classify the composite.
var classified = post_composite.classify(classifier);
print('ML Classification',classified);
Map.addLayer(classified, {min: 0, max: 1, palette: [ 'green','red']},'Post Fire ML Classification');

// Optionally, do some accuracy assessment.  Fist, add a column of
// random uniforms to the training dataset.
var withRandom = post_training.randomColumn('random');

// We want to reserve some of the data for testing, to avoid overfitting the model.
var split = 0.7;  // Roughly 70% training, 30% testing.
var trainingPartition = withRandom.filter(ee.Filter.lt('random', split));
var testingPartition = withRandom.filter(ee.Filter.gte('random', split));

// Trained with 70% of our data.
var trainedClassifier = ee.Classifier.smileRandomForest(5).train({
  features: trainingPartition,
  classProperty: classProperty,
  inputProperties: bands
});

// Classify the test FeatureCollection.
var test = testingPartition.classify(trainedClassifier);

// Print the confusion matrix.
var confusionMatrix = test.errorMatrix(classProperty, 'classification');
//--------------------------------------
// var palette = ['#000000', '#FFFFFF'];
// var vis = {min: 0, max: 1, palette: palette, bands:['classification']};
// var binarized_result = classified.visualize(vis).addBands(classified);
// print('ML Classification_binalized',binarized_result);
// Map.addLayer(binarized_result, {},'ML Classification_binalized');

//--------------------------------------
print('Confusion Matrix', confusionMatrix);
//----------------------------------------------------------------
var image = classified;
var count = ee.Number(image.gt(-1));
print(count);
//-------------------------------------------------
// Seperate result into 8 burn severity classes
    var thresholds = ee.Image([ 0, 1]);
    var classified = image.lt(thresholds).reduce('sum').toInt();


    // count number of pixels in entire layer
    var allpix = classified.updateMask(classified); // mask the entire layer
    var pixstats = allpix.reduceRegion({
      reducer: ee.Reducer.count(), // count pixels in a single class
      geometry: area,
      scale: 30,
      maxPixels: 1e9
    });
    var allpixels = ee.Number(pixstats.get('sum')); // extract pixel count as a number

    // print(allpixels)

    // create an empty list to store area values in
    var arealist = [];

    //function to derive the extent of one burn severity class.
    var areacount = function(cnr, name) {
    var singleMask = classified.updateMask(classified.eq(cnr)); // mask a single class
    var stats = singleMask.reduceRegion({
      reducer: ee.Reducer.count(), // count pixels in a single class
      geometry: area,
      scale: 30,
      maxPixels: 1e9//13
      });
    var pix = ee.Number(stats.get('sum'));

    var hect = pix.multiply(400).divide(10000); // Landsat pixel = 30m x 30m --> 900 sqm and Sentinel-2 pixel = 20m x 20m --> 400
    var perc = pix.divide(allpixels).multiply(10000).round().divide(100); // get area percent by class and round to 2 decimals
    arealist.push({Class: name, Pixels: pix, Hectares: hect, Percentage: perc});
    };

    // severity classes in different order
    var names2 = ['Burned','Unburned'];

    // execute function for each class
    for (var i = 0; i < 2; i++) {
      areacount(i, names2[i]);
    }

    print('Burned Area by ML', arealist, '--> click list objects for individual classes');
    //-------------------------------------------
    

    //-------------------------------------------
    
// Accuracy assessment for 2-class classification problem.

// convert the drawn polygons into image
var ground_truth = ee.FeatureCollection([class1, class0])
                      .reduceToImage({
                        properties: ['class'],
                        reducer: ee.Reducer.first()
                      }).rename('ground_truth');
                  
print("ground_truth: ", ground_truth)

// remember to binarized or classify your results
var your_results = classified.eq(0).rename('your_results');

Map.addLayer(your_results, {}, 'your_results')
Map.addLayer(ground_truth, {min:0, max: 1, palette: ['green', 'red']}, 'ground_truth')


// merge ground truth and your results into a single image
var image4eval = ground_truth
              .addBands(your_results)
              .addBands(ee.Image.pixelLonLat());

// Sample the same number of samples for each class
var numSamplesPerClass = 1000;
var class0_samples = image4eval.sample({
    region    : class0.geometry(), 
    seed      : 1,
    scale     : 30, 
    numPixels : ee.Number(numSamplesPerClass), 
    tileScale : 4,
    dropNulls : true
  }); 
  
var class1_samples = image4eval.sample({
    region    : ee.FeatureCollection(class1).geometry(), 
    seed      : 1,
    scale     : 30, 
    numPixels : ee.Number(numSamplesPerClass),
    tileScale : 4,
    dropNulls : true
  });    
  
print("class0_samples: ", class0_samples);
print("class1_samples: ", class1_samples);   


// visulize sampled points for each class
var getcoord=function (feature){
    var x = feature.get('longitude');
    var y = feature.get('latitude');
    var geom = ee.Geometry.Point([x,y]);
    var newfeature =ee.Feature(geom, {
        latitude: feature.get('latitude'),
        longitude: feature.get('longitude')   //you can keep adding the properties of the initial sampled point
    }).copyProperties(feature);
    return newfeature;
};

class0_samples = class0_samples.map(getcoord);
class1_samples = class1_samples.map(getcoord);

Map.addLayer(class0_samples.style({pointSize: 3, fillColor: 'green', width: 1}), {}, 'class0_samples',false);
Map.addLayer(class1_samples.style({pointSize: 3, fillColor: 'red', width: 1}), {}, 'class1_samples',false);


// Merge all samples together
var all_samples = class1_samples.merge(class0_samples); // Merge feature collection class1 and class0.
print("all_samples: ", all_samples)

// Accuracy Assessment
accuracy_assessment(all_samples, 'ground_truth', 'your_results')            

///////////////////////// Functions to Call /////////////////////////////////////////
function accuracy_assessment(all_samples, actual, predicted){
  // -- INPUT
  //       all_samples: sampled sample points
  //       actural: bandname of ground truth 
  //       predicted: bandname of your results
  
  print("======= " + all_samples.size().getInfo() + " points =======");
  print("---------" + actual + " vs. " + predicted + "----------");
  // print(actual, predicted);
  var CM = all_samples.errorMatrix(actual, predicted);
  var Precision = CM.producersAccuracy().get([1,0]);
  var Recall = CM.consumersAccuracy().get([0,1]);
  var F1 = Precision.multiply(Recall).divide(Precision.add(Recall)).multiply(2);
  
  print('Consumers Accuracy', CM.consumersAccuracy());
  print('Producers Accuracy', CM.producersAccuracy());
  
  print('Confusion Matrix', CM)
  print('Overall Accuracy (OA): '+ CM.accuracy().getInfo());
  print('Kappa: '+ CM.kappa().getInfo());
  
  print("Precision: " + Precision.getInfo());
  print("Recall: "+ Recall.getInfo());
  print("F1 score: " + F1.getInfo());
}
