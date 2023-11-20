// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {itemDetails, updateImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = itemDetails
  const thumbnailClassName = isActive ? 'active thumbnail' : 'thumbnail'

  const onChange = id => {
    updateImage(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onChange}>
        <img
          alt={thumbnailAltText}
          src={thumbnailUrl}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
