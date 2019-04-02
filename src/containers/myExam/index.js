import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import BreadCrumbC from "../../components/BreadCrumb"
import TitleC from "../../components/Title"
import FilterC from "../../components/Filter"
import ExamCardC from "../../components/ExamCard"
import PaginationC from "../../components/Pagination"

const datas = [
  {
    title: "Tryout UN SMP 2019",
    exams: [1,2,3]
  },
  {
    title: "Tryout UAS SMP Sem 2 2019",
    exams: [1,2,3]
  }
]

const MyExams = props => (
  <Wrapper>
    <MainWrap>
      <BreadCrumb
        links={[
          {
            title:"my-exams",
            link:"#"
          }
        ]}
      />
      <Title title="My Exams"/>
      <FiltersWrap>
        <Filter
          title="Exam group"
          options={[]}
        />
        <Filter
          title="Status"
          options={[]}
        />
      </FiltersWrap>
      <ExamCardWrap>

        {datas.map((v) => (
          <ExamGroupWrap>
            <ExamsTitle>{v.title}</ExamsTitle>
            {v.exams.map(() => (
              <ExamCard
                title="Matematika"
                description="Lorem ipsum dono dan si memet"
                source="http://pak-anang.blogpsot.com"
                passingGrade="50"
    
                duration="75"
                remainingTime= "23"
                questionsTotal="25"
                statQuestion="12 / 2"
    
                onClickButton ={() => console.log("changeButton")}
    
                // status="submited"
                status="started"
              />
            ))}
          </ExamGroupWrap>
        ))}
      </ExamCardWrap>
      <Pagination
      pages={[
        {
          value: "1",
          isFill: true
        },
        {
          value: "2",
          isFill: false
        },
        {
          value: "3",
          isFill: false
        },
        {
          value: "4",
          isFill: false
        },
        {
          value: "5",
          isFill: false
        }
      ]}
    />
    </MainWrap>
  </Wrapper>
)

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 1000px;
`
const MainWrap = styled.section`
  width: 960px;
  align-self: center;
  display: flex; 
  flex-direction: column;
`
const BreadCrumb = styled(BreadCrumbC)`
  margin-top: 20px;
  margin-bottom: 10px;
`
const Title = styled(TitleC)`
  margin-bottom: 30px;
`

const Filter = styled(FilterC)`
  margin-right: 10px;
`

const FiltersWrap = styled.section`
  display: flex;
  margin-bottom: 50px;
`

const ExamCard = styled(ExamCardC)`
  margin-bottom: 15px;
`
const ExamCardWrap = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
`

const Pagination = styled(PaginationC)`
  align-self: center;
  margin-bottom: 100px;
`

const ExamsTitle = styled.h5`
  margin: 0px;
  color: #505565;
  margin-bottom: 20px;
`

const ExamGroupWrap = styled.section`
  margin-bottom: 30px;
`

export default connect()(MyExams)