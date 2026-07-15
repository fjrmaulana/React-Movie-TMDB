import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import {getpopularMovies} from './services/api'

export default function App() {
  const [activeTab, setActiveTab] = useState<'menu_popular' | 'menu_toprated'|'menu_playing'|'menu_upcoming'>('menu_popular');
  const styleSection={ display: 'flex', justifyContent: 'center', marginTop: '20px'}
  const inputStyle={ maxWidth:'450px',width: '100%',height: '40px', paddingTop: '0px',paddingBottom: '0px',fontSize: '14px'};
  const movieTitleStyle={   margin: '0 0 0.5rem 0',   fontSize: '0.85rem',       fontWeight: 'bold',        whiteSpace: 'nowrap',       overflow: 'hidden',         textOverflow: 'ellipsis' }
  const [populaMovie,setPopularMovie]=useState([]);
  const renderTitle = () => {
    switch (activeTab) {
      case 'menu_popular':
        return '🔥 Sedang Populer';
      case 'menu_toprated':
        return '⭐ Rating Tertinggi';
      case 'menu_playing':
        return '🎬 Sedang Tayang';
      case 'menu_upcoming':
        return '📅 Mendatang';
      default:
        return 'Film';
    }
  };
  // const [searchQuery, setSearchQuery] = useState('');

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Fungsi pencarian API akan kita taruh di sini nanti
  //   alert(`Mencari film: ${searchQuery}`);
  // };

  useEffect(()=>{
    getpopularMovies().then((result)=>{
        setPopularMovie(result)
    })
  },[])

  const PopularMovieList=()=>{
    return populaMovie.map((movie,i)=>{
       return(
        <>
       <article key={i} style={{ padding: '0', overflow: 'hidden' }}>
                {/* Tempat Gambar Poster */}
                <img 
                  src={`${import.meta.env.VITE_MOVIE_APP_BASE_IMAGEURL}/${movie.poster_path}`}
                  alt="Contoh" 
                  style={{ width: '100%', height: '320px', objectFit: 'cover' }} 
                />
                {/* Tempat Teks & Rating */}
               <div style={{ padding: '1rem' }}>
                  <h6 style={movieTitleStyle}>{movie.title}</h6>
                  
                  {/* Perbaikan: font-size diperkecil ke 0.75rem dan ditambahkan whiteSpace agar tidak patah ke bawah */}
                  <p style={{ 
                    margin: 0, 
                    fontSize: '0.75rem', 
                    color: 'gray',
                    whiteSpace: 'nowrap',  // Memaksa teks tetap satu baris, tidak boleh turun ke bawah
                    overflow: 'hidden',    // Mengamankan jika ada teks yang terlalu panjang
                    textOverflow: 'ellipsis' 
                  }}>
                    {/* Mengambil 4 karakter pertama saja dari release_date agar hanya muncul tahunnya (misal: 2026) */}
                    📅 {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'} | ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : '0.0'}
                  </p>
                </div>
              </article>
        </>
       )
    })
  }
  //console.log(populaMovie);

  return (
    <>
      {/* 1. Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container">
        {/* Tambahkan Flexbox dan Max-Width di section ini */}
        <section style={styleSection}>
          <input style={inputStyle}
            type="search"
            name="search"
            placeholder="Search"
            aria-label="Search"
                
          />
        </section>
        <section style={{ textAlign: 'center', marginTop: '30px' }}>
           <h3>
            Kategori: {renderTitle()}
          </h3>
        </section>
        <section>
          <div className='grid'>
              <div 
                   style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
                    gap: '20px' 
                  }}
              >
                   <PopularMovieList/>
              </div>
           
          </div>
        </section>
      </main>
    
    </>
  );
}