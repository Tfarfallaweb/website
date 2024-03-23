import React from 'react'
import HomeComp from "@/components/HomeComp"
import Images from '@/components/Images'

const Home = () => {

  

  return (
    <div>
      <HomeComp/>
      <Images/>
      <div className="plus">
        +
      </div>
      <div className="text">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque minus eos distinctio incidunt ratione quibusdam delectus mollitia, aliquam maxime rerum obcaecati autem eveniet similique repellendus nemo tempore deserunt vero unde id corrupti iste nihil. Ad unde illum expedita exercitationem laboriosam impedit, voluptatum sint veniam molestiae, vitae doloremque laudantium.</p>
      </div>
    </div>
  )
}

export default Home
