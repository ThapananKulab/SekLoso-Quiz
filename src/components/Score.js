import React, { useContext } from "react"
import { DataContext } from "../pages/App"
import QuestionsData from "../data/QuestionsData"

const Score = () => {
  const { score, setAppState, setScore } = useContext(DataContext)

  const restartApp = () => {
    setScore(0)
    setAppState("menu")
  }

  const getPerformanceLevel = () => {
    if (score === QuestionsData.length) {
      return "เยี่ยมมาก"
    } else if (score >= 4) {
      return "ดีมาก"
    } else if (score >= 2) {
      return "ดี"
    } else if (score >= 1) {
      return "พอใช้นะ"
    } else {
      return "ไม่ถูกเลยเหรอ เอาใหม่"
    }
  }

  return (
    <div className="score">
      <p class="text-2xl">สรุปผลคะแนน</p>
      <p class="text-2xl">
        {score}/{QuestionsData.length}
      </p>
      <p class="text-2xl">{getPerformanceLevel()}</p>
      <button className="btn btn-primary" onClick={restartApp}>
        ทำแบบทดสอบอีกครั้ง
      </button>
    </div>
  )
}
export default Score
