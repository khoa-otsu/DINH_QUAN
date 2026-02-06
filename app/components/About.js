import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
    const brandValues = [
        {
            title: 'ĐẬM',
            description: 'Đậm vị bia, đậm món, đậm trải nghiệm – làm gì cũng tới nơi tới chốn.',
            image: '/images/homepage/beer_cheers.png'
        },
        {
            title: 'MỞ',
            description: 'Không gian mở, tinh thần cởi mở, dễ kết nối – ai tới cũng hòa được.',
            image: '/images/homepage/beer_garden_outdoor.png'
        },
        {
            title: 'ĐÃ',
            description: 'Uống đã, ăn đã, chơi đã – đúng tinh thần beer garden.',
            image: '/images/homepage/beer_cheers.png'
        },
    ]

    return (
        <section className={styles.about} id="about">
            {/* TẦM NHÌN Section */}
            <div className={styles.visionSection}>
                <div className={styles.visionOverlay}></div>
                <div className={styles.visionContent}>
                    <h2 className={styles.visionTitle}>TẦM NHÌN</h2>
                    <p className={styles.visionText}>
                        Trở thành điểm hẹn beer garden tiêu biểu, nơi bia ngon, món chất và không khí tụ họp giao thoa,
                        kết nối con người qua những cuộc vui chân thành, cởi mở và đầy năng lượng.
                    </p>
                    <p className={styles.visionText}>
                        <strong>ĐỈNH</strong> hướng tới xây dựng một không gian uống bia đúng chất – ăn ngon đúng gu – gặp nhau đúng lúc,
                        vừa gần gũi, dễ vào, vừa đủ bản sắc để trở thành lựa chọn quen thuộc cho những buổi gặp gỡ, tiếp khách và kết nối dài lâu.
                    </p>
                </div>
            </div>

            {/* TÍNH CÁCH THƯƠNG HIỆU Section */}
            <div className={styles.brandSection}>
                <div className={styles.valuesGrid}>
                    {brandValues.map((value) => (
                        <div key={value.title} className={styles.valueCard}>
                            <div className={styles.valueImageWrapper}>
                                <Image
                                    src={value.image}
                                    alt={value.title}
                                    width={400}
                                    height={300}
                                    className={styles.valueImage}
                                />
                            </div>
                            <div className={styles.valueInfo}>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
