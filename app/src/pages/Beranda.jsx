import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import PropertiBeranda from '../components/PropertiBeranda.jsx'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section>
      <h1>Beranda</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <PropertiBeranda items = {items} jumlahKategori={jumlahKategori}/>
      )}
      <Link to="/koleksi">Lihat semua koleksi</Link>
    </section>
  )
}