import React from 'react'
import Stylesheet from 'reactjs-stylesheet'

function First() {
  return (
    <div style={styles.container}>
        <h1 style={styles.logoText}>Hats & Mugs</h1>
        <div style={styles.centerContainer}>
            <h1 style={styles.title}>HATS AND MUGS</h1>
            <p style={styles.desc}>Gentlemen drink Tea</p>
            <button style={styles.button}>PLACE AN ORDER</button>
        </div>
    </div>
  )
}

const styles = Stylesheet.create({
    container: {
        position: 'fixed',
        backgroundColor: '#E28C67',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
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
        color: 'white'
    },
})

export default First