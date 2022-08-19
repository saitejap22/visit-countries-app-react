import './index.css'

const VisitedList = props => {
  const {visitDetails, deleteCountry} = props
  const {name, imageUrl, id} = visitDetails

  const onRemove = () => {
    deleteCountry(id)
  }

  return (
    <li className="v-list">
      <div className="v-container">
        <img src={imageUrl} alt="thumbnail" className="country-image" />
        <div className="c-details">
          <p className="v-title">{name}</p>
          <button className="remove-button" type="button" onClick={onRemove}>
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedList
