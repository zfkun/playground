(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{572:function(n,e,i){"use strict";i.r(e),e.default="import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js';\nimport { RendererSystem } from '@eva/plugin-renderer';\nimport {\n  TilingSprite,\n  TilingSpriteSystem,\n} from '@eva/plugin-renderer-tiling-sprite';\n\nresource.addResource([\n  {\n    name: 'imageName',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type: 'png',\n        url:\n          'https://gw.alicdn.com/tfs/TB1t7vtOvb2gK0jSZK9XXaEgFXa-300-431.png',\n      },\n    },\n    preload: true,\n  },\n]);\n\nconst game = new Game({\n  systems: [\n    new RendererSystem({\n      canvas: document.querySelector('#canvas'),\n      width: 750,\n      height: 1000,\n    }),\n    new TilingSpriteSystem(),\n  ],\n});\n\nconst tilingSprite = new GameObject('sprite', {\n  size: { width: 750, height: 1000 },\n});\n\ntilingSprite.addComponent(\n  new TilingSprite({\n    resource: 'imageName',\n    tileScale: { x: 0.7, y: 0.7 },\n    tilePosition: { x: 10, y: 40 },\n  }),\n);\n\ngame.scene.addChild(tilingSprite);\n"}}]);