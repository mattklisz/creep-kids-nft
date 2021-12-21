import React from 'react'
import { get } from 'lodash'
import NCarousel from 'nuka-carousel'
import { CreepCard } from '..'
const data = require('../../carousel_kids.json')

export const Carousel = () => {
  const kids = get(data, 'kids', [])
  const settings = {
    autoplay: true,
    defaultControlsConfig: {
      nextButtonText: '>',
      prevButtonText: '<',
      pagingDotsStyle: { display: 'none' }
    },
    wrapAround: true
  }

  return (
    <NCarousel {...settings}>
      {
        kids.map((kid) => 
          <CreepCard
            name={kid.name}
            imagePath={kid.imagePath}
            attributes={kid.attributes}
            key={kid.name}
          />
        )
      }
    </NCarousel>
  )
}