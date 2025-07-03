import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 sm:px-10 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm text-center">
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-3">
              About SARROW
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/roster">Roster</Link>
              </li>
              <li>
                <Link to="/staff">Staff</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-3">Social</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.tiktok.com/@sarrowgg?_t=ZT-8xbcU8V29R0&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@sarrowggs?si=F66PccVr1J9XyEyJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitch.tv/teamsarrow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitch
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/SarrowGG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-3">
              Our Brands
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://evo9x.gg/collections/sarrow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apparel
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-3">Support</h4>
            <ul className="space-y-2">
            
              <li>
                 <a
                  href="https://linktr.ee/Sarrow2025"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-2 sm:gap-0 text-center">
          <span>© 2025 SARROW</span>
          <span>Privacy Policy & Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
