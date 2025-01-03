
// config.js updated - Fri 3 Jan 06:45:01 EST 2025

const topBarCenterText = `N1VTT-FM17tb-WRKR828`;

// Grid layout
  var layout_cols = 5;
  var layout_rows = 3;

// Menu items
// Structure is:
// [color code, menu text, target link, scale factor, side],
// The comma at the end is important!

const aURL = [

  // Left side slide out menus

  ["add10d", "Back", "#", "1"],
  ["add10d", "Back", "#", "1","R"],
  // ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  [
	"FF000F",
	"Wx Alerts",
	"https://alerts.weather.gov/search?zone=VAZ525",
	"1.2"
	// ,SEE ALERTS.WEATHER.GOV
	// ,VAZ525"; - Brevard
 	// ,VAC650"; - CITY OF HAMPTON
 	
  ],
// MUST HAVE ACCOUNT TO UTILIZE NWS SAFER
// [
//	"FF000F",
//	"NWS SAFER",
//	"https://www.arcgis.com/apps/MapSeries/index.html?appid=ea8b0eeb2e9c45b790329c0ed2fdc225",
//	"1"
 // ],
[
	"FF000F",
	"WX4AKQ",
	"https://wx4akq.org/",
	"1"
 ],
  [
	"2196F3",
	"Forecast",
	"https://forecast.weather.gov/MapClick.php?lat=37.0537951&lon=-76.4034089",
	"1.0",
  ],
  [
	"2196F3",
	"Wx Outlook",
	"https://forecast.weather.gov/product.php?site=AKQ&issuedby=AKQ&product=HWO&format=CI&version=1&glossary=1&highlight=on",
	"1.2",
  ],

  [
	"2196F3",
	"Wx Obs",
	"https://www.weather.gov/wrh/timeseries?site=KLFI&hours=72&units=english&chart=on&headers=on&obs=tabular&hourly=false&pview=standard&font=12",
	"1.0",
  ],
  [
	"2196F3",
	"Hi-Res Radar",
	"https://radar.weather.gov/?settings=v1_eyJhZ2VuZGEiOnsiaWQiOiJsb2NhbCIsImNlbnRlciI6Wy03Ny4wMDcsMzYuOTg0XSwibG9jYXRpb24iOm51bGwsInpvb20iOjkuMzIxNzk3MjIyOTA0NzM3LCJmaWx0ZXIiOm51bGwsImxheWVyIjoic3JfYnJlZiIsInN0YXRpb24iOiJLQUtRIn0sImFuaW1hdGluZyI6dHJ1ZSwiYmFzZSI6InN0YW5kYXJkIiwiYXJ0Y2MiOmZhbHNlLCJjb3VudHkiOmZhbHNlLCJjd2EiOmZhbHNlLCJyZmMiOmZhbHNlLCJzdGF0ZSI6ZmFsc2UsIm1lbnUiOnRydWUsInNob3J0RnVzZWRPbmx5IjpmYWxzZSwib3BhY2l0eSI6eyJhbGVydHMiOjAuMzksImxvY2FsIjowLjg2LCJsb2NhbFN0YXRpb25zIjowLjcyLCJuYXRpb25hbCI6MC42fX0%3D",
	"1",
  ],
  [
	"2196F3",
	"Lightning",
	"https://map.blitzortung.org/#10/37.0505/-76.4147",
	"1",
  ],
  [
	"2196F3",
	"Wind",
	//"https://earth.nullschool.net/#current/wind/surface/level/orthographic=-80.60,28.39,10000/loc=-80.593,28.330",
	"https://www.ventusky.com/?p=37.12;-76.49;8&l=wind-10m",
	"1",
  ],
  [
	"2196F3",
	"Rain Fall",
	"https://maps.cocorahs.org/?maptype=precip&datetype=daily&overlays=state,county&bbox=-77.4694061279297,36.63867203824882,-75.3600311279297,37.46014336804266",
	//"https://www.cocorahs.org/Maps/ViewMap.aspx?state=fl&county=bv",
	//"https://www.cocorahs.org/Maps/GetMap.aspx?state=FL&county=BV&type=precip",
	"1",
  ],
  [
	"2196F3",
	"AQI",
	//"https://ca.dep.state.fl.us/mapdirect/?map=9e94c40966164a31b162557510e7f0cc",
//	"https://gispub.epa.gov/airnow/?forecastcontours=forecasttomorrow&tab=loops&showlegend=yes&xmin=-8741257.049518468&xmax=-8271627.947734165&ymin=4337223.276180024&ymax=4555068.80679286",
	"https://gispub.epa.gov/airnow/?tab=loops&contours=ozonepm&monitors=ozonepm&xmin=-8717760.396231744&xmax=-8248131.294447442&ymin=4314066.991090603&ymax=4533135.514156003",
	"1",
  ],
//[
//	"2196F3",
//	"Outage",
//	"https://outagemap.dominionenergy.com/external/default.html",
//	"1",
//  ],
  [
	"9C33FF",
	"ADS-B",
	"https://globe.adsbexchange.com/?lat=37.050&lon=-76.414&enableLabels&extendedLabels=1&zoom=10",
	"1",
  ],
  [
	"9C33FF",
	"Airport Delays",
	"https://tracker.flightview.com/FVDelay/DelayMap.asp?custId=FVPublicSite&mapId=NAEntire670x390",
	"1.9",
  ],
  [
	// "9C33FF",
	"4B6BB4",
	"Marine",
	"https://www.marinetraffic.org/CHESAPEAKE-BAY/ship-traffic-tracker",
	"1",
  ],
  //[
	//"33E3FF",
	//"Pier Cam",
	//"https://www.youtube.com/embed/F8y1uqHJsLc?autoplay=1&mute=0",
	//"1",
  //],
   [
	"2196F3",
	"Launches",
	"https://www.spacelaunchschedule.com/category/virginia/",
	"1"
  ],

// Right side slideout menus
//  [
//  "2196F3",
//  "HAMCLOCK",
//  "http://localhost:8181/live.html",
//  "1",
//  "R",
//  ],
  [
  "2196F3",
  "TIME.IS",
  "https://time.is",
  "1",
  "R",
  ],
  [
	"2196F3",
	"DX Cluster",
	"https://dxcluster.ha8tks.hu/map/",
	"1",
	"R",
  ],
  [
	"2196F3",
	"Contest",
	"https://www.contestcalendar.com/fivewkcal.html",
	"1",
	"R",
  ],
  [
	"2196F3",
	"POTA",
	"https://pota.app/#/",
	"1",
	"R",
  ],
  [
	"2196F3",
	"Aurora",
	"https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg",
	"1",
	"R",
  ],
  [
	"2196F3",
	"NOAA D-RAP",
	"https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png",
	"1.4",
	"R",
  ],
  [
	"2196F3",
	"MUF",
	"https://prop.kc2g.com/renders/current/mufd-normal-now.svg",
	"1.0",
	"R",
  ],
  [
	"2196F3",
	"WinLink",
	"https://cms.winlink.org:444/maps/propagation.aspx",
	"1.0",
	"R",
  ],
  [
	"2196F3",
	"10M Prop",
	"https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG",
	"1.0",
	"R",
  ],
//  [
// 	"2196F3",
// 	"APRS",
//	"https://aprs.fi/#!lat=37.05033&lng=-76.41450",
// 	"https://aprs.to/?center=37.0504,-76.4147&zoom=11",
// 	"1.0",
// 	"R",
//],
  [
	"2196F3",
	"ISS Passes",
	"https://www.heavens-above.com/PassSummary.aspx?satid=25544&lat=28.3893&lng=-80.6088&loc=Cape_Canaveral&alt=0&tz=UCT",
	"1.0",
	"R",
  ],
  [
 	"2196F3",
	"ISS Status",
	"https://www.ariss.org/current-status-of-iss-stations.html",
	"0.9",
	"R",
  ],
  [
	"2196F3",
	"OSCAR Status",
	"https://www.amsat.org/status",
	"0.9",
	"R",
  ],
  [
	"2196F3",
	"Grey Line",
	"https://www.timeanddate.com/scripts/sunmap.php?obj=sun&iso=now",
	//"https://www.timeanddate.com/scripts/sunmap.php?obj=moon&iso=now",
	"1",
	"R",
  ],
  [
	"2196F3",
	"Band Plan",
	"https://kd4atw.org/wp-content/uploads/2012/05/band_plan.png",
	"1.3",
	"R",
  ],
  [
	"2196F3",
	"GMRS Query",
	"https://gmrs.app",
	"1.0",
	"R",
  ],
];

// Dashboard items
// Structure is:
// [Title, Image Source URL],
// The comma at the end is important!

const aIMG = [

// Row 1
[
	"",
//	"https://radar.weather.gov/ridge/standard/KAKQ_loop.gif",
//	"https://radar.weather.gov/ridge/standard/NORTHEAST_loop.gif",
	"https://radar.weather.gov/ridge/standard/CONUS_loop.gif",
  ],
[
	"",
//	"https://radar.weather.gov/ridge/standard/KAKQ_loop.gif",
	"https://radar.weather.gov/ridge/standard/NORTHEAST_loop.gif",
//	"https://radar.weather.gov/ridge/standard/CONUS_loop.gif",
  ],
[
	"",
	"https://radar.weather.gov/ridge/standard/KAKQ_loop.gif",
//	"https://radar.weather.gov/ridge/standard/NORTHEAST_loop.gif",
//	"https://radar.weather.gov/ridge/standard/CONUS_loop.gif",
  ],
[
	// "Satellite",
	"Satellite",
	"https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/ne/EXTENT3/GOES16-NE-EXTENT3-600x600.gif",
	"https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/eus/EXTENT3/GOES16-EUS-EXTENT3-1000x1000.gif",
	"https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/gm/EXTENT3/GOES16-GM-EXTENT3-1000x1000.gif",
	"https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif",
  ],
  [
	// "Forecast Graphics",
	"Forecast Graphics",
	"https://data.mesonet.org/data/public/noaa/metar/maps/realtime/latest.tair.png",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=rh&n=3",
	"https://data.mesonet.org/data/public/noaa/metar/maps/realtime/latest.tapp.png",
	"https://graphical.weather.gov/images/conus/MaxT1_conus.png",
	"https://graphical.weather.gov/images/conus/MinT1_conus.png",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=pop12",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=windspd&n=3",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=windgust&n=3",
	"https://graphical.weather.gov/GraphicalNDFD.php?sector=CONUS&element=sky&n=3",
  ],
//ROW 2
  [
	// "Activity & Forecast",
	"Activity & Forecast",
	"https://forecast.weather.gov/wwamap/png/US.png",
	"https://www.wpc.ncep.noaa.gov/noaa/noaa.gif",
	"https://www.wpc.ncep.noaa.gov/noaa/noaad2.gif",
	"https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif",
	"https://www.spc.noaa.gov/products/exper/day4-8/day48prob.gif",
	"https://origin.wpc.ncep.noaa.gov/basicwx/allfcsts_loop_ndfd.gif",
	"https://www.spc.noaa.gov/exper/mesoanalysis/activity_loop.gif",
	"https://www.spc.noaa.gov/products/watch/validww.png",
	"https://www.spc.noaa.gov/climo/reports/today.gif",
	"https://www.weather.gov/wwamap/png/US.png",
	"https://www.spc.noaa.gov/products/exper/enhtstm/imgs/enh_1600.gif",
	"https://www.spc.noaa.gov/products/outlook/day2otlk_0600.gif",
	"https://www.spc.noaa.gov/products/outlook/day3otlk_0730.gif",
	"https://www.wpc.ncep.noaa.gov/threats/final/hazards_d3_7_contours.png",
	"https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif",
  ],
  [
	// "Tropical Outlook",
	"",
	"https://www.nhc.noaa.gov/xgtwo/two_atl_0d0.png",
	"https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png",
	"https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
	"https://www.cpc.ncep.noaa.gov/products/precip/CWlink/ghaz/gth_full_TConly_ATL.png",
  ],
  [
	"Tropics",
	"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/taw/Sandwich/GOES16-TAW-Sandwich-900x540.gif",
	"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/car/Sandwich/GOES16-CAR-Sandwich-1000x1000.gif",
	"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/se/Sandwich/GOES16-SE-Sandwich-600x600.gif",
	"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/gm/Sandwich/GOES16-GM-Sandwich-1000x1000.gif",
	"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/eus/Sandwich/GOES16-EUS-Sandwich-1000x1000.gif",
  ],
  [
	"Lightning",
    "iframe|https://map.blitzortung.org/#7/37.0695/-76.4459",
	"https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
	"Charts & Fronts",
	"https://www.wpc.ncep.noaa.gov/sfc/namussfc12wbg.gif", 
	"https://www.wpc.ncep.noaa.gov/medr/9jhwbg_conus.gif", 
	"https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/10/latest.jpg",
   ],	
//ROW 3
  [
	//"Today",
	"",
	"https://www.weather.gov/images/akq/weatherstory/weatherstory.png",
	"https://www.weather.gov/images/akq/GFE/currentHR/RH.png",
	"https://www.weather.gov/images/akq/GFE/currentHR/Wind.png",
	"https://www.weather.gov/images/akq/GFE/currentHR/T.png",
    "https://www.weather.gov/images/akq/GFE/currentHR/Td.png",
	"https://www.weather.gov/images/akq/GFE/currentHR/ApparentT.png",
    "https://www.weather.gov/images/akq/GFE/currentHR/Visibility.png",
    "https://www.weather.gov/images/akq/GFE/currentHR/MaxT1.png",
  ],
  [
    "", //"Tonight and Tomorrow",
    "https://www.weather.gov/images/akq/GFE/currentHR/MinT1.png",
	"https://www.weather.gov/images/akq/GFE/currentHR/MaxT2.png",
	"https://www.moonmodule.com/cs/dm/hn.gif",
  ],
  [
	"", // Risks
	"https://www.weather.gov/images/akq/ghwo/SevereThunderstormsDay1.jpg",
	"https://www.weather.gov/images/akq/ghwo/ThunderstormWindDay1.jpg",
	"https://www.weather.gov/images/AKQ/ghwo/TornadoDay1.jpg",
	"https://www.weather.gov/images/akq/ghwo/LightningDay1.jpg",
	"https://www.weather.gov/images/akq/ghwo/ExcessiveRainfallDay1.jpg",
	"https://www.weather.gov/images/akq/ghwo/ExcessiveHeatDay1.jpg",
	"https://www.weather.gov/images/akq/ghwo/WindDay1.jpg",
	"https://www.weather.gov/images/akq/ghwo/FogDay1.jpg",
	"https://www.weather.gov/images/akq/ghwo/HighSurfDay1.jpg",
	"https://www.weather.gov/images/akq/ghwo/RipRiskDay1.jpg",
	"https://www.weather.gov/images/akq/ghwo/MarineHazardDay1.jpg",
	"https://www.weather.gov/images/akq/ghwo/CoastalFloodDay1.jpg",
  ],
  [
  "", //Snow & Ice Outlook 
  "https://www.wpc.ncep.noaa.gov/Prob_Precip/idss-map/mapgen.php?office=AKQ&ptype=prob_sn&summary=true&pointpreferences=AKQ&product=expected&2025010301", 
  "https://www.weather.gov/images/akq/ghwo/SnowSleetDay3.jpg", 
  "https://www.weather.gov/images/akq/ghwo/SnowSleetDay4.jpg", 
  "https://www.weather.gov/images/akq/ghwo/SnowSleetDay5.jpg", 
  "https://www.weather.gov/images/akq/ghwo/SnowSleetDay6.jpg", 
  "https://www.weather.gov/images/akq/ghwo/SnowSleetDay7.jpg", 
  "https://www.wpc.ncep.noaa.gov/Prob_Precip/idss-map/mapgen.php?office=AKQ&ptype=prob_sn&summary=true&pointpreferences=AKQ&product=0p10&2025010301", 
  "https://www.wpc.ncep.noaa.gov/Prob_Precip/idss-map/mapgen.php?office=AKQ&ptype=prob_sn&summary=true&pointpreferences=AKQ&product=1p00&2025010301",
  ],
  [
    "2 Day Hourly",
    "https://forecast.weather.gov/meteograms/Plotter.php?lat=37.0695&lon=-76.4459&wfo=AKQ&zcode=vaz525&gset=18&gdiff=3&unit=0&tinfo=EY7&ahour=0&pcmd=111111111111101&lg=en&indu=1!1!1!&dd=3&bw=0&hrspan=48",
  ],  
  ];

//SOURCES REMOVED FROM USE
//  [
//	"",
	// Wx Widget - https://www.weatherandradar.com/weather-widget
	// Cape Canaveral
//	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=16031011&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Mims
//	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=7880083&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Titusville
//	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=2495757&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Port St. John
//	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=206878&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Cocoa
//	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=13474058&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Cocoa Beach
//	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=18217784&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Satellite Beach
//	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=14843524&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Melbourne
//	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=16389861&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Palm Bay
//	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=12914077&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Grant-Valkaria
//	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=5565699&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
	// Micco
//	"iframe|https://api.wo-cloud.com/content/widget/?geoObjectKey=15365564&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit",
//  ],

// [
//	"Tide & Waves",
//	"https://wave.marineweather.net/itide/tides/png/fl_trident_pier_port_canaveral.png",
	//"https://www.tideschart.com/tide-charts/en/Cape-Canaveral-Brevard-County-Florida-United-States-tide-chart-6237802-ft.png",
//	"https://www.ndbc.noaa.gov/plot_met.php?station=41113&meas=wvht&uom=E",
//	"https://www.ndbc.noaa.gov/plot_met.php?station=41009&meas=wvht&uom=E",
	//"http://www.stormsurfing.com/stormuser2/images/grib/cb_wave_1.png",
	// "https://media.raven.news/images/wx/bn9/60min/wave_heights_atl.jpg",
//	"https://graphical.weather.gov/GraphicalNDFD.php?sector=southeast&element=waveheight",
//  ],
//  [
//	"Port Canaveral",
//	"iframe|https://www.youtube.com/embed/FTw5xuq2swo?autoplay=1&mute=1",
//	"iframe|https://www.youtube.com/embed/Jm8wRjD3xVA?autoplay=1&mute=1",
	// "iframe|https://www.youtube.com/embed/gVRuXGw8p8A?autoplay=1&mute=1",
	// "iframe|https://www.youtube.com/embed/F8y1uqHJsLc?autoplay=1&mute=1",
//  ],
//  [
//	"Cape Canaveral",
//	"iframe|https://www.youtube.com/embed/uH1W01t_lGc?autoplay=1&mute=1",
//	"iframe|https://www.youtube.com/embed/E1uVzfQG_Yo?autoplay=1&mute=1",
//  ],
//   [
//	"ISS",
	// "iframe|https://www.youtube.com/embed/DfEr5XCFNWM?autoplay=1&mute=1",
	// "iframe|https://www.youtube.com/embed/O9mYwRlucZY?autoplay=1&mute=1",
//	"iframe|https://www.youtube.com/embed/OCem0E-0Q6Y?autoplay=1&mute=1",
//	"iframe|https://www.youtube.com/embed/wG4YaEcNlb0?autoplay=1&mute=1",
	// "iframe|https://www.youtube.com/embed/3QyfcMM_TO8?autoplay=1&mute=1",
//  ],
//  [
//	"ISS",
//	"https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
//  ],


// Define tile image refresh/rotate rate in milliseconds.
// Use zero (0) for a single static image.
// Caution: Short intervals should be avoided to reduce the possibility the
// image server detects a Denial of Service attack and blocks the request.

const tileDelay = [
	// Top row
	180000,
	180000,
	180000,
	20000,
	20000,
	
	// Middle row
	20000,
	20000,
	20000,
	180000,
	20000,
	
	// Bottom row
	20000,
	20000,
	20000,
	20000,
	600000,
	
];
