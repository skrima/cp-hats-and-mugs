import React from 'react'
import Stylesheet from 'reactjs-stylesheet'
import man from '../assets/man.png'
import coffee from '../assets/coffee.png'

function Second() {
  return (
    <div style={styles.container}>
        <div>
            <div style={styles.quote}>
                <p>
                    “I am in no way interested in immortality, but only in the taste of tea.”
                </p>
                <p>– Lu T’ung</p>
                <img style={styles.coffeeImage} src={coffee} />
            </div>
        </div>
        <div style={styles.manContainer}>
            <img style={styles.manImage} src={man} />
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
        position: 'relative',
        overflow: 'hidden',
    },
    quote: {
        display: 'flex',
        flexFlow: 'column',
        gap: 30,
        textAlign: 'start',
        width: 'fit-content',
        fontWeight: 'bold',
        position: 'relative',
    },
    coffeeImage: {
        position: 'absolute',
        width: 300,
        marginTop: 50,
        left: -120
    },
    manContainer: {
        margin: 'auto',
        position: 'absolute',
        bottom: -280,
        right: 0,
        left: 0,
        maxWidth: 1200,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    manImage: {
        right: 20,
        height: 600,
    },
})

export default Second