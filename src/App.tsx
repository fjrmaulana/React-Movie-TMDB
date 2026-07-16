import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import {getpopularMovies, searcPopularMovies,getTopRatedMovies, getNowPlayingMovies,getUpCommingMovies} from './services/api'

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
  
  useEffect(() => {
  // 1. Bersihkan data lama terlebih dahulu agar layar terasa ter-refresh
    setPopularMovie([]);

    // 2. Buat fungsi lokal untuk menentukan endpoint mana yang dipanggil
    const fetchMovieByTab = async () => {
      try {
        let result = [];
        
        // Sesuaikan pemanggilan fungsi API berdasarkan state activeTab saat ini
        if (activeTab === 'menu_popular') {
          result = await getpopularMovies(); // Pastikan mengembalikan data.results
        } else if (activeTab === 'menu_toprated') {
          result = await getTopRatedMovies(); 
        } else if (activeTab === 'menu_playing') {
          result = await getNowPlayingMovies();
        } else if (activeTab === 'menu_upcoming') {
          result = await getUpCommingMovies();
        }
        
        setPopularMovie(result);
      } catch (error) {
        console.error("Gagal mengambil data film berdasarkan menu", error);
      }
  };

  fetchMovieByTab();
}, [activeTab]); // <-- WAJIB MASUKKAN activeTab DI SINI agar useEffect mendeteksi tiap kali menu diklik


  const PopularMovieList = () => {
    return populaMovie.map((movie, i) => {
      // KONDISI IF: Jika poster_path bernilai null atau kosong, lewati film ini
      if (!movie.poster_path) {
        return null;
      }

      return (
        <article key={i} style={{ padding: '0', overflow: 'hidden' }}>
          {/* Tempat Gambar Poster */}
          <img 
            src={`${import.meta.env.VITE_MOVIE_APP_BASE_IMAGEURL}/${movie.poster_path}`}
            alt={movie.title} 
            style={{ 
              width: '100%', 
              height: 'auto', 
              aspectRatio: '2 / 3', 
              objectFit: 'cover' 
            }} 
          />
          {/* Tempat Teks & Rating */}
          <div style={{ padding: '1rem' }}>
            <h6 style={movieTitleStyle}>{movie.title}</h6>
            
            <p style={{ 
              margin: 0, 
              fontSize: '0.75rem', 
              color: 'gray',
              whiteSpace: 'nowrap', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis' 
            }}>
              📅 {movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'} | ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : '0.0'}
            </p>
          </div>
        </article>
      );
    });
};
  //console.log(populaMovie);

  const search_=function (q){
    if(q.trim()!=="" && q.length>3){
        searcPopularMovies(q).then((result)=>{
               setPopularMovie(result);
        })
    }
  }

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
            onChange={function(event){
                  search_(event.target.value);
            }}
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