import React from 'react'
import Stylesheet from 'reactjs-stylesheet'
import defaultImage from '../assets/tea_image2.jpg'

function Block2({image, title, content, role}) {
  return (
    <div style={styles.container}>
      <h5 style={styles.name}>{title}</h5>
      <img
          style={styles.image} 
          src={image ? image : defaultImage} />
      <p style={styles.content}>{content}</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>{`MORE >>>`}</button>
      </div>
    </div>
  )
}

const styles = Stylesheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        minWidth: 260,
        maxWidth: 260,
        minHeight: 350,
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        gap: 20,
        padding: 20,
        textAlign: 'start'
    },
    image: {
      width: 100,
      height: 100,
      objectFit: 'cover',
      opacity: 0.8
    },
    name: {},
    content: {},
    buttonContainer: {
        width: '100%',
        height: '100%',
        position: 'relative'
    },
    button: {
        alignSelf: 'end',
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 3,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        border: 'none',
        color: 'white',
        backgroundColor: '#717171',
        fontSize: 10,
        cursor: 'pointer'
    }
})

export default Block2