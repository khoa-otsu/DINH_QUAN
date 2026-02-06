import styles from './Locations.module.css'

export default function Locations() {
    const addresses = [
        { name: 'ĐỈNH - Quận 1', address: '123 Lê Lợi, Quận 1, TP.HCM' },
        { name: 'ĐỈNH - Quận 7', address: '456 Nguyễn Thị Thập, Quận 7, TP.HCM' },
        { name: 'ĐỈNH - Thủ Đức', address: '789 Võ Văn Ngân, TP.Thủ Đức' },
    ]

    return (
        <section className={styles.locations} id="locations">
            <div className={styles.container}>
                <h2 className="section-title light">ĐỊA CHỈ</h2>
                <div className={styles.content}>
                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380.0678925848207!2d105.77649729598015!3d10.057567602630645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a087f942d092eb%3A0xa2a65148b918bc10!2zQ-G7k24gS2jGsMahbmc!5e0!3m2!1sen!2s!4v1770349161958!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="ĐỈNH - Vườn Bia Việt Nam Location"
                            className={styles.mapIframe}
                        ></iframe>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.hotline}>
                            <span className={styles.hotlineLabel}>📞 HOTLINE:</span>
                            <a href="tel:19001234" className={styles.hotlineNumber}>1900 123 456</a>
                        </div>
                        <div className={styles.addressList}>
                            {addresses.map((item) => (
                                <div key={item.name} className={styles.addressItem}>
                                    <span className={styles.badge}>{item.name}</span>
                                    <p>{item.address}</p>
                                </div>
                            ))}
                        </div>
                        <a href="#booking" className="btn btn-outline light">ĐẶT BÀN</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
