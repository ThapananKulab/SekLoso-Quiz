/* eslint-disable */

import React, { useContext, useEffect, useState } from "react"
import { DataContext } from "../pages/App"
import QuestionsData from "../data/QuestionsData"

const Quiz = () => {
  // console.log(QuestionsData);
  const [current, setCurrent] = useState(0)
  const [selectChoice, setSelectChoice] = useState("")

  const { score, setScore, setAppState } = useContext(DataContext)

  useEffect(() => {
    checkAnswer()
  }, [selectChoice])

  const checkAnswer = () => {
    if (selectChoice !== "") {
      if (selectChoice === QuestionsData[current].answer) {
        setScore(score + 1)
        nextQuestion()
      } else {
        nextQuestion()
      }
    }
  }

  const nextQuestion = () => {
    setSelectChoice("")
    if (current === QuestionsData.length - 1) {
      setAppState("score")
    } else {
      setCurrent(current + 1)
    }
  }
  return (
    <div className="quiz">
      <p class="text-2xl">{QuestionsData[current].question}</p>
      <div className="choices">
        <button
          className="btn btn-primary"
          onClick={() => setSelectChoice("A")}
        >
          {QuestionsData[current].A}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setSelectChoice("B")}
        >
          {QuestionsData[current].B}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setSelectChoice("C")}
        >
          {QuestionsData[current].C}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setSelectChoice("D")}
        >
          {QuestionsData[current].D}
        </button>
      </div>
      <p>{`${current + 1}/${QuestionsData.length}`}</p>
    </div>
  )
}
export default Quiz
