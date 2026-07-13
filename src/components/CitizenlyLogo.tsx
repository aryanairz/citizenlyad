import React from 'react';
import {Img, staticFile} from 'remotion';

export const CitizenlyLogo: React.FC<{width?: number}> = ({width = 430}) => (
  <Img
    src={staticFile('CitizenlyFull.png')}
    style={{width, height: 'auto', objectFit: 'contain', display: 'block'}}
  />
);

export const CitizenlyIcon: React.FC<{size?: number}> = ({size = 190}) => (
  <Img
    src={staticFile('citizenlyicon.png')}
    style={{width: size, height: size, objectFit: 'contain', display: 'block'}}
  />
);
