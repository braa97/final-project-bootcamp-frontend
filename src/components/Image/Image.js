import './Image.css'

const Image = ({imageSrc}) => {

  return (
    <div className="resident-image-container">
      <img src={imageSrc} alt="User" />
  </div>
  )
}

export default Image