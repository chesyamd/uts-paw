export default function SelectKategori({value, onChange, daftar}) {
  return (
    <select aria-label="Kategori" value={value} onChange={(e) => onChange(e.target.value)}>
          {daftar.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
  )}

