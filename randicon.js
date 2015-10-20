var RandomIcon = {}

// Colors by Agata
RandomIcon.colors = [
  [
    "#FF8A65",
    "#FF7043",
    "#FFB74D",
    "#FFA726",
    "#FFD54F",
    "#FFCA28",
    "#FFF176",
    "#FFEE58",
    "#DCE775",
    "#D4E157",
    "#AED581",
    "#9CCC65",
    "#81C784",
    "#66BB6A",
  ],

  [
    "#4DB6AC",
    "#26A69A",
    "#B2EBF2",
    "#80DEEA",
    "#4DD0E1",
    "#26C6DA",
    "#B3E5FC",
    "#81D4FA",
    "#4FC3F7",
    "#29B6F6",
    "#BBDEFB",
    "#90CAF9",
    "#64B5F6",
    "#42A5F5",
  ],

  [
    "#C5CAE9",
    "#9FA8DA",
    "#7986CB",
    "#5C6BC0",
    "#D1C4E9",
    "#B39DDB",
    "#9575CD",
    "#7E57C2",
    "#E1BEE7",
    "#CE93D8",
    "#BA68C8",
    "#AB47BC",
    "#F8BBD0",
    "#F48FB1",
    "#F06292",
  ],
  [
    "#BBDEFB",
    "#90CAF9",
    "#64B5F6",
    "#42A5F5",
    "#9FA8DA",
    "#7986CB",
    "#5C6BC0",
    "#3F51B5",
    "#D1C4E9",
    "#B39DDB",
    "#9575CD",
    "#7E57C2",
  ], [
    "#D1C4E9",
    "#B39DDB",
    "#9575CD",
    "#7E57C2",
    "#E1BEE7",
    "#CE93D8",
    "#BA68C8",
    "#AB47BC",
    "#F8BBD0",
    "#F48FB1",
    "#F06292",
  ], [
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
  ], [
    "#FFEB3B",
    "#AFB42B",
    "#9E9D24",
    "#FBC02D",
    "#F9A825",
    "#FFA000",
    "#FF8F00",
    "#FF6F00",
  ], [
    "#795548",
    "#FF5722",
    "#FFA726",
    "#FFB74D",
    "#BF360C",
  ], [

    "#78909C",
    "#546E7A",
    "#BF360C",
    "#FF5722",
    "#FFD54F",
  ], [
    "#78909C",
    "#B0BEC5",
    "#FF5722",
    "#f44336",
  ], [
    "#43A047",
    "#689F38",
    "#7CB342",
    "#689F38",
    "#C0CA33",
    "#AFB42B",
    "#FFEB3B",
    "#FDD835",
    "#FFC107",
    "#FFB300",
    "#FF9800",
    "#FB8C00",
  ]

];


// http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
// http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
RandomIcon.hashCode = function(str) {
  var hash = 30723761, i, chr, len;
  if (str.length == 0) return 0;
  for (i = 0, len = str.length; i < len; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

RandomIcon.extend = function(target, src) {

  var hash = {};
  for (var i in src) {
    hash[i] = target[i] 
    if (target[i] === undefined) {
      hash[i] = src[i];
    } else {
      hash[i] = target[i];
    }
  }
  
  return hash;
};

RandomIcon.randicon = function(elem, str, opts) {
  var opts = RandomIcon.extend(opts || {}, {bgRectClass: undefined}); 
  
  // first time svg :), don't judge me!
  
  var s = Snap(elem);
  s.clear();
  
  var w = parseInt(s.attr().width);
  var h = parseInt(s.attr().height);
  var scale = Math.min(w/512, h/512);
  var hc = Math.abs(RandomIcon.hashCode(str));

  var colorGroupIndex = hc % RandomIcon.colors.length;
  var colorGroup = RandomIcon.colors[colorGroupIndex];
  
  var colorIndex1 = hc % colorGroup.length;
  var c1 = colorGroup[colorIndex1];

  var colorIndex2 = (colorIndex1 + 9) % colorGroup.length;
  var c2 = colorGroup[colorIndex2];


  var strokeWidth1 = (180 + (((hc & 0xff00) >> 8) % 13)) *scale;
  var strokeWidth2 = (180 - (((hc & 0xff00) >> 8) % 13))*scale;

  var qx1 = (((hc & 0xff000000) >> 24) % 29)*scale;
  var m = 51 + hc % + 359 ;
  var t = hc % 3;

  var z1, z2;

  var z1x1=-10, z1y1=-150, z1qx1=510, z1qy1=156, z1x2=-30, z1y2=610;
  var z2x1=602, z2y1=-150, z2qx1=290, z2qy1=206, z2x2=540, z2y2=525;
  

  
  switch(t) {
  case 0:
    z1x1=-10, z1y1=-150, z1qx1=510, z1qy1=156, z1x2=-30, z1y2=610;
    z2x1=602, z2y1=-150, z2qx1=100, z2qy1=216, z2x2=540, z2y2=525;
    break;
  case 1:
    z1x1=-10, z1y1=-15, z1qx1=250, z1qy1=156, z1x2=600, z1y2=610;
    z2x1=602, z2y1=-50, z2qx1=280, z2qy1=286, z2x2=-90, z2y2=625;
    break;
  case 2:
    z1x1=80, z1y1=-150, z1qx1=250, z1qy1=156, z1x2=80, z1y2=610;
    z2x1=402, z2y1=-100, z2qx1=110, z2qy1=286, z2x2=380, z2y2=625;
    break;                     
  }

  z1x1 *= scale;
  z1y1 *= scale;
  z1qx1 *= scale;
  z1qy1 *= scale;
  z1x2 *= scale;
  z1y2 *= scale;

  z2x1 *= scale;
  z2y1 *= scale;
  z2qx1 *= scale;
  z2qy1 *= scale;
  z2x2 *= scale;
  z2y2 *= scale;

  var bg = s.rect(0, 0, 512*scale, 512*scale).attr('class', opts.bgRectClass);
  if (!opts.bgRectClass) {
    bg.attr('fill', '#F9F9F9');
  }
                                                                            

  z1 = s.path("M"+z1x1+","+z1y1+" Q"+(z1qx1 + qx1)+","+z1qy1+" "+(z1x2-qx1)+","+z1y2).attr({"fill" : "none", "stroke": c1, "strokeWidth": strokeWidth1});
  z2 = s.path("M"+z2x1+","+z2y1+" Q"+(z2qx1 + qx1)+","+z2qy1+" "+(z2x2+qx1)+","+z2y2).attr({"fill" : "none", "stroke": c2, "strokeWidth": strokeWidth2, "opacity" : 1.0, "mix-blend-mode": "overlay"});

  z1.transform("rotate("+m+" "+(256*scale)+" "+(256*scale)+")"); 
  z2.transform("rotate("+m+" "+(256*scale)+" "+(256*scale)+")"); 
  s.circle(20*scale+qx1, 266*scale+qx1, 50*scale).transform("rotate("+m+" "+(281*scale)+" "+(282*scale)+")").attr({fill: c1, stroke: c2, strokeWidth: 30*scale, opacity: 1.0});

};



var randicon = RandomIcon.randicon;
