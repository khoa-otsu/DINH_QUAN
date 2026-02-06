import './fonts.css'
import './globals.css'

export const metadata = {
  title: 'ĐỈNH - Vườn Bia Việt Nam | Nâng Ly, Cùng Nhau, Chạm Đỉnh',
  description: 'ĐỈNH - Vườn bia Việt Nam với không gian thoáng đãng, bia tươi mát lạnh và món ăn đậm đà hương vị. Đặt bàn ngay!',
  keywords: 'beer garden, vườn bia, ĐỈNH, bia tươi, nhà hàng, đặt bàn, Ho Chi Minh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
