'use client'

import { useState } from 'react'
import styles from './Booking.module.css'

export default function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        location: '',
        notes: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Cảm ơn bạn đã đặt bàn! Chúng tôi sẽ liên hệ xác nhận trong vài phút.')
        setFormData({
            name: '',
            phone: '',
            date: '',
            time: '',
            guests: '2',
            location: '',
            notes: '',
        })
    }

    return (
        <section className={styles.booking} id="booking">
            <div className={styles.container}>
                <h2 className="section-title">ĐẶT BÀN NGAY</h2>
                <p className={styles.subtitle}>Hãy để chúng tôi phục vụ bạn!</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label htmlFor="name">Họ và Tên</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nhập họ tên của bạn"
                                required
                            />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="phone">Số Điện Thoại</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Nhập số điện thoại"
                                required
                            />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.group}>
                            <label htmlFor="date">Ngày</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="time">Giờ</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="guests">Số Khách</label>
                            <select
                                id="guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                            >
                                <option value="2">2 người</option>
                                <option value="4">4 người</option>
                                <option value="6">6 người</option>
                                <option value="8">8 người</option>
                                <option value="10">10+ người</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="location">Chi Nhánh</label>
                        <select
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Chọn chi nhánh</option>
                            <option value="q1">ĐỈNH - Quận 1</option>
                            <option value="q7">ĐỈNH - Quận 7</option>
                            <option value="td">ĐỈNH - Thủ Đức</option>
                        </select>
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="notes">Ghi Chú</label>
                        <textarea
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Yêu cầu đặc biệt (nếu có)"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-large btn-full">
                        XÁC NHẬN ĐẶT BÀN
                    </button>
                </form>
            </div>
        </section>
    )
}
