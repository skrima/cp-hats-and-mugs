import React from 'react'
import Stylesheet from 'reactjs-stylesheet'
import man from '../assets/man.png'
import cat from '../assets/cat-1.png'
import './First.css'

function First() {
  return (
    <div className='first-container'>
        <img style={styles.catImage} src={cat} />
        <h1 style={styles.logoText}>Hats & Mugs</h1>
        <div style={styles.centerContainer}>
            <h1 style={styles.title}>HATS AND MUGS</h1>
            <p style={styles.desc}>Gentlemen drink Tea</p>
            <button style={styles.button}>PLACE AN ORDER</button>
        </div>
        <img className='man-image' src={man} />
    </div>
  )
}

const styles = Stylesheet.create({
    catImage: {
        position: 'absolute',
        width: 200,
        top: -70,
        right: -70,
    },
    logoText: {
        position: 'absolute',
        left: 0,
        marginLeft: 20,
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'normal'
    },
    centerContainer: {
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column',
        gap: 15,
    },
    title: {
        fontSize: 50,
    },
    desc: {
        fontSize: 25,
        marginBottom: 10
    },
    button: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        border: 'none',
        backgroundColor: '#952429',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
})

export default First