
import HeaderMain from '@/components/inicio/HeaderMain'
import BeneficiosPage from '@/components/inicio/Beneficios'
import React from 'react'
import CampusPage from '@/components/inicio/Campus'
import Footer from '@/components/inicio/Footer'

const InicioPage = () => {
  return (
    <div>
      <HeaderMain/>
     <BeneficiosPage/>
     <CampusPage/>
     <Footer/>
    </div>
  )
}

export default InicioPage
