import React from 'react'
import NewcomerBanner from '@/components/newcomers/newcomer-banner'
import NearbyLocations from '@/components/newcomers/nearby-locations'

const NewcomersHome = () => {
  return (
    <>
        <NewcomerBanner />
        <NearbyLocations />
    </>
  )
}

export default NewcomersHome