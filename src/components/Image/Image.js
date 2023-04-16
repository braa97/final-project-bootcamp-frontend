import './Image.css'

const Image = ({imageSrc}) => {

  return (
    <div className='image-container'>
        <img src={imageSrc} />
    </div>
  )
}

export default Image