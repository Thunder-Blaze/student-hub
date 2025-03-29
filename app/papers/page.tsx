"use client"
import React, { useEffect } from 'react'
import QuestionPaperCard from '@/components/papers/question-paper-card'
import { TypeQuestionPaper } from '@/types/question-paper'
import { questionPapers } from '@/data/question-papers'
import PaperFilterDropdown from '@/components/papers/paper-filter-dropdown'

const years: string[] = [];
const semesters: string[] = [];
const subjects: string[] = [];

questionPapers.forEach((questionPaper: TypeQuestionPaper) => {
    if (!years.includes(questionPaper.year+"")) {
        years.push(questionPaper.year+"");
    }
    if (!semesters.includes(questionPaper.semester+"")) {
        semesters.push(questionPaper.semester+"");
    }
    if (!subjects.includes(questionPaper.subjectCode)) {
        subjects.push(questionPaper.subjectCode);
    }
})

const QuestionPapers = () => {
    const [selectedYear, setSelectedYear] = React.useState<string>('');
    const [selectedSemester, setSelectedSemester] = React.useState<string>('');
    const [selectedSubject, setSelectedSubject] = React.useState<string>('');

    const [userQuestionPapers, setUserQuestionPapers] = React.useState<TypeQuestionPaper[]>(questionPapers);

    useEffect(() => {
        let filteredQuestionPapers = questionPapers;
        console.log(questionPapers);
        if (selectedYear!=='') {
            filteredQuestionPapers = filteredQuestionPapers.filter((questionPaper: TypeQuestionPaper) => questionPaper.year === parseInt(selectedYear));
        }
        if (selectedSemester!=='') {
            filteredQuestionPapers = filteredQuestionPapers.filter((questionPaper: TypeQuestionPaper) => questionPaper.semester === parseInt(selectedSemester));
        }
        if (selectedSubject!=='') {
            filteredQuestionPapers = filteredQuestionPapers.filter((questionPaper: TypeQuestionPaper) => questionPaper.subjectCode === selectedSubject);
        }
        setUserQuestionPapers(filteredQuestionPapers);
    }, [selectedYear, selectedSemester, selectedSubject]);

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-semibold mt-6 mb-2'>Question Papers</h1>
            <div className="flex justify-center items-center gap-5 flex-wrap w-full px-5 py-3">
                <div className='flex items-center gap-4'>
                    <h3 className='text-lg'>Subject</h3>
                    <PaperFilterDropdown title='Subjects' Variable={selectedSubject} setVariable={setSelectedSubject} variableArray={subjects} />
                </div>
                <div className='flex items-center gap-4'>
                    <h3 className='text-lg'>Year</h3>
                    <PaperFilterDropdown title='Years' Variable={selectedYear} setVariable={setSelectedYear} variableArray={years} />
                </div>
                <div className='flex items-center gap-4'>
                    <h3 className='text-lg'>Semester</h3>
                    <PaperFilterDropdown title='Semesters' Variable={selectedSemester} setVariable={setSelectedSemester} variableArray={semesters} />
                </div>
            </div>
            <div className='container flex flex-col py-5 px-3 gap-3 items-center justify-center'>
                {
                    userQuestionPapers.map((questionPaper: TypeQuestionPaper, index: number) => (
                        <div key={index} className='w-full'>
                            <QuestionPaperCard questionPaper={questionPaper} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default QuestionPapers