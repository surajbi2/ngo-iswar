import { ImLocation2 } from "react-icons/im";
export default function Footer() {
    return (
      <footer className="bg-gray-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 ISWAR NGO. All rights reserved.</p>
          <div className="mt-2 flex justify-center items-center gap-4"><ImLocation2 /> #467, 6th Main, 10th Cross, Vijayanagar Ist Stage, Mysuru-17</div>
          <p className="text-gray-300 mt-2">A site designed and developed by Ramagiri Suraj Kumar | Maintained by Vinod Kumar</p>
        </div>
      </footer>
    )
  }