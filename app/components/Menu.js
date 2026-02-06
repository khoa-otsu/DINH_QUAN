'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Menu.module.css'

export default function Menu() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('')

    const menuItems = [
        { name: 'MÓN NƯỚNG', icon: '🔥', color: 'grilled' },
        { name: 'HẢI SẢN', icon: '🦐', color: 'seafood' },
        { name: 'LẨU', icon: '🍲', color: 'hotpot' },
        { name: 'KHAI VỊ', icon: '🍢', color: 'appetizer' },
    ]

    const handleCardClick = (categoryName) => {
        setSelectedCategory(categoryName)
        setIsPopupOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closePopup = () => {
        setIsPopupOpen(false)
        setSelectedCategory('')
        document.body.style.overflow = 'auto'
    }

    return (
        <section className={styles.menu} id="menu">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className="section-title light">THỰC ĐƠN</h2>
                    <span className={styles.icon}>🍺</span>
                </div>
                <div className={styles.grid}>
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            className={styles.card}
                            onClick={() => handleCardClick(item.name)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && handleCardClick(item.name)}
                        >
                            <div className={styles.image}>
                                <div className={`${styles.placeholder} ${styles[item.color]}`}></div>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.itemIcon}>{item.icon}</span>
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="#booking" className="btn btn-primary btn-large">TRẢI NGHIỆM NGAY</a>
            </div>

            {/* Menu Popup */}
            {isPopupOpen && (
                <div className={styles.popupOverlay} onClick={closePopup}>
                    <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closePopup}>
                            ✕
                        </button>
                        <h3 className={styles.popupTitle}>{selectedCategory}</h3>
                        <div className={styles.popupImageWrapper}>
                            <Image
                                src="/images/menu/menu_mau.jpg"
                                alt={`Menu ${selectedCategory}`}
                                width={600}
                                height={800}
                                className={styles.popupImage}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
