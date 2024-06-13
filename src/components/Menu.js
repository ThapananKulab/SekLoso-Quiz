import React, { useContext } from "react" // Import React and useContext
import { DataContext } from "../pages/App" // Adjust the path based on your project structure

const Menu = () => {
  const { setAppState } = useContext(DataContext)

  return (
    <div className="menu">
      <img
        src={
          "https://static.vecteezy.com/system/resources/previews/018/995/495/original/thailand-realistic-and-nice-artwork-of-thai-famous-music-artist-free-vector.jpg"
        }
        width="250px"
        height="250px"
        alt="Logo"
      />
      <p class="text-2xl">
        แบบทดสอบแฟนพันธุ์แท้เพลง<br></br>Sek Loso
      </p>

      <button className="btn btn-primary" onClick={() => setAppState("quiz")}>
        เริ่มทำแบบทดสอบ
      </button>
    </div>
  )
}

export default Menu
