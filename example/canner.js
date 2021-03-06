examples = [
  {
    "link": "container",
    "title": "Container"
  },
  {
    "link": "polygon",
    "title": "Polygon"
  },
  {
    "link": "mesh",
    "title": "Mesh"
  },
  {
    "link": "graticule",
    "title": "Graticule"
  },
  {
    "link": "map",
    "title": "Map"
  },
  {
    "link": "point",
    "title": "Point"
  },
  {
    "link": "centroid",
    "title": "Centroid"
  },
  {
    "link": "voronoi",
    "title": "Voronoi"
  },
  {
    "link": "sphere",
    "title": "Sphere"
  },
  {
    "link": "tooltip",
    "title": "Tooltip"
  },
  {
    "link": "tile",
    "title": "Tile"
  },
  {
    "link": "vectortile",
    "title": "Vector Tile"
  },
  {
    "link": "arc",
    "title": "Arc"
  },
  {
    "link": "popup",
    "title": "Popup"
  },
  {
    "link": "zoom",
    "title": "Zoom"
  },
  {
    "link": "zoom2",
    "title": "Zoom2"
  }
];


var canner = examples.map(function(d) {
  return {
    "layout": "./layout.hbs",
    "filename": './' + d.link + '.html',
    "data": {
      "link": d.link,
      "title": d.title
    }
  }
})

module.exports = canner;
