import React from 'react'
import Stylesheet from 'reactjs-stylesheet'
import Block from '../components/Block'
import blockData from '../data/blockData'

function Third() {
  return (
    <div style={styles.container}>
        <section style={styles.section}>
            <h5>SEE WHAT OUR CUSTOMERS ARE SAYING</h5>
            <div style={styles.blocksContainer}>
                {blockData.map(data => <Block
                    key={data.id}
                    name={data.name}
                    content={data.content}
                />)}
            </div>
        </section>
        <section style={styles.section}>
            <h5>OUR PRODUCTS AND SERVICES</h5>
        </section>
    </div>
  )
}

const styles = Stylesheet.create({
    container: {
        height: '100vh',
        backgroundColor: '#E28C67',
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
    },
    section: {
        paddingTop: 50,
        justifyContent: 'center'
    },
    blocksContainer: {
        display: 'flex',
        gap: 20,
        overflowX: 'auto',
        marginTop: 20
    }
})

export default Third