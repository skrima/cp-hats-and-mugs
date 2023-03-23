import React from 'react'
import Stylesheet from 'reactjs-stylesheet'
import Block from '../components/Block'
import Block2 from '../components/Block2'
import blockData from '../data/blockData'
import blockData2 from '../data/blockData2'
import cat from '../assets/cat-2.png'

function Third() {
  return (
    <div style={styles.container}>
        <img style={styles.catImage} src={cat} />
        <section style={styles.section}>
            <h5>SEE WHAT OUR CUSTOMERS ARE SAYING</h5>
            <div style={styles.blocksContainer}>
                <div style={styles.blocksContainer2}>
                    {blockData.map(data => <Block
                        key={data.id}
                        image={data.image}
                        name={data.name}
                        role={data.role}
                        content={data.content}
                        style={data.style}
                    />)}
                </div>
            </div>
        </section>
        <section style={styles.section}>
            <h5>OUR PRODUCTS AND SERVICES</h5>
            <div style={styles.blocksContainer}>
                <div style={styles.blocksContainer2}>
                    {blockData2.map(data => <Block2
                        key={data.id}
                        image={data.image}
                        title={data.title}
                        content={data.content}
                    />)}
                </div>
            </div>
        </section>
    </div>
  )
}

const styles = Stylesheet.create({
    container: {
        minHeight: '100vh',
        height: 'auto',
        backgroundColor: '#E28C67',
        color: 'white',
        paddingLeft: 20,
        position: 'relative'
    },
    catImage: {
        position: 'absolute',
        left: -60,
        width: 150,
        top: '42%'
    },
    section: {
        paddingTop: 100,
        justifyContent: 'center'
    },
    blocksContainer: {
        display: 'flex',
        flexFlow: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
    blocksContainer2: {
        display: 'flex',
        flexFlow: 'row',
        gap: 20,
        overflowX: 'auto',
        width: 'fit-content',
    }
})

export default Third