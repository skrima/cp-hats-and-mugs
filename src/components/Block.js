import React from 'react'
import Stylesheet from 'reactjs-stylesheet'
import defaultImage from '../assets/tea_image2.jpg'

function Block({image, name, content, role}) {
  return (
    <div style={styles.container}>
      <div style={styles.picContainer}>
        <div style={styles.picWhite} />
        <img
          style={styles.image} 
          src={image ? image : defaultImage} />
      </div>
      <h5 style={styles.name}>
        {`${name} (${role?role:'Customer'})`}
      </h5>
      <p style={styles.content}>{content}</p>
    </div>
  )
}

const styles = Stylesheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        minWidth: 300,
        maxWidth: 300,
        minHeight: 350,
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        gap: 20,
        padding: 20,
        textAlign: 'start'
    },
    picContainer: {
      width: 100,
      height: 100,
      position: 'relative',
      borderRadius: 100,
      overflow: 'hidden',
      border: '4px solid #952429',
      marginTop: 20,
    },
    picWhite: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      borderRadius: 100,
      border: '4px solid white',
      backgroundColor: 'transparent',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    name: {},
    content: {},
})

export default Block