'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#about', label: 'Giới Thiệu' },
        { href: '#menu', label: 'Thực Đơn' },
        { href: '#locations', label: 'Địa Chỉ' },
        { href: '#contact', label: 'Liên Hệ' },
    ]

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/homepage/Dinh_logo.jpg"
                        alt="ĐỈNH - Vườn Bia Việt Nam"
                        width={47}
                        height={40}
                        className={styles.logoImage}
                        priority
                    />
                </Link>

                <ul className={styles.menu}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className={styles.actions}>
                    <a href="tel:19001234" className={styles.phone}>
                        <span>📞</span>
                        1900 1234
                    </a>
                    <a href="#booking" className={styles.bookingBtn}>Đặt Bàn</a>
                </div>

                <button
                    className={`${styles.toggle} ${isMobileMenuOpen ? styles.active : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {isMobileMenuOpen && (
                    <div className={styles.mobileMenu}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href="#booking" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                            Đặt Bàn
                        </a>
                    </div>
                )}
            </div>
        </nav>
    )
}
