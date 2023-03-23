import React from 'react'
import Stylesheet from 'reactjs-stylesheet'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div style={styles.container}>
        <div>
            <small>Follow us on social media</small>
            <div style={styles.socialContainer}>
                <FaFacebookF style={styles.icon} />
                <FaTwitter style={styles.icon} />
            </div>
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
    socialContainer: {
        display: 'flex',
        gap: 20,
        marginTop: 20,
        marginLeft: 10,
    },
    icon: {
        cursor: 'pointer',
    },
    copyright: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
        marginBottom: 20,
    }
})

export default Footer