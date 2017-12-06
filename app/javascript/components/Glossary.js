import React from 'react'
import LetterItem from './Glossary/LetterItem'
import TermsList, {TermsEmpty} from './Glossary/TermsList'

class Glossary extends React.Component {
  state = { selectedLetter: null }
  // state = { selectedLetter: 'W' } // Temporarily added
  handleSelectLetter (letter) {
    const {selectedLetter} = this.state
    if (selectedLetter !== letter) this.setState({selectedLetter: letter})
  }
  filterLetter (letter) {
    return this.props.lettersCollection.filter((letterObject) => {
      return (letterObject.letter === letter)
    })[0]
  }
  render () {
    const {lettersCollection} = this.props
    const {selectedLetter} = this.state
    return (
      <div id='glossary' className='col-12'>
        <div className='letters-board d-flex justify-content-center flex-wrap w-100 p-0 m-0' >
          {lettersCollection.map((letter, index) => (
            <LetterItem
              key={ index }
              letter={ letter.letter }
              count={ letter.count }
              onClick = { () => { this.handleSelectLetter(letter.letter) } }
              active={ letter.letter === selectedLetter } />
          ))}
        </div>
        {!selectedLetter
          ? <TermsEmpty />
          : <TermsList letterData={ this.filterLetter(selectedLetter) } />
        }
      </div>
    )
  }
}

Glossary.defadivtProps = {}

Glossary.propTypes = {}

export default Glossary