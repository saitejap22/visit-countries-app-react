import './index.css'

const CountriesList = props => {
  const {countryDetails, addCountry} = props
  const {id, name, isVisited} = countryDetails
  const VisitedText = isVisited ? 'Visited' : 'Visit'

  const addCountryIntoList = () => {
    addCountry(id)
  }

  return (
    <li className="c-list">
      <p className="c-name">{name}</p>
      {isVisited === true ? (
        <p className="c-status">{VisitedText}</p>
      ) : (
        <button
          className="add-button"
          type="button"
          onClick={addCountryIntoList}
        >
          {VisitedText}
        </button>
      )}
    </li>
  )
}
export default CountriesList
