"use client"
import React from 'react'
import { Card } from '../ui/card'
import { TypeQuestionPaper } from '@/types/question-paper'
import { FaEye, FaDownload } from "react-icons/fa";

type QuestionPaperCardProps = {
  questionPaper: TypeQuestionPaper;
}

const QuestionPaperCard: React.FC<QuestionPaperCardProps> = ({questionPaper}) => {

  return (
    <Card className="w-full flex flex-col md:flex-row p-4 justify-between items-start md:items-center bg-border/20 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h2 className='text-xl truncate w-full'>{questionPaper.subject}</h2>
      <div className='flex flex-row-reverse shrink-0 md:flex-row justify-center items-center gap-4'>
        <p className='text-foreground'>{questionPaper.year} - Semester {questionPaper.semester}</p>
        <button className='cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200'><FaDownload /></button>
        <a className='cursor-pointer bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200' href={"/files/"+questionPaper.url} rel="noopener noreferrer" target='_blank'><FaEye /></a>
      </div>
    </Card>
  )
}

export default QuestionPaperCard