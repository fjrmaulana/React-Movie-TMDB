

// 1. Definisikan tipe gabungan (Union Type) agar kode lebih bersih
type TabType = 'menu_popular' | 'menu_toprated' | 'menu_playing' | 'menu_upcoming';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}


export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  
  const handleTabClick = (tabName: TabType, label: string) => {
    console.log(`Menu aktif: ${label} (${tabName})`);
    setActiveTab(tabName);
  };

  const menuFontStyle={ fontSize: '14px', padding: '4px 12px' }

  return (
    <nav className="container">
      <ul>
        <li>
           <strong style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="brand-logo">🎬</span> 
                <span className="brand-text">MovieSearch</span>
            </strong>
        </li>
      </ul>
      <ul>
        {/* Menu 1: Popular */}
        <li>
          {activeTab === 'menu_popular' ? (
            <button style={menuFontStyle} className="secondary" onClick={() => handleTabClick('menu_popular', 'Popular')}>
              Popular
            </button>
          ) : (
            <a  style={menuFontStyle}  href="#" onClick={(e) => { e.preventDefault(); handleTabClick('menu_popular', 'Popular'); }}>
              Popular
            </a>
          )}
        </li>

        {/* Menu 2: Top Rated */}
        <li>
          {activeTab === 'menu_toprated' ? (
            <button style={menuFontStyle} className="secondary" onClick={() => handleTabClick('menu_toprated', 'Top-Rated')}>
              Top_Rated
            </button>
          ) : (
            <a style={menuFontStyle}  href="#" onClick={(e) => { e.preventDefault(); handleTabClick('menu_toprated', 'Top-Rated'); }}>
              Top_Rated
            </a>
          )}
        </li>

        {/* Menu 3: Now Playing */}
        <li>
          {activeTab === 'menu_playing' ? (
            <button style={menuFontStyle}  className="secondary" onClick={() => handleTabClick('menu_playing', 'Now-Playing')}>
              Now_Playing
            </button>
          ) : (
            <a style={menuFontStyle} href="#" onClick={(e) => { e.preventDefault(); handleTabClick('menu_playing', 'Now-Playing'); }}>
              Now_Playing
            </a>
          )}
        </li>

        {/* Menu 4: Upcoming */}
        <li>
          {activeTab === 'menu_upcoming' ? (
            <button style={menuFontStyle} className="secondary" onClick={() => handleTabClick('menu_upcoming', 'Upcoming')}>
              Upcoming
            </button>
          ) : (
            <a style={menuFontStyle} href="#" onClick={(e) => { e.preventDefault(); handleTabClick('menu_upcoming', 'Upcoming'); }}>
              Upcoming
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}