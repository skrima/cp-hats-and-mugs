import React from 'react'
import Stylesheet from 'reactjs-stylesheet'

function Second() {
  return (
    <div style={styles.container}>
        <div>
            <div style={styles.quote}>
                <p>
                    “I am in no way interested in immortality, but only in the taste of tea.”
                </p>
                <p>– Lu T’ung</p>
            </div>
        </div>
    </div>
  )
}

const styles = Stylesheet.create({
    container: {
        height: '100vh',
        backgroundColor: '#952429',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    quote: {
        display: 'flex',
        flexFlow: 'column',
        gap: 20,
        textAlign: 'start',
        width: 'fit-content'
    }
})

export default Second