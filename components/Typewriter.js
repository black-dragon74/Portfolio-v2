import React, {useEffect} from 'react'
import Typed from 'typed.js'
import PropTypes from 'prop-types'

const Typewriter = ({sentences}) => {

    if (sentences.length < 1) {
        throw new Error("Sentences cannot be null/empty")
    }

    const options = {
        strings: sentences,
        loop: true,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000
    }

    useEffect(() => {
        // Init
        const tpd = new Typed('#typed-hook', options)

        // Cleanup
        return () => {
            tpd.destroy()
        }
    }, [sentences]) // Re-render only when sentences change

    return (
        <span id={"typed-hook"}>
            {/* Nothing here OOB. Will be injected by typed JS */}
        </span>
    )
}

Typewriter.propTypes = {
    sentences: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Typewriter