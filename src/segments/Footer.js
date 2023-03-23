import React, { useEffect, useRef, useState } from 'react'
import Stylesheet from 'reactjs-stylesheet'
import { FaLinkedinIn, FaEnvelope, FaGithubAlt } from 'react-icons/fa'

function Footer() {

    const [social, setSocial] = useState('')
    const linkRef = useRef(null)
    
    const setLink = (link) => {
        setSocial(link)
    }

    useEffect(() => {
        if (social) linkRef.current.click()
    }, [social])

  return (
    <div style={styles.container}>
        <div>
            <a ref={linkRef} href={social} target='_blank' 
                style={{position: 'absolute', width: 0, height: 0, opacity: 0}} /> 
            <small>Follow us on social media</small>
            <div style={styles.socialContainer}>
                <FaLinkedinIn onClick={() => setLink('https://linkedin.com/in/benedict-gabriel-841836253/')} style={styles.icon} />
                <FaEnvelope onClick={() => setLink('mailto:benedictgabriel73@gmail.com?subject=Feedback')} style={styles.icon} />
                <FaGithubAlt onClick={() => setLink('https://github.com/benhexie')} style={styles.icon} />
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