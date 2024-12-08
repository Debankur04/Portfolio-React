import React from 'react'
import styles from '../Styles/Projects.module.css';
import Image from 'next/image'

const Projects = () => {
  return (
    <div className={styles.card}>
        <Image
        src="/website.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
        className='images'
      />
      <div className={styles.card__content}>
        <p className={styles.card__title}>Card Title</p>
        <p className={styles.card__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
    </div>
  )
}

export default Projects