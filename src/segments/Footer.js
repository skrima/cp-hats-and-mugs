import React from 'react'
import Stylesheet from 'reactjs-stylesheet'

function Footer() {
  return (
    <div style={styles.container}>
        <div>
            <p>Follow us on social media</p>
        </div>
        <small style={styles.copyright}>Copyright &copy; hatsandmugs, 2023</small>
    </div>
  )
}

const styles = Stylesheet.create({
    container: {
        height: 200,
        backgroundColor: '#E28C67',
        display: 'flex',
        flexFlow: 'column',
        gap: 20,
        justifyContent: 'center',
        textAlign: 'start',
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
    },
    copyright: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
        marginBottom: 20
    }
})

export default Footer