// deck.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

/* eslint-disable no-template-curly-in-string */
import {
  ContourLayer,
  HexagonLayer,
  ScreenGridLayer,
  GridLayer,
  HeatmapLayer
} from '@deck.gl/aggregation-layers';

import {makeLayerDemo} from './demo-base';
import {DATA_URI} from '../constants/defaults';

export const ContourLayerDemo = makeLayerDemo({
  Layer: ContourLayer,
  getTooltip: '({object}) => object && `threshold: ${object.contour.threshold}`',
  props: `{
    data: '${DATA_URI}/sf-bike-parking.json',
    pickable: true,
    cellSize: 200,
    getPosition: d => d.COORDINATES,
    getWeight: d => d.SPACES,
    contours: [
      {threshold: 1, color: [255, 0, 0], strokeWidth: 2, zIndex: 1},
      {threshold: [3, 10], color: [55, 0, 55], zIndex: 0},
      {threshold: 5, color: [0, 255, 0], strokeWidth: 6, zIndex: 2},
      {threshold: 15, color: [0, 0, 255], strokeWidth: 4, zIndex: 3}
    ]
  }`
});

const GRID_LAYER_INFO = {
  getTooltip: '({object}) => object && `Count: ${object.elevationValue}`',
  props: `{
    data: '${DATA_URI}/sf-bike-parking.json',
    pickable: true,
    extruded: true,
    cellSize: 200,
    elevationScale: 4,
    getPosition: d => d.COORDINATES,
    getColorWeight: d => d.SPACES,
    getElevationWeight: d => d.SPACES
  }`
};

export const GridLayerDemo = makeLayerDemo({
  Layer: GridLayer,
  ...GRID_LAYER_INFO
});

export const HexagonLayerDemo = makeLayerDemo({
  Layer: HexagonLayer,
  getTooltip: '({object}) => object && `Count: ${object.elevationValue}`',
  props: `{
    data: '${DATA_URI}/sf-bike-parking.json',
    pickable: true,
    extruded: true,
    radius: 200,
    elevationScale: 4,
    getPosition: d => d.COORDINATES,
    getColorWeight: d => d.SPACES,
    getElevationWeight: d => d.SPACES
  }`
});

export const ScreenGridLayerDemo = makeLayerDemo({
  Layer: ScreenGridLayer,
  props: `{
    data: '${DATA_URI}/sf-bike-parking.json',
    opacity: 0.8,
    cellSizePixels: 50,
    colorRange: [
      [0, 25, 0, 25],
      [0, 85, 0, 85],
      [0, 127, 0, 127],
      [0, 170, 0, 170],
      [0, 190, 0, 190],
      [0, 255, 0, 255]
    ],
    getPosition: d => d.COORDINATES,
    getWeight: d => d.SPACES
  }`
});

export const HeatmapLayerDemo = makeLayerDemo({
  Layer: HeatmapLayer,
  props: `{
    data: '${DATA_URI}/sf-bike-parking.json',
    getPosition: d => d.COORDINATES,
    getWeight: d => d.SPACES,
    radiusPixels: 25
  }`
});
