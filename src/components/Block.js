import React from 'react'
import Stylesheet from 'reactjs-stylesheet'

function Block() {
  return (
    <div style={styles.container}>

    </div>
  )
}

const styles = Stylesheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: 300,
        minHeight: 350,
    }
})

export default Block